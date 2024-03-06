import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: 'https://us1-elegant-shad-37905.upstash.io',
  token: process.env.REDIS_TOKEN!,
});
