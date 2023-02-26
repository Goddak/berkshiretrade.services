import React from "react";

import MenuItem, { IMenuItem } from "./SubComponents/MenuItem/MenuItem";

interface MenuProps {
	menuItems: IMenuItem[];
	column?: boolean;
	className?: string;
}

const Menu: React.FC<MenuProps> = ({ menuItems, column, className }) => {
	return <div className={`${className} ${column ? "flex flex-col" : ""}`}>
		{menuItems.map((menuItem, index) => <MenuItem key={index} label={menuItem.label} linkTo={menuItem.linkTo} isButton={menuItem.isButton}/>)}
	</div>;
};

export default Menu;