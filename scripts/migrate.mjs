import { execSync } from "node:child_process";

if (process.env.DATABASE_URL) {
  console.log("Running database migrations...");
  try {
    execSync("prisma migrate deploy --schema=./prisma/schema.prisma", {
      stdio: "inherit",
    });
  } catch (err) {
    console.error("Database migration failed:", err);
    process.exit(1);
  }
} else {
  console.log(
    "⚠️ DATABASE_URL is not set. Skipping prisma migrate deploy during build."
  );
}
