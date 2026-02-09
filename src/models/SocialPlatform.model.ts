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
