import React from "react";
import { Link } from "react-router-dom";
import Service from "../../Types/Service";
import ServiceCard from "./ServiceCard";

interface IServicesOverview {
	services: Service[];
	bg1ClassName?: string;
	bg2ClassName?: string;
	className?: string;
}

const ServicesOverview: React.FC<IServicesOverview> = ({ services, bg1ClassName, bg2ClassName, className }) => {
	const popularServices = [ services[0], services[1], services[2] ]; 
	const moreServices = [ services[3], services[4], services[5], services[6], services[7], services[8], services[9], services[10] ]; 

	return <div className={`flex flex-col ${className}`}> 
		<div className={`flex flex-col py-20 px-60 ${bg1ClassName}`}>
			<h1 className="text-4xl font-light text-center mb-12">Popular Services</h1>
			<div className="flex flex-wrap space-x-20 justify-center">
				{popularServices.map(service => {
					return <ServiceCard {...service} className="w-3/12 flex-grow" />
				})}
			</div>
		</div>
		<div className={`flex flex-col py-20 px-60 ${bg2ClassName}`}>
			<h1 className="text-4xl font-light text-center mb-12">More Services</h1>
			<div className="flex flex-wrap space-x-20 justify-center [&>*:nth-child(5)]:!ml-0">
				{moreServices.map(service => {
					return <ServiceCard {...service} className="mb-16 w-2/12 flex-grow" />
				})}
			</div>
			<Link to="/services" className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 w-fit self-center">View all services</Link>
		</div>
	</div>
};

export default ServicesOverview;