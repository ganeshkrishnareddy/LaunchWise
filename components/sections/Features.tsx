import { Briefcase, Map, FileText, Shield } from 'lucide-react';

const features = [
    {
        icon: <Briefcase className="h-8 w-8 text-brand-600" />,
        title: "Live Job Search",
        description: "Direct links to the latest job openings for freshers. Filter by remote, company, and location."
    },
    {
        icon: <Map className="h-8 w-8 text-purple-600" />,
        title: "Career Roadmaps",
        description: "Step-by-step guides for Web Dev, Cybersecurity, Data Science, and more. Know exactly what to learn next."
    },
    {
        icon: <FileText className="h-8 w-8 text-blue-600" />,
        title: "ATS-Friendly Resumes",
        description: "Build a professional resume with our free templates designed to pass Applicant Tracking Systems."
    },
    {
        icon: <Shield className="h-8 w-8 text-green-600" />,
        title: "Free Resources",
        description: "Curated list of the best free learning resources from around the web, organized by topic and difficulty."
    }
];

export function Features() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Everything You Need to Start
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Stop searching in ten different places. LaunchWise brings it all together.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="bg-brand-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
