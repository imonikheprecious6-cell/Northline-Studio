export interface ArchitectureProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  animationDirection: 'bottom' | 'side' | 'scale';
  details: {
    area: string;
    materials: string;
    photography: string;
  };
}

export interface ApproachPillar {
  number: string;
  title: string;
  summary: string;
  expanded: string;
}

export interface StudioStatistic {
  value: number;
  suffix: string;
  label: string;
  context: string;
}

export interface ProjectInquiry {
  fullName: string;
  email: string;
  phone?: string;
  projectType: string;
  location: string;
  estimatedBudget: string;
  timeline: string;
  description: string;
}
