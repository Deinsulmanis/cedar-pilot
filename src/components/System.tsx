import Section from './Section'

const steps = [
  {
    n: '01',
    title: 'Account Research',
    body: 'Identify relevant property management, strata, commercial, and referral accounts within South-West’s service area.',
  },
  {
    n: '02',
    title: 'Decision-Maker Identification',
    body: 'Find the appropriate publicly available business contacts responsible for property maintenance and management decisions.',
  },
  {
    n: '03',
    title: 'Personalized Outreach',
    body: 'ScaleLab AI’s outreach system researches the company and generates relevant messaging based on the recipient’s role, company, and property-management context.',
  },
  {
    n: '04',
    title: 'Reply Qualification',
    body: 'Responses are monitored and categorized. Interested prospects are qualified before being moved forward.',
  },
  {
    n: '05',
    title: 'Booked Estimate',
    body: 'Qualified prospects who want to explore cedar roof restoration are moved into an inspection / estimate conversation with South-West.',
  },
]

export default function System() {
  return (
    <Section
      id="system"
      number="03"
      kicker="How the System Works"
      title="The ScaleLab AI Outreach System"
      lead={
        <p>
          A complete outbound engine — from identifying the right accounts to
          handing South-West a qualified estimate conversation. ScaleLab
          operates each of these five steps.
        </p>
      }
      className="section--system"
    >
      <ol className="system-track">
        {steps.map((step) => (
          <li key={step.n} className="system-step keep-together">
            <div className="system-step__rail">
              <span className="system-step__n">{step.n}</span>
              <span className="system-step__line" aria-hidden="true" />
            </div>
            <div className="system-step__body">
              <p className="system-step__kicker">Step {Number(step.n)}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
