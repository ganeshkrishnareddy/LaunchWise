import React from 'react';
import { roadmaps } from '@/data/roadmaps';
import { notFound } from 'next/navigation';
import { RoadmapContent } from './RoadmapContent';

export function generateStaticParams() {
    return roadmaps.map((roadmap) => ({
        id: roadmap.id,
    }));
}

interface Props {
    params: Promise<{ id: string }>;
}

export default async function RoadmapDetailPage({ params }: Props) {
    const { id } = await params;
    const roadmap = roadmaps.find((r) => r.id === id);

    if (!roadmap) {
        notFound();
    }

    return <RoadmapContent roadmap={roadmap} />;
}
