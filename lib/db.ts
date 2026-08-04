import { db } from './firebase';
import {
    collection,
    getDocs,
    getDoc,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
    orderBy,
    limit,
    onSnapshot,
    Timestamp
} from 'firebase/firestore';

export interface Job {
    id?: string;
    title: string;
    company: string;
    location: string;
    type: string;
    apply_url: string;
    source: string;
    posted_at: Timestamp | Date;
    expires_at: Timestamp | Date;
    verified: boolean;
    description?: string;
    tags?: string[];
    category: string;
}

const JOBS_COLLECTION = 'jobs';

export const jobService = {
    // Get all verified and non-expired jobs for public display
    getPublicJobs: async () => {
        const today = new Date();
        const q = query(
            collection(db, JOBS_COLLECTION),
            where('verified', '==', true),
            where('expires_at', '>=', today),
            orderBy('expires_at', 'asc'), // Required by Firestore for range filter
            orderBy('posted_at', 'desc')
        );

        // Note: This composite query requires an index in Firestore.
        // If it fails initially, check console for the index creation link.
        // Fallback for development without index: client-side filtering
        try {
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
        } catch (error) {
            console.warn("Index missing or query failed, falling back to client-side filtering:", error);
            const snapshot = await getDocs(collection(db, JOBS_COLLECTION));
            const allJobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
            return allJobs.filter(job =>
                job.verified &&
                new Date((job.expires_at as Timestamp).toDate()) >= today
            ).sort((a, b) => {
                const dateA = (a.posted_at as Timestamp).toDate().getTime();
                const dateB = (b.posted_at as Timestamp).toDate().getTime();
                return dateB - dateA;
            });
        }
    },

    // Get all jobs (including pending) for admin
    getAllJobs: async () => {
        const q = query(collection(db, JOBS_COLLECTION), orderBy('posted_at', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Job));
    },

    // Add a new job
    addJob: async (job: Omit<Job, 'id'>) => {
        return await addDoc(collection(db, JOBS_COLLECTION), job);
    },

    // Update a job (e.g., verify it)
    updateJob: async (id: string, data: Partial<Job>) => {
        const jobRef = doc(db, JOBS_COLLECTION, id);
        return await updateDoc(jobRef, data);
    },

    // Delete a job
    deleteJob: async (id: string) => {
        const jobRef = doc(db, JOBS_COLLECTION, id);
        return await deleteDoc(jobRef);
    },

    // Verify a job
    verifyJob: async (id: string) => {
        return await jobService.updateJob(id, { verified: true });
    }
};

// USER PROFILE SERVICES
export interface UserProfile {
    uid: string;
    email: string;
    fullName?: string;
    photoURL?: string;
    bio?: string;
    skills?: string[];
    role?: 'user' | 'admin';
    performanceScore: number;
    githubUrl?: string;
    linkedinUrl?: string;
    createdAt?: Timestamp | Date;
    updatedAt?: Timestamp | Date;
    completedMilestones?: { [roadmapId: string]: string[] };
    username?: string;
    phoneNumber?: string;
    websiteUrl?: string;
    resumeUrl?: string;
    projects?: Array<{
        name: string;
        description: string;
        githubUrl?: string;
        demoUrl?: string;
        tags?: string[];
    }>;
    joinedWhatsapp?: boolean;
}

const USERS_COLLECTION = 'users';

export const userService = {
    getUser: async (uid: string): Promise<UserProfile | null> => {
        try {
            const userRef = doc(db, USERS_COLLECTION, uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                return userSnap.data() as UserProfile;
            }
            return null;
        } catch (error) {
            console.error("Error getting user profile:", error);
            return null;
        }
    },

    getUserByUsername: async (username: string): Promise<UserProfile | null> => {
        try {
            const q = query(collection(db, USERS_COLLECTION), where('username', '==', username.toLowerCase().trim()), limit(1));
            const snapshot = await getDocs(q);
            if (!snapshot.empty) {
                return snapshot.docs[0].data() as UserProfile;
            }
            return null;
        } catch (error) {
            console.error("Error getting user profile by username:", error);
            return null;
        }
    },

    checkUsernameAvailability: async (username: string, currentUid: string): Promise<boolean> => {
        try {
            const cleanUsername = username.toLowerCase().trim();
            const q = query(collection(db, USERS_COLLECTION), where('username', '==', cleanUsername), limit(1));
            const snapshot = await getDocs(q);
            if (snapshot.empty) {
                return true;
            }
            const match = snapshot.docs[0].data() as UserProfile;
            return match.uid === currentUid;
        } catch (error) {
            console.error("Error checking username availability:", error);
            return false;
        }
    },

    saveUser: async (profile: UserProfile): Promise<void> => {
        try {
            const userRef = doc(db, USERS_COLLECTION, profile.uid);
            await setDoc(userRef, {
                ...profile,
                updatedAt: new Date()
            }, { merge: true });
        } catch (error) {
            console.error("Error saving user profile:", error);
        }
    },

    getAllUsers: async (): Promise<UserProfile[]> => {
        try {
            const q = query(collection(db, USERS_COLLECTION), orderBy('performanceScore', 'desc'));
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => doc.data() as UserProfile);
        } catch (error) {
            console.error("Error fetching all users:", error);
            return [];
        }
    },

    toggleMilestone: async (uid: string, roadmapId: string, milestoneId: string, title?: string): Promise<string[]> => {
        try {
            const userRef = doc(db, USERS_COLLECTION, uid);
            const userSnap = await getDoc(userRef);
            let completed: { [key: string]: string[] } = {};
            let currentScore = 0;
            
            if (userSnap.exists()) {
                const data = userSnap.data();
                completed = data.completedMilestones || {};
                currentScore = data.performanceScore || 0;
            }

            if (!completed[roadmapId]) {
                completed[roadmapId] = [];
            }

            const milestoneList = completed[roadmapId];
            const isCompleted = milestoneList.includes(milestoneId);
            let newScore = currentScore;

            if (isCompleted) {
                completed[roadmapId] = milestoneList.filter(id => id !== milestoneId);
                newScore = Math.max(0, currentScore - 15);
            } else {
                completed[roadmapId] = [...milestoneList, milestoneId];
                newScore = currentScore + 15;
            }

            await setDoc(userRef, {
                completedMilestones: completed,
                performanceScore: newScore,
                updatedAt: new Date()
            }, { merge: true });

            // Log activity when completed
            if (!isCompleted) {
                const email = userSnap.exists() ? userSnap.data().email : '';
                const fullName = userSnap.exists() ? (userSnap.data().fullName || 'Anonymous User') : 'Anonymous User';
                const photoURL = userSnap.exists() ? (userSnap.data().photoURL || '') : '';
                
                await activityService.logActivity({
                    uid,
                    email,
                    fullName,
                    photoURL,
                    type: 'roadmap_milestone_complete',
                    details: `Completed milestone "${title || milestoneId}" in roadmap "${roadmapId}"`
                });
            }

            return completed[roadmapId];
        } catch (error) {
            console.error("Error toggling milestone:", error);
            return [];
        }
    }
};

