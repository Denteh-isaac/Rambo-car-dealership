/**
 * Resolve a car's listing image.
 *
 * Stock added by hand carries a full path under /assets/imgs/cars/; the
 * template's original cars still carry a bare filename that lives in the
 * legacy listing folder. Kept free of "use client" so both server pages and
 * client cards can call it.
 */
export function carImage(image: string) {
	return image?.startsWith('/') ? image : `/assets/imgs/cars-listing/cars-listing-6/${image}`
}
