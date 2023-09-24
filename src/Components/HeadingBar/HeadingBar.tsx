import React from "react";
import { TailwindBreakpoints } from "../../Enums";

import Routes from "../../Enums/Routes";

import Menu from "../Menu/Menu";

const isSmallerThanTailwindLg: () => boolean = () => {
	return document.body.clientWidth < TailwindBreakpoints.lg;
};

const HeadingBar: React.FC = () => {
	return <div className="w-full h-20 flex justify-between items-center bg-bts-yellow z-20 lg:h-16 px-60">
		<img className="object-cover h-20 md:pl-8 lg:h-16" src="/logo.png" alt="Berkshire Trade Services Logo" />
		<Menu hamburger={isSmallerThanTailwindLg()} menuItems={[
			{
				label: "Home",
				linkTo: Routes.Home
			},
			{
				label: "About",
				linkTo: Routes.About
			},
			{
				label: "Services",
				linkTo: Routes.Services
			},
			{
				label: "Contact",
				linkTo: Routes.Contact
			},
			{
				label: "Customer Login",
				linkTo: Routes.Login,
				isButton: true
			}
		]} />
	</div>;
};
				
export default HeadingBar;