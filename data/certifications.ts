export interface Certification {
  id: string;
  name: string;
  provider: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  cost: 'Free' | 'Paid';
  careerBenefits: string;
  url: string;
  isVerified: boolean;
  isValuableForFreshers: boolean;
  category: string;
  detailedSyllabus?: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    name: "Google Cybersecurity Professional Certificate",
    provider: "Google (via Coursera)",
    duration: "6 months",
    difficulty: "Beginner",
    cost: "Paid",
    careerBenefits: "Qualifies you for entry-level cybersecurity roles like Security Analyst, SOC Analyst. Prepares you for the CompTIA Security+ exam.",
    url: "https://grow.google/certificates/cybersecurity/",
    isVerified: true,
    isValuableForFreshers: true,
    category: "Cybersecurity",
    detailedSyllabus: [
      "Foundations of Cybersecurity",
      "Play It Safe: Manage Security Risks",
      "Connect and Protect: Networks and Network Security",
      "Tools of the Trade: Linux and SQL",
      "Assets, Threats, and Vulnerabilities"
    ]
  },
  {
    id: "cert-2",
    name: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    duration: "1-2 months",
    difficulty: "Beginner",
    cost: "Paid",
    careerBenefits: "The industry standard for entry-level cloud knowledge. Extremely valuable for IT, DevOps, and backend roles. Proves foundational AWS knowledge.",
    url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    isVerified: true,
    isValuableForFreshers: true,
    category: "Cloud & DevOps",
    detailedSyllabus: [
      "Cloud Concepts",
      "Security and Compliance",
      "Cloud Technology and Services",
      "Billing, Pricing, and Support"
    ]
  },
  {
    id: "cert-3",
    name: "IBM Data Science Professional Certificate",
    provider: "IBM",
    duration: "5 months",
    difficulty: "Beginner",
    cost: "Paid",
    careerBenefits: "Hands-on experience with Jupyter, Python, and SQL. Great for landing Junior Data Analyst or Data Scientist roles.",
    url: "https://www.coursera.org/professional-certificates/ibm-data-science",
    isVerified: true,
    isValuableForFreshers: true,
    category: "Data Science & AI",
    detailedSyllabus: [
      "What is Data Science?",
      "Tools for Data Science",
      "Python for Data Science, AI & Development",
      "Databases and SQL for Data Science with Python",
      "Data Analysis and Visualization with Python"
    ]
  },
  {
    id: "cert-4",
    name: "Cisco CCNA (Cisco Certified Network Associate)",
    provider: "Cisco",
    duration: "3-6 months",
    difficulty: "Intermediate",
    cost: "Paid",
    careerBenefits: "The gold standard for networking. Essential for Network Engineers, System Administrators, and Security roles. Highly respected by enterprise employers.",
    url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html",
    isVerified: true,
    isValuableForFreshers: false,
    category: "Networking",
    detailedSyllabus: [
      "Network Fundamentals",
      "Network Access",
      "IP Connectivity and Routing",
      "IP Services",
      "Security Fundamentals"
    ]
  },
  {
    id: "cert-5",
    name: "Meta Front-End Developer Professional Certificate",
    provider: "Meta",
    duration: "7 months",
    difficulty: "Beginner",
    cost: "Paid",
    careerBenefits: "Learn React, UI/UX principles, and accessibility from the creators of React. Perfect for aspiring Front-End Devs.",
    url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    isVerified: true,
    isValuableForFreshers: true,
    category: "Software Engineering",
    detailedSyllabus: [
      "Introduction to Front-End Development",
      "Programming with JavaScript",
      "Version Control",
      "HTML and CSS in depth",
      "React Basics and Advanced React"
    ]
  },
  {
    id: "cert-6",
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    provider: "Microsoft",
    duration: "1 month",
    difficulty: "Beginner",
    cost: "Paid",
    careerBenefits: "Core understanding of Azure cloud services. Often a prerequisite for roles in enterprise companies using Microsoft stacks.",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
    isVerified: true,
    isValuableForFreshers: true,
    category: "Cloud & DevOps",
    detailedSyllabus: [
      "Describe cloud concepts",
      "Describe Azure architecture and services",
      "Describe Azure management and governance"
    ]
  },
  {
    id: "cert-7",
    name: "freeCodeCamp Responsive Web Design",
    provider: "freeCodeCamp",
    duration: "300 hours",
    difficulty: "Beginner",
    cost: "Free",
    careerBenefits: "Excellent foundational knowledge of HTML/CSS. Widely recognized by employers as a solid starting point for web dev.",
    url: "https://www.freecodecamp.org/learn/responsive-web-design/",
    isVerified: true,
    isValuableForFreshers: true,
    category: "Software Engineering",
    detailedSyllabus: [
      "Basic HTML and HTML5",
      "Basic CSS",
      "Applied Visual Design",
      "Applied Accessibility",
      "CSS Flexbox and Grid"
    ]
  },
  {
    id: "cert-8",
    name: "Certified Kubernetes Administrator (CKA)",
    provider: "Cloud Native Computing Foundation",
    duration: "3-6 months",
    difficulty: "Advanced",
    cost: "Paid",
    careerBenefits: "One of the highest-paying and most sought-after certifications for DevOps engineers. Proves you can manage containerized production clusters.",
    url: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
    isVerified: true,
    isValuableForFreshers: false,
    category: "Cloud & DevOps",
    detailedSyllabus: [
      "Cluster Architecture, Installation & Configuration",
      "Workloads & Scheduling",
      "Services & Networking",
      "Storage",
      "Troubleshooting"
    ]
  },
  {
    id: "cert-9",
    name: "Google Data Analytics Professional Certificate",
    provider: "Google",
    duration: "6 months",
    difficulty: "Beginner",
    cost: "Paid",
    careerBenefits: "Perfect for entry-level data analysts. Covers spreadsheets, SQL, Tableau, and R programming. Recognized by top employers.",
    url: "https://grow.google/certificates/data-analytics/",
    isVerified: true,
    isValuableForFreshers: true,
    category: "Data Science & AI",
    detailedSyllabus: [
      "Foundations: Data, Data, Everywhere",
      "Ask Questions to Make Data-Driven Decisions",
      "Prepare Data for Exploration",
      "Process Data from Dirty to Clean",
      "Analyze Data to Answer Questions"
    ]
  },
  {
    id: "cert-10",
    name: "Offensive Security Certified Professional (OSCP)",
    provider: "OffSec",
    duration: "6-12 months",
    difficulty: "Advanced",
    cost: "Paid",
    careerBenefits: "The holy grail of penetration testing certifications. Almost guarantees a job interview for ethical hacking and red team roles.",
    url: "https://www.offsec.com/courses/pen-200/",
    isVerified: true,
    isValuableForFreshers: false,
    category: "Cybersecurity",
    detailedSyllabus: [
      "Information Gathering & Vulnerability Scanning",
      "Web Application Attacks",
      "Client Side Attacks",
      "Locating Public Exploits",
      "Privilege Escalation & Active Directory Attacks"
    ]
  },
  { id: "cert-11", name: "TensorFlow Developer Certificate", provider: "Google", duration: "3-4 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "Proves hands-on ML skills using the world's most popular deep learning framework. Great for ML Engineer and AI roles.", url: "https://www.tensorflow.org/certificate", isVerified: true, isValuableForFreshers: true, category: "Data Science & AI", detailedSyllabus: ["Building and training neural networks", "Image classification with CNNs", "NLP with TensorFlow", "Time series forecasting", "Real-world model deployment"] },
  { id: "cert-12", name: "CompTIA Security+", provider: "CompTIA", duration: "2-3 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "The most widely adopted, vendor-neutral security cert. Required by the U.S. Department of Defense and many Fortune 500 companies.", url: "https://www.comptia.org/certifications/security", isVerified: true, isValuableForFreshers: true, category: "Cybersecurity", detailedSyllabus: ["Threats, Attacks and Vulnerabilities", "Technologies and Tools", "Architecture and Design", "Identity and Access Management", "Risk Management"] },
  { id: "cert-13", name: "Google Cloud Professional Data Engineer", provider: "Google Cloud", duration: "3-4 months", difficulty: "Advanced", cost: "Paid", careerBenefits: "High-paying credential for data pipeline engineers. Shows ability to design and operationalize data systems on GCP.", url: "https://cloud.google.com/certification/data-engineer", isVerified: true, isValuableForFreshers: false, category: "Cloud & DevOps", detailedSyllabus: ["Designing data processing systems", "Building data pipelines", "BigQuery and Dataflow", "ML model operationalization", "Solution quality"] },
  { id: "cert-14", name: "Oracle Certified Java SE 17 Developer", provider: "Oracle", duration: "2-4 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "Highly respected Java credential. Opens doors to enterprise backend, Android, and Spring Boot development roles.", url: "https://education.oracle.com/java-se-17-developer/pexam_1Z0-829", isVerified: true, isValuableForFreshers: true, category: "Software Engineering", detailedSyllabus: ["Java SE 17 core features", "OOP principles", "Functional programming with lambdas", "Concurrency and multithreading", "Java modules"] },
  { id: "cert-15", name: "Certified Ethical Hacker (CEH)", provider: "EC-Council", duration: "2-3 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "Globally recognized ethical hacking credential. Required for many government and defense cybersecurity contracts.", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/", isVerified: true, isValuableForFreshers: false, category: "Cybersecurity", detailedSyllabus: ["Ethical hacking methodologies", "Footprinting and reconnaissance", "Scanning and enumeration", "System hacking", "Web application hacking"] },
  { id: "cert-16", name: "AWS Certified Solutions Architect – Associate", provider: "Amazon Web Services", duration: "2-3 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "The most in-demand cloud certification globally. Massive salary bump for backend and cloud engineers.", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", isVerified: true, isValuableForFreshers: false, category: "Cloud & DevOps", detailedSyllabus: ["Resilient architectures", "High-performing architectures", "Secure applications", "Cost-optimized architectures", "EC2, S3, VPC, Lambda"] },
  { id: "cert-17", name: "Microsoft Azure Developer Associate (AZ-204)", provider: "Microsoft", duration: "2-3 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "Validates ability to build cloud applications on Azure. Great for .NET and full-stack developers targeting enterprise roles.", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/", isVerified: true, isValuableForFreshers: true, category: "Cloud & DevOps", detailedSyllabus: ["Azure compute solutions", "Azure storage", "Azure security", "Monitor and troubleshoot", "Connect to Azure services"] },
  { id: "cert-18", name: "Professional Scrum Master (PSM I)", provider: "Scrum.org", duration: "2-4 weeks", difficulty: "Beginner", cost: "Paid", careerBenefits: "Essential for any tech professional in Agile teams. Scrum Masters with PSM I earn significantly more than uncertified peers.", url: "https://www.scrum.org/assessments/professional-scrum-master-i-certification", isVerified: true, isValuableForFreshers: true, category: "Software Engineering", detailedSyllabus: ["Scrum Theory", "Scrum Team roles", "Scrum Events", "Scrum Artifacts", "Scaling Scrum"] },
  { id: "cert-19", name: "Docker Certified Associate (DCA)", provider: "Docker", duration: "1-2 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "Validates containerization expertise. Almost every modern backend and DevOps job listing requires Docker skills.", url: "https://training.mirantis.com/certification/dca-certification-exam/", isVerified: true, isValuableForFreshers: true, category: "Cloud & DevOps", detailedSyllabus: ["Docker Engine", "Image creation and registry", "Networking and volumes", "Security best practices", "Docker Swarm and Compose"] },
  { id: "cert-20", name: "Databricks Associate Developer for Apache Spark", provider: "Databricks", duration: "1-2 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "Highly valued in big data and data engineering. Companies using Databricks actively look for this credential.", url: "https://www.databricks.com/learn/certification/apache-spark-developer-associate", isVerified: true, isValuableForFreshers: false, category: "Data Science & AI", detailedSyllabus: ["Spark architecture", "DataFrames and Spark SQL", "Structured Streaming", "MLlib", "Delta Lake"] },
  { id: "cert-21", name: "Google UX Design Professional Certificate", provider: "Google", duration: "6 months", difficulty: "Beginner", cost: "Paid", careerBenefits: "The most recognized entry-level UX credential. Teaches Figma, wireframing, and user research. Perfect for career switchers.", url: "https://grow.google/certificates/ux-design/", isVerified: true, isValuableForFreshers: true, category: "Software Engineering", detailedSyllabus: ["Foundations of UX Design", "The UX Design Process", "Wireframes and Prototypes", "UX Research", "High-fidelity Designs in Figma"] },
  { id: "cert-22", name: "HashiCorp Certified: Terraform Associate", provider: "HashiCorp", duration: "1-2 months", difficulty: "Intermediate", cost: "Paid", careerBenefits: "Validates Infrastructure-as-Code skills. Highly in demand for any cloud or DevOps engineering role globally.", url: "https://www.hashicorp.com/certification/terraform-associate", isVerified: true, isValuableForFreshers: true, category: "Cloud & DevOps", detailedSyllabus: ["IaC concepts", "Terraform providers and modules", "State management", "Variables and outputs", "Terraform Cloud"] },
  { id: "cert-23", name: "Salesforce Certified Administrator", provider: "Salesforce", duration: "2-3 months", difficulty: "Beginner", cost: "Paid", careerBenefits: "Salesforce skills are extremely high-paying. Admins earn ₹6-15 LPA in India and $70k+ in the US even without coding.", url: "https://www.salesforce.com/ap/campaign/certification/", isVerified: true, isValuableForFreshers: true, category: "Software Engineering", detailedSyllabus: ["Platform navigation", "User and data management", "Sales and service cloud", "Automation with flows", "Reports and dashboards"] },
  { id: "cert-24", name: "MongoDB Associate Developer", provider: "MongoDB", duration: "1 month", difficulty: "Beginner", cost: "Free", careerBenefits: "MongoDB powers 90%+ of MERN stack apps. A free, verifiable credential that strengthens any backend developer's resume.", url: "https://learn.mongodb.com/pages/mongodb-developer-learning-path", isVerified: true, isValuableForFreshers: true, category: "Software Engineering", detailedSyllabus: ["CRUD operations", "Aggregation pipelines", "Indexes and performance", "Schema design", "Atlas cloud deployment"] },
  { id: "cert-25", name: "CompTIA Network+", provider: "CompTIA", duration: "1-2 months", difficulty: "Beginner", cost: "Paid", careerBenefits: "The foundational networking credential. Best starting point for IT support, network engineering, or cybersecurity careers.", url: "https://www.comptia.org/certifications/network", isVerified: true, isValuableForFreshers: true, category: "Networking", detailedSyllabus: ["Networking concepts", "Network infrastructure", "Network operations", "Security fundamentals", "Troubleshooting methodology"] }
];
