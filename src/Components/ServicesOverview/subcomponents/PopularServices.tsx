import React from "react";
import { IService } from "../../../Types/Service";
import ServiceCard from "../ServiceCard";

interface IPopularServices {
	services: IService[];
	className?: string;
}

const PopularServices: React.FC<IPopularServices> = ({ services, className }) => {
	return (
		<div className={`flex flex-col p-8 sm:p-16 ${className}`}>
			<h1 className="text-4xl font-light text-center mb-12">Popular Services</h1>
			<div className="flex flex-wrap 2xl:space-x-20 justify-center">
				{services.map(service => {
					return <ServiceCard key={service.title} {...service} className="w-full lg:w-3/4 xl:w-2/5 xl:mx-10 2xl:w-3/12 2xl:mx-0 mb-8 sm:mb-12" />
				})}
			</div>
		</div>
	);
};

export default PopularServices;