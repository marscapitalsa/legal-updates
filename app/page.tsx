const updates = [
  {
    date: "29 Jun 2026",
    tag: "FINMA",
    title: "FINMA enforcement: conflicts, suitability and illiquid products",
    summary:
      "FINMA concluded proceedings involving a fund manager and a portfolio-manager applicant, citing conflicts of interest and serious FinSA suitability and appropriateness failures.",
    level: "Action may be required",
    why: "The case is a tangible reminder that product selection, concentration, conflicts and evidence of client suitability remain core supervisory risks.",
    response: "Test conflict disclosures, product-governance controls and the suitability rationale for higher-risk or less-liquid instruments.",
    url: "https://www.finma.ch/en/news/2026/06/20260629-mm-durchsetzung-verhaltensregeln/",
  },
  {
    date: "12 Jun 2026",
    tag: "AMLA / LETA",
    title: "New AML and beneficial-owner transparency regime takes effect 1 October",
    summary:
      "The revised AMLA and the Legal Entities Transparency Act, together with implementing ordinances, will enter into force on 1 October 2026.",
    level: "Prepare now",
    why: "AMLA-supervised financial intermediaries will be among the eligible users of the central transparency register for KYC and due-diligence purposes.",
    response: "Map affected entities, refresh beneficial-owner escalation procedures and prepare authorised access to the new register.",
    url: "https://www.sif.admin.ch/en/anti-money-laundering-act-amla",
    commentaryUrl: "https://www.lenzstaehelin.com/news-and-insights/browse-thought-leadership-insights/insights-detail/new-legal-entities-transparency-act-to-enter-into-force-on-1-october-2026/",
  },
  {
    date: "03 Jun 2026",
    tag: "FINMA Guidance 03/2026",
    title: "Portfolio-manager governance: risk management and outsourcing focus",
    summary:
      "FINMA’s guidance highlights risk identification across managed assets and confirms that responsibility remains with the institution when risk management or compliance is outsourced.",
    level: "Control review",
    why: "The guidance directly addresses risk, outsourcing and supervisory escalation in the portfolio-manager sector.",
    response: "Confirm the risk inventory covers liquidity, valuation, concentration and conflicts; document monitoring of outsourced compliance and risk functions.",
    url: "https://www.finma.ch/en/~/media/finma/dokumente/dokumentencenter/myfinma/4dokumentation/finma-aufsichtsmitteilungen/20260603-finma-aufsichtsmitteilung-03-2026.pdf",
  },
  {
    date: "06 May 2026",
    tag: "FINMA data collection",
    title: "Asset-management data collection 2026 published",
    summary:
      "FINMA published its 2026 asset-management survey and guidance in early May; the annual filing deadline was the end of June.",
    level: "Recurring obligation",
    why: "The survey supports FINMA’s risk-oriented assessment across portfolio management, advisory and execution-only activity.",
    response: "Retain the 2026 filing evidence and use its data fields as an internal readiness checklist for the next reporting cycle.",
    url: "https://www.finma.ch/en/supervision/asset-management/data-collection/datenerhebung-asset-management/",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Mars Capital Regulatory Brief home">
          <span className="brand-mark">M</span>
          <span>Mars Capital Regulatory Brief</span>
        </a>
        <div className="nav-links">
          <a href="#weekly">This week</a>
          <a href="#archive">Archive</a>
          <a href="#topics">Topics</a>
          <a href="#about">About</a>
        </div>
        <button className="subscribe-button">Subscribe</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Swiss asset management · legal intelligence</p>
          <h1>Regulatory change,<br /><em>made useful.</em></h1>
          <p className="lede">
            A concise, trusted view of Swiss legal and regulatory developments that matter to asset managers.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#updates">Browse latest updates</a>
            <a className="text-link" href="#about">How it works <span>→</span></a>
          </div>
        </div>
        <aside className="brief-card" aria-label="Latest briefing">
          <div className="card-topline"><span>Latest briefing</span><span>07.2026</span></div>
          <div className="rule" />
          <p className="card-kicker">Supervisory focus</p>
          <h2>Outsourcing controls move to the foreground</h2>
          <p>What Swiss asset managers should revisit now — in five practical questions.</p>
          <a href="#updates">Read the briefing <span>↗</span></a>
        </aside>
      </section>

      <section className="signal-bar" aria-label="Site focus">
        <p>Curated for decision-makers</p><span />
        <p>Swiss law &amp; regulation</p><span />
        <p>Asset management</p>
      </section>

      <section className="weekly-section" id="weekly">
        <header className="weekly-heading">
          <div><p className="eyebrow">Week in review · 13–19 July 2026</p><h2>The week,<br />in context.</h2></div>
          <p>Four developments. Two items to bring into your control calendar. The rest: informed monitoring.</p>
        </header>
        <div className="weekly-grid">
          <div className="weekly-stat"><span>04</span><p>developments tracked</p></div>
          <div className="weekly-stat"><span>02</span><p>items for active review</p></div>
          <div className="weekly-note"><strong>Editor&apos;s read</strong><p>Supervisory expectations are moving from policy language to evidence: clear ownership, documentation and tested controls.</p></div>
        </div>
      </section>

      <section className="updates-section" id="updates">
        <header className="section-heading">
          <div>
            <p className="eyebrow">The legal update</p>
            <h2>What changed.<br />What it means.</h2>
          </div>
          <p>Clear summaries, context and a practical signal — without the noise.</p>
        </header>
        <div className="update-list">
          {updates.map((update, index) => (
            <article className="update" key={update.title}>
              <div className="update-meta"><span>{update.date}</span><span>{update.tag}</span></div>
              <div className="update-main">
                <span className={`status status-${index}`}>{update.level}</span>
                <h3>{update.title}</h3>
                <p>{update.summary}</p>
              </div>
              <a className="arrow" href={update.url} target="_blank" rel="noreferrer" aria-label={`Open source for ${update.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="briefs" aria-labelledby="briefs-title">
        <header className="briefs-heading"><p className="eyebrow">Briefing notes</p><h2 id="briefs-title">The practical brief.</h2><p>For each development: the legal signal, why it matters, and the next sensible step.</p></header>
        <div className="brief-table-wrap">
          <table className="brief-table">
            <thead><tr><th>Development</th><th>Why it matters to a Swiss asset manager</th><th>Recommended next step</th></tr></thead>
            <tbody>{updates.map((update, index) => <tr id={`brief-${index}`} key={update.tag}><td><span className="brief-source">{update.tag} · {update.date}</span><strong>{update.title}</strong><p>{update.summary}</p><a className="source-link" href={update.url} target="_blank" rel="noreferrer">Open primary source ↗</a>{update.commentaryUrl && <a className="source-link secondary-source" href={update.commentaryUrl} target="_blank" rel="noreferrer">Read legal commentary ↗</a>}</td><td>{update.why}</td><td>{update.response}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="archive" id="archive">
        <div><p className="eyebrow">Previous editions</p><h2>Weekly archive.</h2></div>
        <div className="archive-list">
          <a href="#weekly"><span>11–17 July 2026</span><strong>Data governance, client classification and fund documentation</strong><em>04 updates · →</em></a>
          <a href="#weekly"><span>04–10 July 2026</span><strong>AML monitoring, market conduct and outsourcing controls</strong><em>05 updates · →</em></a>
          <a href="#weekly"><span>27 June–03 July 2026</span><strong>Sustainable finance, FIDLEG practice and cross-border distribution</strong><em>03 updates · →</em></a>
        </div>
      </section>

      <section className="topics" id="topics">
        <p className="eyebrow">Follow the themes that matter</p>
        <div className="topic-grid">
          <a href="#updates">Conduct &amp; client protection <span>↗</span></a>
          <a href="#updates">AML &amp; financial crime <span>↗</span></a>
          <a href="#updates">Sustainable finance <span>↗</span></a>
          <a href="#updates">Governance &amp; operations <span>↗</span></a>
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">A working prototype</p>
        <h2>Built to turn regulatory movement into informed action.</h2>
        <p>Updates in the current edition are sourced from FINMA and Swiss federal sources, with source links in every brief. This prototype is for regulatory monitoring and is not legal advice.</p>
      </section>

      <footer><span>© 2026 Mars Capital Regulatory Brief</span><span>Switzerland · Independent legal intelligence</span></footer>
    </main>
  );
}
