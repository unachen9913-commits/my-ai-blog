
export enum ViewState {
  HOME = 'HOME',
  PUBLICATIONS = 'PUBLICATIONS',
  AWARDS = 'AWARDS'
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Publication {
  title: string;
  journalOrConference: string; 
  year: string;
  authors: string;
  status?: string;
  tags?: string[];
  category: 'Journal Paper' | 'Conference Paper';
}

export interface Award {
  title: string;
  organization?: string;
  year?: string;
  description?: string;
  category: 'Academic Honors' | 'Paper Awards' | 'International Competitions' | 'Domestic Competitions' | 'Certificates';
}

export interface Profile {
  nameEn: string;
  nameCh: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  googleScholar?: string;
  researchGate?: string;
}
