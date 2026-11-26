// Worst Superpower — make.fun bounty u-suroto-worst-superpower-461dcdbe
// Writes the one-line entry to /output/entry.txt and validates the gate
// (UTF-8 text, 1 to 140 characters) before writing, so an invalid entry
// fails loudly here instead of silently on the server.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I can hear a pin drop anywhere on Earth — but only pins, and only when someone drops one.";

const MAX_CHARS = 140;

// The gate counts characters, not UTF-16 code units: an em dash is one
// character. Spread into code points so the count matches the gate.
function validateEntry(text: string): number {
  const charCount = [...text].length;
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(
      `entry is ${charCount} characters, outside the 1–${MAX_CHARS} gate`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return charCount;
}

const charCount = validateEntry(ENTRY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${charCount} characters to ${outDir}/entry.txt`);
