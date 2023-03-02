import React, { useState } from "react";
import BurgerButton from "./SubComponents/BurgerButton/BurgerButton";
import BurgerMenu from "./SubComponents/BurgerMenu/BurgerMenu";

import MenuItem, { IMenuItem } from "./SubComponents/MenuItem/MenuItem";

interface MenuProps {
	menuItems: IMenuItem[];
	column?: boolean;
	hamburger?: boolean;
	className?: string;
}

const Menu: React.FC<MenuProps> = ({ menuItems, column, hamburger, className }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	if (hamburger) return <div className="relative">
		<BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
		<BurgerMenu isOpen={isOpen} items={menuItems} className={`absolute left-0 top-20 right-0`} />
	</div>;

	return <div className={`${className} ${column ? "flex flex-col" : ""}`}>
		{menuItems.map((menuItem, index) => <MenuItem key={index} label={menuItem.label} linkTo={menuItem.linkTo} isButton={menuItem.isButton}/>)}
	</div>;
};

export default Menu;