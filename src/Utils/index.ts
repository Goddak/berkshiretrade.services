import TailwindBreakpoints from "../Enums/TailwindBreakpoints";
import Service from "../Types/Service";

/**
 * @param bodyWidth The width of the screen.
 * @returns An array of numbers.
 * @example const [pModulus, oModulus] = getModuli(bodyWidth, breakpoints);
 */
export const getModuli = (
	bodyWidth: number,
): [number, number] => {
	let pModulus = 3;
	let oModulus = 8;

	// Update modulus for moble resolutions
	if (bodyWidth < TailwindBreakpoints.md) {
		pModulus = 3;
		oModulus = 8;
	}

	return [pModulus, oModulus];
}

/**
 * @param services An array of service objects.
 * @param pModulus The number of popular services that can be displayed.
 * @param oModulus The number of other services that can be displayed.
 * @returns An array of popular services, an array of other services and an array of unused services.
 * @example const [popularServices, otherServices, unusedServices] = sortServices(services);
 */
export const sortServices = (
	services: Service[],
	pModulus: number = 3,
	oModulus: number = 4
): [Service[], Service[], Service[]] => {
	const popularServices: Service[] = [];
	const otherServices: Service[] = [];
	const unusedServices: Service[] = [];

	// Sort services.
	let pIndex = 0;
	let oIndex = 0;
	services.forEach((service, index) => {
		if (service.isPopular && pIndex < pModulus) {
			popularServices.push(service);
			pIndex++;
		} else if (service.isPopular && oIndex >= oModulus) {
			otherServices.push(service);
			oIndex++;
		} else if (oIndex < oModulus) {
			otherServices.push(service);
			oIndex++;
		} else {
			unusedServices.push(service);
		}
	});	

	return [popularServices, otherServices, unusedServices];
};

/**
 * Adds unused services to the other services array.
 * @param otherServices An array of other services.
 * @param unusedServices An array of unused services.
 * @param oModulus The number of other services that can be displayed.
 * @returns An array of other services and an array of unused services.
 * @example const [otherServices, unusedServices] = sortOtherServices(otherServices, unusedServices);
 */
export const sortOtherServices = (
	otherServices: Service[],
	unusedServices: Service[],
	oModulus: number = 4
): [Service[], Service[]] => {
	let oIndex = 0;
	let indexesToRemove: number[] = [];
	unusedServices.forEach((service, index) => {
		if (oIndex < oModulus) {
			indexesToRemove.push(index);
			oIndex++;
		}
	});	

	// sort indexesToRemove in descending order.
	indexesToRemove.sort((a, b) => b - a);


	// Remove used services from unused services array and add to other services array.
	indexesToRemove.forEach((index) => {
		let service = unusedServices.splice(index, 1);
		otherServices.push(service[0]);
	});

	return [otherServices, unusedServices];
}