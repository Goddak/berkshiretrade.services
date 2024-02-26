import React from "react";
import { Link } from "react-router-dom";
import { IService } from "../../Types/Service";

const ServiceCard: React.FC<IService> = ({ title, route, shortDesc, longDesc, imageSrc, thumbSrc, imageAlt, className }) => {

	return <div className={`flex flex-col shadow ${className}`}>
		<div>
			<img className="object-cover w-full aspect-video" src={thumbSrc} alt={imageAlt} />
		</div>
		<div className="flex flex-col flex-grow p-10 bg-bts-white">
			<h1 className="text-4xl font-light text-center mb-4">{title}</h1>
			<p className="text-lg font-light mb-4 text-ellipsis overflow-hidden flex-grow">{shortDesc}</p>
			<a href={route} className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 w-full text-center">Learn More</a>
		</div>
	</div>
};

export default ServiceCard;
export type { IService };