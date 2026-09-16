import Section from './Section'

const titles = [
  'Strata Manager',
  'Senior Strata Manager',
  'Property Manager',
  'Senior Property Manager',
  'Director of Property Management',
  'Operations Manager',
  'Owner / President',
]

const secondary = [
  'Commercial property management companies',
  'Building / facilities managers',
  'Roofing or exterior contractors that do not specialize in cedar restoration',
  'Property-focused referral partners where relevant',
]

export default function Audience() {
  return (
    <Section
      id="audience"
      number="02"
      kicker="Target Audience"
      title="Who We Will Target"
      lead={
        <p>
          Targeting will prioritize organizations where cedar roofing is
          reasonably relevant to the properties they manage — not a broad blast
          to every property contact in the region.
        </p>
      }
    >
      <div className="audience">
        <div className="audience__primary keep-together">
          <p className="eyebrow">Primary segment</p>
          <h3>Strata &amp; Property Management Companies</h3>
          <p>
            These accounts often sit closest to maintenance decisions across
            multiple buildings. When cedar is part of the portfolio, a single
            conversation can be more valuable than a one-off homeowner inquiry.
          </p>
          <p className="eyebrow eyebrow--tight">Example titles</p>
          <ul className="title-list">
            {titles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </div>

        <div className="audience__side">
          <div className="audience__secondary keep-together">
            <p className="eyebrow">Secondary segments to test</p>
            <ul className="plain-list">
              {secondary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="callout keep-together">
            <p className="callout__label">Quality over volume</p>
            <p>
              The goal is not to send thousands of generic emails. The goal is
              to identify relevant accounts and send personalized outreach to
              the appropriate decision-maker.
            </p>
          </aside>
        </div>
      </div>
    </Section>
  )
}
