import { exec } from "child_process";
import { promisify } from "util";

export async function getCommitHash() {
  try {
    var commitHash = await promisify(exec)("git rev-parse --short HEAD");
  } catch (error) {
    console.error("Failed to get commit hash:", error);
    process.exit(1);
  }
  return commitHash.stdout.toString().trim();
}
