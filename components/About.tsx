import React from 'react';
import Section from './ui/Section';
import { Code2, Layers, Database, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="mb-16">
        <h2 className="font-mono text-sm font-medium tracking-widest text-accent uppercase mb-3">About Me</h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Engineering with <span className="text-accent">purpose</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Bio Text */}
        <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
          <p>
            I focus on building reliable software with clean architecture and strong fundamentals. 
            My background in <strong className="text-white font-medium">computer science and data science</strong> helps me approach problems 
            analytically while building scalable, real-world applications.
          </p>
          <p>
            Currently pursuing B.Tech in Computer Science Engineering with a specialization in 
            Data Science at <span className="text-white">Vellore Institute of Technology</span>. I apply core CS principles—data structures, 
            algorithms, and system design—to create software that solves real problems.
          </p>
          <p>
            My focus is on execution: shipping production-ready code, understanding system trade-offs, 
            and building products that work reliably for users.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard 
            icon={<Code2 className="w-6 h-6 text-blue-400" />} 
            title="Clean Code" 
            desc="Maintainable & Readable" 
          />
          <FeatureCard 
            icon={<Layers className="w-6 h-6 text-indigo-400" />} 
            title="Architecture" 
            desc="Scalable Patterns" 
          />
          <FeatureCard 
            icon={<Database className="w-6 h-6 text-violet-400" />} 
            title="Data-Driven" 
            desc="Analytical Approach" 
          />
          <FeatureCard 
            icon={<Terminal className="w-6 h-6 text-sky-400" />} 
            title="Problem Solver" 
            desc="First Principles" 
          />
        </div>
      </div>
    </Section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 flex flex-col items-center text-center justify-center h-full group border border-white/5 hover:border-white/10">
    <div className="mb-4 p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="font-heading text-white font-semibold mb-1 text-lg">{title}</h4>
    <p className="text-xs text-slate-500 font-medium">{desc}</p>
  </div>
);

export default About;