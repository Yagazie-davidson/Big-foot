import Head from "next/head";
import { NextSeo } from "next-seo";
import Footer from "components/Footer";
import config from "Grey.config";
import NavBar from "./NavBar";

const Layout = ({ header, children }) => {
	return (
		<>
			<div className="bg-theme min-h-screen" id="get-projects-scroll">
				<Head>
					<link rel="icon" href={config.favicon} />
				</Head>
				<NextSeo
					title={config.title.short}
					description={config.description.short}
					canonical={config.url}
					openGraph={{
						url: config.url,
						title: config.title.long,
						description: config.description.long,
						images: [
							{
								url: config.logo,
								width: 1200,
								height: 630,
								alt: config.title.short,
								type: "image/jpeg",
							},
						],
						site_name: config.siteName,
					}}
				/>
				<NavBar />
				{children}
			</div>
			<Footer />
		</>
	);
};

export default Layout;
