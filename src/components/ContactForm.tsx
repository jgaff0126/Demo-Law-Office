import React, { FormEvent, useState } from 'react';

interface ContactFormProps {
  recipientEmail: string;
}

export default function ContactForm({ recipientEmail }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const emailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
    
    try {
      window.location.href = mailtoLink;
      setStatus('success');
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={4}
        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
      <button
        type="submit"
        className="w-full bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
      >
        Send Message
      </button>
      
      {status === 'success' && (
        <p className="text-green-600">Your email client will open to send the message.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">There was an error. Please try again.</p>
      )}
    </form>
  );
}