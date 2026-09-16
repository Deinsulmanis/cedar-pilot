import Section from './Section'

const qualifies = [
  'Prospect is within South-West’s agreed service area',
  'Prospect owns, manages, or represents a relevant property / portfolio',
  'There is a legitimate cedar roofing restoration, maintenance, or evaluation need — or credible interest in exploring the service',
  'Prospect has authority or meaningful influence over the buying process',
  'Prospect agrees to a scheduled call, inspection, site visit, or estimate conversation with South-West',
  'Contact information is valid',
  'Opportunity originated from the ScaleLab outbound campaign',
]

const doesNot = [
  'Spam',
  'Wrong-number / wrong-person responses',
  'Job seekers',
  'Vendors trying to sell South-West something',
  'Clearly irrelevant inquiries',
  'Duplicate opportunities already actively being pursued by South-West before the campaign',
  'Cancellations before any meaningful sales interaction, where appropriate',
]

export default function Qualification() {
  return (
    <Section
      id="qualification"
      number="10"
      kicker="Billing Standard"
      title="What Counts as a Qualified Booked Estimate?"
      lead={
        <p>
          This definition needs to be clear because billing depends on it. A
          qualified booked estimate should generally meet all of the following.
        </p>
      }
    >
      <div className="qualify">
        <article className="qualify__col keep-together">
          <p className="eyebrow">Counts when all are true</p>
          <ul className="check-list">
            {qualifies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="qualify__col qualify__col--no keep-together">
          <p className="eyebrow">Does not count</p>
          <ul className="plain-list plain-list--muted">
            {doesNot.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <p className="note">
        The final qualification definition should be agreed upon before launch
        so both parties have a clear billing standard.
      </p>
    </Section>
  )
}
