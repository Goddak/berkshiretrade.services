import React from "react";
import Footer, { IRelatedLink } from "../Footer/Footer";

import HeadingBar from "../HeadingBar/HeadingBar";

interface PageProps {
	children: React.ReactNode;
	relatedLinks?: IRelatedLink[];
	className?: string;
}

const Page: React.FC<PageProps> = ({ children, relatedLinks, className }) => {
	return <div className={`${className} min-h-screen flex flex-col`}>
		<HeadingBar />
		<div className="w-full flex-grow">
			{children}
		</div>
		<Footer relatedLinks={relatedLinks} className="p-8"/>
	</div>;
};

export default Page;