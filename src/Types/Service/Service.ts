type Service = {
	title: string;
	text: string;
	ctaLabel: string;
	ctaTo: string;
	imageSrc: string;
	imageAlt: string;
};

interface IService {
	title: string;
	text: string;
	ctaLabel: string;
	ctaTo: string;
	imageSrc: string;
	imageAlt: string;
	className?: string;
}

export type { Service, IService };