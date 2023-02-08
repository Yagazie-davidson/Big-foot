import Image from "next/image";
import React from "react";
import Card from "./Card";
import Cover from "../assets/Men-Boots-cover.png";
import Sidebar from "./Sidebar";
import GetHomeProducts from "./GetHomeProducts";

function HomeLayout() {
	return (
		<div className="flex justify-between mt-2 mx-14">
			<section>
				<Sidebar />
			</section>
			<main>
				<Image src={Cover} />
				<GetHomeProducts />
			</main>
		</div>
	);
}

export default HomeLayout;
