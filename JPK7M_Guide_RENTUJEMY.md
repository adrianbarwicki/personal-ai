# JPK7M Monthly Submission Guide
**RENTUJEMY Internal Accounting — Tool: ER Platform · VAT Reporting Module**
**Applies to: RENTUJEMY-PL**
> ⚠️ The VAT Reporting / JPK7M module is a custom integration built by ABGRION specifically for RENTUJEMY. It is not part of the standard ER (Enhanced Rentals) product. VESTER JPK7M process is documented separately.

---

## ⚡ Quick Reference Checklist (for experienced users)

Before you start, confirm all of these are done for the reporting period:

- [ ] All sales invoices issued and synced (Infakt / ZOHO Books)
- [ ] All purchase bills entered in ZOHO Books
- [ ] OTA invoices reconciled (Airbnb, Booking.com, etc.)
- [ ] Bank statement reconciled with ZOHO transactions
- [ ] Period is closed / no invoices pending approval

Then in the tool:
- [ ] Open VAT Reporting → `[Entity]` → JPK Files
- [ ] Click **New JPK File**, set period and type
- [ ] Click ***(Re)create Entries*** — wait for sync to complete
- [ ] Review **VAT Documents** tab — check entry count and spot-check amounts
- [ ] Click ***Generate XML***
- [ ] Download XML from **XML Path**
- [ ] Submit via **Klient JPK_WEB**
- [ ] Upload UPO confirmation to **UPO Path**
- [ ] Set status to **sent** ✅

**Deadline: 25th of the month following the reporting period**

---

## 1. What is JPK7M?

JPK7M (Jednolity Plik Kontrolny dla potrzeb VAT) is the mandatory monthly VAT report submitted to the Polish Tax Authority (KAS). It combines:

- **Ewidencja VAT** — the full VAT register (every sales and purchase document with VAT)
- **Deklaracja VAT** — the VAT declaration summary (previously a separate VAT-7 form)

It must be submitted electronically by the **25th of the following month** — for example, January's JPK7M is due by 25 February.

### Who submits at RENTUJEMY?

| Entity | Operator ID | Tool Used | Source Systems | Submits JPK7M |
|---|---|---|---|---|
| RENTUJEMY sp. z o.o. | `rentujemy-pl` | ER Platform — RENTUJEMY tenant | ZOHO Books + Infakt + OTA Invoices | ✅ Monthly |
| VESTER | `vester` | ER Platform — VESTER tenant | ZOHO Books only | ✅ Monthly |
| RJMY | — | — | — | ❌ Not applicable |
| Gamma | — | — | — | ❌ Not applicable |

> This guide covers **RENTUJEMY-PL only**. For VESTER, see the separate guide: `JPK7M_Guide_VESTER.md`

---

## 2. Accessing the Tool

The JPK7M generator lives inside the **ER (Enhanced Rentals) platform**. The VAT Reporting module is a **custom integration commissioned by RENTUJEMY and built by ABGRION** — it is not a standard feature of ER. Access is provisioned for RENTUJEMY and VESTER tenants only.

**Navigation path:**
```
VAT Reporting → [Select Entity: RENTUJEMY-PL or VESTER] → JPK Files
```

You will see a list of all past submissions with three columns:

| Column | What it means |
|---|---|
| **Period** | The month covered (e.g. `2026-02` = February 2026) |
| **Status** | `sent` = submitted to KAS · *(blank/draft)* = not yet sent |
| **File Type** | `new` = original submission · `correction` = korekta (amended filing) |

There are three tabs at the top:
- **JPK Files** — list of generated JPK7M files
- **VAT Documents** — all VAT-relevant documents synced from ZOHO/Infakt/OTA
- **OTA Invoices** — invoices from OTA platforms (Airbnb, Booking, etc.)

---

## 3. Monthly Workflow — Step by Step

### Step 1 — Verify source documents are complete

Before touching the generator, make sure all documents for the period are in place:

