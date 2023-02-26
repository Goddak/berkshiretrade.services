import React from "react";
import Menu from "../Menu/Menu";

export interface IRelatedLink {
	label: string;
	linkTo: string;
}

interface IFooter {
	relatedLinks?: IRelatedLink[];
}

const defaultRelatedLinks: IRelatedLink[] = [
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

const Footer: React.FC<IFooter> = ({ relatedLinks }) => {
	return <div className={`w-full h-36 px-36 flex py-5 bg-bts-black text-bts-white`}>
		<div className="w-1/3 flex flex-col">
			<h3 className="text-xl font-light mb-5">{relatedLinks ? "Related" : "Useful"} Links:</h3>
			<Menu className="px-5 flex flex-wrap" menuItems={relatedLinks ? relatedLinks : defaultRelatedLinks} />
		</div>
		<div className="w-1/3 flex flex-col justify-center items-center">
			<p>© Berkshire Trade Services Ltd {getCurrentYear()}</p>
		</div>
		<div className="w-1/3 flex flex-col items-center">
			<h3 className="text-xl font-light mb-5">Find us on:</h3>
			<div className="px-5">Facebook</div>
			<div className="px-5">NextDoor</div>
		</div>
	</div>;
};

export default Footer;