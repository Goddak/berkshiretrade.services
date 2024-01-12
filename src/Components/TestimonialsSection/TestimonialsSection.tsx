import React from "react";
import { ITestimonial } from "../../Types/Testimonial";
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

	return <div className={`flex flex-col p-8 sm:px-16 xl:px-20 pt-10 2xl:py-20 2xl:px-60 ${bg1ClassName} ${className}`}> 
		<h1 className="text-4xl font-light text-center mb-10 2xl:mb-12 text-bts-white">Testimonials</h1>
		<div className="flex flex-wrap 2xl:space-x-20 justify-center">
			{testimonialsToRender.map(testimonial => {
				return <Testimonial key={testimonial.name} {...testimonial} className="w-full lg:w-3/4 xl:w-full xl:self-center 2xl:w-5/12 mb-10" />
			})}
		</div>
	</div>
};

export default TestimonialsSection;