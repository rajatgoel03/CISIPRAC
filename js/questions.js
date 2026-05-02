const cisiQuizData = [
  {
    id: 1,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "What is the standard Basel/BIS definition of operational risk?",
    options: [
      "A. Risk of loss from market price movements",
      "B. Risk of loss resulting from inadequate or failed internal processes, people and systems or from external events",
      "C. Risk of loss from a counterparty failing to meet its obligations",
      "D. Risk of loss from an institution's inability to meet its short-term obligations"
    ],
    correctAnswer: 1,
    explanation: "The BIS/Basel definition: operational risk is the risk of loss resulting from inadequate or failed internal processes, people and systems or from external events. This definition explicitly includes legal risk but excludes strategic and reputational risk."
  },
  {
    id: 2,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "Which of the following best describes 'downside risk'?",
    options: [
      "A. The potential for higher-than-expected investment returns",
      "B. The potential negative consequences or losses arising from a risk event",
      "C. The probability that a trade counterparty will default on a contract",
      "D. The regulatory capital charge applied to market risk exposures"
    ],
    correctAnswer: 1,
    explanation: "Downside risk refers to the adverse side of uncertainty — the potential for loss or negative outcomes. Risk managers focus on reducing both the likelihood and impact of downside risk events."
  },
  {
    id: 3,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "Enterprise Risk Management (ERM) is best described as an approach that:",
    options: [
      "A. Focuses exclusively on financial risks such as market and credit risk",
      "B. Delegates all risk decisions to front-office trading teams",
      "C. Integrates the management of all risk types across the whole organisation",
      "D. Limits risk oversight to the compliance and internal audit functions"
    ],
    correctAnswer: 2,
    explanation: "ERM takes a holistic, organisation-wide view of all risk types — financial and non-financial — and integrates their management into a single coherent framework rather than managing them in silos."
  },
  {
    id: 4,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "Which term describes the maximum level of risk an organisation can absorb before its viability is threatened?",
    options: [
      "A. Risk appetite",
      "B. Risk tolerance",
      "C. Risk capacity",
      "D. Risk limit"
    ],
    correctAnswer: 2,
    explanation: "Risk capacity is the maximum amount of risk an organisation can absorb given its financial resources and obligations. Risk appetite is the level the board is comfortable accepting; risk tolerance is the permitted deviation from appetite."
  },
  {
    id: 5,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "A risk register typically contains which of the following?",
    options: [
      "A. Trading strategies and profit targets for front-office teams",
      "B. Inherent and residual risk scores, risk owners, key controls, and remedial actions",
      "C. The regulatory capital calculation for market and credit risk",
      "D. Customer account details and transaction history"
    ],
    correctAnswer: 1,
    explanation: "A risk register records identified risks along with inherent risk (before controls), residual risk (after controls), assigned risk owners, existing key controls, and any remedial actions required to reduce risk further."
  },
  {
    id: 6,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "Which of the following is the BEST description of risk appetite?",
    options: [
      "A. The maximum amount of risk an organisation can absorb before becoming unviable",
      "B. The level of risk an organisation is comfortable accepting in the course of its business activities",
      "C. The deviation from normal operations that can be tolerated for a short period",
      "D. The minimum capital buffer required by regulators"
    ],
    correctAnswer: 1,
    explanation: "Risk appetite is the amount and type of risk the board is willing to accept in pursuit of its strategic objectives. It guides operational decisions and is typically expressed in the risk appetite statement."
  },
  {
    id: 7,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "The LIBOR scandal involved which of the following activities?",
    options: [
      "A. Traders taking unauthorised positions in equity futures markets",
      "B. Banks mis-selling payment protection insurance to retail customers",
      "C. Bank employees falsely over- or under-stating LIBOR rates to profit from trading positions",
      "D. A cyber attack on the interbank payments system"
    ],
    correctAnswer: 2,
    explanation: "In the LIBOR scandal, traders and submitters at multiple banks colluded to manipulate the LIBOR benchmark by submitting artificially high or low rates to benefit their derivatives trading positions, leading to substantial fines and criminal prosecutions."
  },
  {
    id: 8,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "The Wells Fargo scandal (2016) is an example of which type of operational risk?",
    options: [
      "A. Systems failure — the bank's core IT infrastructure collapsed",
      "B. People risk — employees opened fee-bearing accounts without customers' knowledge or consent",
      "C. External event — a cyber attack compromised customer account data",
      "D. Process failure — reconciliation errors led to duplicate account creation"
    ],
    correctAnswer: 1,
    explanation: "Wells Fargo employees, under pressure to meet sales targets, opened approximately 3.5 million unauthorised bank and credit card accounts. This is a classic people risk driven by flawed incentive structures and poor management culture."
  },
  {
    id: 9,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "TSB's major operational risk event in 2018 was caused by:",
    options: [
      "A. A rogue trader exceeding authorised limits in FX markets",
      "B. Failure to comply with AML obligations, leading to a regulatory fine",
      "C. A failed digital platform migration that locked 1.9 million customers out of online banking",
      "D. Mis-selling of interest rate hedging products to small businesses"
    ],
    correctAnswer: 2,
    explanation: "TSB attempted to migrate 5 million customers to a new proprietary platform following its separation from Lloyds Banking Group. Technical failures locked out 1.9 million customers and led to over 10,000 fraud incidents. The CEO and CIO resigned."
  },
  {
    id: 10,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "The FCA fined Invesco Asset Management in 2014 because:",
    options: [
      "A. Invesco traders manipulated equity benchmark prices",
      "B. Invesco failed to submit suspicious transaction reports to the NCA",
      "C. Invesco exposed investors to higher levels of risk by breaching internal investment limits",
      "D. Invesco mis-sold structured products to retail investors"
    ],
    correctAnswer: 2,
    explanation: "The FCA fined Invesco £18.6m in 2014 because Invesco's fund managers breached internal investment limits, exposing investors to higher levels of risk than permitted. This illustrated a failure of both people and process controls."
  },
  {
    id: 11,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "Raphael's Bank was fined by the PRA in 2018 primarily because of:",
    options: [
      "A. A cyber attack that compromised customer payment data",
      "B. Poor management and oversight of outsourcing risk to a third-party provider",
      "C. Manipulation of the LIBOR benchmark rate by front-office traders",
      "D. Failure to maintain adequate capital ratios under Basel III"
    ],
    correctAnswer: 1,
    explanation: "Raphael's Bank failed to adequately manage its outsourcing arrangements. The PRA found that the bank lacked proper oversight of its third-party service provider, creating significant operational risk — a core lesson in outsourcing risk management."
  },
  {
    id: 12,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "The Bangladesh Bank cyber attack of 2016 involved:",
    options: [
      "A. Ransomware encrypting the central bank's core banking systems",
      "B. Hackers using stolen SWIFT credentials to make fraudulent transfer instructions totalling over USD 80 million",
      "C. A DDoS attack that disrupted the bank's online payment systems for 72 hours",
      "D. Insider fraud by a senior IT employee who diverted funds to offshore accounts"
    ],
    correctAnswer: 1,
    explanation: "Hackers obtained Bangladesh Bank's SWIFT credentials and submitted 35 fraudulent payment instructions totalling nearly USD 1 billion. USD 81 million was successfully transferred to accounts in the Philippines before the attack was halted. It exposed severe weaknesses in SWIFT security controls."
  },
  {
    id: 13,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "The GAM investment management scandal in 2018 was initially triggered by:",
    options: [
      "A. GAM's funds suffering mark-to-market losses on structured credit positions",
      "B. A whistleblower who reported that a fund manager had breached dealing, inducement, and record-keeping policies",
      "C. Regulatory action following GAM's failure to meet Basel III liquidity requirements",
      "D. A cyber breach that exposed confidential investor data"
    ],
    correctAnswer: 1,
    explanation: "A GAM employee reported that a fund manager had received gifts and entertainment (inducements) from bond issuers, conducted personal dealing in the same securities, and failed to maintain proper records. The fund manager was dismissed and several funds were suspended, triggering significant redemptions."
  },
  {
    id: 14,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "The collapse of Barings Bank in 1995 is primarily attributed to:",
    options: [
      "A. A large-scale cyber attack on the bank's trading systems",
      "B. The bank's excessive exposure to sub-prime mortgage securities",
      "C. Rogue trading by Nick Leeson in Nikkei futures combined with a failure of supervisory controls",
      "D. A liquidity crisis caused by the withdrawal of interbank funding lines"
    ],
    correctAnswer: 2,
    explanation: "Nick Leeson accumulated hidden losses of £827 million in unauthorised Nikkei 225 futures positions using the '88888' error account. The lack of segregation between front and back office roles, and failures of management oversight, allowed the losses to grow until the bank collapsed."
  },
  {
    id: 15,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "Societe Generale's 2008 rogue trading loss of approximately 4.9 billion euros was caused by:",
    options: [
      "A. Fraudulent manipulation of EURIBOR benchmark rates by multiple traders",
      "B. Jerome Kerviel entering large unauthorised directional positions in European equity index futures",
      "C. A systems failure that caused the bank's risk management models to understate market risk",
      "D. A series of settlement failures in the bank's securities custody operations"
    ],
    correctAnswer: 1,
    explanation: "Jerome Kerviel built up unauthorised long positions of approximately 50 billion euros in European equity index futures. His knowledge of back-office controls allowed him to conceal the positions. When discovered, unwinding the positions in a falling market crystallised 4.9 billion euros in losses."
  },
  {
    id: 16,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "The PPI mis-selling scandal is classified under which Basel II operational risk event type?",
    options: [
      "A. Internal Fraud",
      "B. External Fraud",
      "C. Clients, Products and Business Practices",
      "D. Execution, Delivery and Process Management"
    ],
    correctAnswer: 2,
    explanation: "PPI mis-selling involved banks selling unsuitable payment protection insurance products to customers who did not need them or could not claim on them. This falls under 'Clients, Products and Business Practices' — the Basel II category covering mis-selling, suitability failures, and fiduciary breaches."
  },
  {
    id: 17,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "Northern Rock's collapse in 2007 was primarily caused by:",
    options: [
      "A. Rogue trading losses that exceeded the bank's regulatory capital",
      "B. A large-scale cyber fraud that drained customer deposits",
      "C. Over-exposure to sub-prime mortgage assets and a short-term funding shortfall as wholesale markets froze",
      "D. A regulatory fine that depleted the bank's capital reserves"
    ],
    correctAnswer: 2,
    explanation: "Northern Rock had an 'originate and distribute' model, funding long-term mortgage assets with short-term wholesale borrowing. When the sub-prime crisis froze wholesale markets, Northern Rock could not refinance, triggering the first UK bank run in 150 years."
  },
  {
    id: 18,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "Which of the following is NOT one of the four main root cause categories of operational risk identified by Basel?",
    options: [
      "A. People",
      "B. Processes",
      "C. Strategic risk",
      "D. External events"
    ],
    correctAnswer: 2,
    explanation: "Basel identifies four root causes of operational risk: People, Processes, Systems, and External Events. Strategic risk is a separate risk category that is explicitly excluded from the Basel definition of operational risk."
  },
  {
    id: 19,
    type: "multiple-choice",
    topic: "Risk Concepts",
    question: "Inherent risk is best defined as:",
    options: [
      "A. The risk remaining after management controls have been applied",
      "B. The risk arising from a firm's strategic planning decisions",
      "C. The level of risk that exists before any controls or mitigating actions are in place",
      "D. The risk of loss from regulatory non-compliance"
    ],
    correctAnswer: 2,
    explanation: "Inherent risk is the 'gross' risk — the level of risk present in a process or activity before any controls are applied. Residual risk is what remains after controls are considered. Both are typically recorded in the risk register."
  },
  {
    id: 20,
    type: "multiple-choice",
    topic: "Risk Concepts",
    question: "Which of the following best describes 'risk tolerance' in an operational risk framework?",
    options: [
      "A. The maximum amount of risk the organisation can absorb",
      "B. The target risk level the board is aiming to maintain",
      "C. The permitted deviation from risk appetite that management will accept over a short period",
      "D. The minimum amount of risk required to generate acceptable returns"
    ],
    correctAnswer: 2,
    explanation: "Risk tolerance is the acceptable variation around the risk appetite level. If a firm's risk appetite is set at a particular level, the tolerance defines how far actual risk exposure can deviate from that level before corrective action is triggered."
  },
  {
    id: 21,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "Which of the following is the best example of issuer risk?",
    options: [
      "A. A bank fails to settle a foreign exchange trade on the agreed value date",
      "B. An investor holding corporate bonds suffers a loss when the company defaults on coupon payments",
      "C. A clearing house fails to meet its obligations to member firms",
      "D. A trading counterparty fails to deliver securities under a repo agreement"
    ],
    correctAnswer: 1,
    explanation: "Issuer risk is a form of credit risk specific to bond holders — the risk that the bond issuer will default on coupon or principal payments. It is distinct from counterparty risk, which relates to bilateral trading agreements."
  },
  {
    id: 22,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "Which of the following best describes cash netting in the context of credit risk mitigation?",
    options: [
      "A. Posting collateral to offset potential future exposure",
      "B. Using a CCP to stand between buyer and seller",
      "C. Combining gross payment obligations into a single net payment, reducing settlement risk",
      "D. Spreading credit exposure across multiple counterparties"
    ],
    correctAnswer: 2,
    explanation: "Cash netting (or payment netting) combines all amounts owed between two counterparties into a single net payment. This reduces the volume and value of payments in the system, thereby reducing settlement risk."
  },
  {
    id: 23,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "In the context of central counterparty (CCP) clearing, 'novation' means:",
    options: [
      "A. The process of adjusting collateral margins on a daily basis",
      "B. The CCP replaces the original bilateral trade with two new contracts, becoming buyer to every seller and seller to every buyer",
      "C. The transfer of a contract from one party to a new counterparty with the original counterparty's consent",
      "D. The process by which a failing member's positions are auctioned to surviving members"
    ],
    correctAnswer: 1,
    explanation: "Novation is the legal mechanism by which the CCP interposes itself between the original buyer and seller. The original contract is extinguished and two new contracts are created — one between the CCP and the original buyer, one between the CCP and the original seller."
  },
  {
    id: 24,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "Which of the following correctly distinguishes pre-settlement risk from settlement risk?",
    options: [
      "A. Pre-settlement risk arises only in equity markets; settlement risk is specific to FX",
      "B. Settlement risk is higher in value than pre-settlement risk because all principal is at risk",
      "C. Pre-settlement risk arises before the settlement date when a contract has positive economic value; settlement risk arises on the settlement date itself when assets are exchanged",
      "D. Pre-settlement risk is eliminated by central clearing; settlement risk is not"
    ],
    correctAnswer: 2,
    explanation: "Pre-settlement risk (replacement cost risk) is the risk that a counterparty defaults before settlement date on a contract that has moved in your favour — you must replace it at market rates. Settlement risk arises on the actual settlement day when principal is exchanged simultaneously."
  },
  {
    id: 25,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "A Credit Default Swap (CDS) is best described as:",
    options: [
      "A. A bond issued by a reference entity to fund a specific project",
      "B. An instrument where the protection buyer pays a periodic fee and receives a contingent payment from the protection seller if a specified credit event occurs",
      "C. A swap in which both parties exchange fixed and floating interest rate cash flows based on a reference entity",
      "D. A securitisation structure that tranches credit risk into rated bonds"
    ],
    correctAnswer: 1,
    explanation: "In a CDS, the protection buyer pays a regular premium (the CDS spread) to the protection seller. If a defined credit event (e.g., default, restructuring) occurs for the reference entity, the seller pays the buyer the loss amount. CDS are used for credit risk hedging and speculation."
  },
  {
    id: 26,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "Diversification as a credit risk mitigation technique involves:",
    options: [
      "A. Posting government bonds as collateral against derivatives exposures",
      "B. Using a CCP to clear all bilateral trades with counterparties",
      "C. Spreading credit exposure across multiple sectors, geographies, or counterparties that are negatively or weakly correlated",
      "D. Transferring credit risk off the balance sheet through asset securitisation"
    ],
    correctAnswer: 2,
    explanation: "Diversification reduces concentration risk by spreading exposures across assets that are not perfectly positively correlated. If one counterparty or sector suffers a downturn, losses in that area may be offset by stability elsewhere in the portfolio."
  },
  {
    id: 27,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "The credit risk premium charged on a loan is best described as:",
    options: [
      "A. The fee charged by the CCP for clearing a derivatives contract",
      "B. The capital charge applied to credit risk exposures under Basel III",
      "C. The additional interest charged above the risk-free rate to compensate for the probability and severity of default",
      "D. The haircut applied to collateral posted by a borrower"
    ],
    correctAnswer: 2,
    explanation: "The credit risk premium (or spread) is the extra yield demanded by lenders above the risk-free rate (e.g., government bond yield) to compensate for default probability (PD) and loss given default (LGD). It is the key pricing mechanism for credit risk."
  },
  {
    id: 28,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "Which credit rating from Moody's is broadly equivalent to S&P's 'AAA'?",
    options: [
      "A. A1",
      "B. Aa1",
      "C. Aaa",
      "D. AA+"
    ],
    correctAnswer: 2,
    explanation: "Moody's Aaa is the highest credit rating and is equivalent to S&P's AAA. Both indicate the highest quality with minimal credit risk. Moody's uses lowercase lettering for its top category, unlike S&P's uppercase."
  },
  {
    id: 29,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "A bond rated below Ba1 (Moody's) or BB+ (S&P) is commonly referred to as:",
    options: [
      "A. Investment grade",
      "B. High-yield or junk bond",
      "C. Sub-investment grade convertible",
      "D. A structured credit product"
    ],
    correctAnswer: 1,
    explanation: "Bonds rated below the investment grade threshold (Baa3/BBB- and above) are classified as high-yield or 'junk' bonds. They carry higher default risk and therefore offer higher yields to compensate investors for that additional risk."
  },
  {
    id: 30,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "Loss Given Default (LGD) is defined as:",
    options: [
      "A. The probability that a counterparty will default within a given time horizon",
      "B. The estimated loss a lender would suffer if a counterparty defaulted at a specific point in time, net of any recoveries",
      "C. The total credit exposure outstanding at the time of default",
      "D. The additional capital buffer required above the minimum under Pillar 2"
    ],
    correctAnswer: 1,
    explanation: "LGD represents the fraction of exposure that is lost if a counterparty defaults, after accounting for collateral, recoveries, and workout costs. It is a key input into credit risk capital calculations: Expected Loss = PD x LGD x EAD."
  },
  {
    id: 31,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "Which of the following is a portfolio-level credit risk mitigation technique that transfers risk to capital market investors?",
    options: [
      "A. Bilateral collateral agreements",
      "B. Credit limits on individual counterparties",
      "C. Cash netting between two counterparties",
      "D. Asset securitisation"
    ],
    correctAnswer: 3,
    explanation: "Asset securitisation is a portfolio-level technique where pools of loans are packaged into securities and sold to investors. This transfers credit risk from the originating bank to the capital markets, freeing up regulatory capital."
  },
  {
    id: 32,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "A key limitation of modern credit risk measurement models is:",
    options: [
      "A. They cannot be applied to derivatives contracts",
      "B. They require good quality historical data, which may be scarce for rare default events",
      "C. They are only applicable to investment-grade counterparties",
      "D. They do not incorporate probability of default into their calculations"
    ],
    correctAnswer: 1,
    explanation: "Credit risk models rely heavily on historical default data to calibrate PD, LGD, and correlation parameters. For low-frequency, high-severity events (e.g., sovereign defaults), historical data is sparse, making model outputs less reliable during stress scenarios."
  },
  {
    id: 33,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "In a bilateral collateral agreement, which of the following is correct?",
    options: [
      "A. Only the party with the larger exposure is required to post collateral",
      "B. Both parties may be required to post collateral depending on the direction and magnitude of the mark-to-market exposure",
      "C. Collateral can only take the form of cash in the base currency of the agreement",
      "D. Collateral must be held by an independent third-party custodian at all times"
    ],
    correctAnswer: 1,
    explanation: "In a bilateral (two-way) collateral agreement, either party may be required to post collateral as the mark-to-market value of the portfolio fluctuates. The net exposure determines which party posts, and it can switch direction over time."
  },
  {
    id: 34,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Value at Risk (VaR) is best described as:",
    options: [
      "A. The average loss expected under normal market conditions",
      "B. The maximum potential loss over a specified time horizon with a given confidence level under normal market conditions",
      "C. The total regulatory capital charge for all market risk positions",
      "D. The daily profit and loss volatility of a trading book"
    ],
    correctAnswer: 1,
    explanation: "VaR estimates the maximum loss that will not be exceeded with a specified probability (confidence level, e.g., 99%) over a defined time horizon (e.g., 10 days). For example, a 1-day 99% VaR of 1 million pounds means there is a 1% chance of losing more than 1 million pounds in a single day."
  },
  {
    id: 35,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Basis risk in the context of hedging is best described as:",
    options: [
      "A. The risk that a counterparty to a hedge contract defaults before settlement",
      "B. The risk that the hedge ratio used is mathematically incorrect",
      "C. The risk that the offsetting hedge position does not perfectly match the underlying exposure, leaving residual risk",
      "D. The risk that market volatility increases, making the hedge more expensive to maintain"
    ],
    correctAnswer: 2,
    explanation: "Basis risk arises when the hedging instrument and the underlying exposure are not perfectly correlated. For example, hedging a corporate bond portfolio with government bond futures leaves basis risk because corporate and government spreads can move differently."
  },
  {
    id: 36,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Back-testing a VaR model involves:",
    options: [
      "A. Running the model on simulated extreme market scenarios to test its resilience",
      "B. Comparing the model's predicted daily VaR against actual daily P&L to assess its accuracy",
      "C. Adjusting the model's confidence interval based on current market volatility",
      "D. Recalibrating the model using data from the most recent financial crisis"
    ],
    correctAnswer: 1,
    explanation: "Back-testing checks VaR model accuracy by comparing daily VaR estimates against actual trading outcomes. If actual losses exceed VaR more frequently than the confidence level predicts (e.g., more than 1% of days for a 99% VaR), the model may be under-estimating risk."
  },
  {
    id: 37,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "How does stress testing differ from VaR-based back-testing?",
    options: [
      "A. Stress testing uses real historical data; back-testing uses hypothetical scenarios",
      "B. Back-testing is forward-looking; stress testing is backward-looking",
      "C. Stress testing examines the impact of extreme but plausible scenarios; back-testing compares model predictions against historical actual outcomes",
      "D. Stress testing is required only for credit risk; back-testing applies only to market risk"
    ],
    correctAnswer: 2,
    explanation: "Stress testing explores what would happen under extreme but plausible scenarios (e.g., a 30% equity market crash), including scenarios beyond the historical data range. Back-testing is a backward-looking validation exercise that checks whether VaR estimates were accurate."
  },
  {
    id: 38,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Market depth as a measure of liquidity refers to:",
    options: [
      "A. The time required for a market to recover to its original price after a large trade",
      "B. The number of trading days required to liquidate a large position without moving the market",
      "C. The amount of an asset that can be bought or sold at various bid-ask spreads in the market",
      "D. The maximum position size permitted under the firm's market risk limits"
    ],
    correctAnswer: 2,
    explanation: "Market depth measures how much volume can be absorbed at successive price levels. A deep market can accommodate large trades with minimal price impact. Market depth is typically displayed in an order book showing bid and offer sizes at different price levels."
  },
  {
    id: 39,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Which of the following is a key limitation of VaR that is NOT one of its advantages?",
    options: [
      "A. VaR provides a single summary number for risk",
      "B. VaR can be aggregated across asset classes and portfolios",
      "C. VaR depends on accurate historical data and can significantly underestimate risk during market crises",
      "D. VaR is widely used and understood by regulators and risk managers"
    ],
    correctAnswer: 2,
    explanation: "VaR's main weaknesses include: it assumes normal market conditions; it relies on historical data that may not reflect future crises; it does not indicate the magnitude of losses beyond the threshold; and it can give false comfort in tail-risk situations such as the 2008 financial crisis."
  },
  {
    id: 40,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Expected Shortfall (ES), also known as Conditional VaR (CVaR), is used because:",
    options: [
      "A. It is simpler to calculate than standard VaR",
      "B. It satisfies the regulators' requirement for a single confidence-level estimate",
      "C. It measures the average loss in the tail beyond the VaR threshold, providing a better estimate of extreme losses",
      "D. It eliminates the need for back-testing market risk models"
    ],
    correctAnswer: 2,
    explanation: "ES/CVaR addresses a key criticism of VaR by measuring the expected loss given that the loss exceeds the VaR threshold. This captures tail risk better and is a 'coherent' risk measure. Basel's FRTB framework moved from VaR to ES for market risk capital."
  },
  {
    id: 41,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Resilience as a liquidity measure refers to:",
    options: [
      "A. A firm's ability to raise capital in a stressed market environment",
      "B. The minimum number of days' cash reserves a firm must hold under LCR rules",
      "C. How quickly a market price recovers to its normal level after a large transaction",
      "D. The spread between a bond's yield and the risk-free rate"
    ],
    correctAnswer: 2,
    explanation: "Resilience measures how quickly a market or asset price returns to its equilibrium after being disturbed by a large trade. Highly resilient markets recover quickly; less liquid markets may take much longer to rebound."
  },
  {
    id: 42,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Immediacy as a liquidity measure is defined as:",
    options: [
      "A. The number of market makers willing to quote a two-way price",
      "B. The difference between the bid and offer price as a percentage of mid-price",
      "C. The time needed to execute a trade of a given size at a prescribed cost",
      "D. The ability of a firm to generate cash from its asset portfolio within 24 hours"
    ],
    correctAnswer: 2,
    explanation: "Immediacy measures the speed at which a transaction can be completed at a given cost. In a highly liquid market, large orders can be executed immediately with minimal price impact; in an illiquid market, execution may take much longer or require significant price concessions."
  },
  {
    id: 43,
    type: "multiple-choice",
    topic: "Liquidity Risk",
    question: "Asset liquidity risk is best described as:",
    options: [
      "A. The risk that a firm cannot obtain short-term funding in the wholesale markets",
      "B. The risk that a firm's retail deposit base is withdrawn rapidly",
      "C. The inability to sell or liquidate an asset quickly at or near its fair market value",
      "D. The risk that a counterparty defaults on a repo agreement"
    ],
    correctAnswer: 2,
    explanation: "Asset (or market) liquidity risk is the risk that a position cannot be unwound at or near its mark-to-market value because of insufficient market depth, wide bid-offer spreads, or a complete absence of buyers. It is distinct from funding liquidity risk."
  },
  {
    id: 44,
    type: "multiple-choice",
    topic: "Liquidity Risk",
    question: "The Liquidity Coverage Ratio (LCR) under Basel III requires banks to:",
    options: [
      "A. Maintain a stable funding profile for assets with maturities beyond one year",
      "B. Hold sufficient high-quality liquid assets (HQLA) to cover projected net cash outflows over a 30-day stress period",
      "C. Publish a maturity ladder showing all cash inflows and outflows over a 12-month horizon",
      "D. Maintain a minimum loan-to-deposit ratio of no more than 100%"
    ],
    correctAnswer: 1,
    explanation: "The LCR requires banks to hold a buffer of HQLA (Level 1: cash, central bank reserves, sovereign bonds; Level 2: lower-rated sovereigns, covered bonds, equities) that is at least equal to projected net cash outflows over a 30-day stress scenario. LCR must be at or above 100%."
  },
  {
    id: 45,
    type: "multiple-choice",
    topic: "Liquidity Risk",
    question: "The Net Stable Funding Ratio (NSFR) is defined as:",
    options: [
      "A. The ratio of liquid assets to total deposits",
      "B. Available stable funding divided by required stable funding, expressed as a percentage, measured over a one-year horizon",
      "C. The ratio of short-term wholesale funding to total liabilities",
      "D. Required liquid assets divided by total risk-weighted assets"
    ],
    correctAnswer: 1,
    explanation: "The NSFR requires banks to maintain a stable funding profile relative to their assets and off-balance-sheet activities over a one-year horizon. Available Stable Funding (ASF) must be greater than or equal to Required Stable Funding (RSF), ensuring banks are not overly reliant on short-term funding."
  },
  {
    id: 46,
    type: "multiple-choice",
    topic: "Liquidity Risk",
    question: "A maturity ladder is used in liquidity risk management to:",
    options: [
      "A. Calculate VaR across different time horizons",
      "B. Ensure regular cash flows by investing in securities with staggered maturities, avoiding concentration of maturities at a single point",
      "C. Rank capital instruments by their seniority in a default waterfall",
      "D. Allocate capital to business lines based on their risk-weighted assets"
    ],
    correctAnswer: 1,
    explanation: "A maturity ladder maps all contractual cash inflows and outflows against their maturity dates, revealing potential future funding gaps. By staggering maturities, firms avoid cliff-edge liquidity risk where large amounts of funding mature simultaneously."
  },
  {
    id: 47,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "The Three Lines of Defence model assigns which role to the first line?",
    options: [
      "A. Independent audit and assurance of the overall control framework",
      "B. Setting and monitoring risk appetite on behalf of the board",
      "C. Business operations and front-line management, where controls are embedded",
      "D. Regulatory reporting and liaison with the FCA and PRA"
    ],
    correctAnswer: 2,
    explanation: "The first line comprises business operations (front office, operations, IT) — the people who own and manage risk as part of their day-to-day activities. They implement controls, report incidents, and are accountable for managing risks within their processes."
  },
  {
    id: 48,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "In the Three Lines of Defence model, the second line is primarily:",
    options: [
      "A. The board of directors and audit committee",
      "B. Risk management and compliance functions that oversee and challenge the first line",
      "C. External auditors and regulators",
      "D. Internal audit, providing independent assurance"
    ],
    correctAnswer: 1,
    explanation: "The second line comprises risk management and compliance functions. They set risk frameworks, develop policies, provide oversight and challenge to the first line, and report to senior management. They do not own the underlying risks."
  },
  {
    id: 49,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "In the Three Lines of Defence model, internal audit constitutes the third line because:",
    options: [
      "A. It reports directly to the front-office head of trading",
      "B. It sets the firm's risk appetite and capital allocation",
      "C. It acts as an independent regulator of the firm's business activities",
      "D. It provides independent assurance on the effectiveness of the first and second lines of defence"
    ],
    correctAnswer: 3,
    explanation: "Internal audit is the third line, providing objective and independent assurance to the board and senior management that the first and second lines are operating effectively. It has no responsibility for risk ownership or day-to-day risk management."
  },
  {
    id: 50,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "A Risk and Control Self-Assessment (RCSA) is best described as:",
    options: [
      "A. An external audit commissioned by the regulator to assess a firm's risk profile",
      "B. A top-down capital allocation process driven by the risk function",
      "C. A bottom-up process in which business lines identify, assess, and evaluate their own risks and controls",
      "D. A regulatory reporting requirement under Pillar 3 of Basel III"
    ],
    correctAnswer: 2,
    explanation: "RCSA (sometimes called self-certification) is a bottom-up process where risk owners in business lines systematically identify the risks in their processes, evaluate existing controls, and assess residual risk. It feeds into the firm's risk register and risk appetite reporting."
  },
  {
    id: 51,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Key Risk Indicators (KRIs) are best described as:",
    options: [
      "A. Measures of a firm's profitability relative to its risk-weighted assets",
      "B. Objective quantitative metrics that provide an ongoing health check of the risk environment, flagging emerging risks before they crystallise",
      "C. The maximum loss limits set for individual trading desks",
      "D. Statistical models used to forecast the probability of operational risk losses"
    ],
    correctAnswer: 1,
    explanation: "KRIs are forward- or concurrent-looking metrics that signal the level of risk in a process. Examples include: staff turnover rates (people risk), number of failed trades (process risk), system downtime hours (systems risk). They trigger escalation when thresholds are breached."
  },
  {
    id: 52,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Which of the following is the best example of a leading KRI for processing errors?",
    options: [
      "A. The total number of settlement failures recorded in the previous quarter",
      "B. The amount of regulatory fines paid by the firm in the current year",
      "C. The staff turnover rate in the operations team as a predictor of future processing errors",
      "D. The number of customer complaints received about account errors last month"
    ],
    correctAnswer: 2,
    explanation: "Leading indicators signal future risk — they predict what might happen. Staff turnover is a leading KRI because losing experienced staff tends to increase processing error rates in the future. The other options are lagging indicators — they measure what has already happened."
  },
  {
    id: 53,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "A near miss in operational risk management is best described as:",
    options: [
      "A. A risk event that occurred and caused a significant financial loss",
      "B. An incident that occurred but caused no actual loss because a control or chance intervened before loss was realised",
      "C. A theoretical scenario used in stress testing to estimate potential future losses",
      "D. A risk that has been identified but has not yet occurred"
    ],
    correctAnswer: 1,
    explanation: "Near misses are events where something went wrong but no loss resulted — for example, a settlement instruction was sent to the wrong counterparty but intercepted before processing. Near misses are valuable data points because they reveal control weaknesses before actual losses occur."
  },
  {
    id: 54,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Scenario analysis in operational risk management:",
    options: [
      "A. Uses only historical loss data to extrapolate future risk levels",
      "B. Is a purely quantitative technique based on statistical modelling",
      "C. Relies on the experience and judgement of business professionals to construct plausible but severe combinations of events",
      "D. Is prohibited under Basel II because it introduces subjectivity into capital calculations"
    ],
    correctAnswer: 2,
    explanation: "Scenario analysis combines expert judgement with data to explore tail risks — low-frequency, high-severity events that may not appear in historical data. Experts (business managers, risk officers) construct plausible severe scenarios to estimate potential losses and test control frameworks."
  },
  {
    id: 55,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Benchmarking as a risk assessment technique involves:",
    options: [
      "A. Setting internal risk limits based on the firm's historical loss experience",
      "B. Allocating operational risk capital based on gross income",
      "C. Comparing the firm's risk profile, loss data, and KRIs against competitors and industry peers to assess relative performance",
      "D. Ranking risks by their frequency of occurrence and potential impact"
    ],
    correctAnswer: 2,
    explanation: "Benchmarking compares a firm's operational risk metrics against external data — industry loss databases, peer group surveys, or regulatory data. It helps identify whether the firm manages specific risks better or worse than its peers and can reveal blind spots."
  },
  {
    id: 56,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Rating and ranking as a risk prioritisation technique involves:",
    options: [
      "A. Assigning credit ratings to operational risk events based on their severity",
      "B. Using a risk matrix to assess risks by likelihood and impact and rank them to focus management attention",
      "C. Comparing the firm's risk scores against external benchmarks",
      "D. Calculating VaR for each risk category and ranking them by capital consumption"
    ],
    correctAnswer: 1,
    explanation: "Rating and ranking uses a risk matrix (likelihood x impact) to score and prioritise risks. Risks with high likelihood and high impact receive the highest priority. This helps management allocate limited resources and attention to the most material risks."
  },
  {
    id: 57,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "The primary purpose of an operational risk appetite statement is to:",
    options: [
      "A. Calculate the minimum regulatory capital required under the Basic Indicator Approach",
      "B. Define the types and levels of operational risk the board is prepared to accept, and establish escalation procedures for risks exceeding limits",
      "C. Document all historical operational risk loss events for regulatory submission",
      "D. Set the trading limits for front-office business units"
    ],
    correctAnswer: 1,
    explanation: "The risk appetite statement expresses the board's willingness to accept specific types and levels of operational risk. It typically includes quantitative metrics (e.g., maximum loss tolerance), qualitative statements (e.g., zero tolerance for fraud), and escalation procedures when limits are breached."
  },
  {
    id: 58,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "The seven Basel II operational risk event type categories include all of the following EXCEPT:",
    options: [
      "A. Internal Fraud",
      "B. Clients, Products and Business Practices",
      "C. Strategic and Business Risk",
      "D. Damage to Physical Assets"
    ],
    correctAnswer: 2,
    explanation: "The seven Basel II OR event types are: (1) Internal Fraud, (2) External Fraud, (3) Employment Practices and Workplace Safety, (4) Clients, Products and Business Practices, (5) Damage to Physical Assets, (6) Business Disruption and System Failures, (7) Execution, Delivery and Process Management. Strategic risk is not included."
  },
  {
    id: 59,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Internal loss data analysis in operational risk management:",
    options: [
      "A. Uses VaR techniques to estimate future losses from market risk",
      "B. Maps actual historical loss events to OR categories and uses statistical techniques to model the loss distribution",
      "C. Relies solely on expert judgement because historical data is insufficient",
      "D. Is only required for banks using the Advanced Measurement Approach"
    ],
    correctAnswer: 1,
    explanation: "Internal loss data collection and analysis maps actual loss events to Basel event type categories and business lines. Statistical techniques (including VaR-type approaches) are used to model the severity and frequency distributions of losses to estimate capital requirements and identify risk hotspots."
  },
  {
    id: 60,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "The key purpose of operational risk monitoring and reporting is:",
    options: [
      "A. To calculate regulatory capital requirements for submission to the PRA",
      "B. To provide transparency and communication to management, and to facilitate early decisive action when risks exceed appetite",
      "C. To satisfy external auditors that the firm has adequate internal controls",
      "D. To document all risk events for inclusion in the annual report"
    ],
    correctAnswer: 1,
    explanation: "Internal risk reporting provides the board and management with the information they need to understand the firm's risk profile, identify trends, and act decisively. Good reporting creates transparency, supports accountability, and enables early intervention before risks crystallise into losses."
  },
  {
    id: 61,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Key person risk is best described as:",
    options: [
      "A. The risk of fraud by a senior employee with privileged system access",
      "B. The risk of significant operational disruption if a critical individual leaves, is incapacitated, or becomes unavailable",
      "C. The risk that a firm fails to comply with the Senior Managers and Certification Regime",
      "D. The risk that remuneration structures incentivise excessive risk-taking"
    ],
    correctAnswer: 1,
    explanation: "Key person risk arises when one or more individuals hold critical knowledge, relationships, or skills that are not adequately documented or shared. If they leave suddenly (resignation, illness, death), the firm may face significant operational disruption until a replacement is found and trained."
  },
  {
    id: 62,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Which of the following is the best description of corporate culture as an operational risk factor?",
    options: [
      "A. The formal risk policies and procedures documented in the risk management framework",
      "B. The collective norms, values, attitudes, and behaviours that shape how employees act and make decisions in practice",
      "C. The tone set by regulators through their supervisory expectations and enforcement actions",
      "D. The financial incentive structures set by HR to drive business performance"
    ],
    correctAnswer: 1,
    explanation: "Corporate culture is an informal but powerful driver of operational risk. A culture where errors are hidden, profits trump compliance, and management discourages challenge can cause systemic operational failures. The Wells Fargo and Barings cases are stark illustrations of how culture drives operational losses."
  },
  {
    id: 63,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Which of the following is an example of an indirect operational risk loss?",
    options: [
      "A. A 2 million pound fine levied by the FCA for systems and controls failures",
      "B. 500,000 pounds in legal fees incurred defending a mis-selling claim",
      "C. Reputational damage leading to the future loss of clients and revenue following a high-profile operational failure",
      "D. The cost of replacing a failed IT system"
    ],
    correctAnswer: 2,
    explanation: "Indirect losses are harder to quantify because they are not directly paid out — they arise as a consequence of the incident. Reputational damage that causes customers to leave and future revenue to decline is a classic indirect loss. Direct losses (fines, legal fees, replacement costs) are more straightforward to measure."
  },
  {
    id: 64,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Business Continuity Planning (BCP) and Disaster Recovery Planning (DRP) differ in that:",
    options: [
      "A. BCP covers only IT systems; DRP covers all business operations",
      "B. DRP is required by the FCA; BCP is a voluntary best practice",
      "C. BCP aims to maintain critical business operations during a disruption; DRP focuses specifically on recovering IT systems and data after a failure",
      "D. BCP is a long-term strategic plan; DRP is triggered only for external events such as pandemics"
    ],
    correctAnswer: 2,
    explanation: "BCP (Business Continuity Planning) is broader — it covers how critical business functions continue during any disruption (staff absence, building loss, system failure). DRP is a subset focused specifically on recovering IT infrastructure, systems, and data after a failure or disaster."
  },
  {
    id: 65,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Which of the following best describes a DDoS (Distributed Denial of Service) attack as an operational risk?",
    options: [
      "A. Hackers infiltrate the firm's systems and steal customer data for identity fraud",
      "B. An employee inadvertently installs malware by clicking a phishing email link",
      "C. Attackers flood the firm's servers with massive volumes of traffic to overwhelm systems and deny service to legitimate users",
      "D. Ransomware encrypts all files on the firm's network, demanding payment for decryption keys"
    ],
    correctAnswer: 2,
    explanation: "A DDoS attack uses networks of compromised computers (botnets) to overwhelm a target's servers with traffic, causing systems to crash or become unavailable. For financial firms, this can disrupt trading platforms, customer-facing services, and payment systems."
  },
  {
    id: 66,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Phishing as a cyber risk in financial services involves:",
    options: [
      "A. Criminals installing keylogging software on bank ATMs to capture card PINs",
      "B. Attackers sending deceptive emails or messages that trick employees into revealing credentials or clicking malicious links",
      "C. Exploiting software vulnerabilities to gain unauthorised access to trading systems",
      "D. Intercepting and reading unencrypted communications between trading counterparties"
    ],
    correctAnswer: 1,
    explanation: "Phishing is a social engineering attack that uses deceptive communication (emails, texts, calls) to manipulate individuals into revealing sensitive information (passwords, account details) or taking actions (clicking links, transferring funds) that benefit the attacker."
  },
  {
    id: 67,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Outsourcing risk, as illustrated by the Raphael's Bank case, arises primarily because:",
    options: [
      "A. Outsourced activities are excluded from the firm's regulatory capital calculations",
      "B. The outsourcing firm assumes full legal liability for errors made by the service provider",
      "C. Regulators prohibit financial firms from outsourcing core compliance functions",
      "D. A firm may become dependent on a third party's systems and processes over which it has limited day-to-day control, while retaining full regulatory responsibility for those activities"
    ],
    correctAnswer: 3,
    explanation: "When firms outsource activities, they transfer operational tasks but not regulatory accountability. If the service provider fails, the regulated firm remains responsible. Inadequate oversight and due diligence — as seen in the Raphael's Bank case — can allow outsourcing risk to escalate undetected."
  },
  {
    id: 68,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "A process risk event that should always be reported, even when no financial loss results, is:",
    options: [
      "A. A change in management approved by the board",
      "B. A near miss, such as a contract error that was caught and corrected before settlement",
      "C. A regulatory requirement to enhance capital buffers",
      "D. The resignation of a senior risk manager"
    ],
    correctAnswer: 1,
    explanation: "Near misses — including contract errors caught before loss — must be recorded. They reveal weaknesses in controls that, if left unaddressed, could result in actual losses. Near miss data is a valuable input into RCSA, KRI monitoring, and loss modelling."
  },
  {
    id: 69,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "In the trade lifecycle, which stage involves the exchange of trade details between counterparties to verify they agree on economic terms?",
    options: [
      "A. Pre-trade — due diligence and counterparty credit assessment",
      "B. Post-settlement — reconciliation and record-keeping",
      "C. Pre-settlement — trade confirmation between buyer and seller",
      "D. Trade execution — matching of orders on an exchange or via a broker"
    ],
    correctAnswer: 2,
    explanation: "Trade confirmation (pre-settlement) is where both counterparties exchange and agree the economic terms of a trade — instrument, quantity, price, settlement date, and account details. Discrepancies must be resolved before settlement to prevent fails."
  },
  {
    id: 70,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "Delivery versus Payment (DVP) in securities settlement is designed to:",
    options: [
      "A. Eliminate counterparty credit risk by netting all payments through a CCP",
      "B. Ensure that the delivery of securities and the payment of cash occur simultaneously, eliminating principal risk",
      "C. Allow settlement to occur before the agreed value date to reduce exposure",
      "D. Enable failed trades to be automatically recycled until successful settlement occurs"
    ],
    correctAnswer: 1,
    explanation: "DVP is the cornerstone of settlement risk management. By ensuring that securities are delivered only if (and when) payment is made — and vice versa — DVP eliminates the risk that one leg of the trade settles while the other fails (Herstatt risk / principal risk)."
  },
  {
    id: 71,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "A settlement fail occurs when:",
    options: [
      "A. A counterparty submits incorrect settlement instructions to the CSD",
      "B. One party to a trade does not deliver securities or pay cash by the agreed settlement date",
      "C. The CCP fails to meet its margin call obligations to member firms",
      "D. A corporate action election is submitted after the market deadline"
    ],
    correctAnswer: 1,
    explanation: "A settlement fail (or failed trade) occurs when a seller cannot deliver the securities, or a buyer cannot deliver the cash, by the contractual settlement date. Fails generate financial penalties under CSDR regulations, require 'buy-in' procedures, and create operational and reputational risk."
  },
  {
    id: 72,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "Corporate action late election risk refers to:",
    options: [
      "A. The risk that a company's board votes against a proposed merger at an AGM",
      "B. The risk that investors miss the deadline to submit their election for a voluntary corporate action, resulting in a default option being applied and potential financial loss or reputational damage",
      "C. The risk that mandatory dividend payments are delayed by the issuer",
      "D. The risk that a rights issue is under-subscribed by institutional investors"
    ],
    correctAnswer: 1,
    explanation: "In voluntary corporate actions (e.g., tender offers, rights issues, scheme elections), investors must submit their elections by a market deadline. Missing this deadline results in the default option being applied automatically, which may be financially suboptimal. Late elections can also expose custodians to client liability claims."
  },
  {
    id: 73,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "Know Your Customer (KYC) requirements in client on-boarding are primarily designed to:",
    options: [
      "A. Ensure the firm offers the most suitable investment products to each client segment",
      "B. Verify the identity of clients, understand the nature of their business, and detect potential money laundering or terrorist financing risks",
      "C. Collect performance attribution data to improve future investment recommendations",
      "D. Comply with MiFID II best execution requirements"
    ],
    correctAnswer: 1,
    explanation: "KYC is a fundamental AML/CFT control. Firms must verify client identity, understand the source of funds, assess the client's risk profile for money laundering, and conduct ongoing monitoring. KYC failures can result in regulatory fines and criminal prosecution for the firm and its senior managers."
  },
  {
    id: 74,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "Under MiFID II, an investment firm assessing the suitability of a recommendation must collect information from the client about:",
    options: [
      "A. The client's preferred trading platform and execution venue",
      "B. The client's knowledge and experience, financial situation, and investment objectives (including risk tolerance)",
      "C. The client's credit history and existing loan obligations",
      "D. The client's tax residency status and reporting obligations"
    ],
    correctAnswer: 1,
    explanation: "MiFID II suitability requirements mandate that firms collect information on: (1) the client's financial situation (income, assets, liabilities), (2) investment objectives (time horizon, purpose, risk appetite), and (3) knowledge and experience. This is sometimes called the 'fact-find' or KYC suitability assessment."
  },
  {
    id: 75,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "The middle office in a financial firm is primarily responsible for:",
    options: [
      "A. Executing client orders and managing proprietary trading positions",
      "B. Revaluing positions, verifying P&L, and providing independent risk oversight of front-office trading activity",
      "C. Settling trades and reconciling nostro and custody accounts",
      "D. Onboarding new clients and maintaining KYC documentation"
    ],
    correctAnswer: 1,
    explanation: "The middle office performs independent valuation (revaluing portfolios at market prices), P&L verification, risk measurement (VaR, sensitivities), and limit monitoring. It acts as a check on front-office activity, providing the independent oversight that was absent in the Barings and Societe Generale cases."
  },
  {
    id: 76,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "Which of the following is a potential consequence of poor reconciliation processes?",
    options: [
      "A. Higher trading profits due to reduced transaction costs",
      "B. Faster trade confirmation leading to reduced pre-settlement risk",
      "C. Undetected discrepancies between internal records and counterparty/custodian records, leading to financial losses, fails, and regulatory breaches",
      "D. Reduced capital requirements under Basel III"
    ],
    correctAnswer: 2,
    explanation: "Reconciliation compares the firm's internal records against external sources (counterparty confirms, CSD/custodian statements, exchange data). Failure to reconcile regularly or accurately allows discrepancies to persist, potentially masking fraud, errors, or control failures — as seen in the Barings case."
  },
  {
    id: 77,
    type: "multiple-choice",
    topic: "Support Functions",
    question: "The legal function's primary operational risk contribution occurs:",
    options: [
      "A. During post-settlement reconciliation of complex derivatives contracts",
      "B. When enforcing collateral agreements following a counterparty default",
      "C. At the set-up and on-boarding stage, ensuring contracts are valid, enforceable, and that netting agreements are legally sound",
      "D. When calculating regulatory capital for operational risk under Basel III"
    ],
    correctAnswer: 2,
    explanation: "Legal risk is a component of operational risk. The legal function's primary contribution is at the on-boarding/set-up stage: reviewing master agreements (ISDA, CSA), ensuring counterparty legal capacity, validating netting enforceability, and checking jurisdiction-specific requirements. Errors at this stage can invalidate key risk mitigants."
  },
  {
    id: 78,
    type: "multiple-choice",
    topic: "Support Functions",
    question: "TUPE (Transfer of Undertakings Protection of Employment) regulations are relevant to operational risk because:",
    options: [
      "A. They require firms to post additional capital when key staff leave",
      "B. They mandate that firms disclose employee remuneration to regulators",
      "C. They protect employees' terms and conditions when business activities are transferred, creating HR and operational risk during mergers, acquisitions, and outsourcing transfers",
      "D. They prohibit firms from outsourcing regulated activities without FCA approval"
    ],
    correctAnswer: 2,
    explanation: "TUPE protects employees when a business or service is transferred to a new employer (e.g., in a merger, acquisition, or outsourcing). Failing to comply with TUPE creates employment law risk and operational disruption — staff may resist transfer, and firms may face employment tribunal claims."
  },
  {
    id: 79,
    type: "multiple-choice",
    topic: "Support Functions",
    question: "Project and change management risk in a financial firm is illustrated by:",
    options: [
      "A. A trader exceeding authorised position limits in equity futures",
      "B. A compliance officer failing to file a suspicious transaction report",
      "C. A poorly managed system migration (such as TSB 2018) causing significant operational disruption because risks were inadequately identified and managed during the change programme",
      "D. A fund manager exceeding internal investment concentration limits"
    ],
    correctAnswer: 2,
    explanation: "Change management is a significant source of operational risk. Major IT migrations, system upgrades, product launches, and business restructuring all create risk if not properly planned, tested, and managed. TSB's 2018 platform migration is the textbook example of change management failure."
  },
  {
    id: 80,
    type: "multiple-choice",
    topic: "Support Functions",
    question: "Capacity risk in the context of product development and marketing arises when:",
    options: [
      "A. A new product is launched without FCA approval and is immediately withdrawn",
      "B. A marketing campaign generates demand that significantly exceeds the firm's operational capacity to process, administer, or service the product",
      "C. A product is mis-sold to customers who do not meet the target market criteria",
      "D. The firm's capital is insufficient to support a new product line"
    ],
    correctAnswer: 1,
    explanation: "Capacity risk occurs when demand surge from a successful marketing campaign overwhelms operational systems, staffing, or processes. For example, a 'best buy' ISA promotion might generate volumes that the back office cannot process, leading to errors, delays, and customer complaints."
  },
  {
    id: 81,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Under Basel II's Pillar 1, the minimum capital adequacy ratio is:",
    options: [
      "A. 4% of risk-weighted assets",
      "B. 6% of risk-weighted assets",
      "C. 8% of risk-weighted assets",
      "D. 10% of risk-weighted assets"
    ],
    correctAnswer: 2,
    explanation: "Basel II (and Basel III) maintain the Basel I minimum total capital ratio of 8% of risk-weighted assets under Pillar 1. Under Basel III, there are additional buffer requirements (capital conservation buffer, countercyclical buffer), but the Pillar 1 minimum remains 8%."
  },
  {
    id: 82,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "The Basic Indicator Approach (BIA) for calculating operational risk capital under Basel II requires:",
    options: [
      "A. Allocating 8% of total risk-weighted assets to operational risk",
      "B. Applying different capital percentages to eight defined business lines",
      "C. Using the firm's own internal loss models to estimate operational risk capital",
      "D. Holding capital equal to 15% of the firm's average positive annual gross income over the past three years"
    ],
    correctAnswer: 3,
    explanation: "Under the BIA (the simplest Basel II approach), OR capital = 15% x average gross income over three years. It is the least risk-sensitive approach and used by smaller, less complex firms. Gross income is a broad proxy for the level of operational risk activity."
  },
  {
    id: 83,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "The Standardised Approach (TSA) for operational risk capital under Basel II differs from the Basic Indicator Approach in that:",
    options: [
      "A. It uses a lower capital percentage (10%) applied to total gross income",
      "B. It applies different capital percentages (beta factors) to eight distinct business lines, reflecting their different risk profiles",
      "C. It requires firms to develop internal VaR models for each business line",
      "D. It is available only to banks with total assets exceeding 50 billion pounds"
    ],
    correctAnswer: 1,
    explanation: "Under TSA, gross income is divided across eight business lines (e.g., retail banking, trading and sales, asset management), each with a different beta factor (ranging from 12% to 18%). This makes capital allocation more sensitive to the actual mix of activities than the flat 15% BIA rate."
  },
  {
    id: 84,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Basel II's three-pillar structure consists of:",
    options: [
      "A. Pillar 1: Risk governance, Pillar 2: Capital adequacy, Pillar 3: Crisis management",
      "B. Pillar 1: Minimum capital requirements, Pillar 2: Supervisory review process (ICAAP/SREP), Pillar 3: Market discipline through public disclosure",
      "C. Pillar 1: Credit risk, Pillar 2: Market risk, Pillar 3: Operational risk",
      "D. Pillar 1: Regulatory capital, Pillar 2: Liquidity requirements, Pillar 3: Leverage ratio"
    ],
    correctAnswer: 1,
    explanation: "Basel II's three pillars are: Pillar 1 (minimum capital requirements for credit, market, and OR), Pillar 2 (supervisory review — firms conduct ICAAP, regulators conduct SREP and may impose additional capital requirements), and Pillar 3 (market discipline — mandatory public disclosure of risk and capital information)."
  },
  {
    id: 85,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "The Internal Capital Adequacy Assessment Process (ICAAP) is a Pillar 2 requirement under which:",
    options: [
      "A. Regulators conduct an annual on-site inspection of the firm's trading operations",
      "B. Firms must publicly disclose their risk exposures and capital ratios on a quarterly basis",
      "C. Firms self-assess all material risks (including those not in Pillar 1) and determine whether their capital is adequate to cover them",
      "D. Firms must adopt the Advanced Measurement Approach for operational risk capital"
    ],
    correctAnswer: 2,
    explanation: "ICAAP is the firm's own assessment of the capital needed to cover all material risks, including Pillar 1 risks and those not captured by Pillar 1 (e.g., pension risk, concentration risk, strategic risk, reputational risk). The regulator reviews the ICAAP through the Supervisory Review and Evaluation Process (SREP) and may impose a Pillar 2A capital add-on."
  },
  {
    id: 86,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Pillar 3 of Basel III requires financial institutions to:",
    options: [
      "A. Hold minimum capital buffers against unexpected credit losses",
      "B. Conduct an annual self-assessment of capital adequacy submitted to their supervisor",
      "C. Publicly disclose detailed information about their risk exposures, capital adequacy, and risk management processes to promote market discipline",
      "D. Report their liquidity position to the regulator daily using standardised templates"
    ],
    correctAnswer: 2,
    explanation: "Pillar 3 promotes market discipline by mandating public disclosure of risk and capital information. By making data available to counterparties, investors, and analysts, markets can reward well-managed firms and penalise poorly managed ones — complementing regulatory supervision."
  },
  {
    id: 87,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "In the UK, the dual regulation of financial firms involves:",
    options: [
      "A. Regulation by both the FCA and the Bank of England's Monetary Policy Committee",
      "B. The FCA regulating conduct (consumer protection, market integrity) and the PRA regulating prudential standards (financial safety and soundness) for dual-regulated firms",
      "C. The PRA regulating all financial firms and the FCA regulating only investment firms",
      "D. The FCA and PRA jointly setting capital requirements with no distinction of responsibilities"
    ],
    correctAnswer: 1,
    explanation: "The UK's post-2013 'twin peaks' model has the FCA responsible for conduct regulation (treating customers fairly, market integrity) and the PRA (part of the Bank of England) responsible for prudential regulation (capital, liquidity, governance) for banks, insurers, and major investment firms."
  },
  {
    id: 88,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "MiFID II (Markets in Financial Instruments Directive II) primarily addresses which operational risk concern?",
    options: [
      "A. Minimum capital requirements for market risk in trading firms",
      "B. Conduct of business obligations including best execution, suitability, and pre-/post-trade transparency requirements",
      "C. Liquidity coverage requirements for investment firms under stress",
      "D. Reporting requirements for derivative positions to trade repositories"
    ],
    correctAnswer: 1,
    explanation: "MiFID II is primarily a conduct regulation that covers: best execution obligations, suitability and appropriateness assessments, product governance, transaction reporting, pre- and post-trade transparency, and investor protection requirements. It creates significant operational compliance obligations for investment firms."
  },
  {
    id: 89,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "EMIR (European Market Infrastructure Regulation) primarily requires:",
    options: [
      "A. All investment firms to report suspicious transactions to regulators within 24 hours",
      "B. Banks to maintain a minimum LCR of 100% at all times",
      "C. OTC derivatives to be reported to trade repositories and, where eligible, centrally cleared through a CCP",
      "D. Fund managers to disclose their investment strategies and fee structures to retail investors"
    ],
    correctAnswer: 2,
    explanation: "EMIR requires OTC derivatives counterparties to: (1) report all derivatives trades to a registered trade repository; (2) centrally clear eligible standardised OTC derivatives through a CCP; and (3) apply risk mitigation techniques (collateral, daily mark-to-market) to non-cleared bilateral derivatives."
  },
  {
    id: 90,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "The General Data Protection Regulation (GDPR) creates operational risk for financial firms primarily because:",
    options: [
      "A. It requires firms to hold additional capital against the risk of data breaches",
      "B. It prohibits firms from using customer data for risk modelling purposes",
      "C. Breaches of GDPR (e.g., unauthorised disclosure of personal data) can result in substantial fines (up to 4% of global turnover) and reputational damage",
      "D. It requires all customer communications to be approved by the FCA before sending"
    ],
    correctAnswer: 2,
    explanation: "GDPR creates operational risk through its strict requirements for data security, consent, and subject rights. A data breach or failure to comply with subject access requests can trigger fines of up to 20 million euros or 4% of global annual turnover (whichever is higher), as well as significant reputational damage."
  },
  {
    id: 91,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "The Senior Managers and Certification Regime (SMCR) is designed to:",
    options: [
      "A. Restrict senior managers' remuneration to a fixed multiple of average employee pay",
      "B. Require senior managers to sit examinations demonstrating their knowledge of regulatory requirements",
      "C. Establish individual accountability for senior individuals, requiring them to take reasonable steps to prevent regulatory breaches in their areas of responsibility",
      "D. Create a public register of all individuals working in regulated financial services roles"
    ],
    correctAnswer: 2,
    explanation: "SMCR (introduced in 2016 for banks, extended to all FCA-regulated firms in 2019) requires senior managers to hold FCA/PRA approval, have clear documented Statements of Responsibilities, and take reasonable steps to prevent breaches. It replaced the Approved Persons regime to improve individual accountability after the financial crisis."
  },
  {
    id: 92,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Operational Resilience, as defined by the PRA and FCA post-2021, requires financial firms to:",
    options: [
      "A. Maintain minimum operational risk capital buffers of at least twice the Basic Indicator Approach amount",
      "B. Identify their important business services, set impact tolerances for disruption, and demonstrate they can remain within those tolerances",
      "C. Outsource all non-core functions to reduce operational complexity",
      "D. Conduct annual BCP tests witnessed by PRA supervisors"
    ],
    correctAnswer: 1,
    explanation: "The 2021 PRA/FCA Operational Resilience framework requires firms to: identify Important Business Services (IBS) critical to market functioning or consumer protection; set impact tolerances (maximum tolerable disruption time/impact); map people, processes, technology, and data; and test their ability to remain within tolerances. The focus is on ability to recover, not just preventing failure."
  },
  {
    id: 93,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Which of the following correctly describes the Basel Committee on Banking Supervision (BCBS) 'Sound Practices for the Management and Supervision of Operational Risk'?",
    options: [
      "A. A legally binding EU directive that sets minimum operational risk capital requirements",
      "B. International guidelines setting out principles for developing a robust operational risk management framework, covering governance, risk appetite, the three lines of defence, and disclosure",
      "C. A UK-specific regulatory rule requiring all banks to adopt the Advanced Measurement Approach",
      "D. A set of accounting standards for recognising operational risk losses in financial statements"
    ],
    correctAnswer: 1,
    explanation: "The BCBS Sound Practices paper provides high-level principles (not legally binding rules) covering: board/senior management responsibilities, risk appetite, the three lines of defence, identification/assessment/monitoring/control, business continuity, and public disclosure. It influences regulatory frameworks globally."
  },
  {
    id: 94,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Under the Senior Managers Regime (SMR), a 'Statement of Responsibilities' (SoR) is:",
    options: [
      "A. A document setting out the firm's overall risk appetite and tolerance levels",
      "B. A public disclosure document showing all senior managers' remuneration",
      "C. A document for each Senior Manager specifying the business areas and activities they are personally responsible for",
      "D. A regulatory submission summarising all operational risk incidents in the past year"
    ],
    correctAnswer: 2,
    explanation: "Each Senior Manager must have a Statement of Responsibilities (SoR) describing clearly and precisely the aspects of the firm's affairs for which they are individually responsible. SoRs must be kept up to date and submitted to the FCA/PRA. They are used to hold individuals accountable for regulatory failures in their area."
  },
  {
    id: 95,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "The Advanced Measurement Approach (AMA) for operational risk capital allows firms to:",
    options: [
      "A. Use a simplified 15% gross income multiplier to calculate capital requirements",
      "B. Apply different beta factors to eight standard business lines",
      "C. Use their own internally developed statistical models to calculate operational risk regulatory capital, subject to regulatory approval",
      "D. Set operational risk capital at zero if they can demonstrate sufficiently strong controls"
    ],
    correctAnswer: 2,
    explanation: "The AMA is the most sophisticated Basel II approach, allowing qualifying firms to use their own internal models (incorporating internal loss data, external loss data, scenario analysis, and business environment/internal control factors) to calculate OR capital. It requires explicit regulatory approval and independent validation."
  },
  {
    id: 96,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Risk culture as a driver of operational risk includes which of the following contributing factors?",
    options: [
      "A. The level of computing infrastructure investment and system redundancy",
      "B. The firm's geographic diversification across international markets",
      "C. Resource levels (staffing), remuneration structures, and the quality of management communication about risk expectations",
      "D. The number of products offered across different customer segments"
    ],
    correctAnswer: 2,
    explanation: "Risk culture refers to the shared values and norms that drive risk behaviour. Key drivers include: whether staffing levels are adequate to manage risk (resource levels), whether incentive structures reward risk-taking over risk management (remuneration), and whether management clearly communicates and reinforces expected risk behaviours (communication)."
  },
  {
    id: 97,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Which of the following best illustrates a people risk driven by remuneration structures?",
    options: [
      "A. A trader who is paid a large bonus for short-term profits takes positions that expose the firm to excessive long-term risk",
      "B. A systems failure causes the trading platform to crash during a period of market volatility",
      "C. A natural disaster destroys the firm's primary data centre",
      "D. A contractual error occurs because a new product process was inadequately documented"
    ],
    correctAnswer: 0,
    explanation: "Remuneration risk arises when incentive structures reward short-term performance without adequately accounting for risk. If a trader is rewarded purely for P&L without regard to risk-adjusted returns, they have an incentive to take excessive risk. This was a key finding of the FSA/PRA post-crisis reviews."
  },
  {
    id: 98,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Merger integration risk in financial services primarily involves which support function?",
    options: [
      "A. Front-office trading, which must merge all client books immediately",
      "B. Compliance, which must merge all regulatory permissions in advance",
      "C. Operations and HR, which must integrate systems, processes, and people from both organisations",
      "D. Internal audit, which must conduct a complete audit of the acquired firm before integration begins"
    ],
    correctAnswer: 2,
    explanation: "Merger and acquisition integration is primarily an operations and HR challenge. Systems must be consolidated (creating IT risk), processes must be standardised (creating process risk), and people from both organisations must be integrated (creating people/culture risk). TSB's separation from Lloyds illustrates the magnitude of operational risk in system migration."
  },
  {
    id: 99,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "AML (Anti-Money Laundering) obligations require financial firms to:",
    options: [
      "A. Refuse all transactions involving clients from high-risk jurisdictions",
      "B. Report all transactions exceeding 10,000 pounds to the National Crime Agency",
      "C. Monitor client transactions on an ongoing basis, report suspicious activity, and maintain records that allow authorities to reconstruct transactions",
      "D. Obtain prior regulatory approval before on-boarding any new institutional client"
    ],
    correctAnswer: 2,
    explanation: "AML obligations under the Money Laundering Regulations and Proceeds of Crime Act include: CDD (customer due diligence/KYC) at on-boarding, ongoing transaction monitoring, filing Suspicious Activity Reports (SARs) with the NCA via the UKFIU when suspicious activity is detected, and maintaining records for at least 5 years."
  },
  {
    id: 100,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "The operational risk management process should begin with:",
    options: [
      "A. Collecting historical loss data to model the loss distribution",
      "B. Setting key risk indicators to monitor emerging risks",
      "C. Setting the operational risk policy and appetite at board level, establishing governance, culture, and strategic direction",
      "D. Conducting an RCSA across all business lines"
    ],
    correctAnswer: 2,
    explanation: "The OR management process starts with governance — the board setting the OR policy, articulating the risk appetite, and establishing the cultural and structural framework. Everything else (risk identification, RCSA, KRIs, loss data, reporting) flows from this governance foundation."
  },
  {
    id: 101,
    type: "multiple-choice",
    topic: "Credit Risk",
    question: "The objective of a credit risk management function is best described as:",
    options: [
      "A. Eliminating all credit exposures through collateral and netting agreements",
      "B. Maximising risk-adjusted return on credit exposures while keeping risk within acceptable limits set by the board",
      "C. Reporting all credit exposures to the regulator on a daily basis",
      "D. Ensuring no single counterparty exposure exceeds 1% of total assets"
    ],
    correctAnswer: 1,
    explanation: "Credit risk management seeks to optimise the risk-return trade-off — earning adequate returns for the credit risk taken, while ensuring exposures remain within risk appetite. Complete elimination of credit risk would eliminate the business model; the goal is appropriate risk management, not zero risk."
  },
  {
    id: 102,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Standard deviation in the context of market risk is used to measure:",
    options: [
      "A. The probability that a counterparty will default within a given time horizon",
      "B. The variability, uncertainty, or volatility of returns on a financial asset or portfolio",
      "C. The maximum loss at a specified confidence level over a defined period",
      "D. The average return generated by a trading strategy over a historical period"
    ],
    correctAnswer: 1,
    explanation: "Standard deviation measures the dispersion of returns around their mean. Higher standard deviation implies greater uncertainty and volatility. In market risk, it underpins VaR calculations and is used to compare the risk levels of different assets and portfolios."
  },
  {
    id: 103,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "A put option is used as a hedging instrument because:",
    options: [
      "A. It gives the holder the right to buy stock at a fixed strike price, profiting if prices rise",
      "B. It gives the holder the right to sell stock at a fixed strike price, providing downside protection if prices fall",
      "C. It obligates the holder to sell stock at a predetermined price on a future date",
      "D. It provides guaranteed returns regardless of market conditions"
    ],
    correctAnswer: 1,
    explanation: "A put option gives the buyer the right (but not obligation) to sell an asset at the strike price. If the asset price falls below the strike, the put option gains value, offsetting losses on the underlying position. This is a classic hedging strategy — paying an option premium to limit downside risk."
  },
  {
    id: 104,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Market risk limits are most effective when:",
    options: [
      "A. They are set conservatively at 50% of the regulatory capital limit",
      "B. They are based on high-quality, accurate, and timely risk measurement data that genuinely reflects the firm's exposure",
      "C. They are set unilaterally by the risk function without consultation with trading desks",
      "D. They are uniform across all trading desks regardless of the nature of their activities"
    ],
    correctAnswer: 1,
    explanation: "Limits are only as good as the data underpinning them. If risk measurement is inaccurate (wrong models, stale prices, missing positions), limits may be breached without detection, or may restrict valid business without protecting against the real risks. Data quality is the foundation of effective limit management."
  },
  {
    id: 105,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Mean, median, and mode are collectively examples of:",
    options: [
      "A. Measures of dispersion or variability",
      "B. Measures of central tendency that summarise the typical or average value of a dataset",
      "C. Probability distribution parameters used in VaR modelling",
      "D. Risk-adjusted performance measures used in portfolio management"
    ],
    correctAnswer: 1,
    explanation: "Mean (arithmetic average), median (middle value), and mode (most frequent value) are all measures of central tendency — they describe where the centre of a distribution lies. They are fundamental statistical tools used in loss data analysis, KRI reporting, and risk modelling."
  },
  {
    id: 106,
    type: "multiple-choice",
    topic: "Market Risk",
    question: "Volatility risk most significantly affects the pricing of which financial instrument?",
    options: [
      "A. Fixed-rate government bonds",
      "B. Floating-rate notes",
      "C. Options on equities, interest rates, or FX",
      "D. Exchange-traded equity futures"
    ],
    correctAnswer: 2,
    explanation: "Options pricing depends critically on volatility (via the vega greek). Higher implied volatility increases option premiums because there is a greater probability of the option finishing in-the-money. Volatility risk — the risk that volatility changes unexpectedly — is therefore central to options trading and hedging."
  },
  {
    id: 107,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "The risk appetite statement typically includes escalation procedures because:",
    options: [
      "A. Regulators require formal documentation of all decisions made by the board",
      "B. Once a risk exceeds the defined appetite level, a corrective action plan must be triggered and management must be notified to bring the risk back within limits",
      "C. Escalation procedures replace the need for KRIs in monitoring ongoing risk levels",
      "D. Escalation is required only for risks in the External Events category"
    ],
    correctAnswer: 1,
    explanation: "The risk appetite statement defines not just the acceptable level of risk, but what happens when that level is exceeded. Escalation procedures define who is notified (and at what level of the organisation), what corrective actions are required, and within what timeframe risks must be brought back within appetite."
  },
  {
    id: 108,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Which of the following best describes the difference between risk assessment and risk measurement?",
    options: [
      "A. Risk assessment is qualitative; risk measurement is only applicable to market and credit risk",
      "B. Risk assessment is done by the board; risk measurement is done by front-office staff",
      "C. Both risk assessment and risk measurement aim to answer the same fundamental question: how big is the problem?",
      "D. Risk measurement is a regulatory requirement; risk assessment is a voluntary best practice"
    ],
    correctAnswer: 2,
    explanation: "Risk assessment (qualitative, based on expert judgement) and risk measurement (quantitative, using models and data) are complementary techniques that both address the same core question: what is the magnitude of the risk? The choice of technique depends on data availability, the nature of the risk, and the required precision."
  },
  {
    id: 109,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Which of the following describes a key failing of credit rating agencies during the 2007-08 financial crisis in the context of operational risk?",
    options: [
      "A. Rating agencies refused to rate complex structured products, leaving investors without guidance",
      "B. Rating agencies assigned AAA ratings to complex structured products that were later found to be far riskier, due partly to conflicts of interest (being paid by issuers)",
      "C. Rating agencies were nationalised by governments to prevent conflicts of interest",
      "D. Rating agencies failed to disclose their fee structures, creating legal risk for investors"
    ],
    correctAnswer: 1,
    explanation: "Credit rating agencies were heavily criticised for assigning AAA ratings to CDO tranches and other structured products that subsequently suffered catastrophic losses. Conflicts of interest (issuer-pays model), flawed models, and pressure from clients contributed to inflated ratings. This illustrates people, process, and governance failure."
  },
  {
    id: 110,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "A firm introduces a new automated straight-through processing system to replace a manual trade reconciliation process. From an operational risk perspective, this is an example of:",
    options: [
      "A. Risk transfer — moving risk to the system vendor",
      "B. Risk avoidance — eliminating the reconciliation process entirely",
      "C. Risk treatment/reduction through preventative controls — automating to reduce the frequency of human error",
      "D. Risk acceptance — the firm decides to live with the current level of reconciliation errors"
    ],
    correctAnswer: 2,
    explanation: "Automation of manual processes is a preventative control that reduces people risk (human error) by removing human intervention from repetitive, error-prone tasks. This is risk treatment (risk reduction). It does not eliminate risk entirely (systems can fail), but it typically reduces operational risk frequency significantly."
  },
  {
    id: 111,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "The 'Employment Practices and Workplace Safety' Basel II event type covers which of the following?",
    options: [
      "A. A bank employee deliberately falsifying client transaction records for personal gain",
      "B. An employee filing a constructive dismissal claim following a management restructuring",
      "C. A client being sold an unsuitable investment product by a relationship manager",
      "D. A cyber attack on the firm's HR payroll systems"
    ],
    correctAnswer: 1,
    explanation: "The 'Employment Practices and Workplace Safety' event type covers HR-related losses: discrimination claims, unfair dismissal, health and safety breaches, employee relations issues, and diversity/inclusion failures. Constructive dismissal is a classic example. Internal fraud belongs in 'Internal Fraud'; client-related issues go to 'Clients, Products and Business Practices'."
  },
  {
    id: 112,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Which of the following best represents the 'Execution, Delivery and Process Management' Basel II event type?",
    options: [
      "A. A trader secretly hiding trading losses using fictitious hedges",
      "B. Hackers stealing customer data from the firm's database",
      "C. A settlement instruction sent to the wrong counterparty resulting in a failed trade and financial loss",
      "D. A client complaint about a mis-sold structured product"
    ],
    correctAnswer: 2,
    explanation: "'Execution, Delivery and Process Management' covers operational failures in transaction processing — incorrect data entry, failed settlement, reconciliation errors, and documentation failures. A wrongly addressed settlement instruction is a textbook example. It is the most common and numerous (though often low-severity) Basel event type."
  },
  {
    id: 113,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Which Basel II event type would capture losses from a fire that destroys the firm's primary trading floor?",
    options: [
      "A. Business Disruption and System Failures",
      "B. Damage to Physical Assets",
      "C. External Fraud",
      "D. Execution, Delivery and Process Management"
    ],
    correctAnswer: 1,
    explanation: "'Damage to Physical Assets' covers losses from natural disasters (earthquakes, floods, hurricanes) and other events (fire, terrorism) that physically damage the firm's premises, equipment, or infrastructure. 'Business Disruption and System Failures' specifically covers IT and systems outages."
  },
  {
    id: 114,
    type: "multiple-choice",
    topic: "OR Causes and Impacts",
    question: "Which Basel II event type would capture a DDoS attack that causes a 48-hour outage of the firm's trading platform?",
    options: [
      "A. External Fraud",
      "B. Damage to Physical Assets",
      "C. Business Disruption and System Failures",
      "D. Execution, Delivery and Process Management"
    ],
    correctAnswer: 2,
    explanation: "'Business Disruption and System Failures' covers IT system failures, software bugs, hardware failures, network outages, and cyber attacks that cause system unavailability. A DDoS attack disrupting the trading platform is a cyber-driven business disruption and falls clearly in this category."
  },
  {
    id: 115,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "GDPR's 'right to erasure' (right to be forgotten) creates operational risk for financial firms because:",
    options: [
      "A. It requires firms to delete all customer data immediately upon request, potentially breaching AML record-keeping obligations",
      "B. It prevents firms from using customer data for credit risk modelling",
      "C. It requires firms to disclose all data held on a customer to competitors upon request",
      "D. It mandates that all data be stored in the EU regardless of the firm's operating locations"
    ],
    correctAnswer: 0,
    explanation: "GDPR's right to erasure conflicts with AML/CFT requirements to retain customer records for a minimum of five years (and other regulatory requirements for longer periods). Firms must navigate this tension carefully, and failure to maintain mandatory AML records while attempting to comply with GDPR creates regulatory risk."
  },
  {
    id: 116,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Basel III introduced which new requirements beyond Basel II?",
    options: [
      "A. The minimum 8% total capital ratio and the three-pillar framework",
      "B. The LCR, NSFR, leverage ratio, and enhanced capital conservation and countercyclical buffers",
      "C. The Basic Indicator, Standardised, and Advanced Measurement Approaches for OR capital",
      "D. The ICAAP and SREP supervisory review process"
    ],
    correctAnswer: 1,
    explanation: "Basel III built on Basel II by adding: the Liquidity Coverage Ratio (LCR), Net Stable Funding Ratio (NSFR), a non-risk-based Leverage Ratio, a Capital Conservation Buffer (2.5%), and a countercyclical Capital Buffer. These addressed weaknesses exposed by the 2008 financial crisis, particularly around liquidity and leverage."
  },
  {
    id: 117,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "Which of the following is the most accurate description of the relationship between risk appetite, risk capacity, and risk tolerance?",
    options: [
      "A. Risk capacity is a subset of risk appetite, and risk tolerance is set above risk capacity",
      "B. Risk appetite sets the desired risk level; risk capacity is the maximum survivable level; risk tolerance is the permitted deviation from appetite in normal operations",
      "C. Risk tolerance and risk capacity are equivalent terms describing the same concept",
      "D. Risk appetite is set by the regulator; risk capacity and risk tolerance are set internally"
    ],
    correctAnswer: 1,
    explanation: "Risk capacity is the outer boundary — the maximum risk the organisation can absorb before its viability is threatened. Risk appetite is the board's chosen risk level within that capacity. Risk tolerance is the acceptable variation around appetite in day-to-day operations. Appetite is less than or equal to Capacity; Tolerance defines the band around Appetite."
  },
  {
    id: 118,
    type: "multiple-choice",
    topic: "OR Nature",
    question: "The purpose of operational risk loss data collection includes all of the following EXCEPT:",
    options: [
      "A. Identifying recurring loss events and control weaknesses",
      "B. Providing data inputs for quantitative OR capital models",
      "C. Satisfying the AMA requirement for three years of internal loss data",
      "D. Setting individual performance targets for front-office trading desks"
    ],
    correctAnswer: 3,
    explanation: "Operational risk loss data is collected to: identify patterns and control weaknesses (management information), feed quantitative capital models (AMA), support RCSA and scenario analysis, and comply with regulatory requirements. It has no role in setting individual front-office performance targets — that is a HR and remuneration matter."
  },
  {
    id: 119,
    type: "multiple-choice",
    topic: "Trade Cycle",
    question: "In the context of pre-trade activity, which of the following is an operational risk concern for a fund manager?",
    options: [
      "A. Ensuring DVP settlement instructions are sent before the settlement cut-off",
      "B. Reconciling nostro account balances with the correspondent bank's records",
      "C. Conducting suitability and appropriateness checks before executing a trade on behalf of a client",
      "D. Calculating the P&L impact of an open derivative position"
    ],
    correctAnswer: 2,
    explanation: "Pre-trade activity includes order generation, counterparty selection, credit checks, and — critically — suitability and appropriateness assessments under MiFID II. Failure to conduct adequate pre-trade suitability checks is a conduct risk that also constitutes operational risk (Clients, Products and Business Practices event type)."
  },
  {
    id: 120,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "Which of the following statements about the FCA's approach to operational resilience is correct?",
    options: [
      "A. Firms must achieve zero downtime on all IT systems to comply with operational resilience requirements",
      "B. Operational resilience focuses only on cyber risk and excludes people, process, and external event risks",
      "C. Firms are required to identify their Important Business Services and set impact tolerances they must be able to remain within, even during severe but plausible disruption scenarios",
      "D. Operational resilience requirements apply only to systemically important banks, not to investment firms or asset managers"
    ],
    correctAnswer: 2,
    explanation: "The FCA/PRA operational resilience framework (SS1/21, PS6/21) requires all regulated firms (banks, insurers, FCA solo-regulated firms) to identify their Important Business Services, set impact tolerances, and demonstrate through testing that they can continue to provide those services within tolerances during severe but plausible disruptions — regardless of the cause (cyber, people, systems, external events)."
  }
];

export default cisiQuizData;
