import Section from './Section'

const points = [
  {
    title: 'Low fixed cost',
    body: 'The $550 technology fee covers the systems required to launch and operate the campaign.',
  },
  {
    title: 'Performance component',
    body: 'The majority of campaign upside comes from ScaleLab producing real booked opportunities.',
  },
  {
    title: 'No job-revenue tracking',
    body: 'South-West does not need to report the value of every completed roof job or calculate commissions.',
  },
]

export default function Alignment() {
  return (
    <Section
      id="alignment"
      number="11"
      kicker="Why This Model"
      title="Aligned Incentives"
    >
      <div className="align-grid">
        {points.map((point, index) => (
          <article key={point.title} className="align-item keep-together">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{point.title}</h3>
            <p>{point.body}</p>
          </article>
        ))}
      </div>
      <p className="highlight-line">
        ScaleLab wins by consistently generating qualified opportunities.
        South-West wins by turning those opportunities into profitable roofing
        projects.
      </p>
    </Section>
  )
}
