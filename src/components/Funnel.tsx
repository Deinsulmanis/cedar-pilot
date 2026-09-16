import Section from './Section'

const scalelabSteps = [
  'Target Account',
  'Relevant Decision-Maker',
  'Personalized Email',
  'Positive Response',
  'Qualified Conversation',
  'Booked Estimate',
]

export default function Funnel() {
  return (
    <Section
      id="funnel"
      number="04"
      kicker="The Funnel"
      title="From Cold Prospect to Booked Estimate"
      lead={
        <p>
          ScaleLab AI is responsible for generating and qualifying the
          opportunity up to the booked estimate. South-West remains responsible
          for performing the inspection, preparing the quote, following up, and
          closing the project.
        </p>
      }
    >
        <div className="funnel">
        <p className="funnel__owner funnel__owner--lab">ScaleLab AI responsibility</p>
        <ol className="funnel__list">
          {scalelabSteps.map((step) => (
            <li key={step} className="funnel__step">
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="handoff" role="separator" aria-label="Responsibility handoff">
          <span>Handoff</span>
        </div>

        <p className="funnel__owner funnel__owner--client">
          South-West responsibility
        </p>
        <div className="funnel__step funnel__step--client">
          <span>South-West Sales Process</span>
        </div>
      </div>
    </Section>
  )
}
