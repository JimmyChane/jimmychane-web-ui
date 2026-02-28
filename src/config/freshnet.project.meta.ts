import type { ProjectModel } from './project.meta';

export const PROJECT_FRESHNET: ProjectModel = {
  thumbnail: new URL('@/assets/showcase/showcase-freshnet-enterprise.webp', import.meta.url).toString(),
  thumbnailAlt: 'Freshnet Enterprise',

  title: 'Freshnet Enterprise',
  subtitle: "Computer store's website",

  link: 'https://www.freshnet.app',
  description:
    "I built a website for Freshnet Enterprise, a computer store, to enhance its online presence. The website provides detailed information about the company's contacts, business hours, services, and location. With a user-friendly layout, it focuses on retaining customers and driving growth for Freshnet Enterprise in today's competitive marketplace.",

  techStacks: ['Vue.js', 'Express.js', 'MongoDB', 'HTML', 'TypeScript', 'JavaScript', 'CSS', 'SCSS', 'PWA'],

  status: 'active',
};
