import React from "react";
import Footer, { IRelatedLink } from "../Footer/Footer";

import HeadingBar from "../HeadingBar/HeadingBar";

interface PageProps {
	children: React.ReactNode;
	relatedLinks?: IRelatedLink[];
}

const Page: React.FC<PageProps> = ({ children, relatedLinks }) => {
	return <div className="w-full min-h-screen flex flex-col">
		<HeadingBar />
		<div className="w-full flex-grow">
			{children}
		</div>
		<Footer relatedLinks={relatedLinks}/>
	</div>;
};

export default Page;