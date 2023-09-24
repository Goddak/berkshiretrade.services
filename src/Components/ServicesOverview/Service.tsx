import React from "react";
import { Link } from "react-router-dom";

interface IService {
	title: string;
	text: string;
	ctaLabel: string;
	ctaTo: string;
	imageSrc: string;
	imageAlt: string;
	className?: string;
}

const ServiceCard: React.FC<IService> = ({ title, text, ctaLabel, ctaTo, imageSrc, imageAlt, className }) => {

	return <div className={`flex flex-col shadow ${className}`}>
		<div>
			<img className="object-cover w-full aspect-video" src={imageSrc} alt={imageAlt} />
		</div>
		<div className="flex flex-col p-10 bg-bts-white">
			<h1 className="text-4xl font-light text-center mb-4">{title}</h1>
			<p className="text-lg font-light mb-4 text-ellipsis overflow-hidden h-36">{text}</p>
			<Link to={ctaTo} className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 w-full text-center">{ctaLabel}</Link>
		</div>
	</div>
};

export default ServiceCard;
export type { IService };