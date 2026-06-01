# Personal AI Workspace — Adrian Barwicki

This is Adrian's personal workspace for business, accounting, and legal questions across the multi-entity group.

## External docs

Product and engineering docs live in `../er-monorepo/er-docs/` — a separate shared repo inside the monorepo. Always read from there, not from this workspace.

Key paths:
- `../er-monorepo/er-docs/product/` — product specs (all tenants, modules, onboarding, trial, settings, help center)
- `../er-monorepo/er-docs/engineering/` — backend/frontend conventions, background jobs, bot automation
- `../er-monorepo/er-docs/accounting/` — JPK/VAT procedures

## Documents (personal — not in er-docs)

| File | Content |
|------|---------|
| `company_structure.md` | Full entity structure — ownership, roles, money flows, IP, loans |
| `JPK7M_Guide_RENTUJEMY.md` | Polish VAT/JPK7M submission guide for RENTUJEMY Sp. z o.o. |
| `JPK7M_Guide_VESTER.md` | Polish VAT/JPK7M submission guide for Vester Fundacja Rodzinna |
| `transfer_pricing_policy.docx` | Internal transfer pricing policy document |
| `Marketing Manager/product/pricing.md` | Marketing-specific pricing doc (differs from er-docs version) |
| `Marketing Manager/Enhanced_Rentals_Logo.svg` | Brand logo |
| `Marketing Manager/Enhanced_Rentals_Brand_Guidelines.pptx` | Brand guidelines (colours, typography, tone) |

## Agents

Four specialized sub-agents are available in `.claude/agents/`:

- **marketing-manager** — Enhanced Rentals product marketing: copy, campaigns, positioning, Hostaway marketplace, pricing angles
- **company-advisor** — entity structure, ownership, roles, intra-group transactions, IP licensing
- **jpk-vat-advisor** — Polish VAT/JPK7M submissions for RENTUJEMY and VESTER
- **transfer-pricing** — TP documentation, arm's length pricing, intra-group loan compliance

## Context

- Multi-jurisdiction group: Germany (Walldorf), Poland (Warsaw), UAE (Dubai)
- Operating entities: RENTUJEMY Sp. z o.o. (~300 properties), Enhanced Rentals GmbH (SaaS)
- IP owner: Alphateam Hackers GmbH; licensee: Enhanced Rentals GmbH
- Adrian is UAE tax resident
