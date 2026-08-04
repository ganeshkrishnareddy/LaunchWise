import { Code, Shield, Database, Cloud, Smartphone, TestTube, Cpu, Briefcase, Layout, Globe, Search } from 'lucide-react';
import React from 'react';

export interface Milestone {
    id: string;
    title: string;
    description: string;
    links: { title: string; url: string; tag: string }[];
}

export interface Roadmap {
    id: string;
    title: string;
    description: string;
    iconName: string; // Storing icon name as string to map in component
    color: string;
    goal: string;
    milestones: Milestone[];
}

export const roadmaps: Roadmap[] = [
    {
        id: 'full-stack',
        title: 'Full Stack Web Development',
        description: 'Master frontend and backend to build complete production-ready web apps.',
        iconName: 'Code',
        color: 'bg-blue-50 text-blue-600',
        goal: 'Build production-ready web apps',
        milestones: [
            {
                id: 'm1',
                title: 'HTML & CSS',
                description: 'The building blocks of the web. Learn semantic HTML and modern CSS layouts.',
                links: [
                    { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn', tag: 'OFFICIAL' },
                    { title: 'Responsive Design (freeCodeCamp)', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', tag: 'FREE COURSE' }
                ]
            },
            {
                id: 'm2',
                title: 'JavaScript (ES6+)',
                description: 'The language of the web. Master DOM manipulation, async/await, and ES6 features.',
                links: [
                    { title: 'JavaScript.info', url: 'https://javascript.info', tag: 'BEST GUIDE' },
                    { title: 'JS Algorithms (freeCodeCamp)', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', tag: 'FREE COURSE' }
                ]
            },
            {
                id: 'm3',
                title: 'Git & GitHub',
                description: 'Version control is essential for every developer.',
                links: [
                    { title: 'Atlassian Git Tutorials', url: 'https://www.atlassian.com/git/tutorials', tag: 'GUIDE' },
                    { title: 'Learn Git Branching', url: 'https://learngitbranching.js.org/', tag: 'INTERACTIVE' }
                ]
            },
            {
                id: 'm4',
                title: 'React',
                description: 'The most popular frontend library for building user interfaces.',
                links: [
                    { title: 'React Official Docs', url: 'https://react.dev/learn', tag: 'OFFICIAL' },
                    { title: 'Frontend Libraries (freeCodeCamp)', url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/', tag: 'FREE COURSE' }
                ]
            },
            {
                id: 'm5',
                title: 'Backend (Node.js)',
                description: 'Build scalable server-side applications with Node and Express.',
                links: [
                    { title: 'Node.js Learn', url: 'https://nodejs.dev/learn', tag: 'OFFICIAL' },
                    { title: 'Express Starter', url: 'https://expressjs.com/en/starter/installing.html', tag: 'GUIDE' }
                ]
            },
            {
                id: 'm6',
                title: 'Databases (SQL & NoSQL)',
                description: 'Store and manage data effectively.',
                links: [
                    { title: 'MongoDB Tutorials', url: 'https://www.mongodb.com/docs/manual/tutorial/', tag: 'OFFICIAL' },
                    { title: 'SQLBolt (Interactive SQL)', url: 'https://sqlbolt.com/', tag: 'INTERACTIVE' }
                ]
            },
            {
                id: 'm7',
                title: 'Deployment',
                description: 'Get your app online for the world to see.',
                links: [
                    { title: 'Vercel Docs', url: 'https://vercel.com/docs', tag: 'OFFICIAL' },
                    { title: 'Render Docs', url: 'https://render.com/docs', tag: 'OFFICIAL' }
                ]
            }
        ]
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity Analyst',
        description: 'Learn to protect networks, systems, and data from cyber threats.',
        iconName: 'Shield',
        color: 'bg-green-50 text-green-600',
        goal: 'Protect systems & networks',
        milestones: [
            {
                id: 'm1',
                title: 'Networking Basics',
                description: 'Understand how the internet works (IPs, DNS, Protocols).',
                links: [
                    { title: 'Cisco Networking Basics', url: 'https://www.netacad.com/courses/networking/networking-basics', tag: 'FREE COURSE' },
                    { title: 'GeeksforGeeks Networking', url: 'https://www.geeksforgeeks.org/computer-network-tutorials/', tag: 'GUIDE' }
                ]
            },
            {
                id: 'm2',
                title: 'Linux Fundamentals',
                description: 'The operating system of the internet and security tools.',
                links: [
                    { title: 'Linux Journey', url: 'https://linuxjourney.com/', tag: 'INTERACTIVE' },
                    { title: 'Linux Foundation Training', url: 'https://training.linuxfoundation.org/resources/free-courses/', tag: 'FREE COURSE' }
                ]
            },
            {
                id: 'm3',
                title: 'Security Concepts',
                description: 'Fundamental principles like CIA triad, threats, and vulnerabilities.',
                links: [
                    { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', tag: 'MUST READ' },
                    { title: 'CISA Cybersecurity', url: 'https://www.cisa.gov/cybersecurity', tag: 'OFFICIAL' }
                ]
            },
            {
                id: 'm4',
                title: 'Ethical Hacking Basics',
                description: 'Learn offensive techniques to better defend systems.',
                links: [
                    { title: 'PortSwigger Web Security', url: 'https://portswigger.net/web-security', tag: 'BEST LABS' },
                    { title: 'TryHackMe (Free Rooms)', url: 'https://tryhackme.com', tag: 'GAMIFIED' }
                ]
            },
            {
                id: 'm5',
                title: 'Vulnerability Scanning',
                description: 'Identify weaknesses in systems using tools like Nmap.',
                links: [
                    { title: 'Nmap Reference Guide', url: 'https://nmap.org/book/man.html', tag: 'OFFICIAL' },
                    { title: 'OWASP Vuln Scanning', url: 'https://owasp.org/www-community/Vulnerability_Scanning_Tools', tag: 'GUIDE' }
                ]
            }
        ]
    },
    {
        id: 'data-science',
        title: 'Data Science & AI',
        description: 'Extract insights from data and build intelligent models.',
        iconName: 'Database',
        color: 'bg-purple-50 text-purple-600',
        goal: 'Analyze data & build ML models',
        milestones: [
            {
                id: 'm1',
                title: 'Python for Data',
                description: 'Master Python syntax and standard libraries.',
                links: [
                    { title: 'LearnPython.org', url: 'https://www.learnpython.org/', tag: 'INTERACTIVE' },
                    { title: 'Python Official Tutorial', url: 'https://docs.python.org/3/tutorial/', tag: 'OFFICIAL' }
                ]
            },
            {
                id: 'm2',
                title: 'Data Analysis (Pandas)',
                description: 'Manipulate and analyze structured data.',
                links: [
                    { title: 'Pandas Getting Started', url: 'https://pandas.pydata.org/docs/getting_started/', tag: 'OFFICIAL' },
                    { title: 'Kaggle Pandas Course', url: 'https://www.kaggle.com/learn/pandas', tag: 'FREE COURSE' }
                ]
            },
            {
                id: 'm3',
                title: 'Statistics & Probability',
                description: 'The mathematical foundation of Data Science.',
                links: [
                    { title: 'Khan Academy Stats', url: 'https://www.khanacademy.org/math/statistics-probability', tag: 'FREE COURSE' }
                ]
            },
            {
                id: 'm4',
                title: 'Machine Learning',
                description: 'Train models to make predictions.',
                links: [
                    { title: 'Google ML Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', tag: 'OFFICIAL' },
                    { title: 'Kaggle Intro to ML', url: 'https://www.kaggle.com/learn/intro-to-machine-learning', tag: 'FREE COURSE' }
                ]
            },
            {
                id: 'm5',
                title: 'Deep Learning',
                description: 'Neural networks and advanced AI.',
                links: [
                    { title: 'Fast.ai', url: 'https://course.fast.ai', tag: 'TOP RATED' },
                    { title: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials', tag: 'OFFICIAL' }
                ]
            }
        ]
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        description: 'Deploy, scale, and manage infrastructure in the cloud.',
        iconName: 'Cloud',
        color: 'bg-sky-50 text-sky-600',
        goal: 'Deploy & manage scalable systems',
        milestones: [
            {
                id: 'm1',
                title: 'Linux Essentials',
                description: 'Command line mastery is non-negotiable.',
                links: [
                    { title: 'Linux Journey', url: 'https://linuxjourney.com/', tag: 'INTERACTIVE' }
                ]
            },
            {
                id: 'm2',
                title: 'Cloud Basics (AWS/GCP)',
                description: 'Understand core cloud services (Compute, Storage, Network).',
                links: [
                    { title: 'AWS Cloud Practitioner', url: 'https://aws.amazon.com/training/learn-about/cloud-practitioner/', tag: 'OFFICIAL' },
                    { title: 'Google Cloud Labs', url: 'https://cloud.google.com/training/free-labs', tag: 'HANDS ON' }
                ]
            },
            {
                id: 'm3',
                title: 'Docker & Containers',
                description: 'Package applications for consistent deployment.',
                links: [
                    { title: 'Docker Get Awarw', url: 'https://docs.docker.com/get-started/', tag: 'OFFICIAL' }
                ]
            },
            {
                id: 'm4',
                title: 'Kubernetes',
                description: 'Orchestrate containerized applications at scale.',
                links: [
                    { title: 'Kubernetes Tutorials', url: 'https://kubernetes.io/docs/tutorials/', tag: 'OFFICIAL' }
                ]
            },
            {
                id: 'm5',
                title: 'CI/CD',
                description: 'Automate your software delivery pipeline.',
                links: [
                    { title: 'GitHub Actions Docs', url: 'https://docs.github.com/en/actions', tag: 'OFFICIAL' }
                ]
            }
        ]
    },
    {
        id: 'mobile-dev',
        title: 'Mobile App Development',
        description: 'Build native applications for Android and iOS.',
        iconName: 'Smartphone',
        color: 'bg-emerald-50 text-emerald-600',
        goal: 'Build Android / cross-platform apps',
        milestones: [
            {
                id: 'm1',
                title: 'Android & Kotlin',
                description: 'Modern Android development uses Kotlin.',
                links: [
                    { title: 'Android Courses', url: 'https://developer.android.com/courses', tag: 'OFFICIAL' },
                    { title: 'Kotlin Docs', url: 'https://kotlinlang.org/docs/home.html', tag: 'OFFICIAL' }
                ]
            },
            {
                id: 'm2',
                title: 'Flutter (Cross Platform)',
                description: 'Build for iOS and Android from a single codebase.',
                links: [
                    { title: 'Flutter Get Started', url: 'https://docs.flutter.dev/get-started', tag: 'OFFICIAL' },
                    { title: 'Learn Flutter', url: 'https://flutter.dev/learn', tag: 'OFFICIAL' }
                ]
            },
            {
                id: 'm3',
                title: 'React Native',
                description: 'Use your React skills to build mobile apps.',
                links: [
                    { title: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started', tag: 'OFFICIAL' },
                    { title: 'Expo Learn', url: 'https://expo.dev/learn', tag: 'BEGINNER FRIENDLY' }
                ]
            }
        ]
    },
    {
        id: 'qa-testing',
        title: 'QA / Software Testing',
        description: 'Ensure software quality through manual and automated testing.',
        iconName: 'TestTube',
        color: 'bg-amber-50 text-amber-600',
        goal: 'Ensure software quality',
        milestones: [
            {
                id: 'm1',
                title: 'Testing Basics',
                description: 'Understand the fundamentals of software testing.',
                links: [
                    { title: 'Software Testing Help', url: 'https://www.softwaretestinghelp.com/software-testing-tutorial/', tag: 'GUIDE' }
                ]
            },
            {
                id: 'm2',
                title: 'Manual Testing',
                description: 'Learn how to manually execute test cases.',
                links: [
                    { title: 'Guru99 Testing', url: 'https://www.guru99.com/software-testing.html', tag: 'TUTORIAL' }
                ]
            },
            {
                id: 'm3',
                title: 'Automation (Selenium/Playwright)',
                description: 'Write scripts to automate browser actions.',
                links: [
                    { title: 'Selenium Docs', url: 'https://www.selenium.dev/documentation/', tag: 'OFFICIAL' },
                    { title: 'Playwright Intro', url: 'https://playwright.dev/docs/intro', tag: 'MODERN' }
                ]
            },
            {
                id: 'm4',
                title: 'API Testing',
                description: 'Test backend services directly.',
                links: [
                    { title: 'Postman Learning', url: 'https://learning.postman.com/', tag: 'OFFICIAL' }
                ]
            }
        ]
    },
    {
        id: 'ui-ux',
        title: 'UI / UX Design',
        description: 'Design beautiful, user-friendly interfaces.',
        iconName: 'Layout',
        color: 'bg-pink-50 text-pink-600',
        goal: 'Design user-friendly interfaces',
        milestones: [
            {
                id: 'm1',
                title: 'Design Basics',
                description: 'Typography, Color Theory, and Layout.',
                links: [
                    { title: 'Interaction Design Topics', url: 'https://www.interaction-design.org/literature/topics', tag: 'RESOURCE' }
                ]
            },
            {
                id: 'm2',
                title: 'UX Research',
                description: 'Understand user needs and behavior.',
                links: [
                    { title: 'NNGroup Articles', url: 'https://www.nngroup.com/articles/', tag: 'INDUSTRY STANDARD' }
                ]
            },
            {
                id: 'm3',
                title: 'Figma Mastery',
                description: 'The industry standard tool for UI design.',
                links: [
                    { title: 'Figma Help Center', url: 'https://help.figma.com/hc/en-us', tag: 'OFFICIAL' },
                    { title: 'Learn Design by Figma', url: 'https://www.figma.com/resources/learn-design/', tag: 'OFFICIAL COURE' }
                ]
            },
            {
                id: 'm4',
                title: 'Accessibility',
                description: 'Design for everyone.',
                links: [
                    { title: 'W3C WAI Fundamentals', url: 'https://www.w3.org/WAI/fundamentals/', tag: 'OFFICIAL' }
                ]
            }
        ]
    },
    {
        id: 'business-analyst',
        title: 'Business Analyst',
        description: 'Bridge the gap between business needs and technical solutions.',
        iconName: 'Briefcase',
        color: 'bg-indigo-50 text-indigo-600',
        goal: 'Bridge business & tech',
        milestones: [
            {
                id: 'm1',
                title: 'BA Fundamentals',
                description: 'Role, responsibilities, and techniques.',
                links: [
                    { title: 'IIBA Analyst Blogs', url: 'https://www.iiba.org/business-analysis-blogs/', tag: 'PROFESSIONAL' }
                ]
            },
            {
                id: 'm2',
                title: 'Documentation',
                description: 'Writing requirements (BRD, SRS).',
                links: [
                    { title: 'Modern Analyst Articles', url: 'https://www.modernanalyst.com/Resources/Articles.aspx', tag: 'RESOURCE' }
                ]
            },
            {
                id: 'm3',
                title: 'SQL Skills',
                description: 'Retrieve data to support your analysis.',
                links: [
                    { title: 'SQLBolt', url: 'https://www.sqlbolt.com/', tag: 'INTERACTIVE' }
                ]
            },
            {
                id: 'm4',
                title: 'Data Tools (PowerBI)',
                description: 'Visualize data for stakeholders.',
                links: [
                    { title: 'MS Learn Power BI', url: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi/', tag: 'OFFICIAL' }
                ]
            }
        ]
    },
    {
        id: 'network-engineer',
        title: 'Network Engineer',
        description: 'Design and manage complex network infrastructures.',
        iconName: 'Globe',
        color: 'bg-cyan-50 text-cyan-600',
        goal: 'Design & manage networks',
        milestones: [
            {
                id: 'm1',
                title: 'Networking Basics',
                description: 'OSI Model, TCP/IP, and basic routing.',
                links: [
                    { title: 'Cisco Networking Basics', url: 'https://www.netacad.com/courses/networking/networking-basics', tag: 'OFFICIAL' }
                ]
            },
            {
                id: 'm2',
                title: 'TCP/IP',
                description: 'The core protocols of the internet.',
                links: [
                    { title: 'Cloudflare Learning', url: 'https://www.cloudflare.com/learning/network-layer/what-is-tcp-ip/', tag: 'GUIDE' }
                ]
            },
            {
                id: 'm3',
                title: 'Subnetting',
                description: 'Efficiently dividing networks.',
                links: [
                    { title: 'Subnetting Practice', url: 'https://subnettingpractice.com/', tag: 'PRACTICE' }
                ]
            },
            {
                id: 'm4',
                title: 'Network Security',
                description: 'Securing the perimeter and internal traffic.',
                links: [
                    { title: 'Cisco Security Intro', url: 'https://www.cisco.com/c/en/us/products/security/what-is-network-security.html', tag: 'OFFICIAL' }
                ]
            }
        ]
    }
];
