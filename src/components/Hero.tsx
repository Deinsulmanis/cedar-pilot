const pipeline = [
  'Target Accounts',
  'Personalized Outreach',
  'Qualified Interest',
  'Booked Estimate',
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap">
        <p className="hero__eyebrow">
          ScaleLab AI <span>×</span> South-West Roof Restoration
        </p>
        <h1 className="hero__title">
          A Performance-Based Outreach System for Generating More Cedar Roof
          Estimates
        </h1>
        <p className="hero__support">
          ScaleLab AI will build and operate a targeted outbound email system
          designed to identify relevant property decision-makers, start
          qualified conversations, and convert interest into booked cedar roof
          restoration estimates.
        </p>
        <div className="hero__meta">
          <span className="pill">30-Day Initial Pilot</span>
          <span className="hero__for">
            Prepared for{' '}
            <a href="https://southwestroof.ca" target="_blank" rel="noreferrer">
              southwestroof.ca
            </a>
          </span>
        </div>

        <ol className="pipeline" aria-label="Campaign path">
          {pipeline.map((step, index) => (
            <li key={step} className="pipeline__item">
              <span className="pipeline__node">{String(index + 1).padStart(2, '0')}</span>
              <span className="pipeline__label">{step}</span>
            </li>
          ))}
        </ol>

        <dl className="cover-meta">
          <div>
            <dt>Prepared by</dt>
            <dd>ScaleLab AI</dd>
          </div>
          <div>
            <dt>Prepared for</dt>
            <dd>South-West Roof Restoration</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>September 2026</dd>
          </div>
          <div>
            <dt>Document</dt>
            <dd>Commercial outreach proposal</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
