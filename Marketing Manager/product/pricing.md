# Pricing

## Structure

Enhanced Rentals uses a **module-based pricing model**. Operators buy the AI base plan they need, then add operational modules on top. There are no bundles — each module is a separate line item.

---

## Modules

### AI Starter — €19 / month (flat)

- Up to 5 properties
- AI chat bots for guest messaging via Hostaway
- Automated replies based on reservation conditions
- Escalations to Slack, phone, MS Teams
- Unlimited team members

Entry point for small operators and individual hosts. No voice, no phone numbers. Designed to feel like a steal — the margin is thin but it seeds the pipeline for Growth and add-on upsells.

### AI Growth — €20 / property / month

- Unlimited properties
- Everything in Starter
- AI voice hotline for guest calls
- Phone numbers (PL, AE, US, DE via Twilio)
- Unlimited AI assistants

Primary revenue tier. Upgrade trigger from Starter is either hitting 6+ properties or needing voice. At 2+ properties on Growth the operator is already paying more than Starter — natural progression.

### Operations — €5 / property / month (add-on)

Requires AI Starter or Growth.

- Cleaning & maintenance task scheduling
- Photo-verified task checklists (template-based, required before completion)
- Auto-assignment to service workers per property
- Access code delivery scoped to assigned worker on task day
- Task ↔ reservation context (arriving/departing guest info)

Competes directly with Breezeway (~€8–15/prop/mo). Priced at €5 to be a clear replacement, not a premium. Acquisition channel: operators switching from Breezeway discover the AI comms product and upsell.

### Owner Portal — €10 / property / month (add-on)

Requires AI Starter or Growth.

- Owner-facing statements and reports
- Payout summaries per property
- Reservation visibility for owners
- Branded owner communication

Targets property managers who manage on behalf of property owners and need to report to them. Common profile in the STR market.

---

## Pricing per operator profile

| Operator | Modules | Monthly cost |
|---|---|---|
| Solo host, 3 properties | AI Starter | €19/mo |
| Solo host, 8 properties | AI Growth | €160/mo |
| Mid-size operator, 20 properties | AI Growth + Operations | €500/mo |
| Full-stack operator (e.g. RENTUJEMY), 30 properties | AI Growth + Operations + Owner Portal | €1,050/mo (€35/prop) |
| Cleaning company only, 15 properties | Operations | €75/mo |

---

## Key decisions

| Decision | Choice | Reason |
|---|---|---|
| Module vs tier | Modules (à la carte) | Different buyers for comms vs ops vs owner portal — bundling forces cross-departmental budget approval |
| Starter price | €19/mo flat | Below €20 psychological threshold; feels like a steal; low churn risk at that price |
| Growth price | €20/prop | Matches market expectation; at 2 properties already above Starter |
| Operations price | €5/prop | Competitive with Breezeway (€8–15); designed to displace, not premium-price |
| Owner Portal price | €10/prop | Closes the €35/prop target for full-stack operators like RENTUJEMY |
| Voice gating | Growth only | Voice = Twilio costs (phone numbers + minutes) + LiveKit; Starter has no variable cost so margin is predictable |
| Starter property cap | 5 | Covers real small operators; growth past 5 is a natural signal to upgrade |
| No bundle discount | Intentional | Bundle is a marketing frame if needed later, not a pricing mechanism now |

---

## Trial

14-day free trial, no credit card required. Trial unlocks full platform access (all modules). At conversion, operator chooses which modules to subscribe to.

See `trial-mode.md` for implementation details.

---

## Competitive context

| Competitor | Category | Price |
|---|---|---|
| Breezeway | Field ops / tasks | ~€8–15/prop/mo |
| Properly | Field ops / tasks | ~€8–12/prop/mo |
| Guesty | Full PMS | €50–100+/prop/mo |
| Hostaway | PMS | included (operator already pays) |

Enhanced Rentals is not a PMS — it layers on top of Hostaway. The ops module competes with Breezeway/Properly. The AI comms product has no direct competitor at this price point.
