/* eslint-disable node/no-process-env */
import { tryParseEnv } from "@nuxt/env";
import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
});

export type EnvSchemaType = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

export default EnvSchema.parse(process.env);
