import Section from './Section'

export default function Performance() {
  return (
    <Section
      id="performance"
      number="07"
      kicker="Expected Performance"
      title="What to Expect"
      lead={
        <>
          <p>
            Cold email performance depends heavily on the quality of the target
            list, the relevance of the offer, deliverability, service area,
            available market size, prospect timing, follow-up, and South-West’s
            sales process. None of those variables can be promised in advance.
          </p>
          <p>
            The ranges below are an illustrative planning framework — not a
            forecast, and not a guarantee of booked estimates or revenue.
          </p>
        </>
      }
    >
      <p className="range-label">
        For every <strong>1,000 highly targeted prospects</strong> contacted
      </p>
      <div className="ranges">
        <article className="range keep-together">
          <p className="eyebrow">Conservative scenario</p>
          <p className="range__value">
            3–7 <span>qualified booked estimates</span>
          </p>
          <div className="range-bar" aria-hidden="true">
            <span style={{ width: '28%' }} />
          </div>
        </article>
        <article className="range range--strong keep-together">
          <p className="eyebrow">Strong-performing scenario</p>
          <p className="range__value">
            8–15 <span>qualified booked estimates</span>
          </p>
          <div className="range-bar" aria-hidden="true">
            <span style={{ width: '62%' }} />
          </div>
        </article>
      </div>
      <p className="disclaimer">
        Illustrative planning ranges — not guarantees.
      </p>
      <p className="note">
        The primary objective of the pilot is to establish South-West’s actual
        campaign conversion data. Once enough outreach has been completed,
        future projections can be based on real results rather than industry
        assumptions.
      </p>
    </Section>
  )
}
