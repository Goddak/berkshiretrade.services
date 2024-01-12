type Service = {
	route: string;
	title: string;
	shortDesc: string;
	longDesc: string;
	imageSrc: string;
	imageAlt: string;
	isPopular?: boolean;
};

interface IService {
	route: string;
	title: string;
	shortDesc: string;
	longDesc: string;
	imageSrc: string;
	imageAlt: string;
	isPopular?: boolean;
	className?: string;
}

export default Service;
export type { IService };