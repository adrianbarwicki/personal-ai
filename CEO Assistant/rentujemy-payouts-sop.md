# Rentujemy — Owner Payouts SOP

> **Cycle:** Beginning of each month
> **Deadline:** All payouts must be executed by the **3rd of the month**

---

## Overview

The monthly payout process covers: validating reservations, approving payouts (auto + manual), executing bank transfers, and processing owner invoices in ZOHO. Each step must be completed in order.

---

## Step 1 — Payout Validation

Before anything else, verify that all reservations are in a clean state.

1. Navigate to **[Payout Validation](https://admin.rentujemy.pl/payouts/validation)**
2. Review all flagged items and resolve any issues before proceeding
3. Do not move to the next step until the validation screen is clear

Common issues to look for: incorrect reservation dates, missing data, or mismatched amounts.

### Special case: Negative owner payout

A payout can become negative when a reservation was sold at a low price but still incurs a significant cleaning fee. Because portal fees (OTA commissions) are calculated as a percentage of the **total booking amount** (including the cleaning fee), the combined deductions can exceed the accommodation revenue — resulting in a negative owner payout.

Such reservations will **fail validation checks** and any payout statement containing them will also fail.

**Fix:** Open the reservation's financials and set **Payout PM Commission to 0**.

> This is an accepted resolution — the PM commission is waived to bring the payout to zero rather than passing a negative balance to the owner.

---

## Step 2 — Plan & Auto-Approval

1. Go to **Payouts → Plan** in the admin panel
2. Click **Synchronise** to load the current month's payouts
3. The system will automatically approve payouts that meet all validation criteria — typically around **~80% of all payouts**
4. Once auto-approval is complete, click **Publish** to confirm the approved payouts

> ⚠️ Do not forget to **Publish** after approval — payouts will not be executable until published.

---

## Step 3 — Manual Review (~20%)

The remaining payouts require manual review. Common reasons include:

- **Wrong reservation data** — reservation details don't match expectations; correct the underlying data before approving
- **Multi-month reservations** — reservations spanning multiple months may warrant an advance payout; review case by case
- **Amount anomalies** — unusually high or low amounts that need verification

### Actions available per payout

| Action | When to use |
|---|---|
| **Edit reservation data** | Data is incorrect — fix it, then approve |
| **Approve & publish** | Payout is valid after review |
| **Reject / skip** | Payout should be excluded from this cycle |

After completing manual review, ensure all reviewed payouts are **published**.

---

## Step 4 — Execution

Once all payouts are approved and published, proceed to execution.

1. Navigate to **[Payout Execution](https://admin.rentujemy.pl/payouts/execution)**
2. For **private individuals** (and SEPA transfers): click **Download ELIXIR File** and upload the file to the bank
   - The wire title and bank account number for each payout are always visible in the system
   - The ELIXIR format covers both domestic and SEPA transfers in a combined file
3. For **manual wires** (edge cases): use the transfer details shown in the system to initiate the transfer manually
4. After the bank transfer is confirmed, return to the system and **mark the relevant payouts as Paid**

---

## Step 5 — Invoice Handling

Owners may upload invoices directly through the owner portal. These must be reviewed and processed.

### Reviewing invoices

- Go to the **Invoices** section and check newly uploaded invoices
- **Accept** the invoice if it matches the payout details
- **Refuse** the invoice if there are issues — common refusal reasons:

| Reason | Description |
|---|---|
| Wrong amount | Invoice total doesn't match the approved payout |
| Wrong dates / period | Invoice covers an incorrect billing period |
| Missing data | Incomplete invoice (e.g. missing VAT number, address, or company details) |

> When refusing, communicate clearly to the owner what needs to be corrected and resubmitted.

### Publishing to ZOHO

Once an invoice is accepted:

1. Use the system's **Publish to ZOHO** function
2. A **draft Bill** will be created automatically in ZOHO
3. Review the draft Bill in ZOHO before finalising

> ⚠️ **Do not create Bills manually in ZOHO.** Always use the system's publish function to avoid duplicate Bills.

---

## Quick Reference Checklist

```
[ ] 1. Payout Validation — all items clear at /payouts/validation
[ ] 2. Payouts → Plan → Synchronise → auto-approve → Publish
[ ] 3. Manual review of remaining payouts (edit / approve / reject) → Publish
[ ] 4. Execution — download ELIXIR file, upload to bank (or manual wire)
[ ] 5. Mark payouts as Paid in the system
[ ] 6. Review owner invoices — accept or refuse
[ ] 7. Publish accepted invoices to ZOHO (draft Bills created automatically)
```

---

*Last updated: April 2026*
