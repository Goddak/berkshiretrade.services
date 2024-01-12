import React from "react";

interface IBurgerButton {
	isOpen: boolean;
	onClick: () => void;
	className?: string;
}

const BurgerButton: React.FC<IBurgerButton> = ({ isOpen, onClick, className }) => {
	return <button onClick={onClick} className={`${className} w-10 h-10 flex flex-col justify-around items-center focus:outline-none`}
		aria-label="Menu">
		<div className={`w-10 h-1 bg-bts-black transition-transform ${isOpen ? "translate-y-4 -rotate-45" : ""}`}></div>
		<div className={`w-10 h-1 bg-bts-black transition-opacity ${isOpen ? "opacity-0" : ""}`}></div>
		<div className={`w-10 h-1 bg-bts-black transition-transform ${isOpen ? "-translate-y-3 rotate-45" : ""}`}></div>
	</button>;
};

export default BurgerButton;