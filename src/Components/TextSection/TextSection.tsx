import React from "react";
import { Link } from "react-router-dom";

export type TextSectionTextContent = {
	title?: string;
	subtitle?: string;
	text?: string | string[];
	cta?: string;
	mTitle?: string;
	mSubtitle?: string;
	mText?: string | string[];
	mCta?: string;
};

export type TextSectionImageContent = {
	imgSrc?: string;
	imgAlt?: string;
	imgClassName?: string;
	mImgSrc?: string;
	mImgAlt?: string;
	mImgClassName?: string;
};

export interface ITextSection {
	textContent: TextSectionTextContent;
	imageContent?: TextSectionImageContent;
	ctaTo?: string;
	className?: string;
	id?: string;
}

function titleOnly(textContent: TextSectionTextContent) {
	return textContent.title && !textContent.subtitle && !textContent.text && !textContent.cta;
}

const TextSection: React.FC<ITextSection> = ({ textContent, imageContent, ctaTo, className, id }) => {

	return <div id={id} className={`flex flex-col p-8 sm:px-16 lg:px-20 lg:py-16 xl:px-28 2xl:px-80 ${className}`}>
		{titleOnly(textContent) ? 
			textContent.title && textContent.mTitle ?
				<>
					<h1 className="hidden xl:block text-4xl font-light text-center mb-10 2xl:mb-14">{textContent.title}</h1> {/* Displayed after xl breakpoint */}
					<h1 className="xl:hidden text-4xl font-light text-center mb-10">{textContent.mTitle}</h1> {/* Displayed before xl breakpoint */}
				</> :
				<h1 className="text-4xl font-light text-center mb-10 2xl:mb-14">{textContent.title}</h1> : 
			textContent.title || textContent.mTitle ?
				<h1 className="text-4xl font-light text-center mb-10 2xl:mb-14">{textContent.title || textContent.mTitle}</h1> :
				<></>
		}
		{!titleOnly(textContent) && <div className="flex flex-col-reverse xl:flex-row">
			<div className="xl:w-1/2 2xl:w-3/5 flex flex-col justify-center xl:pr-10 2xl:pr-24">
				{textContent.subtitle && textContent.mSubtitle ?
					<>
						<h2 className="hidden xl:block text-2xl font-light mb-6">{textContent.subtitle}</h2> {/* Displayed after xl breakpoint */}
						<h2 className="xl:hidden text-2xl font-light mb-6">{textContent.mSubtitle}</h2> {/* Displayed before xl breakpoint */}
					</> :
					textContent.subtitle || textContent.mSubtitle ?
						<h2 className="text-2xl font-light mb-6">{textContent.subtitle || textContent.mSubtitle}</h2> :
						<></>
				}
				{textContent.text && textContent.mText ?
					<>
						{typeof textContent.text == "string" ?
							<p className="hidden xl:block text-lg font-light mb-4 w-full">{textContent.text}</p> : 
							textContent.text.map((paragraph, index) => <p key={index} className="hidden xl:block text-lg font-light mb-4 w-full">{paragraph}</p>)
						}
						{typeof textContent.mText == "string" ?
							<p className="xl:hidden text-lg font-light mb-4 w-full">{textContent.mText}</p> : 
							textContent.mText.map((paragraph, index) => <p key={index} className="xl:hidden text-lg font-light mb-4 w-full">{paragraph}</p>)
						}
					</> :
					textContent.text || textContent.mText ?
						typeof textContent.text == "string" || typeof textContent.mText == "string" ?
							<p className="text-lg font-light mb-4 w-full">{textContent.text || textContent.mText}</p> :
							textContent.text ? 
								textContent.text.map((paragraph, index) => <p key={index} className="text-lg font-light mb-4 w-full">{paragraph}</p>) :
								textContent.mText && textContent.mText.map((paragraph, index) => <p key={index} className="text-lg font-light mb-4 w-full">{paragraph}</p>) :
						<></>
				}
				{ctaTo && (textContent.cta && textContent.mCta) ?
					<>
						<a href={ctaTo} className="hidden xl:block rounded-md bg-bts-black text-bts-yellow p-4 px-10 text-center w-full">{textContent.cta}</a>
						<a href={ctaTo} className="xl:hidden rounded-md bg-bts-black text-bts-yellow p-4 px-10 text-center w-full mt-4">{textContent.mCta }</a>
					</> : 
					ctaTo && (textContent.cta || textContent.mCta) ?
						<a href={ctaTo} className="rounded-md bg-bts-black text-bts-yellow p-4 px-10 text-center w-full lg:self-center w-full mt-4">{textContent.cta || textContent.mCta}</a> :
						<></>
				}
			</div>
			{(imageContent?.imgSrc || imageContent?.mImgSrc) && <div className="xl:w-1/2 2xl:2/5 flex xl:pl-10 2xl:pl-24 justify-center items-start mb-10 xl:mb-0">
				{imageContent?.imgSrc && imageContent?.mImgSrc ?
					<>
						<img className={`xl:hidden lg:w-3/4 ${imageContent?.mImgClassName || ''}`} src={imageContent?.mImgSrc} alt={imageContent?.mImgAlt} />
						<img className={`hidden xl:block ${imageContent?.imgClassName || ''}`} src={imageContent?.imgSrc} alt={imageContent?.imgAlt} />
					</> :
					imageContent?.imgSrc || imageContent?.mImgSrc ?
						<img className={`lg:w-3/4 ${imageContent?.imgClassName || ''}`} src={imageContent?.imgSrc || imageContent?.mImgSrc} alt={imageContent?.imgAlt || imageContent?.mImgAlt} /> :
						<></>
				}
			</div>}
		</div>}
	</div>
};

export default TextSection;