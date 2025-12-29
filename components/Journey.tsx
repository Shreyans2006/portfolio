import React from 'react';
import Section from './ui/Section';
import { JourneyItem } from '../types';
import { Lightbulb, GraduationCap, Code, Rocket } from 'lucide-react';

const journeyItems: JourneyItem[] = [
  {
    title: "Strong CS Foundations",
    description: "Built a solid base in C, C++, Java, Python, and Data Structures & Algorithms.",
    icon: Lightbulb,
    color: "bg-amber-500"
  },
  {
    title: "DAV Boys Senior Secondary School",
    description: "Completed schooling in Chennai, developing a strong academic foundation and analytical mindset.",
    icon: GraduationCap,
    color: "bg-sky-500"
  },
  {
    title: "VIT - B.Tech CSE (Data Science)",
    description: "Pursuing Computer Science Engineering with specialization in Data Science at Vellore Institute of Technology.",
    icon: GraduationCap,
    color: "bg-purple-500"
  },
  {
    title: "Building Real Applications",
    description: "Developing and deploying production-ready web applications with focus on clean architecture and user experience.",
    icon: Code,
    color: "bg-emerald-500"
  },
  {
    title: "Exploring Product Development",
    description: "Working on scalable product ideas and SaaS platforms with emphasis on maintainability and system design.",
    icon: Rocket,
    color: "bg-rose-500"
  }
];

const Journey: React.FC = () => {
  return (
    <Section id="journey" className="bg-surface/30">
      <div className="mb-16">
        <h2 className="font-mono text-sm font-medium tracking-widest text-accent uppercase mb-3">Experience</h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Path to <span className="text-accent">engineering</span>
        </h3>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[28px] top-4 bottom-4 w-px bg-white/10 md:left-1/2 md:-ml-px"></div>

        <div className="space-y-12">
          {journeyItems.map((item, index) => (
            <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
              
              {/* Icon */}
              <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center border-4 border-background z-10 ${item.color} shadow-lg shadow-${item.color.split('-')[1]}-500/20 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={24} />
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[45%] glass-card p-6 rounded-2xl hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1`}>
                <h4 className="font-heading text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Journey;