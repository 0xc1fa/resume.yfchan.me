export type ContactInfo = {
  name: string;
  phoneNumber?: string;
  emailAddress?: string;
  githubUsername?: string;
  linkedinIdentifier?: string;
  portfolioUrl?: string;
};

export type EducationInfo = {
  institute: string;
  degreeName: string;
  fromDate: Date;
  toDate: Date;
  details?: (React.ReactNode | string)[];
};

export type CertificationInfo = {
  title: string;
  issuedBy: string;
  obtainedDate: Date;
  expiresDate: Date;
  details?: (React.ReactNode | string)[];
};

export type GeneralInfo = {
  title: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
  details?: (React.ReactNode | string)[];
};

export type WorkExperienceInfo = {
  company: string;
  posts?: Array<{
    title: string;
    fromDate: Date;
    toDate: Date;
    details?: (React.ReactNode | string)[];
  }>;
};

export type PostInfo = {};

export type SkillsInfo = {
  category: string;
  items: string[];
};
