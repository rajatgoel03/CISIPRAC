# CISI IOC Practice Platform

A fully static (HTML + CSS + JavaScript, no backend) quiz-taking platform for practising **CISI Investment Operations Certificate (IOC)** questions. Deployable via GitHub Pages and works on any device.

🌐 **Live Site:** `https://rajatgoel03.github.io/CISIPRAC/`

---

## Features

| Feature | Details |
|---|---|
| 📝 **Mock Exam** | Up to 80 questions, 1 hour 40 minute countdown timer, randomised from all topics |
| ⚡ **Quick Practice** | 20 random questions, untimed — great for focused revision sessions |
| ⚙️ **Custom Quiz** | Choose topic/unit + number of questions |
| 🃏 **Flashcards** | Flip-card review with Known/Needs Review marking and shuffle |
| 📊 **Progress Dashboard** | Score history chart, topic breakdown, weak areas analysis (Chart.js) |
| 💾 **Persistent** | All history and flashcard marks saved in `localStorage` |
| 📱 **Responsive** | Mobile-first design, works on phone, tablet and desktop |

---

## Topics Covered

### Unit 1: The Investment Environment
- FCA Regulation, MiFID II, EMIR, Consumer Duty
- KYC, AML, Suspicious Activity Reports
- Primary & Secondary markets, repo, market makers, IPO book-building

### Unit 2: Investment Products
- Equities (dividends, rights issues, stock splits, P/E ratios)
- Bonds (gilts, YTM, duration, zero coupon, convertible)
- Derivatives (options, futures, swaps, CDS)
- Collective investments (OEICs, unit trusts, ETFs, UCITS, AIFs)
- Structured products

### Unit 3: Operational Workflow
- Full trade lifecycle (order → execution → clearing → settlement)
- T+2 settlement, FIX protocol, DVP
- CREST, Euroclear, Clearstream, DTCC
- CCP clearing, novation, initial & variation margin, netting
- Corporate actions: dividends, rights issues, bonus issues, scrip, tender offers

### Unit 4: Supporting Functions
- Custody, nominee name, sub-custodians, securities lending
- Fund administration: NAV calculation, transfer agency, UCITS, AIFMD, TER/OCF
- Reconciliation: securities reconciliation, cash breaks, three-way reconciliation
- Risk: counterparty risk, market risk, operational risk, liquidity risk, VaR

---

## How to Use

### GitHub Pages
1. Fork or clone this repo
2. Go to **Settings → Pages → Source: Deploy from branch (main / root)**
3. Visit `https://<your-username>.github.io/<repo-name>/`

### Run Locally
Simply open `index.html` in any modern browser — no server needed.

---

## How to Add More Questions

Open `js/questions.js` and add an object to the `QUESTIONS` array:

```json
{
  "id": 102,
  "unit": "Unit 2",
  "topic": "Bonds",
  "question": "Your question text here?",
  "options": [
    "A. First option",
    "B. Second option",
    "C. Third option",
    "D. Fourth option"
  ],
  "correct": 0,
  "explanation": "Explanation of why option A is correct, with exam context."
}
```

- `id`: unique integer
- `unit`: `"Unit 1"` / `"Unit 2"` / `"Unit 3"` / `"Unit 4"`
- `topic`: any string (used for filters and breakdowns)
- `correct`: zero-based index of the correct option (0 = A, 1 = B, 2 = C, 3 = D)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom, no framework) |
| Logic | Vanilla JavaScript (ES6+) |
| Charts | Chart.js 4 (CDN) |
| Fonts | Google Fonts — Inter |
| Storage | Browser `localStorage` |
| Hosting | GitHub Pages |

**Zero npm, zero build tools, zero server-side code.**

---

## Pass Mark

The CISI IOC pass mark is **70%**. Results clearly show PASS or FAIL.

---

## Disclaimer

This platform is for **revision purposes only** and is not affiliated with, endorsed by, or connected to the Chartered Institute for Securities & Investment (CISI). Always refer to official CISI materials for authoritative exam content.
