import React from "react";
import Menu from "../Menu/Menu";

export interface IRelatedLink {
	label: string;
	linkTo: string;
}

interface IFooter {
	relatedLinks?: IRelatedLink[];
	className?: string;
}

const usefulLinks: IRelatedLink[] = [
	{
		label: "Home",
		linkTo: "/",
	},
	{
		label: "About",
		linkTo: "/about",
	},
	{
		label: "Contact",
		linkTo: "/contact",
	},
	{
		label: "About",
		linkTo: "/about2",
	},
	{
		label: "Contact",
		linkTo: "/contact2",
	},
];
		
const getCurrentYear: () => number = () => {
	return new Date().getFullYear();
};

const Footer: React.FC<IFooter> = ({ relatedLinks, className }) => {
	return <div className={`${className} w-full flex flex-col bg-bts-black text-bts-white md:relative lg:flex-row`}>
		<div className="flex order-1 mb-8 md:w-1/2 lg:flex-col lg:w-1/3 lg:mb-0 lg:items-center lg:order-none">
			<h3 className="w-2/5 text-xl font-light mb-5">{relatedLinks ? "Related" : "Useful"} Links:</h3>
			<Menu className="px-5 flex flex-col" menuItems={relatedLinks ? relatedLinks : usefulLinks} />
		</div>
		<div className="flex flex-col justify-center items-center order-2 lg:w-1/3 lg:justify-end lg:order-none">
			<p>© Berkshire Trade Services Ltd {getCurrentYear()}</p>
			<p>Registered Company: 14285017</p>
		</div>
		<div className="flex items-center mb-8 md:w-1/2 lg:flex-col lg:w-1/3 md:absolute md:right-0 lg:relative lg:items-center">
			<h3 className="w-2/5 text-xl font-light mb-5 lg:w-auto">Find us on:</h3>
			<div className="flex flex-col">
				<div className="px-5 lg:px-0">Facebook</div>
				<div className="px-5 lg:px-0">NextDoor</div>
			</div>
		</div>
	</div>;
};

export default Footer;