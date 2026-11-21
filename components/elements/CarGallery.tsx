'use client'
import React, { useEffect, useRef, useState } from 'react'

/**
 * Per-car gallery. Manufacturers ship their showroom cars as a ring of evenly
 * spaced frames, so where we have them the car can be spun by dragging; where
 * we only have stills it falls back to a plain photo viewer.
 */
export default function CarGallery({
	name,
	gallery = [],
	spin = [],
}: {
	name: string
	gallery?: string[]
	spin?: string[]
}) {
	const hasSpin = spin.length > 3
	const [mode, setMode] = useState<'spin' | 'photos'>(hasSpin ? 'spin' : 'photos')
	const [frame, setFrame] = useState(0)
	const [active, setActive] = useState(0)
	const [zoom, setZoom] = useState(false)

	const drag = useRef<{ x: number; frame: number } | null>(null)
	const stage = useRef<HTMLDivElement>(null)

	// One full drag across the stage turns the car all the way round.
	useEffect(() => {
		if (mode !== 'spin') return
		const move = (clientX: number) => {
			if (!drag.current || !stage.current) return
			const width = stage.current.offsetWidth || 1
			const delta = (clientX - drag.current.x) / width
			const next = Math.round(drag.current.frame + delta * spin.length)
			setFrame(((next % spin.length) + spin.length) % spin.length)
		}
		const onMouse = (e: MouseEvent) => move(e.clientX)
		const onTouch = (e: TouchEvent) => { if (e.touches[0]) move(e.touches[0].clientX) }
		const stop = () => { drag.current = null }
		window.addEventListener('mousemove', onMouse)
		window.addEventListener('touchmove', onTouch)
		window.addEventListener('mouseup', stop)
		window.addEventListener('touchend', stop)
		return () => {
			window.removeEventListener('mousemove', onMouse)
			window.removeEventListener('touchmove', onTouch)
			window.removeEventListener('mouseup', stop)
			window.removeEventListener('touchend', stop)
		}
	}, [mode, spin.length])

	useEffect(() => {
		if (!zoom) return
		const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setZoom(false) }
		const prev = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		document.addEventListener('keydown', onKey)
		return () => {
			document.body.style.overflow = prev
			document.removeEventListener('keydown', onKey)
		}
	}, [zoom])

	const start = (x: number) => { drag.current = { x, frame } }

	return (
		<div className="car-gallery">
			{hasSpin && (
				<div className="car-gallery-tabs" role="tablist">
					<button type="button" role="tab" aria-selected={mode === 'spin'}
						className={`car-gallery-tab ${mode === 'spin' ? 'is-active' : ''}`}
						onClick={() => setMode('spin')}>360° view</button>
					<button type="button" role="tab" aria-selected={mode === 'photos'}
						className={`car-gallery-tab ${mode === 'photos' ? 'is-active' : ''}`}
						onClick={() => setMode('photos')}>Photos ({gallery.length})</button>
				</div>
			)}

			{mode === 'spin' ? (
				<div
					ref={stage}
					className="car-gallery-stage car-gallery-spin"
					onMouseDown={(e) => { e.preventDefault(); start(e.clientX) }}
					onTouchStart={(e) => start(e.touches[0].clientX)}
				>
					{/* every frame stays mounted so dragging never waits on a download */}
					{spin.map((src, i) => (
						<img key={src} src={src} alt={`${name} — view ${i + 1} of ${spin.length}`}
							draggable={false} hidden={i !== frame} />
					))}
					<span className="car-gallery-hint">Drag to turn the car</span>
				</div>
			) : (
				<>
					<div className="car-gallery-stage" onClick={() => gallery.length > 0 && setZoom(true)}>
						{gallery.length > 0
							? <img src={gallery[active]} alt={`${name} — photo ${active + 1}`} />
							: <p className="text-md-medium neutral-500 p-5">Photos coming soon.</p>}
					</div>
					{gallery.length > 1 && (
						<div className="car-gallery-thumbs">
							{gallery.map((src, i) => (
								<button key={src} type="button" onClick={() => setActive(i)}
									className={`car-gallery-thumb ${i === active ? 'is-active' : ''}`}
									aria-label={`Show photo ${i + 1}`}>
									<img src={src} alt="" loading="lazy" />
								</button>
							))}
						</div>
					)}
				</>
			)}

			{zoom && gallery.length > 0 && (
				<div className="car-gallery-zoom" role="dialog" aria-modal="true"
					aria-label={`${name} photos`} onClick={() => setZoom(false)}>
					<button type="button" className="car-gallery-close" aria-label="Close photo" onClick={() => setZoom(false)}>&times;</button>
					<img src={gallery[active]} alt={`${name} — photo ${active + 1}`} onClick={(e) => e.stopPropagation()} />
				</div>
			)}
		</div>
	)
}
