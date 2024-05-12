import TwitterLogo from '@/assets/social/twitter-color.svg';
import TelegramLogo from '@/assets/social/telegram-color.svg';
import GithubLogo from '@/assets/social/github-color.svg';
import BlueskyLogo from '@/assets/social/bluesky-color-w32.png';

export interface SocialPlatform {
  title: string;
  icon: string;
  useInvertColorOnDark: boolean;
}

export const Twitter: SocialPlatform = {
  title: 'Twitter',
  icon: TwitterLogo,
  useInvertColorOnDark: false,
};
export const Telegram: SocialPlatform = {
  title: 'Telegram',
  icon: TelegramLogo,
  useInvertColorOnDark: false,
};
export const Github: SocialPlatform = {
  title: 'Github',
  icon: GithubLogo,
  useInvertColorOnDark: true,
};
export const Bluesky: SocialPlatform = {
  title: 'Bluesky',
  icon: BlueskyLogo,
  useInvertColorOnDark: false,
};
