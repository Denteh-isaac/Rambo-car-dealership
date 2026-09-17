'use client'
import React, { useEffect, useState } from 'react'

/**
 * "See All Photos" button + lightbox.
 *
 * The template shipped this button as <Link href="#">, so clicking it did
 * nothing. It now opens every photo of the vehicle in a scrollable overlay.
 */
export default function PhotoGalleryButton({
	images,
	label = 'See All Photos',
	className = 'btn btn-primary rounded-pill',
}: {
	images: string[]
	label?: string
	className?: string
}) {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (!open) return
		const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
		const prev = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		document.addEventListener('keydown', onKey)
		return () => {
			document.body.style.overflow = prev
			document.removeEventListener('keydown', onKey)
		}
	}, [open])

	return (
		<>
			<button type="button" className={className} onClick={() => setOpen(true)}>
				<svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20 8V2.75C20 2.3375 19.6625 2 19.25 2H14C13.5875 2 13.25 2.3375 13.25 2.75V8C13.25 8.4125 13.5875 8.75 14 8.75H19.25C19.6625 8.75 20 8.4125 20 8Z" fill="currentColor" />
					<path d="M20 19.25V14C20 13.5875 19.6625 13.25 19.25 13.25H14C13.5875 13.25 13.25 13.5875 13.25 14V19.25C13.25 19.6625 13.5875 20 14 20H19.25C19.6625 20 20 19.6625 20 19.25Z" fill="currentColor" />
					<path d="M8 8.75C8.4125 8.75 8.75 8.4125 8.75 8V2.75C8.75 2.3375 8.4125 2 8 2H2.75C2.3375 2 2 2.3375 2 2.75V8C2 8.4125 2.3375 8.75 2.75 8.75H8Z" fill="currentColor" />
					<path d="M8 20C8.4125 20 8.75 19.6625 8.75 19.25V14C8.75 13.5875 8.4125 13.25 8 13.25H2.75C2.3375 13.25 2 13.5875 2 14V19.25C2 19.6625 2.3375 20 2.75 20H8Z" fill="currentColor" />
				</svg>
				{label}
			</button>

			{open && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label="Vehicle photos"
					onClick={() => setOpen(false)}
					style={{
						position: 'fixed', inset: 0, zIndex: 2000,
						background: 'rgba(8, 12, 16, 0.92)',
						overflowY: 'auto', padding: '72px 16px 32px',
					}}
				>
					<button
						type="button"
						aria-label="Close photos"
						onClick={() => setOpen(false)}
						style={{
							position: 'fixed', top: 16, right: 20, zIndex: 2001,
							width: 44, height: 44, borderRadius: '50%', border: 'none',
							background: '#ffffff', color: '#101010',
							fontSize: 24, lineHeight: '44px', cursor: 'pointer',
						}}
					>
						&times;
					</button>
					<div
						onClick={(e) => e.stopPropagation()}
						style={{
							maxWidth: 1100, margin: '0 auto',
							display: 'grid', gap: 16,
							gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
						}}
					>
						{images.map((src, i) => (
							<img
								key={src}
								src={src}
								alt={`Vehicle photo ${i + 1}`}
								loading="lazy"
								style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
							/>
						))}
					</div>
				</div>
			)}
		</>
	)
}
