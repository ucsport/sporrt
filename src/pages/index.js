import React from "react";
import theme from "theme";
import { Theme, Link, Image, Strong, Text, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Image src="https://uploads.quarkly.io/66de86519710450018a2bb8c/images/pdf%20lo.png?v=2024-09-09T05:25:20.702Z" display="block" srcSet="https://smartuploads.quarkly.io/66de86519710450018a2bb8c/images/pdf%20lo.png?v=2024-09-09T05%3A25%3A20.702Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66de86519710450018a2bb8c/images/pdf%20lo.png?v=2024-09-09T05%3A25%3A20.702Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66de86519710450018a2bb8c/images/pdf%20lo.png?v=2024-09-09T05%3A25%3A20.702Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66de86519710450018a2bb8c/images/pdf%20lo.png?v=2024-09-09T05%3A25%3A20.702Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66de86519710450018a2bb8c/images/pdf%20lo.png?v=2024-09-09T05%3A25%3A20.702Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66de86519710450018a2bb8c/images/pdf%20lo.png?v=2024-09-09T05%3A25%3A20.702Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66de86519710450018a2bb8c/images/pdf%20lo.png?v=2024-09-09T05%3A25%3A20.702Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
		<Text margin="0px 0px 0px 0px" position="static" text-align="left">
			<Strong>
				NEW DOCUMENT RECEIVED SUCCESSFULLY
			</Strong>
		</Text>
		<Text margin="0px 0px 0px 0px">
			<br />
			<Span
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
				user-select="auto"
				pointer-events="auto"
			>
				<Strong>
					File Type: PDF Document
				</Strong>
				<br />
				<Strong>
					Resolution: 250x500 DPI
				</Strong>
				<br />
				<Strong>
					Document Scanned from: "HP Scanjet Enterprise 8500F1
				</Strong>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<Strong>
					→{" "}
				</Strong>
				<Link
					href="https://flightsmuseum.com/"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					<Strong>
						PREVIEW DOCUMENT HERE
					</Strong>
				</Link>
				<br />
				<br />
			</Span>
		</Text>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"66de86519710450018a2bb8a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});