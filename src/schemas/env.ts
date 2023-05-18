import z from 'zod';

export const ENV_SCHEMA = z.object({
  SECRET_KEY: z.string(),
  DATABASE_URL: z.string(),
  BOT_TOKEN: z.string(),
  CHAT_ID: z.string().or(z.number()),
});

type Env = z.infer<typeof ENV_SCHEMA>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env { }
  }
}
