'use client'
import { FormEvent, ReactNode, useState } from 'react'

const DEFAULT_TO = 'info@gastonsincardealership.com'

interface MailtoFormProps {
	/** Subject line of the email that opens. */
	subject: string
	/** Sentence placed above the submitted details in the email body. */
	intro?: string
	/** Where the message goes. */
	to?: string
	className?: string
	children: ReactNode
}

/**
 * Makes the template's contact and review forms actually send something.
 * There is no backend, so the entered details open as an email to the office —
 * the same approach as the inquiry page and the footer newsletter.
 *
 * Every field that should be sent needs a `name`. Its aria-label, then its
 * placeholder, becomes the label for that line in the email.
 */
export default function MailtoForm({ subject, intro, to = DEFAULT_TO, className, children }: MailtoFormProps) {
	const [error, setError] = useState('')
	const [mailto, setMailto] = useState('')

	const submit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const fields = Array.from(
			e.currentTarget.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
				'input[name], textarea[name], select[name]',
			),
		).filter((el) => !(el instanceof HTMLInputElement && (el.type === 'checkbox' || el.type === 'radio')))

		const missing = fields.find((el) => el.hasAttribute('required') && !el.value.trim())
		if (missing) {
			setError('Please fill in all the required fields.')
			setMailto('')
			missing.focus()
			return
		}

		const lines: string[] = []
		let email = ''
		for (const el of fields) {
			const value = el.value.trim()
			if (!value) continue
			if ((el as HTMLInputElement).type === 'email') email = value
			const label = el.getAttribute('aria-label') || el.getAttribute('placeholder') || el.name
			lines.push(`${label}: ${value}`)
		}

		if (lines.length === 0) {
			setError('Please fill in the form before sending.')
			setMailto('')
			return
		}
		if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError('Please enter a valid email address.')
			setMailto('')
			return
		}

		setError('')
		const body = [intro, ...lines].filter(Boolean).join('\n')
		const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
		setMailto(url)
		window.location.href = url
	}

	return (
		<form className={className} onSubmit={submit} noValidate>
			{children}
			{error && (
				<p className="text-sm-medium mt-3 mb-0" style={{ color: '#b42318' }} role="alert">
					{error}
				</p>
			)}
			{mailto && (
				<p className="text-sm-medium neutral-500 mt-3 mb-0" role="status">
					Your email app should open with your message — press send to reach us. Nothing opened?{' '}
					<a href={mailto} style={{ color: '#0b7a3f', textDecoration: 'underline' }}>
						Send it here
					</a>
					.
				</p>
			)}
		</form>
	)
}
