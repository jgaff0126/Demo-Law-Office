import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

export default function TeamMember({ name, role, imageUrl }: TeamMemberProps) {
  return (
    <div className="text-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}