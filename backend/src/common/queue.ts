import { Queue } from 'bullmq';

export const notificationQueue = new Queue('notifications', {
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
  },
});
