type LogoProps = {
  compact?: boolean
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <span className={`brand ${compact ? 'brand--compact' : ''}`}>
      <svg className="brand__mark" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M8 16.5L16 8l8 8.5L16 25l-8-8.5z" />
        <circle cx="16" cy="16.5" r="2.2" />
      </svg>
      <span className="brand__name">
        ScaleLab <em>AI</em>
      </span>
    </span>
  )
}
