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
}

const Hero: React.FC<IHero> = ({ title, subtitle, ctaLabel, ctaTo, imageSrc, imageAlt, fadeIn, fadeToClass, fadeBgClass }) => {

	return <div className="w-full aspect-video flex relative">
		<div className="absolute top-0 bottom-0 left-0 w-2/3 pl-36 flex flex-col justify-center items-center z-10">
			<h1 className="text-5xl font-light pb-5">{title}</h1>
			<h2 className="text-xl font-light pb-5">{subtitle}</h2>
			<Link to={ctaTo} className="rounded-md bg-bts-black text-bts-yellow p-5 mt-5">{ctaLabel}</Link>
		</div>
		<div className={`w-1/3 ${fadeBgClass}`}>
		</div>
		<div className="w-2/3 relative">
			<img className="object-cover h-full w-full" src={imageSrc} alt={imageAlt} />
			{fadeIn && <div className={`absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-l from-transparent ${fadeToClass}`} />}
		</div>
	</div>
};

export default Hero;