import React from 'react';
import { roadmaps } from '@/data/roadmaps';
import { notFound } from 'next/navigation';
import { RoadmapContent } from './RoadmapContent';

export const runtime = 'edge';

interface Props {
    params: { id: string };
}

export default function RoadmapDetailPage({ params }: Props) {
    const { id } = params;
    const roadmap = roadmaps.find((r) => r.id === id);

    if (!roadmap) {
        notFound();
    }

    return <RoadmapContent roadmap={roadmap} />;
}
