import { Routes } from "../../Enums";
import Trade from "../../Types/Trade";

import LaminateFlooring from "../Services/laminateFlooring";
import LoftBoarding from "../Services/loftBoarding";

const Carpentry: Trade = {
	route: Routes.Contact,
	title: "Carpentry",
	shortDesc: "Carpentry",
	longDesc: "Carpentry",
	imageSrc: "/srvc-imgs/trader-min.jpg",
	imageAlt: "Carpentry",
	services: [
		LaminateFlooring,
		LoftBoarding
	]
};

export default Carpentry;