'use client'
import { ChangeEvent, useState } from "react"

/** Slider bounds derived from the catalogue, so the default range can never exclude every car. */
export const PRICE_FLOOR = 22000
export const PRICE_CEILING = 159000

interface Car {
	id: number
	/** Null for stock we price on request rather than advertising a figure. */
	price: number | null
	carType: string
	amenities: string
	rating: number
	name: string
	/** Manufacturer, so shoppers can browse by marque. */
	brand: string
	/** URL segment for this car's own page. */
	slug: string
	fuelType: string
	location: string
	image: string
	/** True for cars physically standing at the Esiama showroom. */
	featured?: boolean
	/** Whether the vehicle is offered for sale, for rental, or both. */
	listingType: ListingType
	/** Rental rate per day. Null when the car is not part of the rental fleet. */
	dailyRate: number | null
}

export type ListingType = 'sale' | 'rental' | 'both'

/** Shopper-facing fuel groups, each mapping to the raw fuelType values it covers. */
export const FUEL_GROUPS = {
	all: [],
	hybrid: ['Plug-in Hybrid (PHEV)', 'Hybrid (HEV)'],
	electric: ['Electric Vehicle (EV)'],
	petrol: ['Gasoline/Petrol'],
	diesel: ['Diesel'],
} as const

export type FuelGroup = keyof typeof FUEL_GROUPS

export const FUEL_CHIPS: { id: FuelGroup; label: string }[] = [
	{ id: 'all', label: 'All fuels' },
	{ id: 'hybrid', label: 'Hybrid' },
	{ id: 'electric', label: 'Electric' },
	{ id: 'petrol', label: 'Petrol' },
	{ id: 'diesel', label: 'Diesel' },
]

/** The three ways a shopper can slice the catalogue. */
export const LISTING_TABS: { id: 'all' | 'sale' | 'rental'; label: string }[] = [
	{ id: 'all', label: 'All vehicles' },
	{ id: 'sale', label: 'For sale' },
	{ id: 'rental', label: 'For rent' },
]

export interface Filter {
	names: string[]
	brands: string[]
	fuelType: string[]
	amenities: string[]
	locations: string[]
	priceRange: [number, number]
	ratings: number[]
	carType: string[]
	/** 'all' shows everything; 'sale' and 'rental' also include cars offered as both. */
	listing: 'all' | 'sale' | 'rental'
}

type SortCriteria = "name" | "price" | "rating"

