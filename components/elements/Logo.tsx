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
	sm: { mark: 34, word: '1.2rem', tag: '0.44rem', gap: '9px', rule: 14 },
	md: { mark: 40, word: '1.38rem', tag: '0.5rem', gap: '10px', rule: 16 },
	lg: { mark: 48, word: '1.55rem', tag: '0.55rem', gap: '12px', rule: 18 },
}

const ACCENT = '#9ced3a'

/**
 * The GY Car King Autoworld badge, as supplied by the dealership — a neon ring
 * around a car silhouette. The badge carries the identity; the wordmark beside
 * it carries legibility, since the text inside the badge is unreadable at
 * header size.
 */
export function LogoMark({ size = 40 }: { size?: number }) {
	return (
		<img
			src="/assets/imgs/template/gy-car-king-logo.png"
			alt=""
			width={size}
			height={size}
			style={{ width: size, height: size, flexShrink: 0, display: 'block' }}
		/>
	)
}

/** Full brand lockup: badge + wordmark + tagline. */
export default function Logo({ size = 'md', tone = 'light', withText = true, className = '' }: LogoProps) {
	const s = SIZES[size]
	const word = tone === 'light' ? '#ffffff' : '#0f1e14'
	const tag = tone === 'light' ? ACCENT : '#5b6b60'

	return (
		<span className={`d-inline-flex align-items-center ${className}`} style={{ gap: s.gap }}>
			<LogoMark size={s.mark} />
			{withText && (
				<span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
					<span style={{ fontWeight: 900, fontSize: s.word, color: word, letterSpacing: '-0.3px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>GY Car King</span>
					<span style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
						<span style={{ width: s.rule, height: 2, background: ACCENT, borderRadius: 2, flexShrink: 0 }} />
						<span style={{ fontWeight: 500, fontSize: s.tag, color: tag, letterSpacing: '1.8px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Autoworld</span>
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
		<Link className={`d-flex align-items-center ${className}`} href={href} aria-label="GY Car King Autoworld — home">
			<Logo {...rest} />
		</Link>
	)
}
