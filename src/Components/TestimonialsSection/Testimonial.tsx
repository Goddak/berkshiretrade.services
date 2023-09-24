import React from "react";
import { ITestimonial } from "../../Types/Testimonial";


const Testimonial: React.FC<ITestimonial> = ({ text, name, imageSrc, imageAlt, className }) => {

	return <div className={`flex shadow ${className}`}>
		<div>
			<img className="object-cover h-full aspect-video" src={imageSrc} alt={imageAlt} />
		</div>
		<div className="flex flex-col p-10 bg-bts-white">
			<p className="text-lg font-light mb-4 text-ellipsis overflow-hidden h-36">{text}</p>
			<h1 className="text-4xl font-light text-center mb-4">{name}</h1>
		</div>
	</div>
};

export default Testimonial;