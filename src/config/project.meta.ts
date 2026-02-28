export interface ProjectModel {
  thumbnail: string;
  thumbnailAlt?: string;

  title: string;
  subtitle?: string;

  description?: string;
  techStacks: string[];
  link: string;
}
