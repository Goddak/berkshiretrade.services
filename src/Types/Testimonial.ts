type Testimonial = {
	text: string;
	name: string;
	imageSrc: string;
	imageAlt: string;
};

interface ITestimonial {
	text: string;
	name: string;
	imageSrc: string;
	imageAlt: string;
	className?: string;
}

export type { Testimonial, ITestimonial };