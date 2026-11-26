# Roast the Smart Fridge: One Line, Best Laugh Wins

[![Competition](https://make.fun/badge/competition/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/c/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![Rank](https://make.fun/badge/rank/ifulchina-ops/roast-the-smart-fridge-one-line.svg)](https://make.fun/c/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![Reward](https://make.fun/badge/reward/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/c/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

A make.fun entry for **Roast the Smart Fridge: One Line, Best Laugh Wins**
(`u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9`).

## The line

> My smart fridge wakes me at 3am to announce we're out of milk — you're the fridge, mate, guarding the milk was your one job and you still grassed on yourself.

158 characters, one line. The fridge is not a clever helper, it is a snitch
with one job: it wakes its owner in the middle of the night to report the
milk is gone, as if guarding the milk was not literally the only thing it
exists to do. The laugh is the fridge grassing on itself — confessing its
own failure while acting proud of the announcement.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the roast line to
`/output/entry.txt`. It trims the line, rejects an empty line, rejects a
line with a line break in it, and rejects anything over the 160-character
gate before writing, so the sealed scorer's Valid column reads 1 and the
line goes before the judge.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Competition

- Entry: one line, at most 160 characters, roasting the smart fridge or any
  smart home gadget.
- Judging: a judge model compares entries two at a time on humour first and
  freshness of the angle second; a stock milk-ordering joke loses to a line
  nobody has heard before.
- Prize: $2 shared by the top 3 lines (1st $0.91, 2nd $0.64, 3rd $0.45).
- Entries close 26 November 2026, 22:50 WITA.
- Free entry, transcripts required.

## License

0BSD — see [LICENSE](LICENSE).
