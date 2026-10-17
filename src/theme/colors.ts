export interface ColorTheme {
  id: string;
  name: string;
  primary: string;
  hover: string;
  gradient: string;
  soft: string;
  ring: string;
}

export const colorThemes: ColorTheme[] = [
  {
    id: 'blue',
    name: 'Electric Blue',
    primary: '#2563EB',
    hover: '#1D4ED8',
    gradient: 'linear-gradient(135deg, #2563EB, #06B6D4)',
    soft: 'rgba(37, 99, 235, 0.12)',
    ring: 'rgba(37, 99, 235, 0.3)',
  },
  {
    id: 'indigo',
    name: 'Royal Indigo',
    primary: '#6366F1',
    hover: '#4F46E5',
    gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    soft: 'rgba(99, 102, 241, 0.12)',
    ring: 'rgba(99, 102, 241, 0.3)',
  },
  {
    id: 'emerald',
    name: 'Emerald Green',
    primary: '#10B981',
    hover: '#059669',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    soft: 'rgba(16, 185, 129, 0.12)',
    ring: 'rgba(16, 185, 129, 0.3)',
  },
  {
    id: 'rose',
    name: 'Neon Crimson',
    primary: '#F43F5E',
    hover: '#E11D48',
    gradient: 'linear-gradient(135deg, #F43F5E, #BE123C)',
    soft: 'rgba(244, 63, 94, 0.12)',
    ring: 'rgba(244, 63, 94, 0.3)',
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    primary: '#F59E0B',
    hover: '#D97706',
    gradient: 'linear-gradient(135deg, #F59E0B, #B45309)',
    soft: 'rgba(245, 158, 11, 0.12)',
    ring: 'rgba(245, 158, 11, 0.3)',
  },
  {
    id: 'cyan',
    name: 'Cyan Teal',
    primary: '#06B6D4',
    hover: '#0891B2',
    gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    soft: 'rgba(6, 182, 212, 0.12)',
    ring: 'rgba(6, 182, 212, 0.3)',
  },
];

export const defaultTheme = colorThemes[0]; // Electric Blue
