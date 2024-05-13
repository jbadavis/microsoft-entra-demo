import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    NEXT_PUBLIC_CLIENT_GROUP_ID: z.string(),
    NEXT_PUBLIC_STAFF_GROUP_ID: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_CLIENT_GROUP_ID: process.env.NEXT_PUBLIC_CLIENT_GROUP_ID,
    NEXT_PUBLIC_STAFF_GROUP_ID: process.env.NEXT_PUBLIC_STAFF_GROUP_ID,
  },
});
