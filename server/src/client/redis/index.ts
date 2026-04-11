import { Redis } from "ioredis";

export const redisclient = new Redis(
  "rediss://default:import.meta.env.VITE_INDEX_HIGH_ENTROPY_VALUE@pure-gecko-29773.upstash.io:6379",
  {
    enableReadyCheck: false,
    maxRetriesPerRequest: null,
  }
);

