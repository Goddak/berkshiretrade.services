import Trade from "../../Types/Trade";

import KitchenFitting from "../Services/kitchenFitting";
import BathroomFitting from "../Services/bathroomFitting";
import MediaUnits from "../Services/mediaUnits";
import { Routes } from "../../Enums";

const Multi: Trade = {
	route: Routes.Contact,
	title: "Multi Trade",
	shortDesc: "Multi Trade",
	longDesc: "Multi Trade",
	imageSrc: "/srvc-imgs/trader-min.jpg",
	imageAlt: "Multi Trade",
	services: [
		KitchenFitting,
		BathroomFitting,
		MediaUnits,
	]
};

export default Multi;