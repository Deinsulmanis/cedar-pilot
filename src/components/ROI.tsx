import { useMemo, useState } from 'react'
import { formatMoney, formatMultiple, PER_ESTIMATE, TECH_FEE } from '../lib/format'
import Section from './Section'

const scenarios = [
  {
    id: 'A',
    estimates: 5,
    closes: 1,
    closeNote: 'If 1 of the 5 estimates becomes a project',
  },
  {
    id: 'B',
    estimates: 10,
    closes: 2,
    closeNote: 'If 2 of those estimates close',
  },
  {
    id: 'C',
    estimates: 15,
    closes: 3,
    closeNote: 'If 3 close at the average job value',
  },
]

export default function ROI() {
  const [jobValue, setJobValue] = useState(5000)

  const rows = useMemo(
    () =>
      scenarios.map((scenario) => {
        const performance = scenario.estimates * PER_ESTIMATE
        const cost = TECH_FEE + performance
        const revenue = scenario.closes * jobValue
        return {
          ...scenario,
          performance,
          cost,
          revenue,
          multiple: revenue / cost,
        }
      }),
    [jobValue],
  )

  return (
    <Section
      id="roi"
      number="08"
      kicker="Economics"
      title="Simple, Measurable Economics"
      lead={
        <p>
          Actual results will depend on South-West’s average project value and
          close rate. The advantage of the model is that most of ScaleLab’s
          compensation is tied directly to generating qualified sales
          opportunities.
        </p>
      }
    >
      <div className="roi-controls keep-together">
        <div>
          <p className="eyebrow">Planning assumption</p>
          <label htmlFor="job-value">Average closed job value</label>
          <p className="roi-controls__hint">
            Adjust this to match a typical South-West cedar restoration project.
            The close counts below are illustrative examples only.
          </p>
        </div>
        <div className="job-value">
          <span>$</span>
          <input
            id="job-value"
            type="number"
            min={1000}
            max={75000}
            step={500}
            value={jobValue}
            onChange={(event) => {
              const next = Number(event.target.value)
              setJobValue(Number.isFinite(next) ? next : 0)
            }}
          />
        </div>
      </div>

      <div className="scenarios">
        {rows.map((row) => (
          <article key={row.id} className="scenario keep-together">
            <header>
              <p className="eyebrow">Scenario {row.id}</p>
              <h3>{row.estimates} booked estimates</h3>
            </header>
            <dl>
              <div>
                <dt>Technology fee</dt>
                <dd>{formatMoney(TECH_FEE)}</dd>
              </div>
              <div>
                <dt>Performance fees</dt>
                <dd>
                  {row.estimates} × {formatMoney(PER_ESTIMATE)} ={' '}
                  {formatMoney(row.performance)}
                </dd>
              </div>
              <div>
                <dt>Total campaign cost</dt>
                <dd>{formatMoney(row.cost)}</dd>
              </div>
              <div>
                <dt>{row.closeNote}</dt>
                <dd>
                  {row.closes} × {formatMoney(jobValue)}
                </dd>
              </div>
              <div>
                <dt>Gross revenue</dt>
                <dd>{formatMoney(row.revenue)}</dd>
              </div>
              <div className="scenario__result">
                <dt>Revenue / campaign spend</dt>
                <dd>{formatMultiple(row.multiple)}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <p className="disclaimer">
        Examples only. These figures show gross revenue divided by campaign
        cost — not profit, not net margin, and not guaranteed ROI.
      </p>
    </Section>
  )
}
