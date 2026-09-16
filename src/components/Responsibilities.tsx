import Section from './Section'

const scalelab = [
  'Market and account research',
  'Prospect list building',
  'Decision-maker identification',
  'Email infrastructure',
  'Campaign setup',
  'Email copy',
  'AI-assisted personalization',
  'Follow-up sequences',
  'Deliverability monitoring',
  'Reply monitoring',
  'Lead qualification',
  'Appointment / estimate handoff',
  'Campaign optimization',
  'Performance reporting',
]

const southwest = [
  'Responding to qualified opportunities',
  'Site inspections',
  'Estimates / quotes',
  'Technical roofing questions',
  'Customer follow-up',
  'Closing the job',
  'Service delivery',
]

export default function Responsibilities() {
  return (
    <Section
      id="responsibilities"
      number="05"
      kicker="Division of Work"
      title="We Handle the Acquisition System"
    >
      <div className="split">
        <article className="split__col split__col--lab">
          <p className="eyebrow">ScaleLab AI handles</p>
          <ul className="check-list">
            {scalelab.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="split__col split__col--client">
          <p className="eyebrow">South-West handles</p>
          <ul className="check-list check-list--client">
            {southwest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <p className="highlight-line">
        ScaleLab builds and manages the outbound acquisition engine. South-West
        focuses on roofing and closing qualified opportunities.
      </p>
    </Section>
  )
}
