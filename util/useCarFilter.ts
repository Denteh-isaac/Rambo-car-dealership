'use client'
import { ChangeEvent, useState } from "react"

/** Slider bounds derived from the catalogue, so the default range can never exclude every car. */
export const PRICE_FLOOR = 22000
export const PRICE_CEILING = 159000

interface Car {
	id: number
	price: number
	carType: string
	amenities: string
	rating: number
	name: string
	fuelType: string
	location: string
	image: string
	/** Whether the vehicle is offered for sale, for rental, or both. */
	listingType: ListingType
	/** Rental rate per day. Null when the car is not part of the rental fleet. */
	dailyRate: number | null
}

export type ListingType = 'sale' | 'rental' | 'both'

/** The three ways a shopper can slice the catalogue. */
export const LISTING_TABS: { id: 'all' | 'sale' | 'rental'; label: string }[] = [
	{ id: 'all', label: 'All vehicles' },
	{ id: 'sale', label: 'For sale' },
	{ id: 'rental', label: 'For rent' },
]

export interface Filter {
	names: string[]
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
			(car.price >= filter.priceRange[0] && car.price <= filter.priceRange[1]) &&
			(filter.ratings.length === 0 || filter.ratings.includes(car.rating)) &&
			(filter.carType.length === 0 || filter.carType.includes(car.carType)) &&
			(filter.listing === 'all' || car.listingType === filter.listing || car.listingType === 'both')
		)
	})

	const sortedCars = [...filteredCars].sort((a, b) => {
		if (sortCriteria === "name") {
			return a.name.localeCompare(b.name)
		} else if (sortCriteria === "price") {
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
