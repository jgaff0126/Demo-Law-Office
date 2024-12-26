import React from 'react';
import { Scale } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

export default function Navbar() {
  const scrollToSection = useScrollToSection();

  return (
    <nav className="bg-slate-900 text-white py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-amber-500" />
          <span className="text-xl font-semibold">Demo Law Office</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-amber-500 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('practice-areas')} 
            className="hover:text-amber-500 transition-colors"
          >
            Practice Areas
          </button>
          <button 
            onClick={() => scrollToSection('team')} 
            className="hover:text-amber-500 transition-colors"
          >
            Our Team
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-amber-500 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}