const useCarFilter = (carsData: Car[]) => {
	const [filter, setFilter] = useState<Filter>({
		names: [],
		brands: [],
		fuelType: [],
		amenities: [],
		locations: [],
		priceRange: [PRICE_FLOOR, PRICE_CEILING],
		ratings: [],
		carType: [],
		listing: 'all',
	})
	const [sortCriteria, setSortCriteria] = useState<SortCriteria>("name")
	const [itemsPerPage, setItemsPerPage] = useState<number>(10)
	const [currentPage, setCurrentPage] = useState<number>(1)

	const uniqueNames = [...new Set(carsData.map((car) => car.name))]
	const uniqueBrands = [...new Set(carsData.map((car) => car.brand))].filter(Boolean).sort()
	const uniqueFuelTypes = [...new Set(carsData.map((car) => car.fuelType))]
	const uniqueAmenities = [...new Set(carsData.map((car) => car.amenities))]
	const uniqueLocations = [...new Set(carsData.map((car) => car.location))]
	const uniqueRatings = [...new Set(carsData.map((car) => car.rating))]
	const uniqueCarTypes = [...new Set(carsData.map((car) => car.carType))]

	const filteredCars = carsData.filter((car) => {
		return (
			(filter.names.length === 0 || filter.names.includes(car.name)) &&
			(filter.fuelType.length === 0 || filter.fuelType.includes(car.fuelType)) &&
			(filter.amenities.length === 0 || filter.amenities.includes(car.amenities)) &&
			(filter.locations.length === 0 || filter.locations.includes(car.location)) &&
			(filter.brands.length === 0 || filter.brands.includes(car.brand)) &&
			// Stock priced on request has no number to compare — never filter it out.
			(car.price == null || (car.price >= filter.priceRange[0] && car.price <= filter.priceRange[1])) &&
			(filter.ratings.length === 0 || filter.ratings.includes(car.rating)) &&
			(filter.carType.length === 0 || filter.carType.includes(car.carType)) &&
			(filter.listing === 'all' || car.listingType === filter.listing || car.listingType === 'both')
		)
	})

	const sortedCars = [...filteredCars].sort((a, b) => {
		// Cars actually standing at the Esiama showroom always lead the list.
		if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1
		if (sortCriteria === "name") {
			return a.name.localeCompare(b.name)
		} else if (sortCriteria === "price") {
			// Price-on-request sinks below priced stock rather than sorting as zero.
			if (a.price == null || b.price == null) return a.price == null ? 1 : -1
			return a.price - b.price
		} else if (sortCriteria === "rating") {
			return b.rating - a.rating
		}
		return 0
	})

	const totalPages = Math.ceil(sortedCars.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const paginatedCars = sortedCars.slice(startIndex, endIndex)

	const handleCheckboxChange = (field: keyof Filter, value: string | number) => (e: ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked
		setFilter((prevFilter) => {
			const values = prevFilter[field] as (string | number)[]
			if (checked) {
				return { ...prevFilter, [field]: [...values, value] }
			} else {
				return {
					...prevFilter,
					[field]: values.filter((item) => item !== value),
				}
			}
		})
	}

	const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSortCriteria(e.target.value as SortCriteria)
	}

	const handlePriceRangeChange = (values: [number, number]) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			priceRange: values,
		}))
	}

	const handleItemsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setItemsPerPage(Number(e.target.value))
		setCurrentPage(1)
	}

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage)
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handleListingChange = (listing: Filter['listing']) => {
		setFilter((prev) => ({ ...prev, listing }))
		setCurrentPage(1)
	}

	/** How many cars each tab would show, for the counts on the tabs. */
	const listingCounts = {
		all: carsData.length,
		sale: carsData.filter((c) => c.listingType === 'sale' || c.listingType === 'both').length,
		rental: carsData.filter((c) => c.listingType === 'rental' || c.listingType === 'both').length,
	}

	const handleClearFilters = () => {
		setFilter({
			names: [],
			brands: [],
			fuelType: [],
			amenities: [],
			locations: [],
			priceRange: [PRICE_FLOOR, PRICE_CEILING],
			ratings: [],
			carType: [],
			listing: 'all',
		})
		setSortCriteria("name")
		setItemsPerPage(10)
		setCurrentPage(1)
	}

	/** Browse by marque: pass a brand to show only that brand, or null for all. */
	const handleBrandChange = (brand: string | null) => {
		setFilter((prev) => ({ ...prev, brands: brand ? [brand] : [] }))
		setCurrentPage(1)
	}

	/** How many cars each brand has, for the brand strip. */
	const brandCounts = carsData.reduce<Record<string, number>>((acc, car) => {
		if (car.brand) acc[car.brand] = (acc[car.brand] || 0) + 1
		return acc
	}, {})

	/**
	 * Shoppers think "hybrid", not "Plug-in Hybrid (PHEV)" — each chip maps to
	 * every fuelType string that belongs to it.
	 */
	const handleFuelGroup = (group: FuelGroup) => {
		setFilter((prev) => ({ ...prev, fuelType: [...FUEL_GROUPS[group]] }))
		setCurrentPage(1)
	}

	const fuelGroupCounts = Object.fromEntries(
		(Object.keys(FUEL_GROUPS) as FuelGroup[]).map((g) => [
			g,
			FUEL_GROUPS[g].length === 0
				? carsData.length
				: carsData.filter((c) => (FUEL_GROUPS[g] as readonly string[]).includes(c.fuelType)).length,
		])
	) as Record<FuelGroup, number>

	const startItemIndex = (currentPage - 1) * itemsPerPage + 1
	const endItemIndex = Math.min(startItemIndex + itemsPerPage - 1, sortedCars.length)

	return {
		filter,
		setFilter,
		sortCriteria,
		setSortCriteria,
		itemsPerPage,
		setItemsPerPage,
		currentPage,
		setCurrentPage,
		uniqueNames,
		uniqueBrands,
		brandCounts,
		handleBrandChange,
		handleFuelGroup,
		fuelGroupCounts,
		uniqueFuelTypes,
		uniqueAmenities,
		uniqueLocations,
		uniqueRatings,
		uniqueCarTypes,
		filteredCars,
		sortedCars,
		totalPages,
		startIndex,
		endIndex,
		paginatedCars,
		handleCheckboxChange,
		handleSortChange,
		handlePriceRangeChange,
		handleItemsPerPageChange,
		handlePageChange,
		handlePreviousPage,
		handleNextPage,
		handleClearFilters,
		handleListingChange,
		listingCounts,
		startItemIndex,
		endItemIndex,
	}
}

export default useCarFilter
