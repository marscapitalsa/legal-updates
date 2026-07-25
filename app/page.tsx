const updates = [
  {
    date: "29 Jun 2026",
    source: "FINMA · Enforcement",
    priority: "Action may be required",
    change: "FINMA concluded enforcement proceedings involving a fund manager and a portfolio-manager applicant. The cases concerned conflicts of interest and serious FinSA suitability and appropriateness failures, including exposure to illiquid products.",
    impact: "Relevant to portfolio managers because FINMA is testing whether firms can evidence product selection, client suitability, concentration decisions and conflict management—not merely maintain policies.",
    next: "Review suitability files and conflict disclosures for higher-risk or illiquid instruments; confirm the investment rationale is recorded.",
    url: "https://www.finma.ch/en/news/2026/06/20260629-mm-durchsetzung-verhaltensregeln/",
  },
  {
    date: "12 Jun 2026",
    source: "Federal Department of Finance · AMLA / LETA",
    priority: "Prepare now",
    change: "The revised Anti-Money Laundering Act, Legal Entities Transparency Act and implementing ordinances enter into force on 1 October 2026. A central transparency register will be introduced.",
    impact: "AMLA-supervised financial intermediaries, including relevant Swiss asset managers, will be eligible to use the register for KYC and due-diligence purposes. Client onboarding and beneficial-owner workflows may need updating.",
    next: "Map affected entities, update beneficial-owner escalation procedures and plan authorised access to the register.",
    url: "https://www.sif.admin.ch/en/anti-money-laundering-act-amla",
  },
  {
    date: "03 Jun 2026",
    source: "FINMA · Guidance 03/2026",
    priority: "Control review",
    change: "FINMA guidance focuses on the identification of risks across managed assets and confirms that responsibility remains with the institution when risk management or compliance is outsourced.",
    impact: "Directly relevant where a portfolio manager relies on external compliance or risk providers: accountability, oversight and documented monitoring remain with the regulated firm.",
    next: "Check risk inventory coverage for liquidity, valuation, concentration and conflicts; document oversight of outsourced control functions.",
    url: "https://www.finma.ch/en/~/media/finma/dokumente/dokumentencenter/myfinma/4dokumentation/finma-aufsichtsmitteilungen/20260603-finma-aufsichtsmitteilung-03-2026.pdf",
  },
  {
    date: "06 May 2026",
    source: "FINMA · Asset-management data collection",
    priority: "Recurring obligation",
    change: "FINMA published the 2026 asset-management survey and filing guidance. The data collection supports FINMA's risk-oriented view of portfolio management, advisory and execution-only activity.",
    impact: "The survey fields show the supervisory information FINMA expects firms to maintain consistently; filing evidence can be useful in a future supervisory discussion.",
    next: "Retain filing evidence and use the submitted data fields as an internal readiness checklist for the next reporting cycle.",
    url: "https://www.finma.ch/en/supervision/asset-management/data-collection/datenerhebung-asset-management/",
  },
];

export default function Home() {
  return (
    <main className="internal-brief">
      <header className="brief-header">
        <div>
          <p className="eyebrow">Internal regulatory monitoring</p>
          <h1>Mars Capital Regulatory Brief</h1>
        </div>
        <p>Swiss asset management · 2026 update log</p>
      </header>

      <nav className="brief-nav" aria-label="Brief navigation">
        <a href="#current">Current updates</a>
        <a href="#archive">Archive</a>
        <a href="#methodology">Methodology</a>
      </nav>

      <section id="current" className="brief-content" aria-labelledby="current-title">
        <div className="section-intro"><h2 id="current-title">Current updates</h2><p>Open the source for the underlying publication. The internal assessment is a concise operational prompt, not legal advice.</p></div>
        <div className="brief-table-wrap">
          <table className="internal-table">
            <thead><tr><th>Date</th><th>Source / priority</th><th>What changed</th><th>Why this matters to a Swiss asset manager</th><th>Suggested internal follow-up</th></tr></thead>
            <tbody>{updates.map((update) => <tr key={update.url}>
              <td className="date-cell">{update.date}</td>
              <td><span className="source-name">{update.source}</span><span className="priority">{update.priority}</span></td>
              <td><p>{update.change}</p><a href={update.url} target="_blank" rel="noreferrer">Open primary source ↗</a></td>
              <td>{update.impact}</td>
              <td>{update.next}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="archive" id="archive"><h2>Archive</h2><div className="archive-list"><a href="#current"><span>11–17 July 2026</span><strong>Data governance, client classification and fund documentation</strong><em>4 updates</em></a><a href="#current"><span>04–10 July 2026</span><strong>AML monitoring, market conduct and outsourcing controls</strong><em>5 updates</em></a><a href="#current"><span>27 June–03 July 2026</span><strong>Sustainable finance, FIDLEG practice and cross-border distribution</strong><em>3 updates</em></a></div></section>

      <section className="methodology" id="methodology"><h2>Scope and methodology</h2><p>Sources currently include FINMA and Swiss federal publications. Each entry separates the source fact from an internal relevance note and a suggested follow-up. The brief is a monitoring tool and not legal advice.</p></section>
      <footer>© 2026 Mars Capital SA · Internal use</footer>
    </main>
  );
}
