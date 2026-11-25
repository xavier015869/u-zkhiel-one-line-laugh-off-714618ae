import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My grandfather left me his watch, which is how I learned grief has a snooze button.";

// The gate only accepts 1–200 non-blank UTF-8 characters, so refuse to
// write anything that would fail it instead of submitting silently.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line is ${line.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
