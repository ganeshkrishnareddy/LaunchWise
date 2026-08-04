import { Globe, Mail, MessageCircle, FileText, DiscIcon as Discord } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Platform",
      links: ["Jobs", "Internships", "Student Perks", "AI Tools", "Roadmaps"]
    },
    {
      title: "Resources",
      links: ["Resume Builder", "Learning Paths", "Community", "Developer API", "Blog"]
    },
    {
      title: "Categories",
      links: ["Software Engineering", "Product Management", "Data Science", "Design", "Marketing"]
    },
    {
      title: "Company",
      links: ["About LaunchWise", "Careers", "Press", "Contact", "Partners"]
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility"]
    }
  ];

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <img src="/logo.png" alt="LaunchWise Logo" className="w-8 h-8 object-contain" />
              LaunchWise
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The complete career platform for students. Discover internships, verified jobs, exclusive student offers, and AI tools—all in one place.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><FileText className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Discord className="w-5 h-5" /></a>
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i} className="col-span-1 lg:col-span-1">
              <h4 className="font-semibold text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-brand-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 LaunchWise Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
