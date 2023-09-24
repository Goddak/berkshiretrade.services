import React from "react";
import { Link } from "react-router-dom";

interface IHero {
	title: string;
	subtitle: string;
	ctaLabel: string;
	ctaTo: string;
	imageSrc: string;
	imageAlt: string;
	className?: string;
}

const Hero: React.FC<IHero> = ({ title, subtitle, ctaLabel, ctaTo, imageSrc, imageAlt, className }) => {

	return <div className={`flex flex-col p-20 ${className}`} style={{height: "calc(100svh - 5rem)"}}>
		<div className="flex flex-col flex-grow justify-center py-20 px-60 z-10">
			<h1 className="text-3xl font-light mb-4 md:text-4xl lg:w-3/5">{title}</h1>
			<h2 className="text-2xl font-light mb-4 lg:w-4/5">{subtitle}</h2>
			<Link to={ctaTo} className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 w-fit">{ctaLabel}</Link>
		</div>
		<div className="absolute top-0 right-0 bottom-0 left-0 bg-bts-white">
			<img className="object-cover h-full w-full opacity-30" src={imageSrc} alt={imageAlt} />
		</div>
	</div>
};

export default Hero;