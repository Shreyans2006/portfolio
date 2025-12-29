import React from 'react';
import Section from './ui/Section';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python"]
  },
  {
    title: "Core Computer Science",
    skills: ["Data Structures & Algorithms", "OOP", "Problem Solving", "System Design"]
  },
  {
    title: "Web Development",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express", "Supabase", "Firebase"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "REST APIs"]
  }
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-surface/30">
      <div className="mb-12">
        <h2 className="font-mono text-sm font-medium tracking-widest text-accent uppercase mb-3">Technical Skills</h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Tools of the <span className="text-accent">trade</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="glass-card rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h4 className="relative font-heading text-xl font-semibold text-white mb-6 group-hover:text-accent transition-colors z-10">{category.title}</h4>
            <div className="relative flex flex-wrap gap-3 z-10">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3.5 py-1.5 bg-white/5 border border-white/5 rounded-lg text-sm text-slate-300 font-medium group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;