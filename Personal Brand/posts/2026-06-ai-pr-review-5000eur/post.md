# LinkedIn Post — How I accidentally spent €5,000 on AI PR reviews

**Pillar:** AI economics / Operator lessons
**Audience:** Founders, CTOs, engineering managers using AI tooling
**Goal:** Engagement via self-deprecation + a copyable lesson; reinforces "AI-native operator" credibility *without* the usual smugness
**Format:** Text post — confession + numbers + takeaway
**Drafted:** 2026-06-01
**Status:** Draft — needs final number check before posting

---

## Final copy (paste-ready)

```
I just accidentally spent €5,000 on AI doing
my PR reviews.

The setup looked sensible:

→ Every frontend push → Claude reviews the diff
→ Every backend push → Claude reviews the diff
→ Comments posted automatically on the PR

Cost per review:
→ €30 per frontend push
→ €18 per backend push

In isolation that's fine. €30 is cheap for a
senior-engineer review. Worth it.

Compound math is what kills you.

I push 8–12 times a day across two repos. AI
agents push more. Multiply by team. Multiply
by 20 working days. Now run that for two
months while you're busy shipping.

€5,000.

The kicker — most of those reviews were on
intermediate commits. Refactors. Format
passes. Renames. I was paying senior-engineer
prices to review a tab-to-space change.

I cancelled it this week.

What I'm doing instead:

→ AI review runs once, on merge to main, not
  on every push
→ Manual trigger ("/review") for early
  feedback when I actually want it
→ Hard monthly cap on AI spend per repo,
  alert at 50%

AI tooling is the cheapest senior engineer
you'll ever have. Until you wire it up to
fire every 4 minutes — then it's the most
expensive intern you've ever met.

The lesson isn't "don't use AI review".
It's: same rigor you apply to AWS, apply
to AI bills. Triggers, caps, alerts.
Otherwise compound math finds you.

Which AI tool burned through your budget
first?

#AI #Engineering #StartupLessons #DevTools #AIEconomics
```

---

## Alternate hooks

**Hook B — drier, leads with the lesson:**
> If you're running AI code review on every push, do the math today, not at the end of the month.

**Hook C — funnier, self-roast harder:**
> I'm the guy who tells founders to budget AI properly. I just accidentally spent €5,000 on AI reviewing my own pull requests.

The current opener (Hook A) is the strongest — confession hooks beat lecture hooks every time.

---

## Why this works

1. **Hook = self-deprecation + number.** "I accidentally spent €5,000" is irresistible — readers want to know how.
2. **Cheap setup math.** Per-review numbers feel fine; that's the trap, and naming it earns trust with anyone who's been there.
3. **The "compound math" pivot** is the takeaway line. Quotable on its own.
4. **The intermediate-commits detail** ("tab-to-space change") is the concrete image people remember and re-share.
5. **The fix is copyable** — three bullets, no preamble. Practical posts that hand readers a checklist outperform philosophical ones.
6. **"Cheapest senior engineer / most expensive intern"** is the screenshot line. Pre-tune for that.
7. **Closing question pulls comments.** "Which AI tool burned through your budget first?" — everyone has a story.

---

## Defending the numbers (prep for comments)

**"€30 / €18 per push — really?"**
Yes, on Claude with full-repo context and a non-trivial diff. Cost scales with diff size + context window. Smaller diffs are cheaper but I wasn't filtering. Don't dodge this — the post's credibility rests on it. Have the actual invoice screenshot ready if someone gets aggressive.

**"€5,000 is a lot, are you exaggerating?"**
Honest answer: "Round-number version of two months of spend across two repos with multiple agents pushing." Don't pretend it's exactly €5,000 down to the cent. The story is the structural lesson, not the precision.

**"Which provider?"**
Name Claude if asked directly — being specific increases credibility. Don't lead with it in the post itself; the post is about the pattern, not vendor-bashing.

**"You should have caught this sooner."**
Yes. That's literally the point. Don't get defensive.

---

## How this pairs with adjacent posts

| Post | Angle |
|------|-------|
| [`2026-05-100eur-developer-economics`](../2026-05-100eur-developer-economics/post.md) | "AI replaces expensive devs" — this post is the *uncomfortable other half*: AI also creates new ways to spend money badly. |
| [`2026-05-ai-features-bullshit`](../2026-05-ai-features-bullshit/post.md) | Skeptical AI takes — this fits the same skeptical-from-experience tone. |
| [`2026-05-coding-in-2026`](../2026-05-coding-in-2026/post.md) | Builder side of AI workflow — that post is "how to code with AI"; this post is "how to *not* set fire to your budget with AI". |

**Spacing:** post at least 10 days apart from `100eur-developer-economics`. Posting both in the same week sounds like a campaign. Spaced out, they sound like an honest operator processing both sides.

---

## Posting day

- **Target window:** Tue–Thu, 8:30–10:00 CET. The audience is operators / CTOs reading LinkedIn over morning coffee.
- **Avoid Monday** (weekend backlog).
- **Avoid Friday afternoon** (everyone's checked out).
- **Block 60 minutes after publish for replies.**
- **First defensive reply pre-drafted:** when someone says "well you should've capped it" — agree, don't argue. *"100%. That's the actual lesson — I'm posting the bill so other people don't have to."* Agreement-replies on a confession post compound engagement faster than debate-replies.
- **Don't @-tag** the AI vendor. Vendor turns the comments defensive instead of substantive.

---

## Post-mortem (fill in 7d after publish)

| Metric | 24h | 7d |
|--------|----:|---:|
| Impressions | | |
| Reactions | | |
| Comments | | |
| Reposts | | |
| Profile views | | |
| Connection requests | | |

Notes:
- Which line got quoted most? Predicted: *"cheapest senior engineer / most expensive intern"*.
- Did the closing question generate substantive stories or just sympathy comments?
- Anyone share their own AI-bill horror story? Those become a follow-up post.
- Defensive replies from AI tooling vendors? Note who — useful for future positioning.

---

## Open before publishing

- [ ] Confirm the €5,000 number against actual invoices for the period. Round down if it's actually €4,200 — credibility loss > impact loss.
- [ ] Confirm per-push numbers (€30 / €18). Pull a recent invoice line item.
- [ ] Decide whether to name Claude in the body or only in replies. Recommendation: only in replies, keep the post about the pattern.
