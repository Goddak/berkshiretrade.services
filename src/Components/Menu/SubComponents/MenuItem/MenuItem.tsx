import React from "react";

import { Link } from "react-router-dom";

export interface IMenuItem {
	label: string;
	linkTo: string;
	isButton?: boolean;
}

const MenuItem: React.FC<IMenuItem> = ({ label, linkTo, isButton }) => {
	return <Link to={linkTo} className={`text-md mr-10 last-of-type:mr-0 hover:underline w-min ${isButton ? "rounded-md bg-bts-black text-bts-yellow p-8" : ""}`} >
		{label}
	</Link>;
};

export default MenuItem;