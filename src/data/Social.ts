import type { SocialPlatform } from '@/data-stores/social-platform.store';

export interface Social {
  socialPlatform: SocialPlatform;
  href: string;
}
