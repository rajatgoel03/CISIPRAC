/**
 * CISI IOC Practice Platform — Question Bank
 * 60+ questions covering all four IOC units
 */

const QUESTIONS = [

  // ============================================================
  // UNIT 1: THE INVESTMENT ENVIRONMENT
  // ============================================================

  // --- Regulation ---
  {
    id: 1,
    unit: "Unit 1",
    topic: "Regulation",
    question: "Which UK regulatory body is responsible for the conduct of financial services firms and the protection of consumers?",
    options: [
      "A. The Prudential Regulation Authority (PRA)",
      "B. The Financial Conduct Authority (FCA)",
      "C. The Bank of England",
      "D. The Financial Policy Committee (FPC)"
    ],
    correct: 1,
    explanation: "The Financial Conduct Authority (FCA) is the conduct regulator for financial services firms in the UK. It protects consumers, promotes competition, and maintains market integrity. The PRA supervises the safety and soundness of banks, insurers and major investment firms."
  },
  {
    id: 2,
    unit: "Unit 1",
    topic: "Regulation",
    question: "MiFID II (Markets in Financial Instruments Directive II) primarily aims to:",
    options: [
      "A. Regulate the insurance sector across the EU",
      "B. Increase transparency and investor protection in financial markets",
      "C. Govern cross-border banking capital requirements",
      "D. Establish a single European currency framework"
    ],
    correct: 1,
    explanation: "MiFID II, which came into force in January 2018, significantly strengthened investor protection and market transparency requirements. It covers pre- and post-trade transparency, best execution, product governance, and costs and charges disclosure."
  },
  {
    id: 3,
    unit: "Unit 1",
    topic: "Regulation",
    question: "EMIR (European Market Infrastructure Regulation) primarily addresses:",
    options: [
      "A. Retail investor suitability assessments",
      "B. The mandatory clearing and reporting of OTC derivatives",
      "C. Anti-money laundering obligations for banks",
      "D. Prudential capital requirements for investment banks"
    ],
    correct: 1,
    explanation: "EMIR introduced mandatory clearing of standardised OTC derivatives through central counterparties (CCPs), mandatory reporting of all derivatives to trade repositories, and risk mitigation techniques for non-cleared OTC derivatives."
  },
  {
    id: 4,
    unit: "Unit 1",
    topic: "Regulation",
    question: "Under MiFID II, firms must classify clients into which categories?",
    options: [
      "A. Basic, Standard and Premium",
      "B. Retail, Professional and Eligible Counterparty",
      "C. Individual, Corporate and Institutional",
      "D. Advised, Execution-Only and Discretionary"
    ],
    correct: 1,
    explanation: "MiFID II requires firms to classify clients as Retail Clients (highest protection), Professional Clients (intermediate protection) or Eligible Counterparties (least protection). This classification determines the level of protection and regulatory requirements that apply."
  },
  {
    id: 5,
    unit: "Unit 1",
    topic: "Regulation",
    question: "The FCA's 'Consumer Duty', introduced in 2023, requires firms to:",
    options: [
      "A. Charge no commissions on retail investment products",
      "B. Deliver good outcomes for retail customers",
      "C. Provide guaranteed investment returns",
      "D. Maintain a minimum capital ratio of 8%"
    ],
    correct: 1,
    explanation: "The FCA's Consumer Duty sets a higher standard of consumer protection, requiring firms to act to deliver good outcomes for retail customers across four outcome areas: products and services, price and value, consumer understanding, and consumer support."
  },
  {
    id: 6,
    unit: "Unit 1",
    topic: "Regulation",
    question: "Which of the following is NOT a regulated activity under the Financial Services and Markets Act 2000 (FSMA)?",
    options: [
      "A. Dealing in investments as principal",
      "B. Managing investments",
      "C. Providing financial journalism",
      "D. Arranging deals in investments"
    ],
    correct: 2,
    explanation: "General financial journalism is not a regulated activity under FSMA 2000. Regulated activities include dealing in investments as principal or agent, managing investments, arranging deals, providing investment advice, and safeguarding assets."
  },
  {
    id: 7,
    unit: "Unit 1",
    topic: "Regulation",
    question: "Know Your Customer (KYC) checks are primarily performed to:",
    options: [
      "A. Maximise client profitability",
      "B. Ensure best execution on trades",
      "C. Verify client identity and prevent money laundering",
      "D. Assess the firm's credit risk exposure"
    ],
    correct: 2,
    explanation: "KYC (Know Your Customer) procedures are a regulatory requirement to verify the identity of clients, understand the nature of their business, and assess the risk of them being involved in financial crime including money laundering or terrorist financing."
  },
  {
    id: 8,
    unit: "Unit 1",
    topic: "Regulation",
    question: "Under AML regulations, a 'Suspicious Activity Report' (SAR) must be submitted to:",
    options: [
      "A. The Financial Conduct Authority",
      "B. The National Crime Agency (NCA)",
      "C. HM Revenue & Customs",
      "D. The Prudential Regulation Authority"
    ],
    correct: 1,
    explanation: "Suspicious Activity Reports (SARs) must be filed with the National Crime Agency (NCA) via the UKFIU (UK Financial Intelligence Unit). SARs are required when a firm knows, suspects or has reasonable grounds to suspect that a person is engaged in money laundering or terrorist financing."
  },

  // --- Financial Markets ---
  {
    id: 9,
    unit: "Unit 1",
    topic: "Financial Markets",
    question: "The primary market is best described as:",
    options: [
      "A. The market where existing securities are bought and sold between investors",
      "B. The market where new securities are issued for the first time",
      "C. The largest stock exchange by market capitalisation",
      "D. The interbank lending market"
    ],
    correct: 1,
    explanation: "The primary market is where new securities are issued for the first time, with proceeds going to the issuer. Examples include IPOs (Initial Public Offerings), rights issues, and new bond issues. The secondary market is where previously issued securities are subsequently traded between investors."
  },
  {
    id: 10,
    unit: "Unit 1",
    topic: "Financial Markets",
    question: "A 'market maker' in an exchange-traded security:",
    options: [
      "A. Sets the official closing price each day",
      "B. Continuously quotes buy and sell prices to provide liquidity",
      "C. Only executes orders on behalf of retail clients",
      "D. Manages the settlement process for trades"
    ],
    correct: 1,
    explanation: "A market maker continuously quotes bid (buy) and offer (sell) prices in a security, facilitating liquidity. They profit from the bid-ask spread and take the risk of holding inventory. Market makers are central to the functioning of quote-driven markets."
  },
  {
    id: 11,
    unit: "Unit 1",
    topic: "Financial Markets",
    question: "The London Interbank Offered Rate (LIBOR) was replaced as a benchmark rate by:",
    options: [
      "A. EURIBOR",
      "B. SONIA (Sterling Overnight Index Average)",
      "C. The Bank of England base rate",
      "D. EONIA"
    ],
    correct: 1,
    explanation: "SONIA (Sterling Overnight Index Average), administered by the Bank of England, replaced LIBOR as the main GBP interest rate benchmark following the LIBOR scandal. SONIA is based on actual overnight transactions in the sterling unsecured lending market."
  },

  // ============================================================
  // UNIT 2: INVESTMENT PRODUCTS
  // ============================================================

  // --- Equities ---
  {
    id: 12,
    unit: "Unit 2",
    topic: "Equities",
    question: "Ordinary shareholders in a company are entitled to:",
    options: [
      "A. A fixed dividend each year before other claimants",
      "B. A residual claim on assets after all creditors and preference shareholders",
      "C. A guaranteed return linked to a benchmark index",
      "D. Priority repayment ahead of bond holders in liquidation"
    ],
    correct: 1,
    explanation: "Ordinary shareholders have a residual claim — they are last in the queue in a winding up, receiving any remaining assets only after all creditors, bond holders and preference shareholders have been paid. In return, they have unlimited upside potential and voting rights."
  },
  {
    id: 13,
    unit: "Unit 2",
    topic: "Equities",
    question: "A rights issue allows existing shareholders to:",
    options: [
      "A. Convert their shares into bonds at a fixed price",
      "B. Purchase new shares at a discounted price in proportion to their existing holding",
      "C. Receive a bonus of additional shares at no cost",
      "D. Vote to remove directors from the board"
    ],
    correct: 1,
    explanation: "A rights issue gives existing shareholders the pre-emptive right to subscribe for new shares, typically at a discount to the current market price, in proportion to their existing holding (e.g. 1-for-3). This allows companies to raise capital while giving existing shareholders the opportunity to maintain their percentage ownership."
  },
  {
    id: 14,
    unit: "Unit 2",
    topic: "Equities",
    question: "A stock split of 2-for-1 means:",
    options: [
      "A. The share price doubles and the number of shares halves",
      "B. Each existing share is replaced by two shares at half the original price",
      "C. Shareholders receive one additional share for every two held",
      "D. The company buys back half of its outstanding shares"
    ],
    correct: 1,
    explanation: "In a 2-for-1 stock split, each existing share is replaced by two shares at half the price. Total market capitalisation is unchanged. Stock splits are typically done when share prices become very high, to improve liquidity and accessibility."
  },
  {
    id: 15,
    unit: "Unit 2",
    topic: "Equities",
    question: "The ex-dividend date is the date on which:",
    options: [
      "A. The company pays the dividend to shareholders",
      "B. The company announces the dividend amount",
      "C. Buyers of the share no longer qualify for the upcoming dividend",
      "D. The share register is closed to new entries"
    ],
    correct: 2,
    explanation: "On the ex-dividend date, any buyer of the shares is no longer entitled to the next dividend payment. Buyers before the ex-dividend date receive the dividend; buyers on or after do not. The ex-dividend date is typically one or two business days before the record date."
  },

  // --- Bonds ---
  {
    id: 16,
    unit: "Unit 2",
    topic: "Bonds",
    question: "A gilt is best described as:",
    options: [
      "A. A share issued by a gold mining company",
      "B. A government bond issued by the UK Treasury",
      "C. A corporate bond with the highest credit rating",
      "D. A foreign currency bond listed in the UK"
    ],
    correct: 1,
    explanation: "A gilt is a UK government bond issued by HM Treasury, named after the gilded edges of the original bond certificates. They are considered virtually risk-free in terms of default as the UK government can raise taxes or print currency to repay them. They pay a fixed coupon semi-annually."
  },
  {
    id: 17,
    unit: "Unit 2",
    topic: "Bonds",
    question: "When interest rates rise, the price of existing fixed-rate bonds:",
    options: [
      "A. Rises, because investors receive higher income",
      "B. Remains unchanged, because the coupon rate is fixed",
      "C. Falls, because new bonds offer higher yields making existing bonds less attractive",
      "D. Falls only for government bonds, not corporate bonds"
    ],
    correct: 2,
    explanation: "Bond prices and yields move inversely. When market interest rates rise, newly issued bonds offer higher yields, making existing lower-yielding bonds less attractive. Their prices must fall to bring their yields in line with current market rates. This is known as interest rate risk or duration risk."
  },
  {
    id: 18,
    unit: "Unit 2",
    topic: "Bonds",
    question: "Yield to Maturity (YTM) on a bond represents:",
    options: [
      "A. The annual coupon payment as a percentage of face value",
      "B. The total return expected if the bond is held until it matures, accounting for all cash flows",
      "C. The current market price expressed as a percentage of par value",
      "D. The spread over the risk-free rate"
    ],
    correct: 1,
    explanation: "Yield to Maturity (YTM) is the total return an investor would receive if they purchased a bond and held it until maturity, assuming all coupon payments are reinvested at the same rate. It accounts for the purchase price, par value, coupon payments, and time to maturity."
  },
  {
    id: 19,
    unit: "Unit 2",
    topic: "Bonds",
    question: "A Zero Coupon Bond:",
    options: [
      "A. Pays interest monthly rather than annually",
      "B. Is issued at par and repaid below par at maturity",
      "C. Pays no periodic interest but is issued at a deep discount to par value",
      "D. Has a coupon rate that resets periodically based on a benchmark rate"
    ],
    correct: 2,
    explanation: "Zero coupon bonds pay no periodic interest (coupon). They are issued at a significant discount to their face (par) value, and the investor's return comes entirely from the capital appreciation to par at maturity. They are particularly sensitive to interest rate changes (high duration)."
  },
  {
    id: 20,
    unit: "Unit 2",
    topic: "Bonds",
    question: "Credit rating agencies assess bonds primarily on the basis of:",
    options: [
      "A. The liquidity of the secondary market for the bond",
      "B. The issuer's ability to meet its debt obligations (default risk)",
      "C. The bond's sensitivity to interest rate changes",
      "D. The bond's listing exchange and regulatory status"
    ],
    correct: 1,
    explanation: "Credit rating agencies (Moody's, S&P, Fitch) assign ratings based on the issuer's creditworthiness — their ability and willingness to repay debt. Investment grade ratings are BBB-/Baa3 and above; below this is 'high yield' or 'junk'. Ratings affect pricing, yield spreads and investor eligibility."
  },

  // --- Derivatives ---
  {
    id: 21,
    unit: "Unit 2",
    topic: "Derivatives",
    question: "A call option gives the buyer the right, but not the obligation, to:",
    options: [
      "A. Sell the underlying asset at the strike price",
      "B. Buy the underlying asset at the strike price",
      "C. Exchange one currency for another at a set rate",
      "D. Receive the difference between two interest rates"
    ],
    correct: 1,
    explanation: "A call option gives the holder the right, but not the obligation, to BUY the underlying asset at the strike (exercise) price before or at expiry. The buyer pays a premium for this right. Call options profit when the underlying asset price rises above the strike price."
  },
  {
    id: 22,
    unit: "Unit 2",
    topic: "Derivatives",
    question: "A futures contract differs from a forward contract primarily because:",
    options: [
      "A. Futures are only available for commodities, not financial assets",
      "B. Futures are standardised, exchange-traded and subject to daily margin calls",
      "C. Futures always result in physical delivery of the underlying asset",
      "D. Futures can only be entered into by institutional investors"
    ],
    correct: 1,
    explanation: "Exchange-traded futures are standardised contracts with daily mark-to-market and margin requirements via a central counterparty (CCP). Forward contracts are OTC, bilaterally negotiated, customisable, and settled at maturity — but carry greater counterparty credit risk."
  },
  {
    id: 23,
    unit: "Unit 2",
    topic: "Derivatives",
    question: "An interest rate swap typically involves:",
    options: [
      "A. The exchange of equity dividend payments between two parties",
      "B. One party paying a fixed rate and receiving a floating rate (or vice versa) on a notional principal",
      "C. Two parties swapping currency principal at spot and reversing at a future date",
      "D. Exchanging government bonds for corporate bonds of equivalent value"
    ],
    correct: 1,
    explanation: "In a plain vanilla interest rate swap, one party pays a fixed interest rate and receives a floating rate (typically referenced to SONIA or formerly LIBOR) on a notional principal amount. Only the net interest payments are exchanged — the notional principal is never physically swapped."
  },

  // --- Collective Investments ---
  {
    id: 24,
    unit: "Unit 2",
    topic: "Collective Investments",
    question: "An Open-Ended Investment Company (OEIC) differs from an investment trust mainly because:",
    options: [
      "A. OEICs invest in equities while investment trusts invest in bonds",
      "B. OEICs create and cancel shares based on investor demand; investment trusts have a fixed share count",
      "C. OEICs are only available to professional investors",
      "D. Investment trusts cannot borrow money (gear), while OEICs can"
    ],
    correct: 1,
    explanation: "An OEIC (and unit trust) is open-ended — it expands and contracts as investors buy and sell. Investment trusts are closed-ended companies with a fixed number of shares traded on a stock exchange. Investment trusts can trade at a premium or discount to NAV and can use gearing."
  },
  {
    id: 25,
    unit: "Unit 2",
    topic: "Collective Investments",
    question: "The Net Asset Value (NAV) of a unit trust is calculated as:",
    options: [
      "A. Total liabilities divided by the number of units in issue",
      "B. Total assets minus total liabilities, divided by the number of units in issue",
      "C. Market capitalisation divided by earnings per unit",
      "D. Total assets multiplied by the fund's TER (Total Expense Ratio)"
    ],
    correct: 1,
    explanation: "NAV = (Total Assets – Total Liabilities) ÷ Number of Units in Issue. For open-ended funds, NAV is calculated daily (usually at midday or close). It represents the value per unit at which investors can buy or sell. Fund prices are typically quoted as offer (buy) and bid (sell) prices around the NAV."
  },
  {
    id: 26,
    unit: "Unit 2",
    topic: "Collective Investments",
    question: "An Exchange Traded Fund (ETF) typically differs from an active mutual fund in that:",
    options: [
      "A. ETFs cannot hold equities — they must hold bonds",
      "B. ETFs usually track an index passively and trade on an exchange throughout the day",
      "C. ETFs guarantee capital protection for investors",
      "D. ETF managers can invest in derivatives but mutual fund managers cannot"
    ],
    correct: 1,
    explanation: "Most ETFs passively track a benchmark index (e.g. FTSE 100) and are listed on stock exchanges, trading continuously throughout the trading day like ordinary shares. They typically have lower fees than active funds. They use an 'in-kind' creation/redemption mechanism with authorised participants."
  },

  // --- Structured Products ---
  {
    id: 27,
    unit: "Unit 2",
    topic: "Structured Products",
    question: "A capital-protected structured product typically:",
    options: [
      "A. Guarantees 100% capital return and unlimited upside",
      "B. Uses a zero coupon bond for capital protection combined with options for potential growth",
      "C. Is only available to professional investors with MiFID II knowledge",
      "D. Has no counterparty risk as it is exchange-traded"
    ],
    correct: 1,
    explanation: "Capital-protected structured products typically use a zero-coupon bond component to guarantee the return of capital at maturity, combined with derivative instruments (often options) linked to an underlying index or basket to provide potential upside. The level of protection depends on the issuer's credit."
  },

  // ============================================================
  // UNIT 3: OPERATIONAL WORKFLOW
  // ============================================================

  // --- Trade Lifecycle ---
  {
    id: 28,
    unit: "Unit 3",
    topic: "Trade Lifecycle",
    question: "The correct sequence of the equity trade lifecycle is:",
    options: [
      "A. Execution → Allocation → Confirmation → Clearing → Settlement",
      "B. Clearing → Execution → Confirmation → Allocation → Settlement",
      "C. Confirmation → Execution → Clearing → Allocation → Settlement",
      "D. Execution → Clearing → Confirmation → Settlement → Allocation"
    ],
    correct: 0,
    explanation: "The trade lifecycle flows: Order → Execution → Trade allocation (for block trades) → Trade confirmation/affirmation → Clearing (including novation to CCP) → Settlement (exchange of cash and securities). Post-settlement includes reconciliation and accounting entries."
  },
  {
    id: 29,
    unit: "Unit 3",
    topic: "Trade Lifecycle",
    question: "The standard settlement cycle for UK equities is:",
    options: [
      "A. T+1 (trade date plus 1 business day)",
      "B. T+2 (trade date plus 2 business days)",
      "C. T+3 (trade date plus 3 business days)",
      "D. T+0 (same-day settlement)"
    ],
    correct: 1,
    explanation: "UK (and European) equity settlement moved from T+3 to T+2 in October 2014, aligned with the EU Settlement Regulation (CSDR). The EU moved to T+1 in 2027; the UK is also targeting T+1. Settlement is performed via CREST for UK equities."
  },
  {
    id: 30,
    unit: "Unit 3",
    topic: "Trade Lifecycle",
    question: "Order routing in electronic trading uses which protocol to standardise communications between trading parties?",
    options: [
      "A. SWIFT MT940",
      "B. FIX (Financial Information eXchange) Protocol",
      "C. ISO 20022",
      "D. DTCC ACATS"
    ],
    correct: 1,
    explanation: "The FIX (Financial Information eXchange) Protocol is the industry standard for real-time electronic order routing, trade execution and related message communication between buy-side firms, brokers, and exchanges. It was developed in 1992 and is widely used for order management."
  },
  {
    id: 31,
    unit: "Unit 3",
    topic: "Trade Lifecycle",
    question: "Pre-settlement matching ensures that:",
    options: [
      "A. The correct tax is withheld on dividend payments",
      "B. Both counterparties agree on trade details before settlement",
      "C. The CCP has sufficient collateral to cover exposures",
      "D. All trades are allocated to individual client accounts before execution"
    ],
    correct: 1,
    explanation: "Pre-settlement matching (or trade confirmation) verifies that both counterparties agree on the key trade details — security, quantity, price, settlement date, and counterparty details — before settlement. This reduces settlement fails and operational risk. In the UK, CREST uses a real-time matching system."
  },

  // --- Clearing ---
  {
    id: 32,
    unit: "Unit 3",
    topic: "Clearing",
    question: "The process of novation in central counterparty (CCP) clearing means:",
    options: [
      "A. The original trade is cancelled and replaced with two new contracts, each with the CCP as counterparty",
      "B. The CCP provides financing for the settlement of trades",
      "C. Trades are netted against each other to reduce settlement obligations",
      "D. The buyer's and seller's custodians exchange securities directly"
    ],
    correct: 0,
    explanation: "Through novation, the original contract between buyer and seller is legally replaced by two new contracts: one between the buyer and the CCP, and one between the CCP and the seller. The CCP becomes the buyer to every seller and seller to every buyer, eliminating bilateral counterparty credit risk."
  },
  {
    id: 33,
    unit: "Unit 3",
    topic: "Clearing",
    question: "Initial margin in derivatives clearing is:",
    options: [
      "A. The profit or loss on a position calculated at end of day",
      "B. Collateral deposited at the start of a position to cover potential future losses",
      "C. The minimum trade size required to access the CCP",
      "D. A fee charged by the CCP for providing clearing services"
    ],
    correct: 1,
    explanation: "Initial margin is collateral collected by a CCP (or broker) at the inception of a derivatives position to cover potential future losses during the time it takes to close out the position in a default scenario. It is distinct from variation margin, which covers daily mark-to-market P&L."
  },
  {
    id: 34,
    unit: "Unit 3",
    topic: "Clearing",
    question: "Multilateral netting in clearing reduces settlement obligations by:",
    options: [
      "A. Eliminating the need for a central counterparty",
      "B. Combining all buy and sell positions across multiple counterparties to produce a single net settlement figure per security",
      "C. Converting OTC derivatives into exchange-traded equivalents",
      "D. Extending the settlement cycle to T+5"
    ],
    correct: 1,
    explanation: "Multilateral netting calculates each participant's net position across all trades in a given security for that day, producing a single net delivery obligation and a single net cash payment. This dramatically reduces the number of individual settlement instructions and systemic risk."
  },

  // --- Settlement ---
  {
    id: 35,
    unit: "Unit 3",
    topic: "Settlement",
    question: "CREST is the UK's central securities depository (CSD) and settlement system. It settles trades via:",
    options: [
      "A. Physical delivery of paper share certificates",
      "B. Delivery versus Payment (DVP) in real-time gross settlement",
      "C. End-of-day batch netting with overnight funding",
      "D. SWIFT payment instructions through correspondent banks"
    ],
    correct: 1,
    explanation: "CREST, operated by Euroclear UK & International, settles UK and Irish equities and gilts on a real-time gross settlement (RTGS) basis using Delivery versus Payment (DVP). DVP means the simultaneous exchange of securities and cash, eliminating principal risk. Securities are held in dematerialised form."
  },
  {
    id: 36,
    unit: "Unit 3",
    topic: "Settlement",
    question: "Euroclear and Clearstream are examples of:",
    options: [
      "A. Central Counterparties (CCPs) that guarantee trade settlement",
      "B. International Central Securities Depositories (ICSDs) used for Eurobond settlement",
      "C. Regulatory bodies overseeing European capital markets",
      "D. Trading venues for European equity markets"
    ],
    correct: 1,
    explanation: "Euroclear (Brussels) and Clearstream (Luxembourg) are the two International Central Securities Depositories (ICSDs). They were originally established for settling Eurobond trades and now hold and settle a wide range of international securities. Euroclear also owns national CSDs including Euroclear UK & International (CREST)."
  },
  {
    id: 37,
    unit: "Unit 3",
    topic: "Settlement",
    question: "A settlement fail occurs when:",
    options: [
      "A. A CCP defaults on its payment obligations",
      "B. A trade does not settle on the intended settlement date due to insufficient securities or cash",
      "C. A custodian incorrectly holds securities in its own name",
      "D. An investor submits a trade order after market close"
    ],
    correct: 1,
    explanation: "A settlement fail occurs when the seller cannot deliver the securities or the buyer cannot deliver the cash on settlement date. Under CSDR (Central Securities Depositories Regulation), there are mandatory buy-in procedures and cash penalties for settlement fails to incentivise timely settlement."
  },
  {
    id: 38,
    unit: "Unit 3",
    topic: "Settlement",
    question: "The Depository Trust & Clearing Corporation (DTCC) primarily services which market?",
    options: [
      "A. European government bonds",
      "B. Asian equity markets",
      "C. US securities markets",
      "D. Global FX markets"
    ],
    correct: 2,
    explanation: "The DTCC is the central post-trade infrastructure for US securities markets. Its subsidiaries include the NSCC (National Securities Clearing Corporation) for equities clearing, the DTC (Depository Trust Company) for settlement and custody, and the FICC for fixed income clearing."
  },

  // --- Corporate Actions ---
  {
    id: 39,
    unit: "Unit 3",
    topic: "Corporate Actions",
    question: "A mandatory corporate action is one that:",
    options: [
      "A. Requires shareholders to vote before it can proceed",
      "B. Applies automatically to all eligible holders without any required response",
      "C. Only affects institutional shareholders, not retail investors",
      "D. Requires prior FCA approval before the company can proceed"
    ],
    correct: 1,
    explanation: "Mandatory corporate actions happen automatically without any choice or election from the holder (e.g. stock splits, bonus issues, cash mergers). Voluntary corporate actions require the holder to make an election (e.g. rights issues, tender offers, scrip dividends). Mandatory with options offer a default outcome with alternatives."
  },
  {
    id: 40,
    unit: "Unit 3",
    topic: "Corporate Actions",
    question: "In a scrip dividend, shareholders are offered:",
    options: [
      "A. The right to sell their shares back to the company at a premium",
      "B. Additional shares in lieu of a cash dividend",
      "C. A dividend payable in a foreign currency of their choice",
      "D. A guaranteed fixed dividend for the next five years"
    ],
    correct: 1,
    explanation: "A scrip dividend (also called a stock dividend or DRIP — Dividend Reinvestment Plan) gives shareholders the option to receive additional shares instead of a cash dividend. This conserves the company's cash and allows shareholders to build their holding without incurring dealing costs."
  },
  {
    id: 41,
    unit: "Unit 3",
    topic: "Corporate Actions",
    question: "The 'record date' in the context of a dividend payment is:",
    options: [
      "A. The date the dividend is paid into shareholders' accounts",
      "B. The date the dividend amount is officially announced",
      "C. The date on which shareholders must be registered to receive the dividend",
      "D. The last date shareholders can sell and still receive the dividend"
    ],
    correct: 2,
    explanation: "The record date (or books-closing date) is the date on which a shareholder must appear on the company's share register to be eligible to receive the dividend or other corporate action benefit. The ex-dividend date is typically two business days before the record date."
  },
  {
    id: 42,
    unit: "Unit 3",
    topic: "Corporate Actions",
    question: "In a tender offer (or takeover bid), the acquiring company:",
    options: [
      "A. Issues new shares to target company shareholders",
      "B. Offers to buy shares directly from target company shareholders, usually at a premium to market price",
      "C. Exchanges assets with the target company to gain control",
      "D. Receives regulatory approval to merge through a court-sanctioned scheme"
    ],
    correct: 1,
    explanation: "In a tender offer, the acquirer offers to purchase shares directly from shareholders of the target company, typically at a premium to the prevailing market price. If the offer is successful (usually requiring 50%+ acceptances), the acquirer gains a controlling stake. The bid may be for cash, shares or a mixture."
  },

  // ============================================================
  // UNIT 4: SUPPORTING FUNCTIONS
  // ============================================================

  // --- Custody ---
  {
    id: 43,
    unit: "Unit 4",
    topic: "Custody",
    question: "The primary function of a custodian bank is to:",
    options: [
      "A. Provide investment advice and portfolio management to fund managers",
      "B. Safekeep client assets, settle trades, and administer corporate actions",
      "C. Act as a market maker in government bonds",
      "D. Provide leverage and margin financing to hedge funds"
    ],
    correct: 1,
    explanation: "A custodian's core role is safekeeping of client assets (securities held in segregated accounts), settling trades, collecting income (dividends, coupons), administering corporate actions, providing reporting, and maintaining accurate records. Major global custodians include BNY Mellon, State Street, J.P. Morgan and Citibank."
  },
  {
    id: 44,
    unit: "Unit 4",
    topic: "Custody",
    question: "Client assets held in 'nominee name' by a custodian means:",
    options: [
      "A. The custodian owns the assets and the client has an unsecured claim",
      "B. Securities are registered in the custodian's (or its nominee's) name but beneficially owned by the client",
      "C. The client cannot sell the securities without the custodian's consent",
      "D. The assets are pooled with the custodian's own assets for efficiency"
    ],
    correct: 1,
    explanation: "Nominee registration means securities are legally registered in the name of the custodian's nominee company, but the beneficial owner is the end client. Regulatory rules (e.g. CASS in the UK) require custodians to keep client assets segregated from the firm's own assets to protect clients in the event of custodian insolvency."
  },
  {
    id: 45,
    unit: "Unit 4",
    topic: "Custody",
    question: "A sub-custodian is appointed when:",
    options: [
      "A. A fund manager wishes to reduce their custody fees",
      "B. A global custodian uses a local bank to hold assets in a market where they have no direct presence",
      "C. A CCP requires additional collateral from a clearing member",
      "D. A custodian holds assets on behalf of another custodian of the same size"
    ],
    correct: 1,
    explanation: "Global custodians operate in hundreds of markets by using networks of local (sub-)custodians — typically local banks with direct market access, CSD membership, and local expertise. The global custodian remains responsible to its client even when using sub-custodians."
  },

  // --- Fund Administration ---
  {
    id: 46,
    unit: "Unit 4",
    topic: "Fund Administration",
    question: "The Net Asset Value (NAV) of a fund must be calculated accurately because:",
    options: [
      "A. It determines the fund manager's bonus",
      "B. It is the price at which investors buy and sell fund units",
      "C. It determines the level of regulatory capital required",
      "D. It establishes the credit rating of the fund"
    ],
    correct: 1,
    explanation: "NAV is the price at which investors buy (subscribe to) and redeem (sell) units or shares in an open-ended fund. Errors in NAV calculation can cause investors to be under- or over-compensated and can result in regulatory sanctions, financial penalties, and reputational damage."
  },
  {
    id: 47,
    unit: "Unit 4",
    topic: "Fund Administration",
    question: "Transfer agency in fund administration involves:",
    options: [
      "A. Executing cross-border securities transfers between CSDs",
      "B. Maintaining the fund's shareholder register and processing subscriptions, redemptions and switches",
      "C. Calculating and publishing the daily NAV of the fund",
      "D. Managing the fund's currency hedging programme"
    ],
    correct: 1,
    explanation: "The transfer agent maintains the fund's register of shareholders/unitholders and processes investor transactions: subscriptions (purchases), redemptions (sales), switches between sub-funds, and dividend reinvestments. They issue contract notes and produce shareholder statements."
  },
  {
    id: 48,
    unit: "Unit 4",
    topic: "Fund Administration",
    question: "UCITS (Undertakings for Collective Investment in Transferable Securities) are regulated European fund structures that:",
    options: [
      "A. Can only be marketed to professional investors",
      "B. Can be marketed to retail investors across EU member states via a 'passport'",
      "C. Are required to invest exclusively in government bonds",
      "D. Must be listed on a recognised stock exchange"
    ],
    correct: 1,
    explanation: "UCITS are highly regulated, investor-friendly fund structures that can be sold to retail investors across all EU/EEA member states using a single regulatory passport. They have strict rules on eligible investments, diversification, liquidity, and leverage. They are the dominant cross-border retail fund structure globally."
  },

  // --- Reconciliation ---
  {
    id: 49,
    unit: "Unit 4",
    topic: "Reconciliation",
    question: "Securities reconciliation between a firm's internal records and a custodian statement identifies:",
    options: [
      "A. The total return on the portfolio over the reconciliation period",
      "B. Discrepancies in holdings between the firm's books and the custodian's records",
      "C. Whether the fund manager has outperformed their benchmark",
      "D. The fair value of positions using mark-to-model pricing"
    ],
    correct: 1,
    explanation: "Securities reconciliation compares a firm's internal position records with the external custodian statements to identify and resolve discrepancies (breaks). These may arise from settlement fails, unprocessed corporate actions, timing differences, or errors. Unresolved breaks represent a financial or operational risk."
  },
  {
    id: 50,
    unit: "Unit 4",
    topic: "Reconciliation",
    question: "A cash reconciliation break between a firm's nostro account and the bank statement would most likely be caused by:",
    options: [
      "A. A change in the base interest rate by the central bank",
      "B. An unmatched payment, a timing difference or a missing transaction",
      "C. The revaluation of foreign currency positions",
      "D. A change in the credit rating of the counterparty"
    ],
    correct: 1,
    explanation: "Cash reconciliation breaks arise from unmatched payments (a debit or credit in one set of records but not the other), timing differences (items reflected in one record before the other), missing transactions, or errors. Prompt identification and resolution is critical to cash management and risk control."
  },
  {
    id: 51,
    unit: "Unit 4",
    topic: "Reconciliation",
    question: "In the context of fund administration, a 'box position' refers to:",
    options: [
      "A. Physical securities certificates stored in a vault",
      "B. The difference between a custodian's holdings and the beneficial owner's ledger",
      "C. The total number of shares available for stock lending",
      "D. Securities held as collateral against margin requirements"
    ],
    correct: 1,
    explanation: "A 'box' (or box position) is the custodian-level holding of a security. Reconciliation ensures the aggregate of all client positions (beneficial owner ledger) matches the total box held at the CSD/custodian. Any difference represents a 'box break' that must be investigated and resolved."
  },

  // --- Risk ---
  {
    id: 52,
    unit: "Unit 4",
    topic: "Risk",
    question: "Counterparty risk (credit risk) in trading refers to:",
    options: [
      "A. The risk of loss from a change in market prices",
      "B. The risk that the other party to a trade fails to fulfil their contractual obligations",
      "C. The risk of a technical failure in the trading system",
      "D. The risk of regulatory changes affecting the business"
    ],
    correct: 1,
    explanation: "Counterparty credit risk is the risk that the counterparty to a financial transaction defaults before the transaction is settled, resulting in a loss. This is managed through netting arrangements, collateral agreements (CSAs), central clearing (CCPs), and credit limits."
  },
  {
    id: 53,
    unit: "Unit 4",
    topic: "Risk",
    question: "Market risk is best described as:",
    options: [
      "A. The risk of internal fraud or system failure",
      "B. The risk of financial loss from adverse movements in market prices",
      "C. The risk of a customer not repaying a loan",
      "D. The risk of the firm losing its regulatory licence"
    ],
    correct: 1,
    explanation: "Market risk (or price risk) is the risk of losses from changes in market prices, including equity prices, interest rates, foreign exchange rates, and commodity prices. It is measured using tools like Value at Risk (VaR), scenario analysis and stress testing."
  },
  {
    id: 54,
    unit: "Unit 4",
    topic: "Risk",
    question: "Operational risk includes all of the following EXCEPT:",
    options: [
      "A. System failures and technology outages",
      "B. Internal fraud and rogue trading",
      "C. A decline in the market value of a bond portfolio",
      "D. Human error in processing a trade"
    ],
    correct: 2,
    explanation: "Operational risk is the risk of loss from inadequate or failed internal processes, people, systems, or from external events (including legal risk). A decline in bond portfolio value is a market risk. The Basel framework defines operational risk categories including internal fraud, external fraud, employment practices, clients, damage to assets, business disruption, and execution/delivery failure."
  },
  {
    id: 55,
    unit: "Unit 4",
    topic: "Risk",
    question: "Liquidity risk in investments refers to:",
    options: [
      "A. The risk that an investor cannot buy or sell an asset quickly without significantly affecting its price",
      "B. The risk that a company cannot pay dividends to shareholders",
      "C. The risk that inflation erodes the real value of an investment",
      "D. The risk that two clearing banks cannot agree on settlement terms"
    ],
    correct: 0,
    explanation: "Liquidity risk has two dimensions: market liquidity risk (inability to exit a position without significant price impact) and funding liquidity risk (inability to raise cash when needed). Illiquid assets include small-cap equities, real estate, infrastructure, and complex OTC derivatives."
  },

  // --- Additional Mixed Questions ---
  {
    id: 56,
    unit: "Unit 2",
    topic: "Bonds",
    question: "A convertible bond gives the holder the right to:",
    options: [
      "A. Demand early repayment of the bond principal at any time",
      "B. Convert the bond into ordinary shares of the issuing company at a predetermined ratio",
      "C. Receive coupon payments in either cash or additional bonds",
      "D. Transfer the bond to a third party without issuer consent"
    ],
    correct: 1,
    explanation: "A convertible bond gives the holder the option to convert the bond into a predetermined number of equity shares at a set conversion price/ratio. This hybrid instrument offers the downside protection of a bond (guaranteed coupon and principal if not converted) with equity upside potential."
  },
  {
    id: 57,
    unit: "Unit 3",
    topic: "Trade Lifecycle",
    question: "An 'allocation' in the context of an institutional trade means:",
    options: [
      "A. The process of assigning a credit rating to a new bond issue",
      "B. Dividing a block trade executed for multiple clients across their individual accounts",
      "C. The daily calculation of profit and loss on trading positions",
      "D. The process of matching buy and sell orders on an exchange"
    ],
    correct: 1,
    explanation: "When a fund manager executes a large 'block trade' covering multiple client accounts, the post-execution allocation process divides the aggregate order among the individual client portfolios, typically on a pro-rata or pre-agreed basis. Regulatory rules require allocation to be fair and timely."
  },
  {
    id: 58,
    unit: "Unit 4",
    topic: "Fund Administration",
    question: "Which of the following best describes the role of a fund's depositary (trustee)?",
    options: [
      "A. Managing the fund's investment portfolio according to the prospectus",
      "B. Acting as an independent overseer — holding assets and monitoring compliance with fund rules",
      "C. Distributing the fund's units to retail investors through their network",
      "D. Providing leverage to the fund through a prime brokerage arrangement"
    ],
    correct: 1,
    explanation: "The depositary (or trustee for unit trusts) is an independent safekeeping entity that holds the fund's assets and oversees the fund manager's activities to ensure compliance with fund rules and regulations. Under UCITS and AIFMD, the depositary has significant liability for losses in relation to assets held in custody."
  },
  {
    id: 59,
    unit: "Unit 1",
    topic: "Financial Markets",
    question: "The repo market allows financial institutions to:",
    options: [
      "A. Report suspicious transactions to the regulator anonymously",
      "B. Borrow cash by selling securities with an agreement to repurchase them at a higher price",
      "C. Exchange equities for bonds of equivalent market value",
      "D. Repackage mortgages into tradeable securities"
    ],
    correct: 1,
    explanation: "A repurchase agreement (repo) is a short-term secured borrowing mechanism. The cash-needy party sells securities to a cash provider, agreeing to buy them back at a slightly higher price (reflecting the repo rate) on a specified future date. Repos are a key source of short-term funding for banks and dealers."
  },
  {
    id: 60,
    unit: "Unit 2",
    topic: "Derivatives",
    question: "A 'put option' gives the holder the right to:",
    options: [
      "A. Buy the underlying asset at the strike price",
      "B. Sell the underlying asset at the strike price",
      "C. Buy the underlying asset at the current market price",
      "D. Receive a fixed payment if the underlying price rises"
    ],
    correct: 1,
    explanation: "A put option gives the holder the right, but not the obligation, to SELL the underlying asset at the strike price before or at expiry. Put options are used to hedge long positions (as insurance against falling prices) or to speculate on a price decline. They profit when the asset price falls below the strike."
  },
  {
    id: 61,
    unit: "Unit 3",
    topic: "Clearing",
    question: "Variation margin in derivatives clearing represents:",
    options: [
      "A. Additional collateral required when market volatility rises",
      "B. Daily cash flows reflecting the mark-to-market profit or loss on a position",
      "C. The initial deposit required to open a derivatives position",
      "D. A one-time fee paid to the CCP for clearing membership"
    ],
    correct: 1,
    explanation: "Variation margin (VM) is the daily (or intraday) cash payment that reflects the mark-to-market gain or loss on a derivatives position. If the position moves in your favour, you receive VM; if against, you pay VM. This ensures P&L is settled daily rather than accumulating to maturity."
  },
  {
    id: 62,
    unit: "Unit 4",
    topic: "Custody",
    question: "Securities lending allows the owner of securities to:",
    options: [
      "A. Sell securities without owning them first",
      "B. Temporarily transfer securities to a borrower in exchange for collateral and a fee, expecting return",
      "C. Pledge securities as permanent collateral against a loan facility",
      "D. Receive dividends on securities they no longer hold"
    ],
    correct: 1,
    explanation: "In securities lending, the lender temporarily transfers securities to a borrower (e.g. a hedge fund for short selling) against collateral (cash or securities) and earns a lending fee. The lender retains economic exposure through 'manufactured' payments that replicate dividends/coupons. The transaction is reversed at a future date."
  },
  {
    id: 63,
    unit: "Unit 1",
    topic: "Regulation",
    question: "Suitability assessment under MiFID II requires a firm providing investment advice or portfolio management to:",
    options: [
      "A. Ensure the product or service is appropriate for the client's knowledge and experience only",
      "B. Assess the client's knowledge, experience, financial situation, and investment objectives",
      "C. Charge a maximum fee of 1% of assets under management",
      "D. Obtain approval from the FCA for each individual recommendation"
    ],
    correct: 1,
    explanation: "For investment advice and discretionary portfolio management, MiFID II requires a full suitability assessment covering: knowledge and experience, financial situation (including ability to bear losses), and investment objectives (including risk tolerance and time horizon). The firm must only recommend suitable products."
  },
  {
    id: 64,
    unit: "Unit 2",
    topic: "Collective Investments",
    question: "An Alternative Investment Fund (AIF) differs from a UCITS fund primarily in that it:",
    options: [
      "A. Cannot invest in equities or bonds",
      "B. Is regulated under AIFMD and can typically only be marketed to professional investors",
      "C. Is required to guarantee capital return at maturity",
      "D. Must be listed on a recognised stock exchange to attract investors"
    ],
    correct: 1,
    explanation: "AIFs (regulated under the EU Alternative Investment Fund Managers Directive, AIFMD) include hedge funds, private equity funds, real estate funds, and infrastructure funds. They are typically marketed only to professional/institutional investors due to their more complex strategies and risk profiles. They have fewer investment restrictions than UCITS."
  },
  {
    id: 65,
    unit: "Unit 3",
    topic: "Settlement",
    question: "Delivery versus Payment (DVP) eliminates which specific risk?",
    options: [
      "A. Market risk — changes in asset prices",
      "B. Principal risk — the risk of delivering securities without receiving payment (or vice versa)",
      "C. Liquidity risk — the inability to fund settlement",
      "D. Operational risk — errors in processing settlement instructions"
    ],
    correct: 1,
    explanation: "DVP (Delivery versus Payment) ensures that the final transfer of securities occurs simultaneously with the final transfer of funds. This eliminates principal risk (also called Herstatt risk) — the risk that one side of a trade is completed but the other fails, leaving the compliant party exposed to the full value of the transaction."
  },
  {
    id: 66,
    unit: "Unit 4",
    topic: "Risk",
    question: "Value at Risk (VaR) measures:",
    options: [
      "A. The maximum possible loss on a portfolio under any scenario",
      "B. The potential loss on a portfolio not expected to be exceeded over a given time horizon at a specified confidence level",
      "C. The average return on a portfolio over a given period",
      "D. The minimum acceptable return for a portfolio given its risk profile"
    ],
    correct: 1,
    explanation: "VaR estimates the maximum expected loss on a portfolio over a defined time period (e.g. 1 day, 10 days) at a given confidence level (e.g. 95%, 99%). For example, a 1-day 99% VaR of £1m means there is a 1% chance of losing more than £1m on any given day. VaR does not capture tail risk beyond the confidence level."
  },
  {
    id: 67,
    unit: "Unit 2",
    topic: "Equities",
    question: "The price-to-earnings (P/E) ratio is calculated as:",
    options: [
      "A. Market capitalisation divided by annual revenues",
      "B. Share price divided by earnings per share (EPS)",
      "C. Earnings per share divided by book value per share",
      "D. Share price divided by net asset value per share"
    ],
    correct: 1,
    explanation: "The P/E ratio = Market Price per Share ÷ Earnings per Share (EPS). It indicates how much investors are paying for each pound of earnings. A high P/E may suggest growth expectations or overvaluation; a low P/E may indicate value or poor prospects. It is one of the most widely used equity valuation metrics."
  },
  {
    id: 68,
    unit: "Unit 3",
    topic: "Corporate Actions",
    question: "A bonus issue (also called a capitalisation or scrip issue) results in:",
    options: [
      "A. Shareholders receiving cash proportional to their holding",
      "B. Free additional shares to existing shareholders, funded from company reserves — with no change in total equity value",
      "C. Shareholders being given the right to buy new shares at a discount",
      "D. The company acquiring shares from shareholders at a premium"
    ],
    correct: 1,
    explanation: "In a bonus (capitalisation/scrip) issue, the company issues free additional shares to existing shareholders in proportion to their holding (e.g. 1 for 4). No cash changes hands — it is a bookkeeping exercise converting reserves into share capital. The share price falls proportionally, leaving total shareholder value unchanged."
  },
  {
    id: 69,
    unit: "Unit 4",
    topic: "Fund Administration",
    question: "The Total Expense Ratio (TER) or Ongoing Charges Figure (OCF) of a fund measures:",
    options: [
      "A. The performance of the fund relative to its benchmark",
      "B. The total annual costs borne by investors, expressed as a percentage of average net assets",
      "C. The fund manager's performance fee as a proportion of outperformance",
      "D. The maximum permissible loss on the fund in any 12-month period"
    ],
    correct: 1,
    explanation: "The OCF (or TER) represents the total annual operating costs of a fund as a percentage of its average net assets. It includes the management fee, administration, audit, and other operational costs, but typically excludes dealing costs. Under PRIIPs/KID regulations, costs must be disclosed clearly to investors."
  },
  {
    id: 70,
    unit: "Unit 1",
    topic: "Financial Markets",
    question: "In a 'book-building' process for a new equity IPO, the lead bank:",
    options: [
      "A. Guarantees a minimum share price to all investors",
      "B. Collects investor demand and indicative pricing to determine the final offer price",
      "C. Lends money to the issuing company to fund the listing",
      "D. Acts as the sole market maker in the newly listed shares"
    ],
    correct: 1,
    explanation: "Book-building is the IPO price discovery process. The bookrunner solicits orders from institutional investors, each specifying the quantity they would buy at various price levels. This demand information is used to set the final offer price and allocate shares. Retail investors are often offered a fixed price tranche separately."
  },
  {
    id: 71,
    unit: "Unit 2",
    topic: "Derivatives",
    question: "What is a Credit Default Swap (CDS)?",
    options: [
      "A. A swap where two companies exchange their credit ratings",
      "B. An insurance-like contract where the protection buyer pays a premium and receives payment if a reference entity defaults",
      "C. A derivative that provides protection against rising interest rates",
      "D. A structured product that bundles mortgages into tradeable securities"
    ],
    correct: 1,
    explanation: "A CDS is a bilateral OTC derivative contract. The protection buyer pays periodic premium payments ('spread') to the protection seller. If a specified credit event (e.g. default, restructuring) occurs on the reference entity, the seller compensates the buyer. CDS can be used for hedging credit risk or for speculative positions."
  },
  {
    id: 72,
    unit: "Unit 3",
    topic: "Trade Lifecycle",
    question: "Post-trade transparency requirements under MiFID II require investment firms to publish:",
    options: [
      "A. The names of all institutional investors who traded the security",
      "B. Trade reports including price, volume, and time of transactions as soon as practicable after execution",
      "C. The complete order book showing all pending buy and sell orders",
      "D. The daily position of all clearing members at a central counterparty"
    ],
    correct: 1,
    explanation: "MiFID II post-trade transparency requires firms to make trade reports public as close to real time as possible. For liquid instruments, this is 'as quickly as technically possible' after execution. Reports must include instrument identifier, price, quantity, and timestamp. This helps price discovery and market integrity."
  },
  {
    id: 73,
    unit: "Unit 4",
    topic: "Reconciliation",
    question: "The three-way reconciliation in fund accounting typically compares positions held by:",
    options: [
      "A. The fund manager, the regulator, and the stock exchange",
      "B. The fund administrator, the custodian, and the prime broker",
      "C. The fund administrator's records, the custodian's records, and the CSD/transfer agent records",
      "D. The NAV administrator, the auditor, and the depositary"
    ],
    correct: 2,
    explanation: "Three-way reconciliation in fund accounting compares: (1) the fund administrator's position records, (2) the custodian's records of what it holds, and (3) the records at the CSD or sub-custodian where assets are ultimately held. All three should agree; breaks require investigation and resolution."
  },
  {
    id: 74,
    unit: "Unit 1",
    topic: "Regulation",
    question: "The Financial Ombudsman Service (FOS) handles:",
    options: [
      "A. Criminal prosecutions of financial services firms",
      "B. Complaints from consumers against financial services firms that cannot be resolved directly",
      "C. Licensing and authorisation of new financial services firms",
      "D. Setting prudential capital requirements for banks"
    ],
    correct: 1,
    explanation: "The Financial Ombudsman Service is an independent UK body that resolves disputes between consumers and financial services firms. If a consumer is unhappy with a firm's final response, they can refer the complaint to FOS. It can award compensation up to £415,000 (as of 2023) and its decisions are binding on firms."
  },
  {
    id: 75,
    unit: "Unit 2",
    topic: "Bonds",
    question: "Duration is a measure of a bond's:",
    options: [
      "A. Credit quality relative to a benchmark government bond",
      "B. Sensitivity to changes in interest rates, expressed in years",
      "C. Time to maturity minus the coupon payment dates",
      "D. Spread over the risk-free rate expressed in basis points"
    ],
    correct: 1,
    explanation: "Duration (specifically modified duration) measures a bond's price sensitivity to a 1% change in interest rates. A modified duration of 5 years means the bond price will change by approximately 5% for a 1% change in yields. Longer-dated, lower-coupon bonds have higher duration and are more sensitive to rate changes."
  },

  // ============================================================
  // OPERATIONAL RISK EXAM — APRIL 2026 (Real Exam Questions)
  // ============================================================

  {
    id: 76,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Risk Appetite",
    question: "What would typically be included in a risk appetite statement to address a risk which has been assessed as exceeding risk appetite limits?",
    options: [
      "A. A corrective action plan detailing steps to reduce the risk back within appetite",
      "B. An instruction to ignore the risk until the next scheduled annual review",
      "C. An increase in the risk limit to match the current elevated risk level",
      "D. Removal of the risk from the risk register entirely"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "When a risk exceeds the firm's risk appetite, the risk appetite statement should include a specific corrective action plan or remediation/escalation procedure outlining the steps required to bring the risk back within acceptable limits. This ensures accountability and a clear path to resolution. Simply ignoring the risk, raising the limit to match the breach, or removing it from the register would all undermine the purpose of having a risk appetite framework. (Chapter 3: The Nature of Operational Risk)"
  },
  {
    id: 77,
    unit: "OR Chapter 1",
    chapter: 1,
    topic: "Major Operational Risk Incidents",
    question: "How did the realisation of operational risk cause the regulator to suspend GAM's Absolute Return Fund in 2018?",
    options: [
      "A. A whistleblower reported breaches of dealing, inducement and record-keeping policies, leading to the fund's suspension",
      "B. A cyber attack on GAM's trading systems resulted in unauthorised fund transactions",
      "C. Fraudulent client accounts were opened without proper know-your-customer checks",
      "D. GAM's outsourced fund administrator failed to calculate the NAV correctly for several months"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "In 2018, a whistleblower reported that GAM's star fund manager Tim Haywood had breached the firm's policies on dealing, inducements and record-keeping. The FCA and FINMA investigated, leading to Haywood's suspension and the subsequent suspension and winding down of the GAM Absolute Return Bond Fund. This is a key operational risk case study illustrating how people risk (misconduct) and process failure can cause significant harm. (Chapter 1: Risk Basics — Major Operational Risk Incidents)"
  },
  {
    id: 78,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Risk Measurement Methods",
    question: "Which of the following best describes historical loss data analysis?",
    options: [
      "A. A review of past operational loss events to identify patterns, trends and potential future exposures",
      "B. A forward-looking scenario analysis based on hypothetical stress events",
      "C. An assessment of market price movements to estimate future volatility",
      "D. A review of counterparty credit default rates over a defined period"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Historical loss data analysis involves reviewing actual past operational loss events recorded by the firm (or sourced from external databases such as ORX) to identify patterns, recurring causes, trends and potential future exposures. It differs from scenario analysis, which is forward-looking and hypothetical. It is one of the key inputs into an operational risk capital model under the Basel framework. (Chapter 3: The Nature of Operational Risk — Risk Measurement Methods)"
  },
  {
    id: 79,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Risk Reporting",
    question: "Which of these is a purpose of internal reporting of risk events?",
    options: [
      "A. To enable management to identify trends, escalate issues and make informed decisions on risk mitigation",
      "B. To satisfy only external regulatory reporting requirements imposed by the FCA",
      "C. To record events solely for the purpose of making insurance claims",
      "D. To assign formal blame to individual employees responsible for the event"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Internal reporting of risk events serves several important management purposes: it allows senior management to identify emerging trends, spot root causes, escalate material issues and make informed, evidence-based decisions on risk mitigation and resource allocation. It is not primarily about satisfying external regulators, filing insurance claims, or apportioning blame — a blame culture actually discourages staff from reporting events, which worsens the firm's risk management. (Chapter 3: The Nature of Operational Risk — Risk Reporting)"
  },
  {
    id: 80,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Three Lines of Defence",
    question: "A firm's internal audit function is important in terms of the operational risk management process because it:",
    options: [
      "A. Provides independent assurance on the effectiveness of risk management and internal controls",
      "B. Manages day-to-day operational risks within business units",
      "C. Sets the firm's risk appetite and overall risk strategy",
      "D. Executes trades and client transactions on behalf of the firm"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Internal audit forms the third line of defence in the Three Lines of Defence model. It provides independent, objective assurance to the board and senior management on the overall effectiveness of risk management, controls and governance processes. The first line (business units) manages day-to-day risks; the second line (risk and compliance functions) sets the framework and monitors; and the third line (internal audit) independently assures that both previous lines are working effectively. (Chapter 3: The Nature of Operational Risk — Three Lines of Defence)"
  },
  {
    id: 81,
    unit: "OR Chapter 4",
    chapter: 4,
    topic: "Causes and Impacts",
    question: "Inaccurate financial reporting can lead to poor decision-making and is classified as:",
    options: [
      "A. An operational risk event arising from process failure",
      "B. A market risk event caused by adverse price movements",
      "C. A liquidity risk event caused by inability to meet obligations",
      "D. A credit risk event caused by counterparty default"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Inaccurate financial reporting is classified as an operational risk event, specifically arising from process failure (and potentially people failure). Under the Basel framework's seven loss event categories, this would fall under 'Execution, Delivery and Process Management'. It is not market, liquidity or credit risk — those relate to price movements, cash flow shortfalls and counterparty default respectively. Poor reporting can cascade into poor strategic and operational decisions, making it a significant operational risk concern. (Chapter 4: Causes and Impacts of Operational Risk Events)"
  },
  {
    id: 82,
    unit: "OR Chapter 2",
    chapter: 2,
    topic: "Market Risk / Liquidity",
    question: "Market depth is defined as the:",
    options: [
      "A. Ability of a market to absorb large trade volumes without significantly affecting the price",
      "B. Total market capitalisation of all listed securities in a given exchange",
      "C. Number of active market participants registered with the regulator",
      "D. Degree of volatility in asset prices over a defined historical period"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Market depth refers to the market's capacity to sustain relatively large market orders without a significant impact on the price of the security. A deep market has many buyers and sellers at various price levels, so large trades can be executed without moving the price substantially. Shallow markets (low depth) are associated with higher liquidity risk, as large trades can cause significant price slippage. (Chapter 2: Other Major Risks — Market and Liquidity Risk)"
  },
  {
    id: 83,
    unit: "OR Chapter 2",
    chapter: 2,
    topic: "Credit Risk Management",
    question: "A common credit risk mitigation technique at the individual borrower level is:",
    options: [
      "A. Requiring collateral or security against the loan",
      "B. Diversifying the investment portfolio across multiple asset classes",
      "C. Increasing the firm's Value-at-Risk (VaR) limits",
      "D. Applying macro-level stress testing to the entire loan book"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "At the individual borrower level, requiring collateral (such as property, financial assets or a personal guarantee) is a standard credit risk mitigation technique. If the borrower defaults, the lender can seize and liquidate the collateral to recover the debt. Other techniques at the portfolio level include diversification and setting concentration limits, but these operate at a portfolio level rather than mitigating risk for a specific borrower. (Chapter 2: Other Major Risks — Credit Risk Management)"
  },
  {
    id: 84,
    unit: "OR Chapter 6",
    chapter: 6,
    topic: "Support and Control Functions",
    question: "For a successful merger between two major financial institutions, which function implements the integration?",
    options: [
      "A. The operations function, as it manages the integration of systems, processes and people",
      "B. The front office trading desk, as it drives revenue synergies post-merger",
      "C. The compliance function alone, as regulatory approvals are the main obstacle",
      "D. The external auditors, as they verify the combined entity's financial statements"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "A successful merger between financial institutions depends heavily on the operations function to implement the integration. Operations manages the complex task of combining IT systems, back-office processes, data migration, client on-boarding, staff restructuring and workflow redesign. While the front office drives revenue and compliance handles regulatory approvals, it is operations that physically integrates the two firms' day-to-day running. Failure to manage this integration is a major source of operational risk in mergers. (Chapter 6: Support and Control Functions)"
  },
  {
    id: 85,
    unit: "OR Chapter 4",
    chapter: 4,
    topic: "Near Misses and Loss Event Recording",
    question: "An error in a contract reads £1 million rather than £10 million but is corrected in time. What action is required?",
    options: [
      "A. The error should be recorded as a near miss in the operational risk loss event database even though no financial loss occurred",
      "B. No action is needed as no financial loss was incurred and the error was corrected",
      "C. The error must be reported immediately to the FCA as a material regulatory breach",
      "D. A formal complaint must be raised against the counterparty for accepting an incorrect contract"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Even though no financial loss occurred, this contract error is a near miss and should be recorded in the operational risk loss event database. Near misses (also called 'no-harm' events or 'near hits') provide valuable information about weaknesses in processes and controls — they indicate what could go wrong and are an important early warning indicator. Capturing near misses helps firms identify and fix control weaknesses before they result in actual losses. Ignoring them defeats the purpose of loss event data collection. (Chapter 4: Causes and Impacts — Near Misses and Loss Event Recording)"
  },
  {
    id: 86,
    unit: "OR Chapter 2",
    chapter: 2,
    topic: "Market Risk Measurement",
    question: "Which of the following is a disadvantage of value-at-risk (VaR)? It does not:",
    options: [
      "A. Capture the size of losses beyond the confidence level (tail risk and extreme events)",
      "B. Use statistical or quantitative methods in its calculation",
      "C. Apply to trading portfolios or investment positions",
      "D. Consider historical price data in its estimation"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "A key limitation of VaR is that it does not capture the magnitude of losses that occur beyond the confidence level — i.e., it says nothing about how bad losses can be in the tail of the distribution (extreme events). For example, a 99% VaR only tells you that losses exceeding the VaR figure occur less than 1% of the time, but not how large those losses might be. This is why Expected Shortfall (CVaR) was developed as a complementary measure. VaR does use statistical methods, can be applied to trading portfolios, and does use historical data. (Chapter 2: Other Major Risks — Market Risk Measurement)"
  },
  {
    id: 87,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Risk Measurement Methods",
    question: "A firm has completed a risk measurement exercise using the benchmarking method. What will the results mainly indicate?",
    options: [
      "A. How the firm's risk profile compares to industry peers or external data sources",
      "B. The exact regulatory capital required under the Basel III framework",
      "C. The precise probability of occurrence for each individual risk event",
      "D. Whether the firm is in compliance with all applicable FCA conduct rules"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Benchmarking as a risk measurement method involves comparing a firm's risk profile, loss data, or risk metrics against those of industry peers, trade associations (such as ORX) or external databases. The results primarily indicate how the firm's risk exposure and loss experience compares relative to others — highlighting areas where the firm may be above or below the industry norm. It does not directly calculate regulatory capital, produce precise event probabilities, or determine FCA compliance. (Chapter 3: The Nature of Operational Risk — Risk Measurement Methods)"
  },
  {
    id: 88,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Risk Assessment Tools",
    question: "A method that prioritises risks following an assessment of their likelihood and impact is known as:",
    options: [
      "A. Risk heat mapping (risk matrix)",
      "B. Scenario analysis",
      "C. Key risk indicators (KRIs)",
      "D. Loss distribution approach (LDA)"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "A risk heat map (or risk matrix) is a visual tool that plots risks on a two-dimensional grid based on their assessed likelihood (probability of occurrence) and impact (severity of consequence). This allows risks to be prioritised — those with high likelihood and high impact appear in the 'red' zone requiring immediate attention, while lower-rated risks appear in 'amber' or 'green' zones. Scenario analysis examines specific hypothetical events; KRIs are forward-looking metrics; LDA is a statistical capital modelling technique. (Chapter 3: The Nature of Operational Risk — Risk Assessment Tools)"
  },
  {
    id: 89,
    unit: "OR Chapter 2",
    chapter: 2,
    topic: "Credit Ratings",
    question: "During the financial crisis, credit rating agencies were criticised because they:",
    options: [
      "A. Assigned high (AAA) credit ratings to structured/securitised products that subsequently defaulted or were significantly downgraded",
      "B. Refused to assign credit ratings to sovereign government bonds during the crisis",
      "C. Charged excessive upfront fees directly to retail investors for rating access",
      "D. Published credit rating updates too infrequently to be useful to the market"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "A major criticism of credit rating agencies (Moody's, S&P, Fitch) during the 2007-2009 financial crisis was that they assigned AAA (the highest possible) credit ratings to complex structured products such as Collateralised Debt Obligations (CDOs) and mortgage-backed securities (MBS), many of which subsequently suffered dramatic defaults or downgrades. Critics argued the agencies had conflicts of interest (paid by the issuers they rated), used flawed models, and failed to account for the correlation of underlying mortgage defaults. (Chapter 2: Other Major Risks — Credit Ratings)"
  },
  {
    id: 90,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Risk Treatment / Mitigation",
    question: "A financial institution has introduced new automated systems to replace manual processes. This is an example of which method of risk treatment?",
    options: [
      "A. Risk reduction (treat) — using technology to reduce the likelihood of human error",
      "B. Risk transfer — passing the risk to a third-party technology provider",
      "C. Risk avoidance (terminate) — ceasing the activities that generate the risk",
      "D. Risk acceptance (tolerate) — acknowledging the risk without taking further action"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Introducing automated systems to replace manual processes is an example of risk reduction (also called 'treat'). Automation reduces the likelihood of human error — a major source of operational risk — thereby lowering the firm's overall risk exposure. This is one of the four 'T's of risk treatment: Treat (reduce), Transfer (e.g., insurance), Terminate (avoid), and Tolerate (accept). The risk has not been transferred to a third party, avoided entirely, or simply accepted without action. (Chapter 3: The Nature of Operational Risk — The 4Ts of Risk Treatment)"
  },
  {
    id: 91,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Risk Assessment vs Measurement",
    question: "In operational risk, what key question do both risk assessment and risk measurement address?",
    options: [
      "A. What could go wrong and what is the potential impact or loss?",
      "B. Who is personally responsible and liable for each loss event?",
      "C. When did the most recent loss event occur within the firm?",
      "D. How much regulatory capital is currently held against operational risk?"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Both risk assessment and risk measurement fundamentally seek to answer the question: what could go wrong, and what is the potential impact or loss? Risk assessment does this qualitatively (e.g., through RCSA, heat maps, scenario analysis), while risk measurement does it quantitatively (e.g., using loss data, VaR models, statistical distributions). The question of who is liable, when events occurred, or how much capital is held are separate, secondary considerations. (Chapter 3: The Nature of Operational Risk — Risk Assessment vs Measurement)"
  },
  {
    id: 92,
    unit: "OR Chapter 7",
    chapter: 7,
    topic: "Regulatory Environment / Conduct",
    question: "When on-boarding a new client, how are firms expected to satisfy their regulatory obligations relating to product suitability?",
    options: [
      "A. By conducting a suitability assessment — gathering information on the client's knowledge, experience, financial situation and investment objectives",
      "B. By providing the client with a standard product brochure covering all available products",
      "C. By requiring the client to sign a disclaimer accepting all investment risk",
      "D. By checking the client's credit rating and income level only"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Under MiFID II and the FCA's Conduct of Business Sourcebook (COBS), firms must conduct a suitability assessment before making personal recommendations or managing investments. This involves gathering sufficient information about the client's investment knowledge and experience, financial situation (including ability to bear losses) and investment objectives (including risk tolerance). Only after this assessment can the firm determine whether a product is suitable. A brochure, disclaimer or credit check alone does not fulfil suitability obligations. (Chapter 7: Operational Risk in the Regulatory Environment)"
  },
  {
    id: 93,
    unit: "OR Chapter 5",
    chapter: 5,
    topic: "Operational Risks in the Trade Cycle / Corporate Actions",
    question: "If a firm fails to respond to a client's instruction for a corporate action, they could be exposed to:",
    options: [
      "A. Financial loss and/or reputational damage, as the client may miss a time-sensitive election",
      "B. Increased credit risk from the counterparty involved in the corporate action",
      "C. Reduced liquidity risk because fewer transactions are being processed",
      "D. Lower market risk exposure as the position remains unchanged"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Corporate actions such as rights issues, tender offers and conversions are time-sensitive — missing the election deadline is irreversible. If a firm fails to act on a client's instruction, the client may miss out on valuable rights or be allocated a less favourable option by default. This exposes the firm to financial loss (it may need to compensate the client) and reputational damage (loss of client trust and potential complaints or regulatory scrutiny). It does not reduce any form of risk — it creates it. (Chapter 5: Operational Risks in the Trade Cycle — Corporate Actions)"
  },
  {
    id: 94,
    unit: "OR Chapter 1",
    chapter: 1,
    topic: "Definition of Operational Risk",
    question: "The Bank for International Settlements' (BIS/Basel) definition of operational risk is:",
    options: [
      "A. The risk of loss resulting from inadequate or failed internal processes, people and systems, or from external events",
      "B. The risk of loss from adverse movements in market prices, interest rates or exchange rates",
      "C. The risk that a counterparty will default on its contractual obligations",
      "D. The risk of insufficient liquid assets to meet financial obligations as they fall due"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "The Basel Committee on Banking Supervision (BCBS), operating under the Bank for International Settlements (BIS), defines operational risk as 'the risk of loss resulting from inadequate or failed internal processes, people and systems or from external events.' This definition — which explicitly includes legal risk — is the standard industry and regulatory definition used in the CISI Operational Risk syllabus. The other options describe market risk, credit risk and liquidity risk respectively. (Chapter 1: Risk Basics — Definition of Operational Risk)"
  },
  {
    id: 95,
    unit: "OR Chapter 5",
    chapter: 5,
    topic: "Trade Cycle / Legal Risk",
    question: "At what stage is the legal department primarily involved with eliminating operational risk in the trade lifecycle?",
    options: [
      "A. At the pre-settlement / contract stage — reviewing and ensuring contracts are legally sound before execution",
      "B. During trade execution on the trading floor or electronic platform",
      "C. After settlement has occurred and the trade is fully booked",
      "D. Only during regulatory investigations or enforcement actions"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "The legal department's primary involvement in reducing operational risk occurs at the pre-settlement/contract stage. Legal reviews the contractual documentation (ISDA master agreements, netting agreements, margin agreements, confirmations) to ensure they are legally enforceable, accurate and complete before the trade is executed or settled. Identifying and correcting legal ambiguities or errors at this stage prevents costly disputes, failed settlements and litigation risk arising later in the trade lifecycle. (Chapter 5: Operational Risks in the Trade Cycle — Legal Risk and the Trade Lifecycle)"
  },
  {
    id: 96,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "KRIs / Technology Risk / Risk Monitoring",
    question: "A surge in demand following a TV advertising campaign crashes the firm's IT system. Which function should have alerted management to this risk?",
    options: [
      "A. The risk management function, through monitoring Key Risk Indicators such as system capacity utilisation",
      "B. The marketing department, as they commissioned the advertising campaign",
      "C. The external auditors, as they review IT controls in the annual audit",
      "D. The front office sales desk, as they manage client demand directly"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "The risk management function is responsible for monitoring Key Risk Indicators (KRIs) — forward-looking metrics that signal emerging risks before they crystallise into losses. A KRI such as 'percentage of system capacity utilised' or 'peak transaction volumes vs. system threshold' should have been tracked and escalated before the campaign went live. If IT capacity was near its limit, the risk function should have flagged this to management, who could then have arranged additional capacity or phased the campaign. (Chapter 3: The Nature of Operational Risk — KRIs and Risk Monitoring)"
  },
  {
    id: 97,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "People Risk / Change Risk",
    question: "A large firm initiated three special projects: SP1 (addressing resource levels), SP2 (reviewing staff remuneration), SP3 (improving management communication). Which could have had an impact on operational risk?",
    options: [
      "A. All three — SP1, SP2 and SP3 all represent factors that can drive operational risk",
      "B. SP1 only, as inadequate resource levels are the only direct cause of operational failures",
      "C. SP2 and SP3 only, as remuneration and communication are the primary people risk drivers",
      "D. None of them, as special projects are strategic decisions unrelated to operational risk"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "All three projects relate to operational risk drivers: SP1 (resource levels) — inadequate staffing leads to errors, missed controls and key-person dependency risk; SP2 (staff remuneration) — poor or unfair pay structures can incentivise misconduct/fraud, increase staff turnover, and result in loss of skilled personnel; SP3 (management communication) — poor communication leads to misunderstanding of responsibilities, execution errors and failure to escalate issues appropriately. People risk is one of the four main sources of operational risk (people, processes, systems, external events). (Chapter 3: The Nature of Operational Risk — People Risk and Change Risk)"
  },
  {
    id: 98,
    unit: "OR Chapter 7",
    chapter: 7,
    topic: "Basel II Regulatory Capital",
    question: "Under the Pillar 1 requirements of Basel II, the minimum overall capital ratio is:",
    options: [
      "A. 8% of risk-weighted assets",
      "B. 4% of total (unweighted) assets",
      "C. 10% of risk-weighted assets",
      "D. 6% of gross income"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Under Basel II Pillar 1 (Minimum Capital Requirements), banks must hold a minimum total capital ratio of 8% of risk-weighted assets. This 8% comprises Tier 1 capital (at least 4%) and Tier 2 capital (up to 4%). The capital requirement covers credit risk, market risk and — crucially — operational risk (introduced by Basel II). Pillar 2 addresses the supervisory review process and Pillar 3 covers market discipline through disclosure requirements. (Chapter 7: Operational Risk in the Regulatory Environment — Basel II Pillar 1)"
  },
  {
    id: 99,
    unit: "OR Chapter 6",
    chapter: 6,
    topic: "Support and Control Functions / Middle Office",
    question: "Janice works in the middle office of an investment firm active in the bonds market. A typical responsibility that reduces operational risk is:",
    options: [
      "A. Reconciling trade confirmations and positions between the front office and back office to identify and resolve discrepancies",
      "B. Executing bond trades on behalf of clients on electronic trading platforms",
      "C. Setting credit limits and counterparty exposure thresholds for the firm",
      "D. Marketing new bond products and structured notes to institutional clients"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "A core middle office function that reduces operational risk is reconciliation — comparing and matching trade confirmations, positions and valuations between the front office (traders) and back office (settlement/operations). Discrepancies (breaks) are identified and investigated promptly, preventing errors from propagating into settlement failures, incorrect P&L, or regulatory misreporting. The front office executes trades; risk or credit officers set limits; and marketing/sales roles handle client relationships — these are not typical middle office responsibilities. (Chapter 6: Support and Control Functions — Middle Office)"
  },
  {
    id: 100,
    unit: "OR Chapter 5",
    chapter: 5,
    topic: "Trade Cycle / Pre-Settlement",
    question: "A component of the pre-settlement phase of the trade cycle is trade:",
    options: [
      "A. Confirmation — verifying the details of a trade between counterparties before settlement",
      "B. Execution — the act of buying or selling a security in the market",
      "C. Clearing — the calculation of net obligations and preparation for settlement",
      "D. Regulatory reporting — submitting trade data to the regulator"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Trade confirmation is a key component of the pre-settlement phase. After a trade is executed, both counterparties exchange and verify the trade details (security, quantity, price, settlement date, counterparty identifiers) to confirm they agree on the terms before settlement takes place. If discrepancies are found, they must be resolved before the settlement date to avoid failed trades. Execution occurs before pre-settlement; clearing and settlement are subsequent phases; and regulatory reporting is a parallel obligation. (Chapter 5: Operational Risks in the Trade Cycle — Pre-Settlement Phase)"
  },
  {
    id: 101,
    unit: "OR Chapter 3",
    chapter: 3,
    topic: "Risk Assessment Methods",
    question: "Which method of risk assessment uses business professionals' experience to capture possible combinations of events that have occurred in the past or may result in loss in the future?",
    options: [
      "A. Scenario analysis — uses expert judgement to construct plausible, severe scenarios based on experience and historical events",
      "B. Key risk indicators (KRIs) — forward-looking quantitative metrics that signal emerging risks",
      "C. Loss data analysis — a review of historical loss event records to identify past patterns",
      "D. Benchmarking — comparing the firm's risk profile against industry peers and external data"
    ],
    correct: 0,
    previousExam: true,
    examDate: "April 2026",
    explanation: "Scenario analysis relies on the experience and judgement of business professionals and risk experts to construct plausible but severe combinations of events — both those that have occurred historically and those that could happen in the future. It is particularly useful for capturing low-frequency, high-severity tail risks that may not appear in historical loss data. Workshops bring together subject matter experts to identify and quantify potential scenarios. KRIs are forward-looking metrics; loss data analysis is backward-looking; and benchmarking compares against peers. (Chapter 3: The Nature of Operational Risk — Scenario Analysis)"
  }
];

// Make available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS };
}
