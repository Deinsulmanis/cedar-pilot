import Section from './Section'

const cards = [
  {
    n: '01',
    title: 'Specialized Service',
    body: 'Cedar restoration is specific enough to build highly relevant outreach around — not a generic “we do roofs” pitch.',
  },
  {
    n: '02',
    title: 'High-Value Problem',
    body: 'Roof restoration sits next to an expensive property-maintenance decision. The conversation is worth having when the timing is right.',
  },
  {
    n: '03',
    title: 'Portfolio Buyers',
    body: 'Property and strata managers can oversee multiple relevant properties, so one qualified relationship can open more than a single household.',
  },
]

export default function Opportunity() {
  return (
    <Section
      id="opportunity"
      number="01"
      kicker="The Opportunity"
      title="Turning a Specialized Roofing Service Into a Predictable Outbound Offer"
      lead={
        <>
          <p>
            South-West provides a specialized service that can help cedar-roof
            property owners maintain and restore existing roofing instead of
            immediately replacing it. That positioning — restoration as a
            serious alternative to premature replacement — is a clear, relevant
            outbound offer.
          </p>
          <p>
            This campaign will not rely on emailing random homeowners. Outreach
            will focus on relevant B2B decision-makers and organizations that
            own, manage, or influence multiple properties. One qualified
            relationship can potentially expose South-West to a portfolio
            rather than a single household.
          </p>
        </>
      }
    >
      <div className="opp-grid">
        {cards.map((card) => (
          <article key={card.n} className="opp-card keep-together">
            <span className="opp-card__n">{card.n}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
