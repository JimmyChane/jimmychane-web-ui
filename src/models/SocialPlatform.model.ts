import TwitterLogo from '@/assets/social/twitter-color.svg';
import TelegramLogo from '@/assets/social/telegram-color.svg';
import GithubLogo from '@/assets/social/github-color.svg';
import BlueskyLogo from '@/assets/social/bluesky-color-w32.png';

export enum SocialPlatformId {
  TWITTER = 'twitter',
  TELEGRAM = 'telegram',
  GITHUB = 'github',
  BLUESKY = 'bluesky',
}

export interface SocialPlatformModel {
  id: SocialPlatformId;
  title: string;
  icon: string;
  useInvertColorOnDark: boolean;
}

export const TWITTER: SocialPlatformModel = {
  id: SocialPlatformId.TWITTER,
  title: 'Twitter',
  icon: TwitterLogo,
  useInvertColorOnDark: false,
};
export const TELEGRAM: SocialPlatformModel = {
  id: SocialPlatformId.TELEGRAM,
  title: 'Telegram',
  icon: TelegramLogo,
  useInvertColorOnDark: false,
};
export const GITHUB: SocialPlatformModel = {
  id: SocialPlatformId.TWITTER,
  title: 'Github',
  icon: GithubLogo,
  useInvertColorOnDark: true,
};
export const BLUESKY: SocialPlatformModel = {
  id: SocialPlatformId.BLUESKY,
  title: 'Bluesky',
  icon: BlueskyLogo,
  useInvertColorOnDark: false,
};
