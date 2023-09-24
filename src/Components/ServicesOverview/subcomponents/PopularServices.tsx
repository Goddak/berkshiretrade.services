import React from "react";
import { IService } from "../../../Types/Service";
import ServiceCard from "../ServiceCard";

interface IPopularServices {
	services: IService[];
	className?: string;
}

const PopularServices: React.FC<IPopularServices> = ({ services, className }) => {
	return (
		<div className={`flex flex-col py-20 px-60 ${className}`}>
			<h1 className="text-4xl font-light text-center mb-12">Popular Services</h1>
			<div className="flex flex-wrap space-x-20 justify-center">
				{services.map(service => {
					return <ServiceCard key={service.route} {...service} className="w-3/12 flex-grow" />
				})}
			</div>
		</div>
	);
};

export default PopularServices;