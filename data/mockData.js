export const jobs = [
    {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechStart Solutions",
        location: "Remote",
        type: "Internship",
        posted: "2023-10-27",
        category: "Engineering",
        verified: true,
        link: "https://example.com/apply"
    },
    {
        id: 2,
        title: "Marketing Associate",
        company: "Growth Gurus",
        location: "New York, NY",
        type: "Full-time",
        posted: "2023-10-26",
        category: "Marketing",
        verified: true,
        link: "https://example.com/apply"
    },
    {
        id: 3,
        title: "Data Science Intern",
        company: "DataDriven Co.",
        location: "Remote",
        type: "Internship",
        posted: "2023-10-25",
        category: "Data",
        verified: false,
        link: "https://example.com/apply"
    }
];

export const resources = [
    // Web Development
    {
        id: 'web-1',
        title: "Modern JavaScript",
        description: "The modern guide to JavaScript, from basics to advanced topics.",
        link: "https://javascript.info",
        category: "Web Development",
        difficulty: "Intermediate",
        type: "Docs"
    },
    {
        id: 'web-2',
        title: "freeCodeCamp (Full Stack)",
        description: "Learn to code for free with interactive lessons and projects.",
        link: "https://www.freecodecamp.org",
        category: "Web Development",
        difficulty: "Beginner",
        type: "Course"
    },
    {
        id: 'web-3',
        title: "MDN Web Docs",
        description: "Resources for developers, by developers. The official web documentation.",
        link: "https://developer.mozilla.org",
        category: "Web Development",
        difficulty: "All Levels",
        type: "Docs"
    },
    {
        id: 'web-4',
        title: "Frontend Roadmaps",
        description: "Step by step guides and paths to learn differenet tools or technologies.",
        link: "https://roadmap.sh/frontend",
        category: "Web Development",
        difficulty: "All Levels",
        type: "Roadmap"
    },
    {
        id: 'web-5',
        title: "CSS Tricks",
        description: "Tips, Tricks, and Techniques on using Cascading Style Sheets.",
        link: "https://css-tricks.com",
        category: "Web Development",
        difficulty: "Intermediate",
        type: "Blog"
    },

    // Cybersecurity
    {
        id: 'sec-1',
        title: "OWASP Top 10",
        description: "The standard awareness document for developers and web application security.",
        link: "https://owasp.org/www-project-top-ten/",
        category: "Cybersecurity",
        difficulty: "Intermediate",
        type: "Docs"
    },
    {
        id: 'sec-2',
        title: "PortSwigger Web Security Academy",
        description: "Free web security training from the creators of Burp Suite.",
        link: "https://portswigger.net/web-security",
        category: "Cybersecurity",
        difficulty: "Intermediate",
        type: "Course"
    },
    {
        id: 'sec-3',
        title: "TryHackMe (Free Rooms)",
        description: "Hands-on cyber security training through gamified labs.",
        link: "https://tryhackme.com",
        category: "Cybersecurity",
        difficulty: "Beginner",
        type: "Practice"
    },
    {
        id: 'sec-4',
        title: "Hack The Box Academy",
        description: "Cyber security training with guided paths and interactive modules.",
        link: "https://academy.hackthebox.com",
        category: "Cybersecurity",
        difficulty: "Intermediate",
        type: "Course"
    },
    {
        id: 'sec-5',
        title: "NIST Security Frameworks",
        description: "Standards, guidelines, and best practices to manage cybersecurity risk.",
        link: "https://www.nist.gov/cyberframework",
        category: "Cybersecurity",
        difficulty: "Advanced",
        type: "Docs"
    },

    // Data Science & AI
    {
        id: 'data-1',
        title: "Kaggle Learn",
        description: "Practical data skills you can apply immediately.",
        link: "https://www.kaggle.com/learn",
        category: "Data Science & AI",
        difficulty: "Beginner",
        type: "Course"
    },
    {
        id: 'data-2',
        title: "Google ML Crash Course",
        description: "Google's fast-paced, practical introduction to machine learning.",
        link: "https://developers.google.com/machine-learning/crash-course",
        category: "Data Science & AI",
        difficulty: "Intermediate",
        type: "Course"
    },
    {
        id: 'data-3',
        title: "Fast.ai Practical Deep Learning",
        description: "Making neural nets uncool again. Top-tier deep learning course.",
        link: "https://course.fast.ai",
        category: "Data Science & AI",
        difficulty: "Advanced",
        type: "Course"
    },
    {
        id: 'data-4',
        title: "Data Science Roadmap",
        description: "Roadmap to becoming a Data Scientist in 2024.",
        link: "https://roadmap.sh/ai-data-scientist",
        category: "Data Science & AI",
        difficulty: "All Levels",
        type: "Roadmap"
    },

    // Programming (General)
    {
        id: 'prog-1',
        title: "GeeksforGeeks",
        description: "A computer science portal for geeks. Huge collection of tutorials.",
        link: "https://www.geeksforgeeks.org",
        category: "Programming",
        difficulty: "All Levels",
        type: "Docs"
    },
    {
        id: 'prog-2',
        title: "CS50 – Harvard",
        description: "Introduction to the intellectual enterprises of computer science and the art of programming.",
        link: "https://cs50.harvard.edu/x/",
        category: "Programming",
        difficulty: "Beginner",
        type: "Course"
    },
    {
        id: 'prog-3',
        title: "Learn Python",
        description: "Free interactive Python tutorial for everyone.",
        link: "https://www.learnpython.org",
        category: "Programming",
        difficulty: "Beginner",
        type: "Practice"
    },
    {
        id: 'prog-4',
        title: "Java Programming (Oracle)",
        description: "The official Java Tutorials to guide you through the language.",
        link: "https://docs.oracle.com/javase/tutorial/",
        category: "Programming",
        difficulty: "Intermediate",
        type: "Docs"
    },

    // Cloud & DevOps
    {
        id: 'cloud-1',
        title: "AWS Free Tier + Docs",
        description: "Gain free hands-on experience with the AWS platform.",
        link: "https://aws.amazon.com/free/",
        category: "Cloud & DevOps",
        difficulty: "All Levels",
        type: "Platform"
    },
    {
        id: 'cloud-2',
        title: "Google Cloud Skills Boost",
        description: "Free learning paths to build your cloud skills.",
        link: "https://www.cloudskillsboost.google",
        category: "Cloud & DevOps",
        difficulty: "All Levels",
        type: "Course"
    },
    {
        id: 'cloud-3',
        title: "Docker Official Docs",
        description: "Everything you need to know about Docker containers.",
        link: "https://docs.docker.com",
        category: "Cloud & DevOps",
        difficulty: "Intermediate",
        type: "Docs"
    },
    {
        id: 'cloud-4',
        title: "DevOps Roadmap",
        description: "Step by step guide for DevOps or Site Reliability Engineer.",
        link: "https://roadmap.sh/devops",
        category: "Cloud & DevOps",
        difficulty: "All Levels",
        type: "Roadmap"
    },

    // Mobile App Development
    {
        id: 'mobile-1',
        title: "Android Developer",
        description: "The official site for Android developers. Documentation, guides, and more.",
        link: "https://developer.android.com",
        category: "Mobile Dev",
        difficulty: "Intermediate",
        type: "Docs"
    },
    {
        id: 'mobile-2',
        title: "Flutter Docs",
        description: "Build apps for any screen from a single codebase.",
        link: "https://docs.flutter.dev",
        category: "Mobile Dev",
        difficulty: "Intermediate",
        type: "Docs"
    },
    {
        id: 'mobile-3',
        title: "React Native Docs",
        description: "Create native apps for Android and iOS using React.",
        link: "https://reactnative.dev",
        category: "Mobile Dev",
        difficulty: "Intermediate",
        type: "Docs"
    },
    {
        id: 'mobile-4',
        title: "Expo",
        description: "The easiest way to build, deploy, and iterate on native Android and iOS apps.",
        link: "https://expo.dev",
        category: "Mobile Dev",
        difficulty: "Beginner",
        type: "Tool"
    },

    // QA & Testing
    {
        id: 'qa-1',
        title: "Selenium Docs",
        description: "Browser automation framework documentation.",
        link: "https://www.selenium.dev/documentation/",
        category: "QA & Testing",
        difficulty: "Intermediate",
        type: "Docs"
    },
    {
        id: 'qa-2',
        title: "Playwright Docs",
        description: "Fast and reliable end-to-end testing for modern web apps.",
        link: "https://playwright.dev",
        category: "QA & Testing",
        difficulty: "Intermediate",
        type: "Docs"
    },
    {
        id: 'qa-3',
        title: "Postman Learning",
        description: "Learn how to use Postman for API development and testing.",
        link: "https://learning.postman.com",
        category: "QA & Testing",
        difficulty: "Beginner",
        type: "Docs"
    },

    // Resume & Career
    {
        id: 'career-1',
        title: "ATS Resume Templates",
        description: "Free LaTeX resume templates to beat the ATS bots.",
        link: "https://www.overleaf.com/gallery/tagged/cv",
        category: "Resume & Career",
        difficulty: "All Levels",
        type: "Template"
    },
    {
        id: 'career-2',
        title: "Specialized CV Template",
        description: "Recommended clear and professional CV template.",
        link: "https://www.overleaf.com/9562214816tdpnnctwcjgc#07d63e",
        category: "Resume & Career",
        difficulty: "All Levels",
        type: "Template"
    },
    {
        id: 'career-3',
        title: "Resume Keywords",
        description: "Learn which keywords to include to get noticed.",
        link: "https://www.jobscan.co/blog/",
        category: "Resume & Career",
        difficulty: "All Levels",
        type: "Guide"
    },
    {
        id: 'career-4',
        title: "Interview Bit",
        description: "Practice coding interview questions from top companies.",
        link: "https://www.interviewbit.com",
        category: "Resume & Career",
        difficulty: "Intermediate",
        type: "Practice"
    }
];
