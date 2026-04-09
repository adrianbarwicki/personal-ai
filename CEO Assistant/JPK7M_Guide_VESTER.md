# JPK7M Monthly Submission Guide — VESTER
**RENTUJEMY Internal Accounting — Tool: ER Platform · VAT Reporting Module**
**Applies to: VESTER tenant**
> ⚠️ The VAT Reporting / JPK7M module is a custom integration built by ABGRION specifically for RENTUJEMY group — it is not part of the standard ER (Enhanced Rentals) product. VESTER uses a separate tenant. For RENTUJEMY, see `JPK7M_Guide_RENTUJEMY.md`

---

## ⚡ Quick Reference Checklist (for experienced users)

Before you start, confirm all of these are done for the reporting period:

- [ ] All sales invoices issued and posted in **ZOHO Books** (VESTER)
- [ ] All purchase bills and expenses entered in **ZOHO Books** (VESTER)
- [ ] No bills/invoices sitting in draft or unapproved status
- [ ] Bank statement reconciled with ZOHO transactions for the period

Then in the tool:
- [ ] Open VAT Reporting → `VESTER` → JPK Files
- [ ] Click **New JPK File**, set period and type
- [ ] Click ***(Re)create Entries*** — wait for sync to complete
- [ ] Review **VAT Documents** tab — check entry count and spot-check amounts
- [ ] Click ***Generate XML***
- [ ] Download XML from **XML Path**
- [ ] Submit via **Klient JPK_WEB**
- [ ] Upload UPO confirmation to **UPO Path**
- [ ] Confirm status shows **sent** ✅

**Deadline: 25th of the month following the reporting period**

---

## 1. What is JPK7M?

JPK7M (Jednolity Plik Kontrolny dla potrzeb VAT) is the mandatory monthly VAT report submitted to the Polish Tax Authority (KAS). It combines:

- **Ewidencja VAT** — the full VAT register (every sales and purchase document with VAT)
- **Deklaracja VAT** — the VAT declaration summary (replaces the old VAT-7 form)

It must be submitted electronically by the **25th of the following month** — for example, January's JPK7M is due by 25 February.

---

## 2. Key Difference vs. RENTUJEMY

| | RENTUJEMY | VESTER |
|---|---|---|
| **Tenant** | `rentujemy-pl` | `vester` |
| **Source: Sales** | ZOHO Books + Infakt | ZOHO Books only |
| **Source: Purchases** | ZOHO Books | ZOHO Books only |
| **Source: OTA** | OTA Invoices module | Not applicable |
| **Platform** | ER — custom VAT module (ABGRION) | ER — custom VAT module (ABGRION) |
| **Submission** | Klient JPK_WEB | Klient JPK_WEB |

Because VESTER syncs **only from ZOHO Books**, the quality of the JPK7M output depends entirely on ZOHO being up to date. There is no secondary source (like Infakt) to catch missing documents.

---

## 3. Accessing the Tool

**Navigation path:**
```
VAT Reporting → VESTER → JPK Files
```

> ⚠️ Make sure you are in the **VESTER** section, not RENTUJEMY-PL. Check the breadcrumb at the top of the page before proceeding.

The JPK Files list shows:

| Column | What it means |
|---|---|
| **Period** | The month covered (e.g. `2026-02` = February 2026) |
| **Status** | `sent` = submitted to KAS · *(blank)* = not yet sent |
| **File Type** | `new` = original submission · `correction` = korekta |

---

## 4. Monthly Workflow — Step by Step

### Step 1 — Verify ZOHO Books is complete for the period

Since VESTER has no secondary invoice source, everything must be in ZOHO before generating the JPK.

**Sales (Sprzedaż) — check in ZOHO Books (VESTER):**
- All sales invoices for the period are **posted** (not draft)
- VAT rates are correctly assigned on each invoice
- Customer NIP numbers are present on all B2B invoices

**Purchases (Zakup) — check in ZOHO Books (VESTER):**
- All supplier bills are entered and **approved**
- All expense claims with VAT are recorded
- VAT rates on bills are correct (23%, 8%, 5%, 0%, zwolnienie)
- Supplier NIP numbers are present

> 💡 Run a quick ZOHO Books report: **Accounts Payable → Bills** filtered to the period — check for anything in Draft status and approve or delete before proceeding.

---

### Step 2 — Create a New JPK File

1. Navigate to **VAT Reporting → VESTER → JPK Files**
2. Click **+ New JPK File**
3. Select:
   - **Period**: the month you are reporting (e.g. `2026-03`)
   - **File Type**: `new` for a first-time submission, `correction` if amending a previous filing
4. Confirm / save

---

### Step 3 — (Re)create Entries

Open the new row to see the **JPK7 File Details** modal, then click:

> **`(Re)create Entries`**

The system syncs all VAT-relevant documents from **ZOHO Books (VESTER)**:
- Posted sales invoices
- Approved purchase bills
- Expense records with VAT

⏳ Wait for completion — the **Registrar Entries** counter will update.

> You can re-run this at any time before generating XML. If you add a missing document to ZOHO after the initial sync, simply click **(Re)create Entries** again — it replaces, not duplicates.

---

### Step 4 — Review VAT Documents

Switch to the **VAT Documents** tab and check:

- Total entry count is consistent with previous months (flag big drops or spikes)
- All B2B sales entries have a valid **NIP**
- VAT rates look correct across entries
- No duplicate document numbers
- Sales and purchase totals match your ZOHO Books VAT summary for the period

> 💡 **Cross-check tip:** In ZOHO Books, run **Reports → Tax Summary** for the same period and compare the VAT output/input totals against the JPK VAT Documents tab. They must match.

