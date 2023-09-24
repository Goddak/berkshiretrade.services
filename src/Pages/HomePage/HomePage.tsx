import React, { FC } from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Hero from "../../Components/Hero/Hero";

import Page from "../../Components/Page/Page";
import { IPill } from "../../Components/PillSlider/PillSlider";
import { TailwindBreakpoints } from "../../Enums";
import TextSection from "../../Components/TextSection/TextSection";
import ServicesOverview from "../../Components/ServicesOverview/ServicesOverview";
import Services from "../../Helpers/Services/Services";
import Testimonials from "../../Helpers/Testimonials/Testimonials";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";

const Pills: IPill[] = [
	{
		label: "Bathroom Installation",
		to: "/bathroom-installation",
		imageSrc: "/pill-images/bathroom-installation-min.jpg",
		imageAlt: "Bathroom installation"
	},
	{
		label: "Kitchen Installation",
		to: "/kitchen-installation",
		imageSrc: "/pill-images/kitchen-installation-min.jpg",
		imageAlt: "Kitchen installation"
	},
	{
		label: "EV Charging",
		to: "/ev-charging",
		imageSrc: "/pill-images/ed-harvey-ev-charger-min.jpg",
		imageAlt: "Electric vehicle charger installation service"
	},
	{
		label: "Laminate Flooring",
		to: "/flooring",
		imageSrc: "/pill-images/steven-ungermann-flooring-min.jpg",
		imageAlt: "Laminate flooring installation service"
	},
	{
		label: "Landscape Gardening",
		to: "/tiling",
		imageSrc: "/pill-images/tile-merchant-ireland-landscaping-min.jpg",
		imageAlt: "Tiling"
	},
	{
		label: "Flat Pack Assembly",
		to: "/flat-pack-assembly",
		imageSrc: "/pill-images/norbert-levajsics-flatpack-assembly-min.jpg",
		imageAlt: "Flat pack assembly service berkshire"
	},
	{
		label: "EICR Testing",
		to: "/eicr-testing",
		imageSrc: "/pill-images/mostafa-mahmoudi-fuseboard-replacement-min.jpg",
		imageAlt: "Electrical installation condition report testing"
	},
	{
		label: "Tiling",
		to: "/tiling",
		imageSrc: "/pill-images/steven-ungermann-tiling-min.jpg",
		imageAlt: "Kitchen with tiled walls and floor"
	},
	{
		label: "Plastering",
		to: "/plastering",
		imageSrc: "/pill-images/trader-min.jpg",
		imageAlt: "Plastering"
	},
	{
		label: "Gardening",
		to: "/gardening",
		imageSrc: "/pill-images/trader-min.jpg",
		imageAlt: "Gardening"
	},
	{
		label: "Handyman",
		to: "/handyman",
		imageSrc: "/pill-images/trader-min.jpg",
		imageAlt: "Handyman"
	},
	{
		label: "Locksmith",
		to: "/locksmith",
		imageSrc: "/pill-images/trader-min.jpg",
		imageAlt: "Locksmith"
	},
];

const getPillsToDisplayForCurrentWidth = (width: number): IPill[] => {
	console.log('getPillsToDisplayForCurrentWidth', width, TailwindBreakpoints);
	if (width < TailwindBreakpoints.md) {
		return Pills.slice(0, 5);
	} else if (width >= TailwindBreakpoints.md && width < TailwindBreakpoints.lg) {
		return Pills.slice(0, 8);
	} else if (width >= TailwindBreakpoints.lg && width < TailwindBreakpoints.xl) {
		return Pills.slice(0, 9);
	} else if (width >= TailwindBreakpoints.xl && width < TailwindBreakpoints["2xl"]) {
		return Pills.slice(0, 9);
	} else if (width >= TailwindBreakpoints["2xl"]) {
		return Pills.slice(0, 12);
	} else {
		return Pills;
	}
};

const getPillsModulusForCurrentWidth = (width: number): number => {
	if (width >= TailwindBreakpoints.lg && width < TailwindBreakpoints.xl) {
		return 3;
	} else if (width >= TailwindBreakpoints.xl && width < TailwindBreakpoints["2xl"]) {
		return 3;
	} else {
		return 0;
	}
};


const HomePage: FC = () => {
	const bodyWidth = document.body.clientWidth;
	const modulus = getPillsModulusForCurrentWidth(bodyWidth);
	const pillsToDisplay = getPillsToDisplayForCurrentWidth(bodyWidth);

	return <Page>
		<Hero
			title="Dependable maintenance & repair services for Landlords & Property Owners"
			subtitle="As a property owner, you have a lot of responsibilities to manage. One of the most important is ensuring that your properties are in good repair and safe for their inhabitants."
			ctaLabel="Get in touch"
			ctaTo="/quote"
			imageSrc="/hero-images/home-page.jpg"
			imageAlt="Quality bathroom installation and repair services"
		/>
		<TextSection
			title="About Us"
			subtitle="We take the stress out of property maintenance"
			text="Our extensive network of skilled tradespeople has been carefully curated to ensure that we can provide you with the best possible service, no matter what your needs are. We offer a wide range of services, including plumbing, electrical work, carpentry, painting and decorating, and more. Our team is always on hand to answer any questions you may have about our services or how we can help you with your property maintenance needs."
			ctaLabel="Get in touch"
			ctaTo="/quote"
			imageSrc="/hero-images/home-page.jpg"
			imageAlt="Quality bathroom installation and repair services"
			className="bg-bts-white"
		/>
		<ServicesOverview services={Services} bg1ClassName="bg-bts-yellow" bg2ClassName="bg-bts-white"/>
		<TestimonialsSection testimonials={Testimonials} quantity={2} bg1ClassName="bg-bts-black" bg2ClassName="bg-bts-yellow" />
		<TextSection title="Trusted by Landlords & Property Owners" subtitle="Know who is accessing your property" text="We know that you want to be able to trust the people who are working on your property. That’s why we only work with tradespeople who have been vetted and approved by us. We also provide a 24/7 emergency call-out service, so you can rest assured that we’ll be there when you need us most." ctaLabel="Get in touch" ctaTo="/quote" imageSrc="/hero-images/home-page.jpg" imageAlt="Quality bathroom installation and repair services" className="bg-bts-yellow"/>
		<div className="flex flex-col py-20 px-60 bg-bts-white">
			<h1 className="text-4xl font-light text-center mb-4">Get a quote</h1>
			<p className="text-lg font-light text-center mb-12">Fill out the form below and we'll get back to you as soon as possible.</p>
			<div className="flex">
				<div className="w-1/2 px-20">
					<ContactForm className=""/>
				</div>
				<div className="w-1/2 px-20">
					<img className="h-full" src="/hero-images/home-page.jpg" alt="Quality bathroom installation and repair services" />
				</div>
			</div>
		</div>
	</Page>;
};

export default HomePage;