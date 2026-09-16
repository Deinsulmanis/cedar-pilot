import Section from './Section'

const weeks = [
  {
    week: 'Week 1',
    title: 'Build & Prepare',
    items: [
      'Define target market',
      'Build lead lists',
      'Configure campaign',
      'Write outreach sequences',
      'Set up tracking and qualification process',
      'QA campaign before launch',
    ],
  },
  {
    week: 'Week 2',
    title: 'Launch & Gather Data',
    items: [
      'Begin outbound sending',
      'Monitor deliverability',
      'Review replies',
      'Identify early patterns',
    ],
  },
  {
    week: 'Week 3',
    title: 'Optimize',
    items: [
      'Adjust targeting where needed',
      'Refine copy based on response data',
      'Continue follow-up sequences',
      'Qualify interested prospects',
    ],
  },
  {
    week: 'Week 4',
    title: 'Scale What Works',
    items: [
      'Continue outreach',
      'Prioritize strongest segments',
      'Evaluate booked estimate volume',
      'Review campaign economics and next-step strategy',
    ],
  },
]

export default function Timeline() {
  return (
    <Section
      id="timeline"
      number="06"
      kicker="Expected Timeline"
      title="30-Day Pilot Timeline"
    >
      <div className="timeline">
        {weeks.map((week, index) => (
          <article key={week.week} className="week keep-together">
            <div className="week__head">
              <span className="week__n">{String(index + 1).padStart(2, '0')}</span>
              <p className="eyebrow">{week.week}</p>
              <h3>{week.title}</h3>
            </div>
            <ul>
              {week.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="note">
        Cold outbound compounds over time because follow-ups and replies often
        occur days or weeks after the first contact. The first 30 days should
        be treated as both a lead-generation period and a data-gathering pilot.
      </p>
    </Section>
  )
}
