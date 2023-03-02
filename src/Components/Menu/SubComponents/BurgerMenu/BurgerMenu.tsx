import React from "react";
import { IMenuItem } from "../MenuItem/MenuItem";

interface IBurgerMenu {
	isOpen: boolean;
	items: IMenuItem[];
	className?: string;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({ isOpen, items, className }) => {
	return <div className={`${className} w-screen bg-bts-yellow flex flex-col justify-center ${isOpen ? "block" : "hidden"}`}
		aria-label="Menu">
		{items.map((item, index) => <div key={index} className="w-full flex justify-center items-center text-bts-black">
			{item.label}
		</div>)}
	</div>;
};

export default BurgerMenu;