import type { ProjectModel } from './project.meta';

export const PROJECT_RORY_XAVIER: ProjectModel = {
  thumbnail: new URL('@/assets/showcase/showcase-rory-xavier.webp', import.meta.url).toString(),
  thumbnailAlt: "Rory Xavier's Reference",

  title: 'Rory Xavier, Reference',
  subtitle: 'Contributations',

  link: 'https://ref.rorywolf.net/',
  description:
    "I'm helping develop a user-friendly website with smooth profile picture header animations, a biography, and seamless integration of social media and contact options.",
  techStacks: ['Svelte.js', 'HTML', 'TypeScript', 'JavaScript', 'CSS', 'SCSS'],
};
