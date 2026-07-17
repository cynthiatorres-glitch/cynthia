export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  methodologies: string[];
  role: string;
  outcomes: string[];
  impactMetric: string;
}

export interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  institution: string;
  description: string;
  skills: string[];
}

export interface SpecializationCard {
  id: string;
  title: string;
  icon: string;
  description: string;
  tags: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
