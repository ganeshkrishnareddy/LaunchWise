import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { projectsData } from '@/data/projects';
import { notFound } from 'next/navigation';
import { ProjectPageClient } from './ProjectPageClient';

export const runtime = 'edge';

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            
            <main className="flex-grow pt-24 pb-16">
                <ProjectPageClient project={project!} />
            </main>
            
        </div>
    );
}
