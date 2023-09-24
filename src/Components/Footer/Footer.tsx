import React from "react";

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
	return <div className={`${className} w-full flex flex-col bg-bts-black text-bts-white md:relative lg:flex-row`}>
		<div className="flex w-1/3 justify-center items-center">
			<h3 className="text-xl font-light">Get in touch:</h3>
			<a href="tel:0114400441" className="ml-4">0118 44 00 44 1</a>
		</div>
		<div className="flex flex-col w-1/3 justify-center items-center">
			<p>© Berkshire Trade Services Ltd {getCurrentYear()}</p>
			<p>Company registration number: 14285017</p>
		</div>
		<div className="flex w-1/3 justify-center items-center">
			<h3 className="text-xl font-light">Follow us:</h3>
			<div className="ml-4">Facebook</div>
			<div className="ml-4">NextDoor</div>
		</div>
	</div>;
};

export default Footer;