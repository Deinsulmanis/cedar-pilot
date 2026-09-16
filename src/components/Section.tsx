import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  number: string
  kicker: string
  title: string
  lead?: ReactNode
  children: ReactNode
  className?: string
}

export default function Section({
  id,
  number,
  kicker,
  title,
  lead,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="wrap">
        <header className="section__header">
          <div className="section__kicker">
            <span className="section__num">{number}</span>
            <span className="section__label">{kicker}</span>
          </div>
          <h2 className="section__title">{title}</h2>
          {lead ? <div className="section__lead">{lead}</div> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
