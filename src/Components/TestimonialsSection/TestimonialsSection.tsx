import React from "react";
import { ITestimonial } from "../../Types/Testimonial/Testimonial";
import Testimonial from "./Testimonial";

interface ITestimonialsSection {
	testimonials: ITestimonial[];
	quantity?: number;
	bg1ClassName?: string;
	bg2ClassName?: string;
	className?: string;
}

const TestimonialsSection: React.FC<ITestimonialsSection> = ({ testimonials, quantity, bg1ClassName, bg2ClassName, className }) => {
	let testimonialsToRender = testimonials;
	if (quantity) testimonialsToRender = testimonials.slice(0, quantity);

	return <div className={`flex flex-col py-20 px-60 ${bg1ClassName} ${className}`}> 
		<h1 className="text-4xl font-light text-center mb-12 text-bts-white">Testimonials</h1>
		<div className="flex flex-wrap space-x-20 justify-center">
			{testimonialsToRender.map(testimonial => {
				return <Testimonial {...testimonial} className="w-5/12 flex-grow" />
			})}
		</div>
	</div>
};

export default TestimonialsSection;