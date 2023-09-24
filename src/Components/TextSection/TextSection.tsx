import React from "react";
import { Link } from "react-router-dom";

interface ITextSection {
	title: string;
	subtitle: string;
	text: string;
	ctaLabel: string;
	ctaTo: string;
	imageSrc: string;
	imageAlt: string;
	className?: string;
}

const TextSection: React.FC<ITextSection> = ({ title, subtitle, text, ctaLabel, ctaTo, imageSrc, imageAlt, className }) => {

	return <div className={`flex flex-col py-20 px-60 ${className}`}>
		<h1 className="text-4xl font-light text-center">{title}</h1>
		<div className="flex">
			<div className="w-1/2 flex flex-col justify-center p-20">
				<h2 className="text-2xl font-light mb-4">{subtitle}</h2>
				<p className="text-lg font-light mb-4 w-10/12">{text}</p>
				<Link to={ctaTo} className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 w-fit">{ctaLabel}</Link>
			</div>
			<div className="w-1/2 flex p-20">
				<img className="" src={imageSrc} alt={imageAlt} />
			</div>
		</div>
	</div>
};

export default TextSection;