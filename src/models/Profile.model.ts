import type { SocialModel } from './Social.model';

export interface ProfileModel {
  name: string;
  labels: string[];
  socials: SocialModel[];
  description: string;

  fursona: {
    image: string;
    alt: string;
    sections: { titles: { title: string; subtitle: string }; description: string }[];
  };

  skill: { title: string; categories: { title: string; skills: string[] }[] };
  hobbies: string[];
  personalities: string[];
}
