import BlueskyLogo from '@/assets/social/bluesky-color-w32.png';
import GithubLogo from '@/assets/social/github-color.svg';
import TelegramLogo from '@/assets/social/telegram-color.svg';
import TwitterLogo from '@/assets/social/twitter-color.svg';
import { SocialPlatformId, type SocialPlatformModel } from '@/models/SocialPlatform.model';

export const SOCIAL_PLATFORM_TWITTER: SocialPlatformModel = {
  id: SocialPlatformId.TWITTER,
  title: 'Twitter',
  icon: TwitterLogo,
  useInvertColorOnDark: false,
};
export const SOCIAL_PLATFORM_TELEGRAM: SocialPlatformModel = {
  id: SocialPlatformId.TELEGRAM,
  title: 'Telegram',
  icon: TelegramLogo,
  useInvertColorOnDark: false,
};
export const SOCIAL_PLATFORM_GITHUB: SocialPlatformModel = {
  id: SocialPlatformId.TWITTER,
  title: 'Github',
  icon: GithubLogo,
  useInvertColorOnDark: true,
};
export const SOCIAL_PLATFORM_BLUESKY: SocialPlatformModel = {
  id: SocialPlatformId.BLUESKY,
  title: 'Bluesky',
  icon: BlueskyLogo,
  useInvertColorOnDark: false,
};
