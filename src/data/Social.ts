import TwitterLogo from '@/assets/social/twitter-color.svg';
import TelegramLogo from '@/assets/social/telegram-color.svg';
import GithubLogo from '@/assets/social/github-color.svg';
import BlueskyLogo from '@/assets/social/bluesky-color-w32.png';

export interface Social {
  href: string;
  title: string;
  icon: string;
}

export const Twitter: Social = {
  href: 'https://twitter.com/jimmykajun',
  title: 'Twitter',
  icon: TwitterLogo,
};
export const Telegram: Social = {
  href: 'https://t.me/Jimmy612',
  title: 'Telegram',
  icon: TelegramLogo,
};
export const Github: Social = {
  href: 'https://github.com/JimmyChane',
  title: 'Github',
  icon: GithubLogo,
};
export const Bluesky: Social = {
  href: 'https://bsky.app/profile/jimmyfox.bsky.social',
  title: 'Bluesky',
  icon: BlueskyLogo,
};
