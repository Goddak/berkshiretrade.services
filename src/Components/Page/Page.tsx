import React from "react";
import Footer, { IRelatedLink } from "../Footer/Footer";

import HeadingBar from "../HeadingBar/HeadingBar";

interface PageProps {
	children: React.ReactNode;
	relatedLinks?: IRelatedLink[];
	className?: string;
}

const Page: React.FC<PageProps> = ({ children, relatedLinks, className }) => {
	return <div className={`min-h-screen flex flex-col scroll-smooth ${className ? className : ""}`}>
		<HeadingBar />
		<div className="w-full flex-grow">
			{children}
		</div>
		<Footer />
	</div>;
};

export default Page;