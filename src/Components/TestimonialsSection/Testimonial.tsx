import React from "react";
import { ITestimonial } from "../../Types/Testimonial";


const Testimonial: React.FC<ITestimonial> = ({ text, name, imageSrc, imageAlt, className }) => {

	return <div className={`flex flex-col shadow ${className}`}>
		<img className="object-cover h-full aspect-video xl:h-auto" src={imageSrc} alt={imageAlt} />
		<div className="flex flex-col p-10 bg-bts-white 2xl:justify-center">
			<p className="text-lg font-light mb-8 text-ellipsis overflow-hidden">{text}</p>
			<h1 className="text-4xl font-light text-center mb-4">{name}</h1>
		</div>
	</div>
};

export default Testimonial;