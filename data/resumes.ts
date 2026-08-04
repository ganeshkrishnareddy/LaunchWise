
export interface ResumeTemplate {
    id: string;
    name: string;
    description: string;
    bestFor: string;
    atsScore: number; // 1-5 stars
    format: string;
    downloadUrl: string;
    features: string[];
    color: string;
    tags: string[];
    previewImage: string;
    lastUpdated: string;
    downloadCount: number;
    isAtsSafe: boolean;
    atsFeatures: string[];
}

export const resumeTemplates: ResumeTemplate[] = [
    {
        id: 'jakes-resume',
        name: "Jake's Resume (Elite)",
        description: 'The gold standard for ATS-friendly resumes. Minimalist, single-column, and highly parsed.',
        bestFor: 'FAANG Roles, SDE, Internships',
        atsScore: 5,
        format: 'LaTeX / PDF',
        downloadUrl: 'https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs',
        features: ['Single Column', 'Recruiter-Friendly', 'Pure Standard Fonts'],
        color: 'bg-slate-50',
        tags: ['Most Popular', 'Tech Elite'],
        previewImage: '/previews/jake.png',
        lastUpdated: 'Feb 2026',
        downloadCount: 3400,
        isAtsSafe: true,
        atsFeatures: ['No Columns', 'Standard Headings', 'No Graphics', 'Optimized Line Height']
    },
    {
        id: 'harvard-template',
        name: 'Harvard Official (.docx)',
        description: 'The official college resume format that recruiters and systems trust globally.',
        bestFor: 'Finance, Consulting, Harvard-Style',
        atsScore: 5,
        format: 'Word (.docx)',
        downloadUrl: 'https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/',
        features: ['Bullet-Point Driven', 'Classic Layout', 'Word Optimized'],
        color: 'bg-red-50',
        tags: ['Academic Elite', 'Word Format'],
        previewImage: '/previews/harvard.png',
        lastUpdated: 'Feb 2026',
        downloadCount: 2200,
        isAtsSafe: true,
        atsFeatures: ['Standard Sections', 'No Tables', 'High Density', 'Classic Fonts']
    },
    {
        id: 'flowcv-builder',
        name: 'FlowCV Visual Builder',
        description: 'A modern, intuitive builder for creating beautiful ATS-compatible PDF resumes.',
        bestFor: 'Quick Setup, Non-LaTeX Users',
        atsScore: 4,
        format: 'PDF / Builder',
        downloadUrl: 'https://flowcv.com/resume-templates',
        features: ['Live View', 'No Login Required', 'Unlimited PDFs'],
        color: 'bg-brand-50',
        tags: ['Easy Setup', 'PDF Builder'],
        previewImage: '/previews/flowcv.png',
        lastUpdated: 'Jan 2026',
        downloadCount: 1800,
        isAtsSafe: true,
        atsFeatures: ['Clean Parsing', 'Modern Look', 'Responsive Design', 'Verified Output']
    },
    {
        id: 'deedy-resume',
        name: 'Deedy (Tech Focused)',
        description: 'Iconic tech-focused layout popular among senior developers and research roles.',
        bestFor: 'Experienced Devs, Data Science',
        atsScore: 4,
        format: 'LaTeX / PDF',
        downloadUrl: 'https://www.overleaf.com/latex/templates/deedy-cv/bjryvfsjdyxz',
        features: ['Two Column', 'Information Dense', 'Technical Detail'],
        color: 'bg-blue-50',
        tags: ['Tech Famous', 'Senior Roles'],
        previewImage: '/previews/deedy.png',
        lastUpdated: 'Jan 2026',
        downloadCount: 1500,
        isAtsSafe: true,
        atsFeatures: ['Compact Layout', 'Custom Commands', 'Skill Matrix', 'Parsed Sidebars']
    },
    {
        id: 'awesome-cv',
        name: 'Awesome-CV',
        description: 'A premium, professional, and clean LaTeX CV for experienced professionals.',
        bestFor: 'Experienced Engineers, Academics',
        atsScore: 5,
        format: 'LaTeX / PDF',
        downloadUrl: 'https://www.overleaf.com/latex/templates/awesome-cv/dfnvtnhzhhbm',
        features: ['Extensive Experience', 'Clean Hierarchy', 'Highly Customizable'],
        color: 'bg-indigo-50',
        tags: ['Premium', 'Professional'],
        previewImage: '/previews/awesome.png',
        lastUpdated: 'Feb 2026',
        downloadCount: 900,
        isAtsSafe: true,
        atsFeatures: ['Clear Hierarchy', 'Standard Fonts', 'No Bloat', 'ATS-Parsed Header']
    },
    {
        id: 'resume-io-pack',
        name: 'Resume.io Pack (Word/PDF)',
        description: 'Collection of professionally designed, ATS-ready templates for many industries.',
        bestFor: 'General Roles, Marketing, Sales',
        atsScore: 4,
        format: 'Word / PDF',
        downloadUrl: 'https://resume.io/resume-templates/ats',
        features: ['Easy Edit', 'Multi-Industry', 'Pro Design'],
        color: 'bg-cyan-50',
        tags: ['Versatile', 'Fast Edit'],
        previewImage: '/previews/resume-io.png',
        lastUpdated: 'Feb 2026',
        downloadCount: 1300,
        isAtsSafe: true,
        atsFeatures: ['System Optimized', 'Standard Fonts', 'Balanced Layout', 'No Invisible Text']
    },
    {
        id: 'jobbie-word',
        name: 'Jobbie Word Pack',
        description: '20+ professionally designed Word templates, specifically built for ATS.',
        bestFor: 'Corporate Roles, HR, Analysts',
        atsScore: 5,
        format: 'Word (.docx)',
        downloadUrl: 'https://jobbie.io/templates',
        features: ['Pure Word', 'Edit in Seconds', 'Proven Success'],
        color: 'bg-amber-50',
        tags: ['Corp Ready', 'Pure Word'],
        previewImage: '/previews/jobbie.png',
        lastUpdated: 'Feb 2026',
        downloadCount: 850,
        isAtsSafe: true,
        atsFeatures: ['No Text Boxes', 'Standard Headings', 'Word Optimized', '100% Parsable']
    },
    {
        id: 'resumegenius-free',
        name: 'ResumeGenius Free',
        description: 'Tested resume templates you can download and use for early career or senior roles.',
        bestFor: 'General Roles, Entry Level',
        atsScore: 4,
        format: 'Word / PDF',
        downloadUrl: 'https://resumegenius.com/resume-templates',
        features: ['Verified Formats', 'Easy Download', 'Detailed Guides'],
        color: 'bg-orange-50',
        tags: ['Reliable', 'Guide Included'],
        previewImage: '/previews/resumegenius.png',
        lastUpdated: 'Jan 2026',
        downloadCount: 2100,
        isAtsSafe: true,
        atsFeatures: ['Standard Logic', 'Clean Flow', 'Key-Word Centric', 'Optimized Sections']
    }
];

export const resumeChecklist = [
    'Use standard section headings (Experience, Education, Skills)',
    'Avoid tables, columns, and graphics for maximum ATS compatibility',
    'Use standard fonts like Arial, Calibri, or Helvetica',
    'Save as PDF unless specifically asked for Word',
    'Include keywords from the job description',
    'Quantify achievements (e.g., "Improved load time by 20%")',
    'Check for spelling and grammar errors'
];

export const commonMistakes = [
    'Using a photo (unless required in your region)',
    'Including personal details like age, religion, or marital status',
    'Using a "skill bar" or rating system (ATS cannot read these)',
    'Writing generic objectives instead of a professional summary',
    'Including irrelevant hobbies'
];
