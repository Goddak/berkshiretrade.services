import React from "react";
import { Routes } from "../../Enums";

export interface IRelatedLink {
	label: string;
	linkTo: string;
}

interface IFooter {
	className?: string;
}
		
const getCurrentYear: () => number = () => {
	return new Date().getFullYear();
};

const Footer: React.FC<IFooter> = ({ className }) => {
	return <div className={`px-8 py-16 w-full flex flex-col bg-bts-black text-bts-white md:relative xl:flex-row ${className ? className : '' }`}>
		<div className="flex justify-center items-center mb-6 xl:w-1/3">
			<h3 className="text-xl font-light">Get in touch:</h3>
			<a href="tel:0114400441" className="ml-4">0118 44 00 44 1</a>
		</div>
		<div className="flex flex-col justify-center items-center order-3 xl:w-1/3 xl:order-none">
			<p>© Berkshire Trade Services Ltd {getCurrentYear()}</p>
			<p>Company registration number: 14285017</p>
		</div>
		<div className="flex justify-center items-center mb-6 xl:w-1/3">
			<h3 className="text-xl font-light">Follow us:</h3>
			<div className="ml-4"><a href={Routes.Facebook} target="_blank">Facebook</a></div>
			<div className="ml-4"><a href={Routes.Nextdoor} target="_blank">NextDoor</a></div>
		</div>
	</div>;
};

export default Footer;