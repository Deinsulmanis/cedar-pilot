export function formatMoney(value: number) {
  const safe = Number.isFinite(value) ? value : 0
  return `$${Math.round(safe).toLocaleString('en-US')}`
}

export function formatMultiple(value: number) {
  if (!Number.isFinite(value) || value <= 0) return '—'
  return `${value.toFixed(2)}×`
}

export const TECH_FEE = 550
export const PER_ESTIMATE = 150
