import type { ProjectModel } from './project.meta';

export const PROJECT_GRYFDER_DEFICERE: ProjectModel = {
  thumbnail: new URL('@/assets/showcase/showcase-gryfder-deficere.webp', import.meta.url).toString(),
  thumbnailAlt: "Gryfder Deficere's Website",

  title: 'Gryfdar Deficere, Reference',
  subtitle: 'Setup Github',

  link: 'https://gryfder.github.io/',
  techStacks: ['Vue.js', 'HTML', 'TypeScript', 'JavaScript', 'CSS', 'SCSS'],

  status: 'active',
};
