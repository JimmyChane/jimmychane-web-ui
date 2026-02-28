import type { ProjectModel } from './project.meta';

export const PROJECT_RHOUGHOUS: ProjectModel = {
  thumbnail: new URL('@/assets/showcase/showcase-rhougous-hiroki.webp', import.meta.url).toString(),
  thumbnailAlt: "Rhougous Hiroki's Website",

  title: 'Rhougous Hiroki',
  subtitle: 'Helps from the start',

  link: 'https://www.rhougous.net/',
  description:
    'I built a website from scratch to help my friend create a visually appealing online presence for his fursona. The site features a well-designed layout, intuitive background use, and smooth transitions between pages for an enhanced user experience.',

  techStacks: ['Vue.js', 'HTML', 'TypeScript', 'JavaScript', 'CSS', 'SCSS'],

  status: 'deprecated',
};
