export interface Project {
  id: string;
  title: string;
  category: 'Web App' | 'Mobile App' | 'Website' | 'UI/UX';
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  year?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  percentage: number;
  iconType: 'html' | 'css' | 'js' | 'react' | 'node' | 'figma';
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'laptop' | 'pen' | 'phone' | 'settings';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}
