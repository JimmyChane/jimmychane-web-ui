import type { ProjectModel } from './project.meta';

export const PROJECT_MYFURCON_2026: ProjectModel = {
  thumbnail: new URL('@/assets/showcase/showcase-myfurcon-2026.webp', import.meta.url).toString(),
  thumbnailAlt: 'MYFURCON 2026',

  title: 'MYFURCON 2026',
  subtitle: 'Furry Convention',

  link: 'https://myfur.org/',
  techStacks: ['Vue.js', 'HTML', 'TypeScript', 'CSS', 'SCSS', 'PWA'],

  statuses: ['developing', 'active'],
};
