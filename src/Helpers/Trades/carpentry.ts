import Trade from "../../Types/Trade";

import LaminateFlooring from "../Services/laminateFlooring";
import LoftBoarding from "../Services/loftBoarding";

const Carpentry: Trade = {
	route: "/carpentry",
	title: "Carpentry",
	shortDesc: "Carpentry",
	longDesc: "Carpentry",
	imageSrc: "/pill-images/trader-min.jpg",
	imageAlt: "Carpentry",
	services: [
		LaminateFlooring,
		LoftBoarding
	]
};

export default Carpentry;