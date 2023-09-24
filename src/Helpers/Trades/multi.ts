import Trade from "../../Types/Trade";

import KitchenFitting from "../Services/kitchenFitting";
import BathroomFitting from "../Services/bathroomFitting";
import MediaUnits from "../Services/mediaUnits";

const Multi: Trade = {
	route: "/multi-trade",
	title: "Multi Trade",
	shortDesc: "Multi Trade",
	longDesc: "Multi Trade",
	imageSrc: "/pill-images/trader-min.jpg",
	imageAlt: "Multi Trade",
	services: [
		KitchenFitting,
		BathroomFitting,
		MediaUnits,
	]
};

export default Multi;