import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-surface border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} <span className="text-accent font-medium">Shreyans Chowdry</span>
        </p>
        
        <div className="flex gap-4">
          <a href="https://github.com/Shreyans2006" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/shreyans-chowdry" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;