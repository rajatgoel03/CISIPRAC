const cisiQuizData = [
  // --- CORE PRACTICE QUESTIONS ---
  {
    id: 1,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "What is the standard Basel/BIS definition of operational risk?",
    options: [
      "A. Risk of loss from market price movements",
      "B. Risk of loss from inadequate/failed processes, people, systems or external events",
      "C. Risk of loss from a counterparty failing to meet obligations",
      "D. Risk of loss from an institution's inability to meet short-term obligations"
    ],
    correctAnswer: 1,
    explanation: "The BIS defines OR as 'the risk of loss resulting from inadequate or failed internal processes, people and systems or from external events.' Market risk = A, Credit risk = C, Liquidity risk = D[cite: 2]."
  },
  {
    id: 2,
    type: "multiple-choice",
    topic: "Risk Basics",
    question: "Which of the following best describes 'downside risk'?",
    options: [
      "A. The potential for higher-than-expected investment returns",
      "B. The potential negative consequences or losses from a risk event",
      "C. The probability that a trade counterparty defaults",
      "D. The regulatory capital charge for market risk"
    ],
    correctAnswer: 1,
    explanation: "Downside risk refers to the adverse consequences of a risk event. Risk managers try to reduce both the likelihood and impact of downside events[cite: 2]."
  },
  {
    id: 3,
    type: "multiple-choice",
    topic: "Major Incidents",
    question: "TSB's 2018 operational risk event was caused by:",
    options: [
      "A. A rogue trader exceeding authorised credit limits",
      "B. Failure to comply with anti-money laundering obligations",
      "C. A failed digital platform migration that locked 1.9 million customers out of online banking",
      "D. Mis-selling of mortgage products to vulnerable customers"
    ],
    correctAnswer: 2,
    explanation: "TSB migrated 5 million customers to a new proprietary platform as part of separation from Lloyds. Delays caused 1.9 million customers to lose access and over 10,000 fraud incidents occurred[cite: 2]."
  },
  {
    id: 4,
    type: "multiple-choice",
    topic: "Risk Concepts",
    question: "Which of the following BEST describes 'inherent risk'?",
    options: [
      "A. Risk remaining after all controls have been implemented",
      "B. Risk assessed at a point in time with controls in place",
      "C. The level of risk associated with an activity BEFORE any controls have been put in place",
      "D. The maximum risk that can be accepted under the firm's risk appetite"
    ],
    correctAnswer: 2,
    explanation: "Inherent (gross) risk is the risk before any controls. Residual (net) risk is what remains after controls. The difference between them reflects control effectiveness[cite: 2]."
  },

  // --- APRIL 2026 EXAM QUESTIONS ---
  {
    id: 5,
    type: "multiple-choice",
    topic: "Risk Appetite",
    question: "What would typically be included in a risk appetite statement to address a risk which has been assessed as exceeding risk appetite limits?",
    options: [
      "A. A corrective action plan detailing steps to reduce the risk back within appetite",
      "B. An instruction to ignore the risk until the next scheduled annual review",
      "C. An increase in the risk limit to match the current elevated risk level",
      "D. Removal of the risk from the risk register entirely"
    ],
    correctAnswer: 0,
    explanation: "When a risk exceeds the firm's risk appetite, the risk appetite statement should include a specific corrective action plan or remediation/escalation procedure outlining the steps required to bring the risk back within acceptable limits. This ensures accountability and a clear path to resolution[cite: 4]."
  },
  {
    id: 6,
    type: "multiple-choice",
    topic: "Major Operational Risk Incidents",
    question: "How did the realisation of operational risk cause the regulator to suspend GAM's Absolute Return Fund in 2018?",
    options: [
      "A. A whistleblower reported breaches of dealing, inducement and record-keeping policies, leading to the fund's suspension",
      "B. A cyber attack on GAM's trading systems resulted in unauthorised fund transactions",
      "C. Fraudulent client accounts were opened without proper know-your-customer checks",
      "D. GAM's outsourced fund administrator failed to calculate the NAV correctly for several months"
    ],
    correctAnswer: 0,
    explanation: "In 2018, a whistleblower reported that GAM's star fund manager Tim Haywood had breached the firm's policies on dealing, inducements and record-keeping. The FCA and FINMA investigated, leading to Haywood's suspension and the subsequent winding down of the fund[cite: 4]."
  },
  {
    id: 7,
    type: "multiple-choice",
    topic: "Risk Measurement Methods",
    question: "Which of the following best describes historical loss data analysis?",
    options: [
      "A. A review of past operational loss events to identify patterns, trends and potential future exposures",
      "B. A forward-looking scenario analysis based on hypothetical stress events",
      "C. An assessment of market price movements to estimate future volatility",
      "D. A review of counterparty credit default rates over a defined period"
    ],
    correctAnswer: 0,
    explanation: "Historical loss data analysis involves reviewing actual past operational loss events recorded by the firm (or sourced from external databases) to identify patterns, recurring causes, trends and potential future exposures[cite: 4]."
  },
  {
    id: 8,
    type: "multiple-choice",
    topic: "Risk Reporting",
    question: "Which of these is a purpose of internal reporting of risk events?",
    options: [
      "A. To enable management to identify trends, escalate issues and make informed decisions on risk mitigation",
      "B. To satisfy only external regulatory reporting requirements imposed by the FCA",
      "C. To record events solely for the purpose of making insurance claims",
      "D. To assign formal blame to individual employees responsible for the event"
    ],
    correctAnswer: 0,
    explanation: "Internal reporting allows senior management to identify emerging trends, spot root causes, escalate material issues and make informed, evidence-based decisions on risk mitigation and resource allocation[cite: 4]."
  },
  {
    id: 9,
    type: "multiple-choice",
    topic: "Three Lines of Defence",
    question: "A firm's internal audit function is important in terms of the operational risk management process because it:",
    options: [
      "A. Provides independent assurance on the effectiveness of risk management and internal controls",
      "B. Manages day-to-day operational risks within business units",
      "C. Sets the firm's risk appetite and overall risk strategy",
      "D. Executes trades and client transactions on behalf of the firm"
    ],
    correctAnswer: 0,
    explanation: "Internal audit forms the third line of defence. It provides independent, objective assurance to the board and senior management on the overall effectiveness of risk management, controls and governance processes[cite: 4]."
  },
  {
    id: 10,
    type: "multiple-choice",
    topic: "Causes and Impacts",
    question: "Inaccurate financial reporting can lead to poor decision-making and is classified as:",
    options: [
      "A. An operational risk event arising from process failure",
      "B. A market risk event caused by adverse price movements",
      "C. A liquidity risk event caused by inability to meet obligations",
      "D. A credit risk event caused by counterparty default"
    ],
    correctAnswer: 0,
    explanation: "Inaccurate financial reporting is classified as an operational risk event, specifically arising from process failure (and potentially people failure). Under the Basel framework, this falls under 'Execution, Delivery and Process Management'[cite: 4]."
  },
  {
    id: 11,
    type: "multiple-choice",
    topic: "Market Risk / Liquidity",
    question: "Market depth is defined as the:",
    options: [
      "A. Ability of a market to absorb large trade volumes without significantly affecting the price",
      "B. Total market capitalisation of all listed securities in a given exchange",
      "C. Number of active market participants registered with the regulator",
      "D. Degree of volatility in asset prices over a defined historical period"
    ],
    correctAnswer: 0,
    explanation: "Market depth refers to the market's capacity to sustain relatively large market orders without a significant impact on the price of the security[cite: 4]."
  },
  {
    id: 12,
    type: "multiple-choice",
    topic: "Credit Risk Management",
    question: "A common credit risk mitigation technique at the individual borrower level is:",
    options: [
      "A. Requiring collateral or security against the loan",
      "B. Diversifying the investment portfolio across multiple asset classes",
      "C. Increasing the firm's Value-at-Risk (VaR) limits",
      "D. Applying macro-level stress testing to the entire loan book"
    ],
    correctAnswer: 0,
    explanation: "At the individual borrower level, requiring collateral (such as property or financial assets) is a standard credit risk mitigation technique. Diversification operates at a portfolio level[cite: 4]."
  },
  {
    id: 13,
    type: "multiple-choice",
    topic: "Support and Control Functions",
    question: "For a successful merger between two major financial institutions, which function implements the integration?",
    options: [
      "A. The operations function, as it manages the integration of systems, processes and people",
      "B. The front office trading desk, as it drives revenue synergies post-merger",
      "C. The compliance function alone, as regulatory approvals are the main obstacle",
      "D. The external auditors, as they verify the combined entity's financial statements"
    ],
    correctAnswer: 0,
    explanation: "Operations manages the complex task of combining IT systems, back-office processes, data migration, client on-boarding, staff restructuring and workflow redesign. Failure to manage this is a major source of operational risk[cite: 4]."
  },
  {
    id: 14,
    type: "multiple-choice",
    topic: "Near Misses",
    question: "An error in a contract reads £1 million rather than £10 million but is corrected in time. What action is required?",
    options: [
      "A. The error should be recorded as a near miss in the operational risk loss event database even though no financial loss occurred",
      "B. No action is needed as no financial loss was incurred and the error was corrected",
      "C. The error must be reported immediately to the FCA as a material regulatory breach",
      "D. A formal complaint must be raised against the counterparty for accepting an incorrect contract"
    ],
    correctAnswer: 0,
    explanation: "Even though no financial loss occurred, this contract error is a near miss and should be recorded. Near misses provide valuable information about weaknesses in processes and controls, acting as an early warning indicator[cite: 4]."
  },
  {
    id: 15,
    type: "multiple-choice",
    topic: "Market Risk Measurement",
    question: "Which of the following is a disadvantage of value-at-risk (VaR)? It does not:",
    options: [
      "A. Capture the size of losses beyond the confidence level (tail risk and extreme events)",
      "B. Use statistical or quantitative methods in its calculation",
      "C. Apply to trading portfolios or investment positions",
      "D. Consider historical price data in its estimation"
    ],
    correctAnswer: 0,
    explanation: "A key limitation of VaR is that it does not capture the magnitude of losses that occur beyond the confidence level — i.e., it says nothing about how bad losses can be in the tail of the distribution (extreme events)[cite: 4]."
  },
  {
    id: 16,
    type: "multiple-choice",
    topic: "Risk Measurement Methods",
    question: "A firm has completed a risk measurement exercise using the benchmarking method. What will the results mainly indicate?",
    options: [
      "A. How the firm's risk profile compares to industry peers or external data sources",
      "B. The exact regulatory capital required under the Basel III framework",
      "C. The precise probability of occurrence for each individual risk event",
      "D. Whether the firm is in compliance with all applicable FCA conduct rules"
    ],
    correctAnswer: 0,
    explanation: "Benchmarking involves comparing a firm's risk profile, loss data, or risk metrics against those of industry peers or external databases, highlighting areas where the firm may be above or below the industry norm[cite: 4]."
  },
  {
    id: 17,
    type: "multiple-choice",
    topic: "Risk Assessment Tools",
    question: "A method that prioritises risks following an assessment of their likelihood and impact is known as:",
    options: [
      "A. Risk heat mapping (risk matrix)",
      "B. Scenario analysis",
      "C. Key risk indicators (KRIs)",
      "D. Loss distribution approach (LDA)"
    ],
    correctAnswer: 0,
    explanation: "A risk heat map (or risk matrix) plots risks on a two-dimensional grid based on their assessed likelihood and impact. This allows risks to be prioritised based on severity[cite: 4]."
  },
  {
    id: 18,
    type: "multiple-choice",
    topic: "Credit Ratings",
    question: "During the financial crisis, credit rating agencies were criticised because they:",
    options: [
      "A. Assigned high (AAA) credit ratings to structured/securitised products that subsequently defaulted or were significantly downgraded",
      "B. Refused to assign credit ratings to sovereign government bonds during the crisis",
      "C. Charged excessive upfront fees directly to retail investors for rating access",
      "D. Published credit rating updates too infrequently to be useful to the market"
    ],
    correctAnswer: 0,
    explanation: "A major criticism was that rating agencies assigned AAA ratings to complex structured products such as CDOs and mortgage-backed securities, many of which subsequently suffered dramatic defaults[cite: 4]."
  },
  {
    id: 19,
    type: "multiple-choice",
    topic: "Risk Treatment",
    question: "A financial institution has introduced new automated systems to replace manual processes. This is an example of which method of risk treatment?",
    options: [
      "A. Risk reduction (treat) — using technology to reduce the likelihood of human error",
      "B. Risk transfer — passing the risk to a third-party technology provider",
      "C. Risk avoidance (terminate) — ceasing the activities that generate the risk",
      "D. Risk acceptance (tolerate) — acknowledging the risk without taking further action"
    ],
    correctAnswer: 0,
    explanation: "Introducing automated systems is an example of risk reduction (treat). Automation reduces the likelihood of human error — a major source of operational risk[cite: 4]."
  },
  {
    id: 20,
    type: "multiple-choice",
    topic: "Risk Assessment vs Measurement",
    question: "In operational risk, what key question do both risk assessment and risk measurement address?",
    options: [
      "A. What could go wrong and what is the potential impact or loss?",
      "B. Who is personally responsible and liable for each loss event?",
      "C. When did the most recent loss event occur within the firm?",
      "D. How much regulatory capital is currently held against operational risk?"
    ],
    correctAnswer: 0,
    explanation: "Both fundamentally seek to answer: what could go wrong, and what is the potential impact or loss? Assessment does this qualitatively, while measurement does it quantitatively[cite: 4]."
  },
  {
    id: 21,
    type: "multiple-choice",
    topic: "Regulatory Environment",
    question: "When on-boarding a new client, how are firms expected to satisfy their regulatory obligations relating to product suitability?",
    options: [
      "A. By conducting a suitability assessment — gathering information on the client's knowledge, experience, financial situation and investment objectives",
      "B. By providing the client with a standard product brochure covering all available products",
      "C. By requiring the client to sign a disclaimer accepting all investment risk",
      "D. By checking the client's credit rating and income level only"
    ],
    correctAnswer: 0,
    explanation: "Under MiFID II, firms must conduct a suitability assessment gathering information about the client's investment knowledge, financial situation, and investment objectives before determining if a product is suitable[cite: 4]."
  },
  {
    id: 22,
    type: "multiple-choice",
    topic: "Corporate Actions",
    question: "If a firm fails to respond to a client's instruction for a corporate action, they could be exposed to:",
    options: [
      "A. Financial loss and/or reputational damage, as the client may miss a time-sensitive election",
      "B. Increased credit risk from the counterparty involved in the corporate action",
      "C. Reduced liquidity risk because fewer transactions are being processed",
      "D. Lower market risk exposure as the position remains unchanged"
    ],
    correctAnswer: 0,
    explanation: "Corporate actions are time-sensitive. Failing to act on a client's instruction exposes the firm to financial loss (compensating the client) and reputational damage (loss of client trust)[cite: 4]."
  },
  {
    id: 23,
    type: "multiple-choice",
    topic: "Legal Risk",
    question: "At what stage is the legal department primarily involved with eliminating operational risk in the trade lifecycle?",
    options: [
      "A. At the pre-settlement / contract stage — reviewing and ensuring contracts are legally sound before execution",
      "B. During trade execution on the trading floor or electronic platform",
      "C. After settlement has occurred and the trade is fully booked",
      "D. Only during regulatory investigations or enforcement actions"
    ],
    correctAnswer: 0,
    explanation: "The legal department's primary involvement occurs at the pre-settlement/contract stage to ensure documentation is legally enforceable, accurate, and complete before trade execution or settlement[cite: 4]."
  },
  {
    id: 24,
    type: "multiple-choice",
    topic: "KRIs and Monitoring",
    question: "A surge in demand following a TV advertising campaign crashes the firm's IT system. Which function should have alerted management to this risk?",
    options: [
      "A. The risk management function, through monitoring Key Risk Indicators such as system capacity utilisation",
      "B. The marketing department, as they commissioned the advertising campaign",
      "C. The external auditors, as they review IT controls in the annual audit",
      "D. The front office sales desk, as they manage client demand directly"
    ],
    correctAnswer: 0,
    explanation: "The risk management function is responsible for monitoring Key Risk Indicators (KRIs). A KRI such as 'percentage of system capacity utilised' should have been tracked and escalated prior to the campaign[cite: 4]."
  },
  {
    id: 25,
    type: "multiple-choice",
    topic: "People Risk",
    question: "A large firm initiated three special projects: SP1 (addressing resource levels), SP2 (reviewing staff remuneration), SP3 (improving management communication). Which could have had an impact on operational risk?",
    options: [
      "A. All three — SP1, SP2 and SP3 all represent factors that can drive operational risk",
      "B. SP1 only, as inadequate resource levels are the only direct cause of operational failures",
      "C. SP2 and SP3 only, as remuneration and communication are the primary people risk drivers",
      "D. None of them, as special projects are strategic decisions unrelated to operational risk"
    ],
    correctAnswer: 0,
    explanation: "All three projects relate to operational risk drivers. Resource levels, remuneration structures, and management communication all directly impact people risk, which is one of the four main sources of operational risk[cite: 4]."
  },
  {
    id: 26,
    type: "multiple-choice",
    topic: "Basel II Regulatory Capital",
    question: "Under the Pillar 1 requirements of Basel II, the minimum overall capital ratio is:",
    options: [
      "A. 8% of risk-weighted assets",
      "B. 4% of total (unweighted) assets",
      "C. 10% of risk-weighted assets",
      "D. 6% of gross income"
    ],
    correctAnswer: 0,
    explanation: "Under Basel II Pillar 1, banks must hold a minimum total capital ratio of 8% of risk-weighted assets, which covers credit risk, market risk, and operational risk[cite: 4]."
  },
  {
    id: 27,
    type: "multiple-choice",
    topic: "Middle Office",
    question: "Janice works in the middle office of an investment firm active in the bonds market. A typical responsibility that reduces operational risk is:",
    options: [
      "A. Reconciling trade confirmations and positions between the front office and back office to identify and resolve discrepancies",
      "B. Executing bond trades on behalf of clients on electronic trading platforms",
      "C. Setting credit limits and counterparty exposure thresholds for the firm",
      "D. Marketing new bond products and structured notes to institutional clients"
    ],
    correctAnswer: 0,
    explanation: "A core middle office function that reduces operational risk is reconciliation — comparing and matching trade confirmations, positions and valuations between the front office and back office to prevent errors[cite: 4]."
  },
  {
    id: 28,
    type: "multiple-choice",
    topic: "Pre-Settlement",
    question: "A component of the pre-settlement phase of the trade cycle is trade:",
    options: [
      "A. Confirmation — verifying the details of a trade between counterparties before settlement",
      "B. Execution — the act of buying or selling a security in the market",
      "C. Clearing — the calculation of net obligations and preparation for settlement",
      "D. Regulatory reporting — submitting trade data to the regulator"
    ],
    correctAnswer: 0,
    explanation: "Trade confirmation is a key component of the pre-settlement phase, where both counterparties exchange and verify the trade details to confirm they agree on terms before settlement takes place[cite: 4]."
  },
  {
    id: 29,
    type: "multiple-choice",
    topic: "Scenario Analysis",
    question: "Which method of risk assessment uses business professionals' experience to capture possible combinations of events that have occurred in the past or may result in loss in the future?",
    options: [
      "A. Scenario analysis — uses expert judgement to construct plausible, severe scenarios based on experience and historical events",
      "B. Key risk indicators (KRIs) — forward-looking quantitative metrics that signal emerging risks",
      "C. Loss data analysis — a review of historical loss event records to identify past patterns",
      "D. Benchmarking — comparing the firm's risk profile against industry peers and external data"
    ],
    correctAnswer: 0,
    explanation: "Scenario analysis relies on the experience and judgement of business professionals to construct plausible but severe combinations of events. It is particularly useful for capturing low-frequency, high-severity tail risks[cite: 4]."
  }
];

export default cisiQuizData;
