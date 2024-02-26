import { Routes } from "../../Enums";
import Service from "../../Types/Service";

const EvChargingPoints: Service = {
	route: Routes.Contact,
	title: "EV Charging Points",
	shortDesc: "Future-proof your home with our EV charging points. We install charging points for all types of electric vehicles.",
	longDesc: `Electric vehicles are the future of transportation. With more and more people switching to electric cars, it's important to have a charging point at home so you can charge your car overnight and be ready for the next day.

							We install EV charging points for all types of electric vehicles, including Tesla, Nissan Leaf, BMW i3, and more. Our team will work with you to find the best solution for your needs and budget. We offer a range of different options, from simple wall-mounted chargers to fully integrated systems that can be controlled remotely via an app on your phone or tablet.

							Our team is committed to providing excellent customer service and we'll make sure everything is installed correctly and safely. You'll never have to worry about running out of power again!

							Contact us today to learn more about our EV charging points and how they can help future-proof your home!`,
	thumbSrc: "/srvc-imgs/myenergi-ev-charger-thumb.jpg",
	imageSrc: "/srvc-imgs/myenergi-ev-charger-min.jpg",
	imageAlt: "EV Charging Points",
	isPopular: true
};

export default EvChargingPoints;