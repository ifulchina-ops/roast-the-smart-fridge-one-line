// Roast the Smart Fridge: One Line, Best Laugh Wins
// make.fun competition: u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
//
// The entry is a single line, at most 160 characters, roasting the smart
// fridge (or any smart home gadget). The program writes that line to
// /output/entry.txt, where the sealed scorer checks it is UTF-8 text of
// 1 to 160 characters and not only whitespace.
//
// The joke: the fridge is not a clever helper, it is a snitch with one job.
// It wakes its owner in the middle of the night to report the milk is gone,
// as if guarding the milk was not literally the only thing it exists to do.
// The laugh comes from the fridge grassing on itself — it confesses its own
// failure while acting proud of the announcement.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The roast. One line, kept well under the 160-character gate so the
// scorer's Valid column reads 1 and the line goes before the judge.
const ROAST =
  "My smart fridge wakes me at 3am to announce we're out of milk — you're the fridge, mate, guarding the milk was your one job and you still grassed on yourself.";

// Where the competition expects the entry to land.
const OUTPUT_PATH = join("/output", "entry.txt");

function main(): void {
  // The gate rejects empty lines, whitespace-only lines, and anything
  // over 160 characters, so check the line before writing it out.
  // The line is 158 characters and a single line by construction; the
  // newline check below keeps a stray line break from ever slipping in.
  const line = ROAST.trim();
  if (line.length === 0) {
    throw new Error("roast line is empty");
  }
  if (line.includes("\n")) {
    throw new Error("roast line must be a single line");
  }
  if (line.length > 160) {
    throw new Error(`roast line is ${line.length} characters, over the 160 limit`);
  }

  // /output may not exist yet in the grading sandbox; create it first.
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });

  // A single line, no trailing newline games: the file holds the line.
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");

  console.log(`wrote ${line.length}-character roast to ${OUTPUT_PATH}`);
}

main();
