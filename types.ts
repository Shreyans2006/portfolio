import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface JourneyItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}
