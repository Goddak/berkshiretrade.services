import Service from "./Service";

type Trade = {
	route: string;
	title: string;
	shortDesc: string;
	longDesc: string;
	imageSrc: string;
	imageAlt: string;
	services: Service[];
};

interface ITrade {
	route: string;
	title: string;
	shortDesc: string;
	longDesc: string;
	imageSrc: string;
	imageAlt: string;
	services: Service[];
	className?: string;
}

export default Trade;
export type { ITrade };