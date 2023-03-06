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
	return <div className={`${className} w-full xl:h-36 flex flex-col bg-bts-black text-bts-white`}>
		<div className="flex order-1 mb-8 xl:flex-col xl:w-1/3">
			<h3 className="w-2/5 text-xl font-light mb-5">{relatedLinks ? "Related" : "Useful"} Links:</h3>
			<Menu className="px-5 flex flex-col" menuItems={relatedLinks ? relatedLinks : usefulLinks} />
		</div>
		<div className="xl:w-1/3 flex flex-col justify-center items-center order-2">
			<p>© Berkshire Trade Services Ltd {getCurrentYear()}</p>
			<p>Registered Company: 14285017</p>
		</div>
		<div className="flex items-center mb-8 xl:flex-col xl:w-1/3">
			<h3 className="w-2/5 text-xl font-light mb-5">Find us on:</h3>
			<div className="flex flex-col">
				<div className="px-5">Facebook</div>
				<div className="px-5">NextDoor</div>
			</div>
		</div>
	</div>;
};

export default Footer;