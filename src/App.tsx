import React from 'react';
import Navbar from './components/Navbar';
import PracticeArea from './components/PracticeArea';
import TeamMember from './components/TeamMember';
import ContactForm from './components/ContactForm';
import { Building2, Scale, FileText, Phone, Mail, MapPin } from 'lucide-react';

function App() {
  const CONTACT_EMAIL = 'jeremey.gaff@gmail.com';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="section pt-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Committed to Justice, Dedicated to You</h1>
            <p className="text-xl text-gray-300 mb-8">With over 25 years of experience, we provide exceptional legal services tailored to your needs.</p>
            <a href="#contact" className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="section py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Practice Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PracticeArea
              Icon={Building2}
              title="Corporate Law"
              description="Comprehensive legal solutions for businesses of all sizes."
            />
            <PracticeArea
              Icon={Scale}
              title="Civil Litigation"
              description="Skilled representation in complex civil disputes."
            />
            <PracticeArea
              Icon={FileText}
              title="Estate Planning"
              description="Secure your family's future with proper estate planning."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Legal Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <TeamMember
              name="Sarah Johnson"
              role="Managing Partner"
              imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember
              name="Michael Chen"
              role="Senior Partner"
              imageUrl="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember
              name="Emily Rodriguez"
              role="Associate Attorney"
              imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-amber-500" />
                <span>(660) 349-9942</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-amber-500" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span>307 Lewis St <br />Canton, MO 63435</span>
              </div>
            </div>
            <ContactForm recipientEmail={CONTACT_EMAIL} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Scale className="h-6 w-6 text-amber-500" />
            <span className="text-lg font-semibold">Demo Law Office</span>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Demo Law Office. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;