**Sales (Sprzedaż):**
- All invoices issued in **Infakt** are finalized and not in draft
- Any manual invoices in **ZOHO Books** are posted
- OTA platform settlements are reconciled (check the **OTA Invoices** tab)

**Purchases (Zakup):**
- All supplier invoices (bills) are entered in **ZOHO Books**
- VAT rates on bills are correctly assigned (23%, 8%, 5%, 0%, zwolnienie)
- No bills are sitting in draft/unapproved status

---

### Step 2 — Create a New JPK File

1. Navigate to **VAT Reporting → [Entity] → JPK Files**
2. Click **+ New JPK File** (top right corner)
3. Select:
   - **Period**: the month you are reporting (e.g. `2026-03`)
   - **File Type**: `new` for a first-time submission, `correction` if amending a previously sent file
4. Confirm / save

The new entry will appear in the list with a blank status.

---

### Step 3 — (Re)create Entries

Click the row to open the **JPK7 File Details** modal, then click:

> **`(Re)create Entries`**

This triggers the automated sync — the system pulls all relevant VAT documents from:
- ZOHO Books (sales invoices + purchase bills)
- Infakt (sales invoices)
- OTA Invoices module

⏳ Wait for the sync to finish. The **Registrar Entries** counter will update (e.g. `2016 entries`).

> **Note:** You can re-run this button at any time before generating the XML — for example, if you added a missing invoice after the first sync. The name "(Re)create" means it is safe to run again — it will replace the previous entries, not duplicate them.

---

### Step 4 — Review VAT Documents

Before generating, switch to the **VAT Documents** tab and review:

**Things to check:**
- Total number of entries looks reasonable vs. last month
- No entries with missing NIP (tax ID) on B2B transactions
- VAT rates appear correct (no 23% where there should be 0%, etc.)
- No obvious duplicates (same invoice number appearing twice)
- Sales total and purchase total match your expectations from ZOHO

> 💡 **Tip for seniors:** Cross-reference the VAT output total against ZOHO Books' VAT summary report for the same period. They should match exactly.

---

### Step 5 — Generate XML

Back in the **JPK7 File Details** modal, click:

> **`Generate XML`**

The system will produce the JPK7M XML file in the format required by the Ministry of Finance schema. Once complete, a download icon (⬇) will appear next to **XML Path**.

Download the XML file and save a local copy before proceeding.

---

### Step 6 — Submit via Klient JPK_WEB

1. Open **Klient JPK_WEB** (the official MF desktop application)
2. Load the downloaded XML file
3. Select the correct **NIP** for the entity (RENTUJEMY or VESTER)
4. Sign the file using the authorized **qualified electronic signature** or **Profil Zaufany**
5. Send to KAS
6. Wait for the **UPO** (Urzędowe Potwierdzenie Odbioru — official receipt of submission) to be issued

> ⚠️ **Important:** Do not close Klient JPK_WEB before receiving the UPO. The UPO is proof that KAS received your file. Without it, the submission is not legally confirmed.

---

### Step 7 — Upload the UPO

Once you have the UPO file:

1. Go back to the **JPK7 File Details** modal in the ABGRION tool
2. Click the download icon next to **UPO Path** — this is actually an **upload** slot
3. Upload the UPO `.xml` file you received from Klient JPK_WEB
4. The **Status** will update to `sent`

Archive the UPO file securely — it is your legal proof of submission and must be retained for **5 years**.

---

## 4. Filing a Correction (Korekta)

If you discover an error in a submitted JPK7M (wrong VAT rate, missing invoice, duplicate entry), you must file a **correction**.

1. Navigate to the entity's **JPK Files** list
2. Click **+ New JPK File**
3. Set the same period as the original submission
4. Set **File Type = `correction`**
5. Follow the same steps (Re)create → Review → Generate XML → Submit via Klient JPK_WEB
6. In Klient JPK_WEB, make sure the file is marked as a **korekta** (correction), not a new submission

> The correction **replaces** the original filing for that period. You do not need to withdraw the original first.

