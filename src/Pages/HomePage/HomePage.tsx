import React, { FC } from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Hero from "../../Components/Hero/Hero";

import Page from "../../Components/Page/Page";
import TextSection from "../../Components/TextSection/TextSection";
import ServicesOverview from "../../Components/ServicesOverview/ServicesOverview";
import ServiceList from "../../Helpers/Services";
import Testimonials from "../../Helpers/Testimonials/Testimonials";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";

import { TextSectionTextContent, TextSectionImageContent } from "../../Components/TextSection/TextSection";
import { Routes } from "../../Enums";

const aboutUsTextContent: TextSectionTextContent = {
	title: "About Us",
	subtitle: "We take the stress out of property maintenance",
	text: ["We're not your typical property service company; our journey began with a family history of craftsmanship and a vision to transform the industry. What sets us apart is our commitment to quality work, unparalleled communication, and a dedication to be the best in the business.", "Berkshire Trade Services offer a wide range of services, making us the first choice for homeowners and landlords in Reading, Berkshire and surrounding areas.", "Customer satisfaction is our priority, and our collaborations with local businesses ensure excellence in every project. Our clientele includes homeowners, landlords and local estate agents, providing a one-stop solution for all your property needs.", "The future for BTS is bright; with a growing network of accredited operatives and expansion into construction. Are you ready to experience the BTS difference? Contact us today, and let us exceed your expectations in property improvement and maintenance. Your journey to excellence begins here."],
	cta: "Find out more",
	mText: ["We're not your typical property service company; our journey began with a family history of craftsmanship and a vision to transform the industry. What sets us apart is our commitment to quality work, unparalleled communication, and a dedication to be the best in the business.", "Berkshire Trade Services offer a wide range of services, making us the first choice for homeowners and landlords in Reading, Berkshire and surrounding areas."],
};

const aboutUsImageContent: TextSectionImageContent = {
	imgSrc: "/txt-imgs/r-architecture-unsplash-min.jpg",
	imgAlt: "Quality bathroom installation and repair services",
	mImgSrc: "/txt-imgs/about-us-mobile-min.jpg",
	mImgAlt: "Quality bathroom installation and repair services",
};

const trustedTextContent: TextSectionTextContent = {
	title: "Trusted by Landlords & Property Owners",
	subtitle: "Know who is accessing your property",
	text: ["We know that you want to be able to trust the people who are working on your property. That’s why we only work with tradespeople who have been vetted and approved by us. Before joining our team, each tradesperson undergoes a rigorous vetting process, including comprehensive background checks. This ensures that only individuals with a proven track record of professionalism, integrity, and expertise become part of the BTS family.", "Our commitment to your security doesn't end once a tradesperson is approved. We continuously monitor performance and encourage client feedback. This dynamic process ensures that our team consistently upholds the high standards of professionalism and quality that BTS is known for.", "Your property is a significant investment, and we believe that the people entrusted with its care should reflect the same level of commitment and reliability. BTS not only provides quality workmanship but also a team you can trust with your home or business.", "Emergencies can happen at any time. With our around-the-clock emergency call-out service, you can count on BTS to respond promptly to unexpected situations. Day or night, weekends or holidays – we are dedicated to being there when you need us the most."],
	cta: "Get in touch",
	mText: ["We know that you want to be able to trust the people who are working on your property. That’s why we only work with tradespeople who have been vetted and approved by us. Before joining our team, each tradesperson undergoes a rigorous vetting process, including comprehensive background checks. This ensures that only individuals with a proven track record of professionalism, integrity, and expertise become part of the BTS family.", "Our commitment to your security doesn't end once a tradesperson is approved. We continuously monitor performance and encourage client feedback. This dynamic process ensures that our team consistently upholds the high standards of professionalism and quality that BTS is known for."],
};

const trustedImageContent: TextSectionImageContent = {
	imgSrc: "/txt-imgs/trusted-min.jpg",
	imgAlt: "Quality bathroom installation and repair services",
	mImgSrc: "/txt-imgs/trusted-mobile-min.jpg",
	mImgAlt: "Quality bathroom installation and repair services",
};

const HomePage: FC = () => {
	return <Page>
		<Hero
			title="Dependable maintenance & home renovation services for Landlords & Property Owners"
			mobileTitle="Home repair & renovation services for Landlords & Property Owners"
			subtitle="As a property owner, you have a lot of responsibilities to manage. One of the most important is ensuring that your properties are in good repair and safe for their inhabitants."
			ctaLabel="Get in touch"
			ctaTo={Routes.Contact}
			imageSrc="/hero-images/home-page.jpg"
			imageAlt="Quality bathroom installation and repair services"
		/>
		<TextSection
			textContent={aboutUsTextContent}
			imageContent={aboutUsImageContent}
			ctaTo={Routes.Contact}
			className="bg-bts-white"
			id="about-us"
		/>
		<ServicesOverview id="servicesOverview" services={ServiceList} bg1ClassName="bg-bts-yellow" bg2ClassName="bg-bts-white"/>
		<TestimonialsSection testimonials={Testimonials} quantity={2} bg1ClassName="bg-bts-black" bg2ClassName="bg-bts-yellow" />
		<TextSection textContent={trustedTextContent} imageContent={trustedImageContent} ctaTo={Routes.Contact} className="bg-bts-white"/>
		<div id="contact-us" className="flex flex-col p-8 2xl:py-20 2xl:px-32 bg-bts-yellow">
			<h1 className="text-4xl font-light text-center mb-6">Get a quote</h1>
			<p className="text-lg font-light text-center mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
			<div className="flex flex-col-reverse xl:flex-row xl:space-x-20 xl:justify-center xl:mb-10">
				<div className="w-full xl:w-2/5 mb-6">
					<ContactForm className=""/>
				</div>
				<div className="w-full xl:w-2/5 2xl:px-20 mb-6">
					<img className="h-full" src="/hero-images/home-page.jpg" alt="Quality bathroom installation and repair services" />
				</div>
			</div>
		</div>
	</Page>;
};

export default HomePage;