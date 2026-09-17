'use client'
import { FormEvent, useState } from 'react'

const TO = 'info@gastonsincardealership.com'

/**
 * The template's newsletter box posted to "#" and did nothing. There is no
 * mailing-list backend, so a sign-up is sent to the office as an email —
 * the same approach the inquiry page uses.
 */
export default function FooterNewsletter() {
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')
	const [mailto, setMailto] = useState('')

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const value = email.trim()
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
			setError('Please enter a valid email address.')
			setMailto('')
			return
		}
		setError('')
		const url = `mailto:${TO}?subject=${encodeURIComponent('Deal alerts sign-up')}&body=${encodeURIComponent(
			`Please add ${value} to Gastonsin new-arrival and price-drop alerts.`,
		)}`
		setMailto(url)
		window.location.href = url
	}

	return (
		<div className="text-center text-md-end">
			<form className="form-newsletter wow fadeInUp" onSubmit={submit} noValidate>
				<input
					className="form-control"
					type="email"
					name="email"
					placeholder="Enter your email"
					aria-label="Email address for deal alerts"
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input className="btn btn-brand-2" type="submit" value="Subscribe" />
			</form>
			{error && (
				<p className="text-sm mt-2 mb-0" style={{ color: '#ffb4a8' }} role="alert">
					{error}
				</p>
			)}
			{mailto && (
				<p className="text-sm color-white mt-2 mb-0" role="status">
					Your email app should open — send the message to confirm. Nothing opened?{' '}
					<a href={mailto} style={{ color: '#70f46d', textDecoration: 'underline' }}>
						Send it here
					</a>
					.
				</p>
			)}
		</div>
	)
}
