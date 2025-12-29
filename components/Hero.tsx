import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Animated Background Elements - Deeper Colors */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-32 left-[20%] w-[40rem] h-[40rem] bg-violet-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent backdrop-blur-md animate-fade-in hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          SOFTWARE ENGINEER
        </div>

        {/* Headline */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
            Shreyans <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Chowdry</span>
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-slate-400 max-w-3xl mx-auto leading-tight">
            Building <span className="text-white">scalable</span> web products with clean architecture.
          </p>
        </div>

        {/* Subheading */}
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
          Strong foundations in computer science and data-driven engineering. Focusing on systems, not just syntax.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Shimmer Button */}
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, '#projects')}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group cursor-pointer"
          >
            {/* Added pointer-events-none to the spinning gradient so it doesn't capture clicks */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] pointer-events-none" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 gap-2 relative z-10">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-slate-200 font-medium hover:bg-white/10 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
    </section>
  );
};

export default Hero;