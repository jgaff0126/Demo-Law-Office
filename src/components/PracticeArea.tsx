import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PracticeAreaProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function PracticeArea({ title, description, Icon }: PracticeAreaProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="h-12 w-12 text-amber-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}