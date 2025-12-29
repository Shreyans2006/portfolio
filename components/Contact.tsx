import React, { useState } from 'react';
import Section from './ui/Section';
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-mono text-sm font-medium tracking-widest text-accent uppercase mb-3">Get in Touch</h2>
        <h3 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
          Let's work <span className="text-accent">together</span>
        </h3>
        <p className="text-lg text-slate-400">
          Open to opportunities, collaborations, and interesting conversations.
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-16">
        <SocialButton href="mailto:chowdryshreyans20@gmail.com" icon={<Mail size={20} />} label="Email" />
        <SocialButton href="https://github.com/Shreyans2006" icon={<Github size={20} />} label="GitHub" />
        <SocialButton href="https://www.linkedin.com/in/shreyans-chowdry" icon={<Linkedin size={20} />} label="LinkedIn" />
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl shadow-black/50 border border-white/10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="Your email"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
            <textarea 
              id="message"
              rows={4}
              required
              className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
              placeholder="Tell me about your project or idea..."
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={formState !== 'idle'}
            className={`w-full font-bold py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 ${
              formState === 'success' 
                ? 'bg-emerald-500 text-white' 
                : 'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-blue-500/25'
            } disabled:opacity-80 disabled:cursor-not-allowed`}
          >
            {formState === 'idle' && (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
            {formState === 'loading' && (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            )}
            {formState === 'success' && (
              <>
                <CheckCircle size={18} />
                Message Sent!
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};

const SocialButton: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-white/10 text-slate-300 hover:text-white hover:border-accent/50 hover:bg-white/5 hover:scale-105 transition-all duration-300 shadow-md"
  >
    {icon}
    <span className="font-medium">{label}</span>
  </a>
);

export default Contact;