import { Project, Skill, Service, Testimonial } from '../types';

export const portfolioImages = {
  alexPortrait: '/src/assets/images/malik_profile.jpg',
  deskWorkspace: '/src/assets/images/desk_workspace_1791379237362.jpg',
  saasDashboard: '/src/assets/images/saas_dashboard_1791379251182.jpg',
  mobileAppMockup: '/src/assets/images/mobile_app_mockup_1791379261404.jpg',
  ecommerceMockup: '/src/assets/images/ecommerce_mockup_1791379275617.jpg',
  mountainBanner: '/src/assets/images/mountain_sunset_banner_1791379287109.jpg',
};

export const projectsData: Project[] = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'Web App',
    description: 'A powerful dashboard for managing users, analytics and content.',
    image: portfolioImages.saasDashboard,
    tags: ['React', 'Tailwind', 'Node.js'],
    liveUrl: 'https://example.com/demo/saas-dashboard',
    githubUrl: 'https://github.com/malikahtasham/saas-dashboard',
    metrics: '+42% User Engagement Increase',
    year: '2026',
    featured: true,
  },
  {
    id: 'task-manager-app',
    title: 'Task Manager App',
    category: 'Mobile App',
    description: 'A modern mobile app to organize your tasks efficiently.',
    image: portfolioImages.mobileAppMockup,
    tags: ['Flutter', 'Firebase', 'Dart'],
    liveUrl: 'https://example.com/demo/task-manager',
    githubUrl: 'https://github.com/malikahtasham/task-manager',
    metrics: '100k+ Active Mobile Downloads',
    year: '2025',
    featured: true,
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Website',
    category: 'Website',
    description: 'A fully responsive online store with a clean and modern design.',
    image: portfolioImages.ecommerceMockup,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://example.com/demo/ecommerce-store',
    githubUrl: 'https://github.com/malikahtasham/minimal-ecommerce',
    metrics: '$280K GMV in Q1 Launch',
    year: '2026',
    featured: true,
  },
  {
    id: 'fintech-portfolio-tracker',
    title: 'Fintech Crypto & Asset Vault',
    category: 'Web App',
    description: 'Real-time cryptocurrency and wealth analytics dashboard with micro-chart interactions.',
    image: portfolioImages.saasDashboard,
    tags: ['TypeScript', 'Next.js', 'Chart.js'],
    liveUrl: 'https://example.com/demo/fintech-vault',
    githubUrl: 'https://github.com/alexcarter/asset-vault',
    metrics: 'Sub-50ms Realtime WebSocket Feeds',
    year: '2025',
    featured: false,
  },
  {
    id: 'health-fitness-companion',
    title: 'Aura Wellness & Habit Tracker',
    category: 'Mobile App',
    description: 'Cross-platform health tracking app featuring interactive streak visuals and sleep stages.',
    image: portfolioImages.mobileAppMockup,
    tags: ['React Native', 'Expo', 'GraphQL'],
    liveUrl: 'https://example.com/demo/aura-wellness',
    githubUrl: 'https://github.com/alexcarter/aura-wellness',
    metrics: '4.9 Star Rating on App Store',
    year: '2026',
    featured: false,
  },
  {
    id: 'architectural-studio',
    title: 'Kroma Architecture Portfolio',
    category: 'Website',
    description: 'Minimalist editorial showcase website for an international interior architecture collective.',
    image: portfolioImages.ecommerceMockup,
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://example.com/demo/kroma-arch',
    githubUrl: 'https://github.com/alexcarter/kroma-arch',
    metrics: 'Featured on Awwwards Site of the Day',
    year: '2025',
    featured: false,
  },
];

export const skillsData: Skill[] = [
  { name: 'HTML', percentage: 95, iconType: 'html', color: '#E34F26' },
  { name: 'CSS', percentage: 90, iconType: 'css', color: '#1572B6' },
  { name: 'JavaScript', percentage: 85, iconType: 'js', color: '#F7DF1E' },
  { name: 'React', percentage: 80, iconType: 'react', color: '#61DAFB' },
  { name: 'Node.js', percentage: 75, iconType: 'node', color: '#339933' },
  { name: 'Figma', percentage: 90, iconType: 'figma', color: '#F24E1E' },
];

export const servicesData: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Responsive and modern websites using the latest technologies.',
    iconName: 'laptop',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design for better experiences.',
    iconName: 'pen',
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development',
    description: 'Cross-platform apps for iOS and Android.',
    iconName: 'phone',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: 'Keep your website secure, updated and running smoothly.',
    iconName: 'settings',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'BrightTech',
    quote: 'Malik delivered an amazing website for our business. The design is clean, fast and exactly what we needed!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 'michael-lee',
    name: 'Michael Lee',
    role: 'Founder',
    company: 'PixelApps',
    quote: 'Professional, creative and easy to work with. The communication was great and the final result exceeded our expectations.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 'emily-davis',
    name: 'Emily Davis',
    role: 'Marketing Director',
    company: 'Nova Studio',
    quote: 'A talented developer with great attention to detail. I will definitely work with Malik again!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
  },
];

export const statsData = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '100%', label: 'Client Satisfaction' },
];
