import Link from 'next/link'

type LogoSize = 'sm' | 'md' | 'lg'
type LogoTone = 'light' | 'dark'

interface LogoProps {
	/** Visual scale of the lockup. */
	size?: LogoSize
	/** `light` for dark backgrounds, `dark` for light backgrounds. */
	tone?: LogoTone
	/** Render the wordmark + tagline next to the mark. */
	withText?: boolean
	className?: string
}

const SIZES: Record<LogoSize, { mark: number; word: string; tag: string; gap: string; rule: number }> = {
	sm: { mark: 30, word: '1.25rem', tag: '0.44rem', gap: '9px', rule: 14 },
	md: { mark: 34, word: '1.45rem', tag: '0.5rem', gap: '10px', rule: 16 },
	lg: { mark: 40, word: '1.6rem', tag: '0.55rem', gap: '12px', rule: 18 },
}

const ACCENT = '#70f46d'

/**
 * Brand mark: a geometric "G" (for Gastonsin, the company behind Car King Auto)
 * whose open counter and centre spoke also read as a steering wheel.
 */
export function LogoMark({ size = 34, accent = ACCENT, spoke = '#ffffff' }: { size?: number; accent?: string; spoke?: string }) {
	return (
		<svg width={size} height={size} viewBox="0 0 48 48" fill="none" role="presentation" aria-hidden="true" style={{ flexShrink: 0 }}>
			{/* open ring — the bowl of the G / the wheel rim */}
			<path d="M37.86 16 A16 16 0 1 0 37.86 32" stroke={accent} strokeWidth="5" strokeLinecap="round" />
			{/* spur bar — the G's crossbar / the wheel spoke */}
			<path d="M27.4 24 H37.4" stroke={spoke} strokeWidth="5" strokeLinecap="round" />
			{/* hub */}
			<circle cx="24" cy="24" r="4.6" fill={spoke} />
		</svg>
	)
}

/** Full brand lockup: mark + wordmark + tagline. */
export default function Logo({ size = 'md', tone = 'light', withText = true, className = '' }: LogoProps) {
	const s = SIZES[size]
	const word = tone === 'light' ? ACCENT : '#0f1e14'
	const tag = tone === 'light' ? 'rgba(255,255,255,0.8)' : '#5b6b60'
	const spoke = tone === 'light' ? '#ffffff' : '#0f1e14'

	return (
		<span className={`d-inline-flex align-items-center ${className}`} style={{ gap: s.gap }}>
			<LogoMark size={s.mark} spoke={spoke} />
			{withText && (
				<span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
					<span style={{ fontWeight: 900, fontSize: s.word, color: word, letterSpacing: '-0.5px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Car King Auto</span>
					<span style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
						<span style={{ width: s.rule, height: 2, background: ACCENT, borderRadius: 2, flexShrink: 0 }} />
						<span style={{ fontWeight: 500, fontSize: s.tag, color: tag, letterSpacing: '1.6px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>By Gastonsin</span>
					</span>
				</span>
			)}
		</span>
	)
}

/** Brand lockup wrapped in a link back to the homepage. */
export function LogoLink(props: LogoProps & { href?: string }) {
	const { href = '/', className = '', ...rest } = props
	return (
		<Link className={`d-flex align-items-center ${className}`} href={href} aria-label="Car King Auto by Gastonsin — home">
			<Logo {...rest} />
		</Link>
	)
}