**When is a correction needed?**
- Missing invoice discovered after submission
- Wrong VAT rate applied
- Invoice with incorrect NIP
- OTA settlement discrepancy resolved after the 25th

---

## 5. Common Issues & How to Fix Them

| Problem | Likely Cause | Fix |
|---|---|---|
| Entry count much lower than last month | Some source docs not synced yet | Check Infakt drafts, ZOHO unapproved bills; re-run (Re)create Entries |
| Missing NIP on entries | Supplier bill saved without NIP in ZOHO | Add NIP to the bill in ZOHO Books, re-run (Re)create Entries |
| XML generation fails | Schema validation error — usually a data issue | Check VAT Documents tab for entries with missing required fields |
| Klient JPK_WEB rejects the file | Wrong period, wrong NIP, or file format issue | Re-download XML, verify entity NIP matches the selected company |
| UPO not received | KAS processing delay (can take up to 24h) | Wait and retry; do not re-submit |
| Totals don't match ZOHO | Document synced from wrong period | Check document dates vs. VAT dates (data dostawy vs. data wystawienia) |

---

## 6. Using Claude as Your Accounting Assistant

You can ask Claude directly within this workspace for help with:

**Monthly JPK7M prep:**
> *"It's the 20th, help me run through the JPK7M checklist for RENTUJEMY for March 2026"*

**VAT classification questions:**
> *"We bought office furniture in Germany for the Warsaw office — what VAT treatment applies?"*

**Transaction coding in ZOHO:**
> *"How should I book a security deposit received from a tenant in ZOHO Books?"*

**Error diagnosis:**
> *"The XML generator returned this error: [paste error] — what does it mean and how do I fix it?"*

**Cross-entity transactions:**
> *"RENTUJEMY is invoicing RJMY for management services — how should this be structured for VAT purposes?"*

**Correction decisions:**
> *"We found a missing Airbnb invoice from January after we already submitted — do we need to file a korekta?"*

---

## 7. Key Dates & Contacts

| Item | Detail |
|---|---|
| **JPK7M Deadline** | 25th of the following month |
| **Tool** | ABGRION VAT Reporting (provisioned by RENTUJEMY) |
| **Submission app** | Klient JPK_WEB (Ministry of Finance) |
| **RENTUJEMY Operator ID** | `rentujemy-pl` |
| **VESTER Operator ID** | *(fill in)* |
| **Authorized signatories (UPL-1)** | Damian Klasa · Judyta Kaczyńska · Liya Akhramovich · Adrian Barwicki |
| **KAS e-mail support** | e-pity@mf.gov.pl |

---

---

## 9. Intra-Group Loan Accounting (RENTUJEMY)

RENTUJEMY borrows from VESTER under a credit facility agreement. Interest is documented via **nota odsetkowa** from VESTER — not a VAT invoice.

### Booking interest expense (VESTER → RENTUJEMY)

When VESTER issues a nota odsetkowa to RENTUJEMY:

> ZOHO Books (RENTUJEMY) → Accountant → Manual Journals → New Journal → **Make Recurring** (monthly)

| | Account | Debit | Credit |
|---|---|---|---|
| DR | Koszty finansowe / Odsetki od VESTER | amount | — |
| CR | Zobowiązania wobec VESTER | — | amount |

When payment is made: debit Zobowiązania wobec VESTER / credit Bank.

### ⚠️ JPK7M impact for RENTUJEMY

Interest paid to VESTER is a **financial cost only** — it does not appear in the VAT register and does not affect the JPK7M. It is P&L only.

### ⚠️ Art. 15c CIT — watch the threshold

If RENTUJEMY's net financing costs (interest paid to VESTER + any other lenders, minus any interest received) exceed **3,000,000 PLN** in a tax year, the excess above 30% of tax EBITDA is **not tax-deductible** that year. Monitor this annually with your tax advisor.

*Last updated: March 2026 · Maintained by RENTUJEMY Finance Team*
