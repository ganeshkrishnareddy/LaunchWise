export interface Project {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skills: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  resumeImpact: string;
  whyItHelps: string;
  realWorldUseCase: string;
  isTrending?: boolean;
  isRecommended?: boolean;
  detailedDescription?: string;
  stepsToBuild?: string[];
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Real-time Collaborative Document Editor",
    category: "Coding",
    difficulty: "Advanced",
    skills: ["WebSockets", "Operational Transformation", "State Management", "Auth"],
    techStack: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/topics/collaborative-editor",
    demoUrl: "#",
    resumeImpact: "Demonstrates ability to handle complex real-time state synchronization, a highly sought-after skill in modern SaaS applications.",
    whyItHelps: "Companies like Notion, Google Docs, and Figma rely heavily on real-time collaboration. Building this shows you understand the core challenges of modern web engineering.",
    realWorldUseCase: "Remote teams co-authoring documents or code snippets simultaneously.",
    isTrending: true,
    isRecommended: true,
    detailedDescription: "This project involves building a complex real-time system where multiple users can connect, view cursors, and edit the same document simultaneously without data conflicts. You will learn to implement room-based architecture, broadcast events, and manage conflicting state changes from multiple clients.",
    stepsToBuild: [
      "Set up a Next.js frontend with TipTap or Quill editor.",
      "Initialize a Node.js/Express server with Socket.io.",
      "Implement room-based socket connections for specific documents.",
      "Handle Operational Transformation (OT) or CRDTs for conflict resolution.",
      "Persist document state to MongoDB periodically."
    ]
  },
  {
    id: "proj-2",
    title: "E-Commerce Microservices Backend",
    category: "Developer Tools",
    difficulty: "Advanced",
    skills: ["Microservices", "Docker", "API Gateway", "Message Queues"],
    techStack: ["Node.js", "Docker", "RabbitMQ", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/topics/microservices-architecture",
    resumeImpact: "Shows you can design scalable, distributed systems instead of just simple monolithic CRUD apps.",
    whyItHelps: "Most enterprise companies use microservices architectures. This project proves you can work in large-scale environments.",
    realWorldUseCase: "Handling high-traffic online shopping events without system failure.",
    isRecommended: true,
    detailedDescription: "Design a distributed system where separate services handle user authentication, inventory management, and order processing, communicating via a message broker. This simulates exactly how massive applications like Amazon or Netflix handle scaling.",
    stepsToBuild: [
      "Create isolated Node.js microservices with Express.",
      "Set up RabbitMQ for asynchronous service-to-service communication.",
      "Implement an API Gateway to route client requests.",
      "Dockerize each service and create a docker-compose file.",
      "Use Redis for caching high-read product data."
    ]
  },
  {
    id: "proj-3",
    title: "Predictive Customer Churn Model",
    category: "AI & ML",
    difficulty: "Intermediate",
    skills: ["Data Cleaning", "Machine Learning", "Feature Engineering", "Data Visualization"],
    techStack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
    githubUrl: "https://github.com/topics/customer-churn",
    demoUrl: "#",
    resumeImpact: "Directly solves a massive business problem (retaining customers). Business-driven data projects are highly valued.",
    whyItHelps: "Data science interviews often focus on business value. Being able to explain how your model saves money is a major hiring signal.",
    realWorldUseCase: "A telecom company predicting which users are likely to cancel their subscription next month.",
    isTrending: true,
    detailedDescription: "Take a raw, messy CSV dataset of customer behaviors, clean the data, perform exploratory data analysis, and train a machine learning model to predict churn probability. You will build an end-to-end pipeline from data ingestion to model evaluation.",
    stepsToBuild: [
      "Perform data cleaning and handle missing values using Pandas.",
      "Visualize feature correlations using Matplotlib and Seaborn.",
      "Engineer new features (e.g., tenure length, average spend).",
      "Train a Random Forest or XGBoost classification model.",
      "Evaluate model performance using precision, recall, and a confusion matrix."
    ]
  },
  {
    id: "proj-4",
    title: "Automated Network Vulnerability Scanner",
    category: "Cybersecurity",
    difficulty: "Intermediate",
    skills: ["Network Security", "Scripting", "Vulnerability Assessment", "Reporting"],
    techStack: ["Python", "Nmap", "Bash", "Linux"],
    githubUrl: "https://github.com/topics/vulnerability-scanner",
    resumeImpact: "Shows practical security skills beyond just theory or using existing tools.",
    whyItHelps: "Cybersecurity roles require hands-on scripting and tool building. A custom scanner shows deep understanding of protocols.",
    realWorldUseCase: "IT teams automatically scanning their internal network for unpatched servers every night.",
    isRecommended: true,
    detailedDescription: "Build a Python-based utility that scans a given IP range, identifies open ports, fingerprints running services, and matches them against a known vulnerability database (CVE). This proves you can automate security tasks.",
    stepsToBuild: [
      "Use Python's socket library or Nmap bindings to sweep IP ranges.",
      "Implement banner grabbing to identify service versions.",
      "Query an external CVE API to check for known vulnerabilities.",
      "Generate an HTML or PDF report summarizing the findings.",
      "Set up a cron job script for automated daily scanning."
    ]
  },
  {
    id: "proj-5",
    title: "Finance Tracker Mobile App",
    category: "Mobile App Development",
    difficulty: "Beginner",
    skills: ["Local Storage", "State Management", "UI/UX implementation", "Charts"],
    techStack: ["Flutter", "Dart", "SQLite", "Provider"],
    githubUrl: "https://github.com/topics/finance-app",
    demoUrl: "#",
    resumeImpact: "Proves you can build a complete, functional mobile application from scratch and handle local data persistence.",
    whyItHelps: "A solid portfolio piece that demonstrates UI building and state management basics—perfect for an entry-level mobile dev role.",
    realWorldUseCase: "Individuals tracking their daily expenses and viewing monthly spending charts.",
    isTrending: false,
    detailedDescription: "Develop a cross-platform mobile app that lets users input income/expenses, categorizes them, and displays visual breakdowns of their financial health. You will handle device storage and complex UI state.",
    stepsToBuild: [
      "Design the UI flow using Flutter's widget catalog.",
      "Set up local SQLite database for offline-first data storage.",
      "Implement state management (Provider or Riverpod) for immediate UI updates.",
      "Integrate a charting library to display monthly expense breakdowns.",
      "Implement a local biometric authentication lock for privacy."
    ]
  },
  {
    id: "proj-6",
    title: "Fintech Dashboard Redesign",
    category: "Design",
    difficulty: "Intermediate",
    skills: ["Wireframing", "Prototyping", "Design Systems", "User Testing"],
    techStack: ["Figma", "FigJam", "Adobe Illustrator"],
    demoUrl: "https://www.figma.com/community",
    resumeImpact: "Showcases ability to handle complex data visualization and user flows in a high-stakes domain (finance).",
    whyItHelps: "Hiring managers look for designers who can simplify complex interfaces. Fintech is notoriously complex.",
    realWorldUseCase: "A banking dashboard that allows users to easily understand their portfolio performance at a glance.",
    isRecommended: true,
    isTrending: true,
    detailedDescription: "Conduct a full UI/UX overhaul of a poorly designed financial dashboard. Create wireframes, user personas, high-fidelity mockups, and an interactive prototype demonstrating seamless user flows.",
    stepsToBuild: [
      "Research existing fintech dashboards and identify pain points.",
      "Create low-fidelity wireframes in Figma mapping out the user journey.",
      "Establish a design system (typography, colors, components).",
      "Develop high-fidelity screens for Dashboard, Transfers, and History.",
      "Create an interactive prototype demonstrating the primary user flows."
    ]
  },
  {
    id: "proj-7",
    title: "AI-Powered Resume ATS Optimizer",
    category: "AI & ML",
    difficulty: "Advanced",
    skills: ["NLP", "LLM Integration", "Prompt Engineering", "Full Stack"],
    techStack: ["Next.js", "OpenAI API", "Tailwind", "Python", "FastAPI"],
    githubUrl: "https://github.com/topics/resume-builder",
    resumeImpact: "Highly relevant to recruiters. Demonstrates integration of modern AI models into a functional web application.",
    whyItHelps: "AI integration is the hottest skill right now. Showing you can connect a frontend to an LLM backend proves you are keeping up with industry trends.",
    realWorldUseCase: "Job seekers uploading their resume and a job description to get instant feedback on missing keywords.",
    isTrending: true,
    isRecommended: true,
    detailedDescription: "Build a web app where users upload a PDF resume and paste a job description. The backend uses NLP and an LLM API to extract keywords, compare them, and generate a score and improvement suggestions.",
    stepsToBuild: [
      "Build a React frontend with a file upload component.",
      "Create a Python/FastAPI backend to receive the PDF.",
      "Use PyPDF2 to extract text from the resume.",
      "Send the resume text and job description to the OpenAI/Anthropic API with a specific prompt.",
      "Format the JSON response and display the score and suggestions on the frontend."
    ]
  },
  {
    id: "proj-8",
    title: "Automated AWS Infrastructure Provisioning",
    category: "Developer Tools",
    difficulty: "Intermediate",
    skills: ["Infrastructure as Code", "CI/CD", "AWS", "Automation"],
    techStack: ["Terraform", "GitHub Actions", "AWS EC2", "AWS S3"],
    githubUrl: "https://github.com/topics/terraform",
    resumeImpact: "DevOps roles require IaC. Showing you can spin up infrastructure via code rather than clicking in the console is a massive plus.",
    whyItHelps: "It shows an understanding of modern operations, reliability, and version-controlling infrastructure.",
    realWorldUseCase: "A company needing to spin up identical staging and production environments automatically.",
    detailedDescription: "Write Terraform scripts to automatically provision a VPC, subnets, EC2 instances, and an S3 bucket in AWS. Then, set up a GitHub Actions pipeline to apply this infrastructure when code is pushed.",
    stepsToBuild: [
      "Write Terraform configuration for AWS VPC and networking.",
      "Define EC2 instance and Security Group resources.",
      "Configure Terraform state to be stored remotely in an S3 bucket.",
      "Write a GitHub Actions YAML file to run `terraform plan` on PRs.",
      "Configure the action to run `terraform apply` on merge to main."
    ]
  },
  {
    id: "proj-9",
    title: "Decentralized Voting DApp",
    category: "Coding",
    difficulty: "Advanced",
    skills: ["Smart Contracts", "Web3 Integration", "Frontend", "Blockchain"],
    techStack: ["Solidity", "React", "Ethers.js", "Hardhat"],
    githubUrl: "https://github.com/topics/dapp",
    resumeImpact: "Web3 is a lucrative niche. A full DApp shows you understand both frontend and blockchain interaction.",
    whyItHelps: "Proves you can handle wallet connections, interact with smart contracts securely, and manage blockchain state.",
    realWorldUseCase: "A secure, transparent, and immutable voting system for a local organization.",
    isTrending: true,
    detailedDescription: "Write a Solidity smart contract to handle election candidates and votes. Deploy it to a testnet using Hardhat. Build a React frontend that connects to MetaMask to allow users to cast exactly one vote.",
    stepsToBuild: [
      "Write the Voting smart contract in Solidity.",
      "Write tests for the contract using Chai and Hardhat.",
      "Deploy the contract to the Sepolia or Goerli testnet.",
      "Build a React frontend and integrate Ethers.js.",
      "Implement MetaMask wallet connection and call the contract's vote function."
    ]
  },
  {
    id: "proj-10",
    title: "Food Delivery App Clone",
    category: "Mobile App Development",
    difficulty: "Intermediate",
    skills: ["Maps Integration", "Authentication", "Payment Gateway", "Real-time DB"],
    techStack: ["React Native", "Firebase", "Stripe API", "Google Maps API"],
    githubUrl: "https://github.com/topics/food-delivery-app",
    demoUrl: "#",
    resumeImpact: "A classic, comprehensive project that touches all major aspects of consumer mobile apps.",
    whyItHelps: "If you can build an app with auth, maps, and payments, you can build almost any standard business app.",
    realWorldUseCase: "Users browsing restaurants, adding items to a cart, and checking out with a credit card.",
    isRecommended: true,
    detailedDescription: "Build a React Native application that mimics UberEats. It must include user authentication, a restaurant browsing feed, a functional shopping cart, and a simulated checkout flow.",
    stepsToBuild: [
      "Set up React Native with Expo and navigation routing.",
      "Integrate Firebase Authentication for user login/signup.",
      "Fetch and display restaurant data from Firebase Firestore.",
      "Implement a global state cart using Redux or Context API.",
      "Integrate the Stripe React Native SDK for simulated payments."
    ]
  }
];
