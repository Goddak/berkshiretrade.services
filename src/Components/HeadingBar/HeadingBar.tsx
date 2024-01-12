import React, { useState, useEffect } from "react";
import { TailwindBreakpoints } from "../../Enums";

import Routes from "../../Enums/Routes";

import Menu from "../Menu/Menu";

const isSmallerThanTailwindXl: () => boolean = () => {
	return document.body.clientWidth < TailwindBreakpoints.xl;
};

const HeadingBar: React.FC = () => {
	const [isMobile, setIsMobile]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(isSmallerThanTailwindXl());
	const onResize: () => void = () => {
		setIsMobile(isSmallerThanTailwindXl());
	}

	useEffect(() => {
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return <div className="w-full h-20 flex justify-between items-center bg-bts-yellow z-20 lg:h-16 xl:px-24 pl-8">
		<img className="object-cover h-20 md:pl-8 lg:h-24 absolute top-0 right-8 lg:left-8 xl:left-0" src="/logo.png" alt="Berkshire Trade Services Logo" />
		<div className="hidden lg:flex lg:justify-between lg:items-center lg:w-60 lg:px-0"></div>
		<Menu hamburger={isMobile} menuItems={[
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