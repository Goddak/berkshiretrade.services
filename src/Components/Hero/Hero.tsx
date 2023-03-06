import React from "react";
import { Link } from "react-router-dom";

interface IHero {
	title: string;
	subtitle: string;
	ctaLabel: string;
	ctaTo: string;
	imageSrc: string;
	imageAlt: string;
	fadeIn?: boolean;
	fadeToClass?: string;
	fadeBgClass?: string;
	className?: string;
}

const Hero: React.FC<IHero> = ({ title, subtitle, ctaLabel, ctaTo, imageSrc, imageAlt, fadeIn, fadeToClass, fadeBgClass, className }) => {

	return <div className={`flex flex-col relative ${className}`} style={{height: "calc(100svh - 5rem)"}}>
		<div className="flex flex-col flex-grow justify-center items-center z-10 lg:items-start">
			<h1 className="text-3xl font-light mb-4 md:text-4xl lg:w-3/5">{title}</h1>
			<h2 className="text-2xl font-light mb-4 lg:w-4/5">{subtitle}</h2>
			<Link to={ctaTo} className="rounded-md bg-bts-black text-bts-yellow p-5 px-10 mt-5 md:text-2xl lg:text-lg lg:py-3 lg:px-10">{ctaLabel}</Link>
		</div>
		<div className={`hidden xl:w-1/3 ${fadeBgClass}`}>
		</div>
		<div className="absolute top-0 right-0 bottom-0 left-0 xl:2/3">
			<img className="object-cover h-full w-full" src={imageSrc} alt={imageAlt} />
			{fadeIn && <div className={`absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-l from-transparent ${fadeToClass}`} />}
		</div>
	</div>
};

export default Hero;