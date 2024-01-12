import React from "react";
import { Link } from "react-router-dom";

interface IHero {
	title: string;
	mobileTitle?: string;
	subtitle: string;
	ctaLabel: string;
	ctaTo: string;
	imageSrc: string;
	imageAlt: string;
	className?: string;
}

const Hero: React.FC<IHero> = ({ title, mobileTitle, subtitle, ctaLabel, ctaTo, imageSrc, imageAlt, className }) => {

	return <div className={`flex flex-col p-8 sm:p-16 lg:p-20 ${className}`} style={{height: "calc(100svh - 5rem)"}}>
		<div className="flex flex-col flex-grow justify-center lg:py-20 xl:px-40 2xl:px-80 z-10">
			{mobileTitle && <h1 className="text-4xl font-light mb-10 sm:mb-6 md:hidden">{mobileTitle}</h1>}
			<h1 className="hidden md:block text-4xl font-light mb-8">{title}</h1>
			<h2 className="hidden sm:block text-xl font-light mb-6 md:mb-8">{subtitle}</h2>
			<a href={ctaTo} className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 w-full lg:w-1/2 lg:self-center text-center">{ctaLabel}</a>
		</div>
		<div className="absolute top-0 right-0 bottom-0 left-0 bg-bts-white">
			<img className="h-full w-full object-cover object-left opacity-60" src={imageSrc} alt={imageAlt} />
		</div>
	</div>
};

export default Hero;