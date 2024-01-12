import React, { useEffect, useRef, useState } from "react";
import Service from "../../Types/Service";
import ServiceCard from "./ServiceCard";
import PopularServices from "./subcomponents/PopularServices";
import { getModuli, sortOtherServices, sortServices } from "../../Utils";
import { Routes } from "../../Enums";

interface IServicesOverview {
	services: Service[];
	bg1ClassName?: string;
	bg2ClassName?: string;
	className?: string;
	id?: string;
}

const ServicesOverview: React.FC<IServicesOverview> = ({ services, bg1ClassName, bg2ClassName, className, id }) => {
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
	}, [services, pModulus, oModulus]);

	const [addMore, setAddMore] = useState<boolean>(false);

	useEffect(() => {
		if (addMore) {
			const [newOtherServices, newUnusedServices] = sortOtherServices(otherServices, unusedServices);
			setOtherServices(newOtherServices);
			setUnusedServices(newUnusedServices);
			setAddMore(false);
		}
	}, [addMore, otherServices, unusedServices]);

	return <div id={id} className={`flex flex-col ${className}`}> 
		<PopularServices services={popularServices} className={bg1ClassName} />
		<div className={`flex flex-col p-8 sm:p-16 2xl:py-20 2xl:px-60 ${bg2ClassName}`}>
			<h1 className="text-4xl font-light text-center mb-12">More Services</h1>
			<div className="flex flex-wrap 2xl:space-x-20 justify-center 2xl:[&>*:nth-child(5)]:!ml-0">
				{otherServices.map(service => {
					return <ServiceCard key={service.title} {...service} className="mb-8 sm:mb-12 w-full lg:w-3/4 xl:w-2/5 xl:mx-10 2xl:w-2/12 2xl:flex-grow 2xl:mx-0" />
				})}
			</div>
			<a href={Routes.Contact} className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 w-fit self-center">Get a quote</a>
		</div>
	</div>
};

export default ServicesOverview;