import React, { FC } from "react";
import Hero from "../../Components/Hero/Hero";

import Page from "../../Components/Page/Page";
import PillSlider, { IPill } from "../../Components/PillSlider/PillSlider";

const Pills: IPill[] = [
	{
		label: "Bathroom Installation",
		to: "/bathroom-installation",
		imageSrc: "/pill-images/bathroom-installation.jpg",
		imageAlt: "Bathroom installation"
	},
	{
		label: "Bathroom Repair",
		to: "/bathroom-repair",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Bathroom repair"
	},
	{
		label: "Kitchen Installation",
		to: "/kitchen-installation",
		imageSrc: "/pill-images/kitchen-installation.jpg",
		imageAlt: "Kitchen installation"
	},
	{
		label: "Kitchen Repair",
		to: "/kitchen-repair",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Kitchen repair"
	},
	{
		label: "Plumbing",
		to: "/plumbing",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Plumbing"
	},
	{
		label: "Electrical",
		to: "/electrical",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Electrical"
	},
	{
		label: "Tiling",
		to: "/tiling",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Tiling"
	},
	{
		label: "Painting & Decorating",
		to: "/painting-and-decorating",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Painting & Decorating"
	},
	{
		label: "Flooring",
		to: "/flooring",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Flooring"
	},
	{
		label: "Carpentry",
		to: "/carpentry",
		imageSrc: "/pill-images/carpentry.jpg",
		imageAlt: "Carpentry"
	},
];



const HomePage: FC = () => {
	return <Page>
		<Hero 
			title="Dependable maintenance & repair services for Landlords & Property Owners"
			subtitle="As a landlord, you have a lot of responsibilities to manage. One of the most important is ensuring that your rental properties are in good repair and safe for your tenants."
			ctaLabel="Get in touch"
			ctaTo="/quote"
			imageSrc="/hero-images/home-page.jpg"
			imageAlt="Quality bathroom installation and repair services"
			fadeIn
			fadeToClass="to-white"
			fadeBgClass="bg-white"
		/>
		<div className="">
			<h2 className="ml-36 mt-36 mb-16 font-light text-5xl">Popular Services</h2>
			<PillSlider pills={Pills} />
		</div>
		<div>Home Page</div>
	</Page>;
};

export default HomePage;