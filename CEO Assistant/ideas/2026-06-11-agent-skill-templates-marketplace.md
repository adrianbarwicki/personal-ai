---
type: ceo-idea
created: 2026-06-11
source: slack
title: "Agent and skill templates marketplace with shared AI vocabulary"
---

## Original thought

Introduce a couple of agents and skills into our assistant instructions so there is a crossover — people that learn AI can also use our system with the same words and terms, and then explore the idea of a template for skills and agents, so basically it is like a marketplace. And then these skills and agents, right now they have to do comments about what should be filled out — we can have an initialization of these templates so the gaps are filled when an agent is defined.

## Context

The idea has two interlocking parts:

**1. Shared vocabulary between AI education and our platform.** When someone learns how AI agents and skills work (through a course, onboarding, documentation), the terms they encounter should map directly onto the concepts inside our assistant/system. Right now there is likely a gap: generic AI literacy uses words like "agent", "skill", "tool", "instruction" — if our platform uses its own labels, newcomers hit a translation layer before they can do anything useful. Aligning the language removes that friction and makes our system feel like a natural continuation of their learning.

**2. Template marketplace with auto-initialization.** Currently, when someone defines a new agent or skill, the template has placeholder comments ("fill this in") that the user must read and manually complete. The proposal is to replace that static comment system with an initialization flow: when you instantiate a template, the system prompts you for the required values and fills the gaps programmatically. At scale this becomes a marketplace — contributors publish agent/skill templates, users pick one, answer a short wizard, and get a fully configured agent without ever reading raw YAML/JSON.

## Why this matters

If this works, we lower the barrier to creating and sharing agents inside our platform to near-zero for non-technical users. The vocabulary alignment means anyone coming from a general AI course arrives already fluent. The marketplace model creates a network effect: more templates → more users → more contributors. Six to twelve months out, this could be the primary growth loop for the assistant product — not sales, but template discovery and remix.

## Next steps to validate

- [ ] Audit current assistant instructions: list every term we use for agents, skills, tools, and instructions — then map them against the most common vocabulary in popular AI literacy resources (e.g. OpenAI docs, LangChain, n8n)
- [ ] Sketch the initialization flow: what are the minimum required fields for an agent template? What does the "fill the gaps" wizard look like — a form, a chat, a YAML prompt?
- [ ] Research whether any adjacent tools (n8n template library, GPT Store, Poe bot library) have already solved the marketplace + initialization UX — identify what we would copy vs. differentiate
- [ ] Define what "a template" is technically: is it a markdown file with frontmatter? A JSON schema? Decide the format before building anything

## Related

- Check `er-docs/engineering/` for any existing agent/skill definition format or schema
- May connect to the CEO Assistant agent system already in production (`er-docs/engineering/n8n-workflows/ceo-assistant.md`)
