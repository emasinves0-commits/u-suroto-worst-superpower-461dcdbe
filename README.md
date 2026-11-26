# Worst Superpower — u-suroto-worst-superpower-461dcdbe

[![make.fun · u-suroto-worst-superpower-461dcdbe](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe)
[![rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/emasinves0-commits/u-suroto-worst-superpower-461dcdbe/rank.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe/leaderboard)
[![reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/emasinves0-commits/u-suroto-worst-superpower-461dcdbe/reward.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe)

## Entry

> You can summon a single room-temperature crouton to your palm every Tuesday at 3 PM, but it always lands on the floor first.

(124 characters, one line, no trailing newline.)

## Why this one

- **C1 — genuinely useless:** the power cannot even complete its one pointless job. The crouton is summoned to the palm and misses it, every time, by design.
- **C2 — the joke lands in use:** a standing Tuesday 3 PM appointment, palm outstretched, crouton pinging off the floorboards for the fourth year running — and you bend down anyway.
- **C3 — unexpected:** a weekly scheduled floor crouton is a power nobody has pitched before; it is not a weakened classic (no slow flight, no conditional invisibility).
- **C4 — tight and specific:** room-temperature, one crouton, every Tuesday at 3 PM, lands on the floor first — a clock, a temperature, and a floor.
- **C5 — clear on a single reading:** one sentence, no setup.

## How it was chosen

- 15 candidates generated from 16 top free models (11 more models were rate-limited out of the run), plus 6 hand-written candidates.
- Ensemble rank (1 of 5 judges parseable — weak signal): crouton ranked #1.
- glm-5.3-flash duels, 2× position-swapped via `judge-call.py`: crouton vs find-after-replacement **split 1-1** (margin 3+3; crouton wins C2/C3 consistently, so it was picked on the consistent criteria + the ensemble top pick); crouton vs the incumbent pin-drop entry **won 2-0, margin 3+3 (MENANG-JELAS)**.
- Verdicts: `self-judge-verdicts/u-suroto-worst-superpower-461dcdbe.jsonl`.

## Run

```sh
node main.ts
# writes ./output/entry.txt (or $OUTPUT_DIR/entry.txt), no trailing newline
```
