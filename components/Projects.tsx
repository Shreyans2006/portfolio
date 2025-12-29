import React from 'react';
import Section from './ui/Section';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "StudyAI",
    description: "A full-stack study platform that allows users to upload learning material and generate structured study resources. Built with a SaaS mindset, focusing on authentication, data handling, and deployment for real users.",
    tech: ["React", "Node.js", "Database", "Auth", "Vercel"],
    liveUrl: "https://studyaimain.vercel.app/",
    githubUrl: "", 
    featured: true
  }
];

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="mb-16">
        <h2 className="font-mono text-sm font-medium tracking-widest text-accent uppercase mb-3">Featured Work</h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Things I've <span className="text-accent">built</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative p-8 md:p-12 z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-surface border border-white/10 rounded-2xl text-accent shadow-inner">
                    <Layers size={32} />
                  </div>
                  <div>
                    <h4 className="font-heading text-3xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h4>
                    <p className="text-sm text-slate-500 mt-1 font-mono">Full Stack Application</p>
                  </div>
                </div>
                {project.featured && (
                  <span className="self-start px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full border border-accent/20">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-1.5 bg-surface border border-white/10 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-default shadow-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-900/20"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-surface border border-white/10 text-white font-medium hover:bg-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;