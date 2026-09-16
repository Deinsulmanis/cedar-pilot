import { formatMoney, PER_ESTIMATE, TECH_FEE } from '../lib/format'
import Section from './Section'

const steps = [
  'Approve proposal',
  'Confirm service area and ideal project types',
  'Define qualified booked estimate criteria',
  'ScaleLab builds the campaign and begins the 30-day pilot',
]

export default function NextSteps() {
  return (
    <Section
      id="next-steps"
      number="12"
      kicker="Next Steps"
      title="Ready to Launch the Pilot?"
    >
      <ol className="next-steps">
        {steps.map((step, index) => (
          <li key={step} className="keep-together">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
      <div className="cta keep-together">
        <a
          className="cta__btn"
          href="mailto:deins@scalelabai.ca?subject=South-West%20Roof%20Restoration%20%E2%80%94%2030-Day%20Pilot"
        >
          Begin 30-Day Pilot
        </a>
        <p>
          {formatMoney(TECH_FEE)} technology fee + {formatMoney(PER_ESTIMATE)} per
          qualified booked estimate
        </p>
      </div>
      <div className="signoff">
        <p className="signoff__name">ScaleLab AI</p>
        <p>Performance-Based Client Acquisition</p>
      </div>
    </Section>
  )
}
