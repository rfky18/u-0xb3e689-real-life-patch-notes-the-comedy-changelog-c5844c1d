import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, a software patch note for a bug in real life.
// The perfect comeback always arrives too late — in the shower.
const LINE =
  "v1.4.2: fixed a bug where the perfect comeback arrived 20 minutes late, in the shower.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
