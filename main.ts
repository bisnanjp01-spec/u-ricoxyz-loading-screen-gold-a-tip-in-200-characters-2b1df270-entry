// Loading Screen Gold: A Tip in 200 Characters.
// Writes one original loading-screen tip to /output/entry.txt.
// Node 22, standard library only. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, 109 characters: a tip for the wait, aimed at the stressed
// developer and the AI coding agent at once. The agent is not stuck; it
// is rereading the prompt, deciding which part of it to pretend was meant.
// No trailing newline: the file holds exactly the tip, nothing else.
const TIP =
  "Tip: your agent isn't frozen \u2014 it's rereading your prompt and deciding which part of it to pretend you meant.";

if ([...TIP].length > 200 || TIP.trim().length === 0) {
  throw new Error("tip must be 1 to 200 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
