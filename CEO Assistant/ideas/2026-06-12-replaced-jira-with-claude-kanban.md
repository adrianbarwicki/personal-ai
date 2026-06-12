---
type: ceo-idea
created: 2026-06-12
source: slack
title: "Blog post: how we replaced Jira with Claude and a text-file kanban"
---

## Original thought

For another blog post: how we got rid of Jira for our engineering team. Right now we have a text file where we manage everything — all the engineering tasks — in a folder-by-folder kanban structure. It's all managed by Claude via a prompt. We can ask "what's up for today" in our daily. We can ask "who is working on what". We can ask "what are the longer tasks". Whenever there are problems we write them in a daily and Claude can act as a scrum master — it can also direct itself to the implementation for these tasks. So basically we got rid of a scrum master role. Everyone has the skill of a scrum master agent that does everything. We have analytics from Claude. It costs less than Jira because you just pay per use and tokens are effectively very cheap for us. Implementations can be done directly. It's all centralised in the brain of the company — the kanban is just a sub-folder of a much bigger documentation about processes, marketing, branding, strategy. So Claude has all the context, vocabulary, terms, and business processes — it's really smart about this. We also analyse all customer feedback through the same system, it lands there automatically. And everyone can create stuff with Claude — it's no longer "this ticket doesn't work" or "I won't fill the template because I don't know how". We save a lot of money with Claude right now.

## Context

Adrian has built a Claude-native engineering workflow that replaces Jira (and implicitly the scrum master role) with a plain-text, folder-based kanban living inside the company's main documentation repo. Claude acts as the project intelligence layer on top — running stand-ups, surfacing blockers, routing tasks to implementation, and keeping analytics. The key insight is that the kanban is not a standalone tool but a sub-folder of a richer company brain (processes, brand, strategy, vocabulary), which gives Claude the context to be genuinely useful rather than just a dumb ticket tracker.

The cost argument is real: Jira seats + a scrum-master equivalent in time or salary vs. Claude API pay-per-use at today's token prices is a clear win, especially at RENTUJEMY's team size.

## Why this matters

If articulated well, this blog post can position RENTUJEMY (and Adrian personally) as a practitioner-led voice on AI-native team operations — a hot topic in 2026. It's also a genuine product story for Enhanced Rentals: the same "company brain" architecture is the foundation of the platform. Publishing this could drive inbound from proptech operators and indie SaaS founders who are over-paying for PM tooling.

Six to twelve months out, this narrative could support a talk submission (WebSummit, SaaStr, local tech conf), a LinkedIn article series, or even a lightweight playbook product.

## Next steps to validate

- [ ] Write a rough outline: (1) the problem with Jira at small-team scale, (2) the architecture of the text-file kanban + Claude, (3) concrete workflows (daily stand-up query, scrum-master prompt, auto-implementation routing), (4) cost comparison, (5) what we'd do differently
- [ ] Pull one or two real example prompts / Claude exchanges to use as screenshots or code blocks in the post — readers need proof, not just claims
- [ ] Decide on publishing venue: RENTUJEMY blog, Adrian's personal LinkedIn, dev.to, or all three with a canonical URL

## Related

- `er-docs/engineering/n8n-workflows/ceo-assistant.md` — same "company brain" architecture described here
- Existing kanban at `er-docs/engineering/kanban/` — the actual system the post would describe
