import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";

const turso = createClient({
   url: process.env.TURSO_DATABASE_URL!,
   authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
