import Logo from './Logo'

const toc = [
  { href: '#opportunity', label: '01' },
  { href: '#audience', label: '02' },
  { href: '#system', label: '03' },
  { href: '#funnel', label: '04' },
  { href: '#responsibilities', label: '05' },
  { href: '#timeline', label: '06' },
  { href: '#performance', label: '07' },
  { href: '#roi', label: '08' },
  { href: '#pricing', label: '09' },
  { href: '#qualification', label: '10' },
  { href: '#alignment', label: '11' },
  { href: '#next-steps', label: '12' },
]

export default function Nav() {
  return (
    <header className="nav no-print">
      <div className="nav__inner wrap">
        <a href="#top" className="nav__brand" aria-label="Back to cover">
          <Logo compact />
        </a>
        <nav className="nav__toc" aria-label="Proposal sections">
          {toc.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <span className="nav__doc">Proposal</span>
          <button
            type="button"
            className="print-btn"
            title="In the print dialog, enable Background graphics to keep the dark branding"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>
      </div>
    </header>
  )
}
