---
type: research-task
created: 2026-06-08
source: slack
status: open
---

## Question

When a guest reports a missing, broken, or absent essential furnishing (e.g. no bed, no bedding, sofa-bed not assembled, unprepared room, damage discovered on arrival) during an active bot conversation — what is the right coordination flow, and how should the bot handle it?

## Context

New entry needed for the in-property complaints category in bot conversations. The trigger scenario: guest is already at the property and reports a furnishing or preparation issue that requires a physical response today or tomorrow.

Three candidate responses exist, and it is unclear which is best (or whether they should be combined):

1. Bot creates a maintenance/service task with scheduling (today / tomorrow) automatically.
2. Bot transfers the guest to a human coordinator immediately.
3. Bot does both — creates the task AND transfers to a human — simultaneously.

The research should determine which approach best balances guest experience, coordinator workload, and resolution time.

## Why it matters

Getting this wrong has direct guest-satisfaction and review-score consequences. A guest who reports no bedding at 10 pm and gets no real-time human acknowledgement is likely to leave a negative review. Conversely, always escalating to a human for every furnishing complaint may overload coordinators for issues that could be auto-scheduled.

The outcome of this research feeds directly into a new bot conversation script entry and possibly a backlog card for task-creation automation.

## How to research

- [ ] Review existing bot conversation logs for in-property complaint threads — how are coordinators currently resolving these manually, and how fast?
- [ ] Map the severity spectrum: which furnishing issues can wait until tomorrow (auto-schedule sufficient) vs. which require same-hour human intervention (transfer needed)?
- [ ] Check whether the current task-scheduling system supports "today / tomorrow" urgency flags and coordinator assignment from a bot-triggered creation.
- [ ] Talk to 1-2 coordinators: do they prefer to be looped in immediately, or only after a task is already created?
- [ ] Look at how comparable PMS/guest-messaging platforms (e.g. Enso Connect, Duve, Breezeway) handle in-stay maintenance complaint routing.
- [ ] Validate findings against a short sample of past complaint-to-resolution timelines in the internal data.

## Findings

_To be filled as the research progresses._

## Related

- In-property complaints bot conversation script (to be created once research is complete)
- Potential engineering card: bot-triggered task creation with urgency scheduling
