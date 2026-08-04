'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { activityService } from '@/lib/db';

export function ActivityTracker() {
    const { user, isLoaded } = useUser();
    const pathname = usePathname();

    useEffect(() => {
        if (!isLoaded || !user) return;

        // Skip background path view logging for sign-in/sign-up and profile page to avoid double log
        if (['/sign-in', '/sign-up', '/profile'].includes(pathname)) return;

        const email = user.emailAddresses[0]?.emailAddress || '';
        const name = user.fullName || user.username || 'Anonymous User';

        // Format details based on route
        let details = `Visited page: ${pathname}`;
        if (pathname === '/') details = 'Visited Homepage';
        else if (pathname.startsWith('/jobs')) details = 'Browsed Career Jobs';
        else if (pathname.startsWith('/resources')) details = 'Explored Career Resources';
        else if (pathname.startsWith('/roadmaps')) details = 'Viewed Skill Roadmaps';
        else if (pathname.startsWith('/certifications')) details = 'Checked Professional Certifications';
        else if (pathname.startsWith('/project-help')) details = 'Viewed Mentorship & Project Help';
        else if (pathname.startsWith('/tools')) details = 'Used Dev Tools & Resume Builder';

        activityService.logActivity({
            uid: user.id,
            email,
            fullName: name,
            photoURL: user.imageUrl,
            type: 'page_view',
            details
        });
    }, [user, isLoaded, pathname]);

    return null;
}
