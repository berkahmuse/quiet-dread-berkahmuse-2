// Two Days of Quiet Dread — entry for @berkahmuse-2
// make.fun competition: u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018
//
// The program writes ONE code review comment — a single line of at most
// 140 characters that approves a pull request while carrying quiet
// existential dread — to /output/entry.txt.
//
// Deterministic by construction: the text is a constant, there is no
// randomness, no clock, no network and no environment read, so every run
// writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

// The text is 107 characters: one line, an approval ("LGTM", "Ship it")
// wrapped around flat cosmic dread ("the heat death of the universe
// remains on schedule") — understatement doing the joking, the way a
// tired engineer would actually paste it before clicking approve.
const ENTRY =
  "LGTM. The tests pass, the types are happy, and the heat death of the universe remains on schedule. Ship it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
