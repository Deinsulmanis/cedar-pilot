import { formatMoney, PER_ESTIMATE, TECH_FEE } from '../lib/format'
import Section from './Section'

const covered = [
  'Campaign setup',
  'Outreach infrastructure',
  'Data and research systems',
  'Campaign management',
  'Personalization systems',
  'Monitoring and optimization',
]

export default function Pricing() {
  return (
    <Section
      id="pricing"
      number="09"
      kicker="Investment"
      title="Performance-Based Pricing"
      className="section--pricing"
      lead={
        <p>
          South-West does not pay ScaleLab a percentage of job revenue. There is
          no need to track invoice values or calculate commissions on completed
          jobs.
        </p>
      }
    >
      <div className="pricing keep-together">
        <div className="price-block">
          <p className="price-block__amount">{formatMoney(TECH_FEE)}</p>
          <h3>Technology &amp; Campaign Fee</h3>
          <p>Covers the systems required to launch and operate the campaign:</p>
          <ul>
            {covered.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="price-plus" aria-hidden="true">
          <span>+</span>
        </div>
        <div className="price-block price-block--accent">
          <p className="price-block__amount">{formatMoney(PER_ESTIMATE)}</p>
          <h3>Per Qualified Booked Estimate</h3>
          <p>
            ScaleLab is compensated when the outreach system produces a
            qualified prospect who agrees to a legitimate estimate / inspection
            conversation.
          </p>
        </div>
      </div>

      <ul className="price-highlights">
        <li>No percentage of closed revenue.</li>
        <li>No revenue tracking.</li>
        <li>Simple performance-based billing.</li>
      </ul>
    </Section>
  )
}
