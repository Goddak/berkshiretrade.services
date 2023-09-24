import React, { FC } from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Hero from "../../Components/Hero/Hero";

import Page from "../../Components/Page/Page";
import TextSection from "../../Components/TextSection/TextSection";
import ServicesOverview from "../../Components/ServicesOverview/ServicesOverview";
import ServiceList from "../../Helpers/Services";
import Testimonials from "../../Helpers/Testimonials/Testimonials";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";

const HomePage: FC = () => {
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
		<ServicesOverview services={ServiceList} bg1ClassName="bg-bts-yellow" bg2ClassName="bg-bts-white"/>
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