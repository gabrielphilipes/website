export interface WebsiteProjectType {
  id: number;
  title: string;
  description: string;
  component: string;
  image: string;
  views: number;
}

export interface WebsiteHardSkillType {
  id?: number;
  name: string;
  level: string;
}
