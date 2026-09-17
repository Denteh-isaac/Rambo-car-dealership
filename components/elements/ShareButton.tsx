'use client'
import { ReactNode, useState } from 'react'

/** Opens the phone's share sheet for this page, or copies the link where sharing isn't available. */
export default function ShareButton({ className, children }: { className?: string; children: ReactNode }) {
	const [copied, setCopied] = useState(false)

	const share = async () => {
		const url = window.location.href
		try {
			if (navigator.share) {
				await navigator.share({ title: document.title, url })
				return
			}
			await navigator.clipboard.writeText(url)
			setCopied(true)
			window.setTimeout(() => setCopied(false), 2000)
		} catch {
			// The share sheet was dismissed or clipboard access was refused — nothing to recover.
		}
	}

	return (
		<button type="button" className={className} onClick={share} aria-label="Share this page">
			{children}
			{copied && (
				<span className="ms-2 text-sm-medium" role="status">
					Link copied
				</span>
			)}
		</button>
	)
}