---

### Step 5 — Generate XML

Back in the **JPK7 File Details** modal, click:

> **`Generate XML`**

Once complete, a download icon (⬇) appears next to **XML Path**. Download the file and keep a local copy.

---

### Step 6 — Submit via Klient JPK_WEB

1. Open **Klient JPK_WEB**
2. Load the downloaded XML file
3. Select VESTER's **NIP** (confirm it matches exactly — do not use RENTUJEMY's NIP)
4. Sign using the authorized **qualified electronic signature** or **Profil Zaufany**
5. Send to KAS
6. Wait for the **UPO** (Urzędowe Potwierdzenie Odbioru)

> ⚠️ VESTER and RENTUJEMY have different NIPs. Always double-check the NIP selected in Klient JPK_WEB before signing.

---

### Step 7 — Upload the UPO

1. Return to the **JPK7 File Details** modal
2. Upload the UPO `.xml` received from Klient JPK_WEB to **UPO Path**
3. Status updates to `sent`

Archive the UPO securely — required for **5 years** under Polish tax law.

---

## 5. Filing a Correction (Korekta)

If an error is found after submission:

1. Navigate to **VAT Reporting → VESTER → JPK Files**
2. Click **+ New JPK File**
3. Same period as the original, **File Type = `correction`**
4. Follow Steps 3–7 as normal
5. In Klient JPK_WEB, confirm the file is flagged as a **korekta**

**Common reasons for a correction at VESTER:**
- A supplier sent a corrective invoice (faktura korygująca) after the 25th
- A ZOHO bill was posted to the wrong period
- A sales invoice had an incorrect VAT rate
- A missing NIP was discovered on a B2B invoice after submission

---

## 6. Common Issues & How to Fix Them

| Problem | Likely Cause | Fix |
|---|---|---|
| Entry count much lower than expected | Bills or invoices still in draft in ZOHO | Approve/post all docs in ZOHO, re-run (Re)create Entries |
| Missing NIP on a B2B entry | Bill saved without NIP in ZOHO | Add NIP to the ZOHO bill, re-run (Re)create Entries |
| XML generation fails | Data validation error — missing required field | Check VAT Documents for blank or malformed entries |
| Totals don't match ZOHO Tax Summary | Document dated in wrong period | Check invoice date vs. VAT date (data wystawienia vs. data dostawy) in ZOHO |
| Wrong NIP used in Klient JPK_WEB | RENTUJEMY NIP selected instead of VESTER | Re-submit with correct NIP; file correction if already accepted |
| UPO not received within 24h | KAS delay or submission error | Check submission status in Klient JPK_WEB; do not re-submit until confirmed failed |

---

## 7. Key Details

| Item | Detail |
|---|---|
| **JPK7M Deadline** | 25th of the following month |
| **Platform** | ER (Enhanced Rentals) — custom VAT module by ABGRION, VESTER tenant |
| **Submission app** | Klient JPK_WEB (Ministry of Finance) |
| **VESTER Operator ID** | `vester` |
| **VESTER NIP** | *(fill in)* |
| **Authorized signatories (UPL-1)** | Adrian Barwicki |
| **Source system** | ZOHO Books (VESTER organization) |

---

## 8. Using Claude as Your Accounting Assistant

Ask Claude directly for help with VESTER accounting:

> *"It's the 22nd — run me through the VESTER JPK7M checklist for March 2026"*

> *"A supplier sent a corrective invoice for January after we already submitted JPK — do we need a korekta?"*

> *"How should I book a VAT-exempt service in ZOHO Books for VESTER?"*

> *"The entry count in VESTER's JPK dropped by 40% vs last month — what should I check?"*

---

---

## 9. Intra-Group Loan Accounting (VESTER)

VESTER sits in the middle of the group credit facility structure:

```
ATH (DE) → [lower rate] → VESTER → [higher rate] → RENTUJEMY (PL)
```

VESTER earns the **spread** between the two rates. Both legs are governed by credit facility agreements and documented via **nota odsetkowa** (not VAT invoices).

### Booking interest expense (ATH → VESTER)

When Alphateam Hackers GmbH issues a nota odsetkowa to VESTER:

> ZOHO Books (VESTER) → Accountant → Manual Journals → New Journal → **Make Recurring** (monthly)

| | Account | Debit | Credit |
|---|---|---|---|
| DR | Koszty finansowe / Odsetki od ATH | amount | — |
| CR | Zobowiązania wobec ATH | — | amount |

When payment is made: debit Zobowiązania wobec ATH / credit Bank.

### Booking interest income (VESTER → RENTUJEMY)

When VESTER issues a nota odsetkowa to RENTUJEMY:

> ZOHO Books (VESTER) → Accountant → Manual Journals → New Journal → **Make Recurring** (monthly)

| | Account | Debit | Credit |
|---|---|---|---|
| DR | Należności od RENTUJEMY | amount | — |
| CR | Przychody finansowe / Odsetki od RENTUJEMY | — | amount |

When payment received: debit Bank / credit Należności od RENTUJEMY.

### ⚠️ JPK7M impact for VESTER

Interest income received from RENTUJEMY is **VAT-exempt turnover (zwolniony)**. It must appear in VESTER's JPK7M sales register — even though there is no VAT charged. This means VESTER's JPK7M will include entries for interest income each month the nota is issued. Make sure the nota odsetkowa is reflected in the **VAT Documents** tab after (Re)create Entries runs, or add it manually if the system doesn't pick it up automatically.

*Last updated: March 2026 · Maintained by RENTUJEMY Finance Team*
