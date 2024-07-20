import type { SocialPlatform } from '@/stores/social-platform/social-platform.store';

export interface Social {
  socialPlatform: SocialPlatform;
  href: string;
}
