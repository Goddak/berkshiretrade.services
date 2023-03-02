import React, { FC } from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Hero from "../../Components/Hero/Hero";

import Page from "../../Components/Page/Page";
import { IPill } from "../../Components/PillSlider/PillSlider";
import { TailwindBreakpoints } from "../../Enums";

const Pills: IPill[] = [
	{
		label: "Bathroom Installation",
		to: "/bathroom-installation",
		imageSrc: "/pill-images/bathroom-installation.jpg",
		imageAlt: "Bathroom installation"
	},
	{
		label: "Kitchen Installation",
		to: "/kitchen-installation",
		imageSrc: "/pill-images/kitchen-installation.jpg",
		imageAlt: "Kitchen installation"
	},
	{
		label: "EV Charging",
		to: "/ev-charging",
		imageSrc: "/pill-images/ed-harvey-ev-charger.jpg",
		imageAlt: "Electric vehicle charger installation service"
	},
	{
		label: "Laminate Flooring",
		to: "/flooring",
		imageSrc: "/pill-images/steven-ungermann-flooring.jpg",
		imageAlt: "Laminate flooring installation service"
	},
	{
		label: "Landscape Gardening",
		to: "/tiling",
		imageSrc: "/pill-images/tile-merchant-ireland-landscaping.jpg",
		imageAlt: "Tiling"
	},
	{
		label: "Flat Pack Assembly",
		to: "/flat-pack-assembly",
		imageSrc: "/pill-images/norbert-levajsics-flatpack-assembly.jpg",
		imageAlt: "Flat pack assembly service berkshire"
	},
	{
		label: "EICR Testing",
		to: "/eicr-testing",
		imageSrc: "/pill-images/mostafa-mahmoudi-fuseboard-replacement.jpg",
		imageAlt: "Electrical installation condition report testing"
	},
	{
		label: "Tiling",
		to: "/tiling",
		imageSrc: "/pill-images/steven-ungermann-tiling.jpg",
		imageAlt: "Kitchen with tiled walls and floor"
	},
	{
		label: "Plastering",
		to: "/plastering",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Plastering"
	},
	{
		label: "Gardening",
		to: "/gardening",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Gardening"
	},
	{
		label: "Handyman",
		to: "/handyman",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Handyman"
	},
	{
		label: "Locksmith",
		to: "/locksmith",
		imageSrc: "/pill-images/trader.jpg",
		imageAlt: "Locksmith"
	},
];

const getPillsToDisplayForCurrentWidth = (width: number): IPill[] => {
	if (width < TailwindBreakpoints.sm) {
		return Pills.slice(0, 6);
	} else if (width < TailwindBreakpoints.md) {
		return Pills.slice(0, 4);
	} else if (width < TailwindBreakpoints.lg) {
		return Pills.slice(0, 6);
	} else if (width < TailwindBreakpoints.xl) {
		return Pills.slice(0, 8);
	} else if (width < TailwindBreakpoints["2xl"]) {
		return Pills.slice(0, 10);
	} else {
		return Pills;
	}
};

const HomePage: FC = () => {
	const bodyWidth = document.body.clientWidth;

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
			className="p-8"
		/>
		<div className="bg-bts-yellow pt-16 p-8 pb-0 flex flex-col">
			<h2 className="mb-12 font-light text-5xl">Popular Services</h2>
			<div className="flex justify-center flex-wrap">
				{getPillsToDisplayForCurrentWidth(bodyWidth).map((pill, index) => {
					return (<div key={index} className="w-full aspect-video mb-8 rounded-lg shadow-md bg-slate-400 relative overflow-hidden transition-transform hover:-translate-y-2 hover:cursor-pointer">
						<img className="bg-cover bg-center w-full h-full" src={pill.imageSrc} alt={pill.imageAlt} />
						<div className="opacity-0 transition-opacity duration-500 p-5 font-light text-xl text-bts-white flex justify-center items-center text-center absolute top-0 right-0 left-0 bottom-0 hover:bg-bts-black hover:opacity-90 hover:visible z-10">{pill.label}</div>
					</div>);
				})}
			</div>
		</div>
		<div className="flex p-8 pt-16">
			<div className="flex flex-col xl:w-1/2">
				<h2 className="mb-12 font-light text-5xl">Send us a message</h2>
				<ContactForm />
			</div>
			<div className="hidden xl:block xl:w-1/2 ">
				<img src="/hero-images/home-page.jpg" alt="Quality bathroom installation and repair services" />
			</div>
		</div>
	</Page>;
};

export default HomePage;