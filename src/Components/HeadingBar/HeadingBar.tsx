import React from "react";

import Routes from "../../Enums/Routes";

import Menu from "../Menu/Menu";



const HeadingBar: React.FC = () => {
	return <div className="w-full max-h-20 px-36 flex justify-between items-center bg-bts-yellow">
		<img className="object-cover max-h-20" src="/logo.png" alt="Berkshire Trade Services Logo" />
		<Menu menuItems={[
			{
				label: "Home",
				linkTo: Routes.Home
			},
			{
				label: "About",
				linkTo: Routes.About
			},
			{
				label: "Blog",
				linkTo: Routes.Blog
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