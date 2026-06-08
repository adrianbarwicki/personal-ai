---
type: execution-task
created: 2026-06-08
source: slack
status: pending
priority: high
owner: Adrian
---

## Task

Adjust Enhanced Rentals product pricing to the new tier structure and ensure Stripe subscriptions, public-facing copy, and custom-pricing overrides are all updated consistently.

## New pricing structure

**Enhanced Platform: €299/month** (netto + VAT)
- 15 properties included
- €10/property thereafter

**Add-on modules (from 1st property):**
| Module | Price |
|---|---|
| Operations | +€10/property |
| Payouts | +€10/property |
| Owner Portal | +€5/property |

## Why

The current pricing no longer reflects the product's value and module structure. This change aligns public positioning, billing infrastructure, and internal subscription records.

## Acceptance

- [ ] Public info (website / landing page / docs) updated with new pricing
- [ ] Stripe subscription tiers reconfigured to match the new base + per-property + add-on structure
- [ ] Custom pricing overrides are supported in the subscription model so existing exceptions (e.g. VESTER) do not break after the migration
- [ ] Existing active subscriptions verified — no unintended billing changes triggered

## Notes

- VESTER (and any other custom-priced accounts) must be explicitly handled before any Stripe tier migration goes live — validate their subscription records before switching.
- "netto plus VAT" is the price display convention; no changes to tax logic implied here.
- The per-property pricing for modules applies from the 1st property, not after the 15-property base inclusion.

## Sub-tasks

- [ ] Adjust public info (website, pricing page, docs/marketing copy)
- [ ] Adjust Stripe subscription tiers (base plan + per-property metered add-ons)
- [ ] Allow different/custom pricing for individual subscriptions (so VESTER and similar accounts are not broken)
