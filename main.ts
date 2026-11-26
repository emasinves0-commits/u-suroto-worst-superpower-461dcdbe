// Worst Superpower — u-suroto-worst-superpower-461dcdbe
// Entry: one genuinely useless superpower, stated in a single line.
// The power defeats itself: a crouton summoned to your palm that never
// reaches it, once a week, at a fixed appointment nobody asked for.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const ENTRY =
  "You can summon a single room-temperature crouton to your palm every Tuesday at 3 PM, but it always lands on the floor first.";

const MAX_CHARS = 140;

function validateEntry(entry: string): void {
  const chars = [...entry];
  if (chars.length === 0 || entry.trim().length === 0) {
    throw new Error("entry must not be empty or whitespace-only");
  }
  if (chars.length > MAX_CHARS) {
    throw new Error(
      `entry is ${chars.length} characters, over the ${MAX_CHARS}-character limit`,
    );
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "./output";

validateEntry(ENTRY);
mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
// Round-trip check: what was written must be byte-identical to ENTRY,
// with no trailing newline added by the write.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("round-trip mismatch: entry.txt differs from ENTRY");
}
console.log(
  `wrote ${outPath} (${[...ENTRY].length} chars, ${Buffer.byteLength(ENTRY, "utf8")} bytes, no trailing newline)`,
);
