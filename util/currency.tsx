'use client'
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'

export type CurrencyCode = 'USD' | 'GHS' | 'EUR' | 'SGD'

type CurrencyMeta = {
	code: CurrencyCode
	label: string
	symbol: string
	rate: number
}

export const CURRENCIES: Record<CurrencyCode, CurrencyMeta> = {
	USD: { code: 'USD', label: 'USD', symbol: '$', rate: 1 },
	GHS: { code: 'GHS', label: 'GHS (₵)', symbol: '₵', rate: 15.8 },
	EUR: { code: 'EUR', label: 'EUR', symbol: '€', rate: 0.92 },
	SGD: { code: 'SGD', label: 'SGD', symbol: 'S$', rate: 1.34 },
}

const STORAGE_KEY = 'gastonsin:currency'

type CurrencyContextValue = {
	currency: CurrencyCode
	setCurrency: (code: CurrencyCode) => void
	convert: (usdAmount: number) => number
	format: (usdAmount: number, opts?: { decimals?: number }) => string
	meta: CurrencyMeta
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null)

export function CurrencyProvider({ children }: { children: ReactNode }) {
	const [currency, setCurrencyState] = useState<CurrencyCode>('USD')

	useEffect(() => {
		try {
			const saved = window.localStorage.getItem(STORAGE_KEY) as CurrencyCode | null
			if (saved && CURRENCIES[saved]) setCurrencyState(saved)
		} catch {}
	}, [])

	const setCurrency = (code: CurrencyCode) => {
		setCurrencyState(code)
		try { window.localStorage.setItem(STORAGE_KEY, code) } catch {}
	}

	const value = useMemo<CurrencyContextValue>(() => {
		const meta = CURRENCIES[currency]
		const convert = (usd: number) => usd * meta.rate
		const format = (usd: number, opts?: { decimals?: number }) => {
			const converted = convert(usd)
			const decimals = opts?.decimals ?? (currency === 'GHS' ? 0 : 2)
			const formatted = converted.toLocaleString('en-US', {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals,
			})
			return `${meta.symbol}${formatted}`
		}
		return { currency, setCurrency, convert, format, meta }
	}, [currency])

	return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
	const ctx = useContext(CurrencyContext)
	if (!ctx) {
		return {
			currency: 'USD' as CurrencyCode,
			setCurrency: () => {},
			convert: (n: number) => n,
			format: (n: number) => `$${n.toFixed(2)}`,
			meta: CURRENCIES.USD,
		} as CurrencyContextValue
	}
	return ctx
}

export function Price({ amount, decimals, className }: { amount: number; decimals?: number; className?: string }) {
	const { format } = useCurrency()
	return <>{format(amount, { decimals })}</>
}
