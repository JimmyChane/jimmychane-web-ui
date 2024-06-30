import type { Social } from './Social';
import { Bluesky, Github, Telegram, Twitter } from './SocialPlatform';
import FursonaImage from '@/assets/fursona/fursona-preview-v0.6.webp';

export interface Profile {
  name: string;
  labels: string[];
  socials: Social[];
  description: string;

  fursona: {
    image: string;
    alt: string;
    sections: {
      titles: { title: string; subtitle: string };
      description: string;
    }[];
  };

  skill: {
    title: string;
    categories: { title: string; skills: string[] }[];
  };
  hobbies: string[];
  personalities: string[];
}

export const JimmyChane: Profile = {
  name: 'Jimmy Chane',
  labels: ['Website builders', 'Draw for fun'],
  socials: [
    { socialPlatform: Twitter, href: 'https://twitter.com/jimmykajun' },
    { socialPlatform: Telegram, href: 'https://t.me/Jimmy612' },
    { socialPlatform: Github, href: 'https://github.com/JimmyChane' },
    { socialPlatform: Bluesky, href: 'https://bsky.app/profile/jimmyfox.bsky.social' },
  ],
  description: 'Hi, feel free to chat with me',

  fursona: {
    image: FursonaImage,
    alt: 'Jimmy Yellow Fox',
    sections: [
      {
        titles: { title: 'Artwork and Character Design', subtitle: 'Captivating Appearance' },
        description:
          "Create artwork and character designs that showcase Jimmy Fox's captivating appearance. Highlight his striking yellow fur, blue hair, and half-blackened ears with vibrant colors and attention to detail. Capture the intrigue and complexity of his physical features in visually stunning illustrations.",
      },
      {
        titles: { title: 'Personality', subtitle: 'Shy yet Intriguing' },
        description:
          "Delve into Jimmy Fox's personality through character descriptions and storytelling. Portray his shyness as a key trait that adds depth to his character. Explore how his reserved nature influences his interactions with others and his approach to social situations. Showcase his quick wit, intelligence, and adaptability as underlying qualities that make him fascinating.",
      },
      {
        titles: { title: 'Stylish Simplicity', subtitle: 'Fashionable Outfit' },
        description:
          "Highlight Jimmy Fox's sense of style with his simple yet fashionable outfit. Describe his choice of a white t-shirt and gray pants, emphasizing how it reflects his personality. Focus on the clean and crisp look of the white t-shirt that enhances his vibrant yellow fur, and the touch of sophistication and balance brought by the gray pants.",
      },
      {
        titles: { title: 'Hobbies and Interests', subtitle: 'Drawing and Programming' },
        description:
          "Discover Jimmy Fox's diverse range of hobbies and interests as he passionately engages in drawing and programming. With a love for art, Jimmy immerses himself in sketching and creating intricate illustrations, while his aptitude for programming allows him to navigate the digital realm with skill and creativity. Whether expressing his imagination on paper or solving complex coding puzzles, Jimmy's versatile pursuits showcase his unwavering dedication and passion for both artistic expression and technical innovation.",
      },
    ],
  },

  skill: {
    title: 'Frameworks and Tools',
    categories: [
      {
        title: 'Build a functional web interface',
        skills: ['Vue.js', 'HTML', 'JavaScript', 'TypeScript', 'CSS', 'SCSS', 'Svelte', 'Noje.js'],
      },
      { title: 'UI Tool', skills: ['Figma'] },
      {
        title: 'Serve website and API',
        skills: ['RESTful API', 'JSON', 'Express.js', 'MongoDB'],
      },
      {
        title: 'IDE',
        skills: ['Visual Studio Code', 'Android Studio', 'JetBrains IntelliJ'],
      },
      { title: 'Mobile App', skills: ['Android', 'Java', 'Flutter', 'Dart'] },
    ],
  },
  personalities: ['Quiet'],
  hobbies: ['Draw', 'Code'],
};