// USER ACTIVITY LOGGING
export interface UserActivity {
    id?: string;
    uid: string;
    email: string;
    fullName?: string;
    photoURL?: string;
    type: 'page_view' | 'job_apply' | 'resource_click' | 'profile_update' | 'roadmap_milestone_complete';
    details: string;
    timestamp: Timestamp | Date;
}

const ACTIVITIES_COLLECTION = 'activities';

export const activityService = {
    logActivity: async (activity: Omit<UserActivity, 'timestamp'>): Promise<void> => {
        try {
            await addDoc(collection(db, ACTIVITIES_COLLECTION), {
                ...activity,
                timestamp: new Date()
            });

            // Increment user performance score slightly for each action
            const userRef = doc(db, USERS_COLLECTION, activity.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
                const currentScore = userSnap.data().performanceScore || 0;
                let points = 5; // Default points for action
                if (activity.type === 'job_apply') points = 25;
                if (activity.type === 'profile_update') points = 50;
                if (activity.type === 'roadmap_milestone_complete') points = 0; // Handled directly in toggleMilestone

                await updateDoc(userRef, {
                    performanceScore: currentScore + points,
                    updatedAt: new Date()
                });
            }
        } catch (error) {
            console.error("Error logging activity:", error);
        }
    },

    getRecentActivities: async (limitCount: number = 20): Promise<UserActivity[]> => {
        try {
            const q = query(
                collection(db, ACTIVITIES_COLLECTION),
                orderBy('timestamp', 'desc'),
                limit(limitCount)
            );
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as UserActivity));
        } catch (error) {
            console.error("Error fetching recent activities:", error);
            return [];
        }
    },

    getUserActivities: async (uid: string, type?: string, limitCount: number = 30): Promise<UserActivity[]> => {
        try {
            let q = query(
                collection(db, ACTIVITIES_COLLECTION),
                where('uid', '==', uid),
                orderBy('timestamp', 'desc'),
                limit(limitCount)
            );
            if (type) {
                q = query(
                    collection(db, ACTIVITIES_COLLECTION),
                    where('uid', '==', uid),
                    where('type', '==', type),
                    orderBy('timestamp', 'desc'),
                    limit(limitCount)
                );
            }
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as UserActivity));
        } catch (error) {
            console.warn("Index missing or user query failed, falling back to client-side filtering:", error);
            try {
                const snapshot = await getDocs(collection(db, ACTIVITIES_COLLECTION));
                const all = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
                const filtered = all.filter(a => a.uid === uid && (!type || a.type === type));
                return filtered.sort((a, b) => {
                    const timeA = a.timestamp ? (a.timestamp.seconds * 1000) : 0;
                    const timeB = b.timestamp ? (b.timestamp.seconds * 1000) : 0;
                    return timeB - timeA;
                }).slice(0, limitCount) as UserActivity[];
            } catch (err) {
                console.error("Fallback query failed:", err);
                return [];
            }
        }
    },

    subscribeToLiveActivities: (callback: (activities: UserActivity[]) => void) => {
        const q = query(
            collection(db, ACTIVITIES_COLLECTION),
            orderBy('timestamp', 'desc'),
            limit(30)
        );
        return onSnapshot(q, (snapshot) => {
            const activities = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as UserActivity));
            callback(activities);
        }, (error) => {
            console.error("Error in live activities subscription:", error);
        });
    }
};

