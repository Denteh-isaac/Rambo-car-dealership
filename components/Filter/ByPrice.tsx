import { PRICE_CEILING, PRICE_FLOOR } from '@/util/useCarFilter'

const money = (n: number) => `$${n.toLocaleString('en-US')}`

export default function ByPrice({ handlePriceRangeChange, filter }: any) {
	const [low, high] = filter.priceRange
	return (
		<div className="box-collapse scrollFilter">
			<input
				type="range"
				aria-label="Minimum price"
				min={PRICE_FLOOR}
				max={PRICE_CEILING}
				step={1000}
				value={low}
				onChange={(e) => handlePriceRangeChange([Math.min(parseInt(e.target.value), high), high])}
			/>
			<input
				type="range"
				aria-label="Maximum price"
				min={PRICE_FLOOR}
				max={PRICE_CEILING}
				step={1000}
				value={high}
				onChange={(e) => handlePriceRangeChange([low, Math.max(parseInt(e.target.value), low)])}
			/>
			<div>
				<span>{money(low)}</span> - <span>{money(high)}</span>
			</div>
		</div>
	)
}
