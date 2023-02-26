import React from "react";

export interface IPill {
	label: string;
	to: string;
	imageSrc: string;
	imageAlt: string;
}

interface IPillSlider {
	pills: IPill[];
}

const PillSlider: React.FC<IPillSlider> = ({ pills }) => {
	return <div className="flex pl-16 overflow-x-scroll overflow-y-visible pt-10">
		{pills.map((pill, index) => {
			return <div className="w-48 h-96 flex-shrink-0 mr-16 rounded-lg bg-slate-400 relative overflow-hidden transition-transform hover:-translate-y-2 hover:cursor-pointer" key={index}>
				<img src={pill.imageSrc} alt={pill.imageAlt} className="bg-cover bg-center w-full h-full"/>
				<div className="opacity-0 transition-opacity duration-500 p-5 font-light text-xl text-bts-white flex justify-center items-center text-center absolute top-0 right-0 left-0 bottom-0 hover:bg-bts-black hover:opacity-90 hover:visible z-10">{pill.label}</div>
			</div>;
		})}
	</div>;
};

export default PillSlider;