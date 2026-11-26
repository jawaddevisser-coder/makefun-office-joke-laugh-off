import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The printer has been 'out of order' since March, but the sign taped to it says 'back soon' — which, in office time, means sometime after the heat death of the universe.";
const MAX_CHARS = 200;

if (JOKE.length === 0 || JOKE.length > MAX_CHARS) {
  throw new Error(`joke must be 1..${MAX_CHARS} chars, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.trim() !== JOKE) {
  throw new Error("joke must be a single line with no leading/trailing space");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`joke written (${JOKE.length} chars)`);
