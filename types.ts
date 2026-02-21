
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link?: string;
}

export interface ResearchItem {
  id: string;
  imageUrl: string; // 研究のモデル図やイメージ画像用
  title: string;
  description: string;
  tags: string[];
  link?: string;
  now?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface EducationWorkItem {
  type: 'Education' | 'Work';
  date: string;
  title: string;
  subtitle: string;
  logoUrl: string;
  tags?: string[];
  now?: boolean;
}

export interface Qualification {
  name: string;
  label: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
}

export interface ProfileData {
  name: string;
  englishName: string;
  role: string;
  email: string;
  profileImageUrl: string;
  heroImageUrl: string; // Heroセクションの背景やメイン画像
  departmentName: string;
  departmentUrl: string;
  labName: string;
  labUrl: string;
  universityName: string;
  socialLinks: SocialLinks;
  projects: Project[];
  qualifications: Qualification[];
  research: ResearchItem[];
  educationWork: EducationWorkItem[];
  // bio: string;
  // location: string;
  // experience: string;
  skills: Skill[];
}
