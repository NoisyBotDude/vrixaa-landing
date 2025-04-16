export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  image?: string;
};

export type VisionStatement = {
  heading: string;
  description: string;
};

export type FeatureHighlight = {
  title: string;
  description: string;
  icon?: string;
};

export type ContactFormInput = {
  name: string;
  email: string;
  message: string;
  type?: 'partnership' | 'investor' | 'general';
};

export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
}; 