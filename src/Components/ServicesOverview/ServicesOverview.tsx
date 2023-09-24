import React, { useEffect, useRef, useState } from "react";
import Service from "../../Types/Service";
import ServiceCard from "./ServiceCard";
import PopularServices from "./subcomponents/PopularServices";
import { getModuli, sortOtherServices, sortServices } from "../../Utils";

interface IServicesOverview {
	services: Service[];
	bg1ClassName?: string;
	bg2ClassName?: string;
	className?: string;
}

const ServicesOverview: React.FC<IServicesOverview> = ({ services, bg1ClassName, bg2ClassName, className }) => {
	const [bodyWidth, setBodyWidth] = useState<number>(document.body.clientWidth);
	useEffect(() => {
		const updateBodyWidth = () => setBodyWidth(document.body.clientWidth);
		window.addEventListener('resize', updateBodyWidth);
		return () => window.removeEventListener('resize', updateBodyWidth);
	}, []);

	const [[pModulus, oModulus], setModulus] = useState<[number, number]>(getModuli(bodyWidth));
	useEffect(() => {
		setModulus(getModuli(bodyWidth));
	}, [bodyWidth]);

	const [popularServices, setPopularServices] = useState<Service[]>([]);
	const [otherServices, setOtherServices] = useState<Service[]>([]);
	const [unusedServices, setUnusedServices] = useState<Service[]>([]);

	useEffect(() => {
		const [popularServices, otherServices, unusedServices] = sortServices(services, pModulus, oModulus);
		setPopularServices(popularServices);
		setOtherServices(otherServices);
		setUnusedServices(unusedServices);
		console.log('this is running', otherServices, unusedServices);
	}, [services, pModulus, oModulus]);

	const [addMore, setAddMore] = useState<boolean>(false);

	useEffect(() => {
		if (addMore) {
			const [newOtherServices, newUnusedServices] = sortOtherServices(otherServices, unusedServices);
			console.log('updating other services', otherServices, newOtherServices);
			console.log('updating unused services', unusedServices, newUnusedServices);
			setOtherServices(newOtherServices);
			setUnusedServices(newUnusedServices);
			setAddMore(false);
		}
	}, [addMore, otherServices, unusedServices]);

	return <div className={`flex flex-col ${className}`}> 
		<PopularServices services={popularServices} className={bg1ClassName} />
		<div className={`flex flex-col py-20 px-60 ${bg2ClassName}`}>
			<h1 className="text-4xl font-light text-center mb-12">More Services</h1>
			<div className="flex flex-wrap space-x-20 justify-center [&>*:nth-child(5)]:!ml-0">
				{otherServices.map(service => {
					return <ServiceCard key={service.route} {...service} className="mb-16 w-2/12 flex-grow" />
				})}
			</div>
			<button onClick={() => setAddMore(true)} className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 w-fit self-center">View all services</button>
		</div>
	</div>
};

export default ServicesOverview;