import Image from "next/image";
import React from "react";
import data from "../data/Products.json";
import Card from "./Card";
function GetHomeProducts() {
	console.log(data);
	return (
		<div className="grid grid-cols-4 gap-4 mt-5">
			{data.map((product, index) => {
				return (
					<>
						<Card
							key={product.id}
							name={product.name}
							collection={product.collection}
							price={product.price}
							imageUrl={product.imageUrl}
							badge={product.badge}
							badgeMessage={product.badgeMessage}
						/>
					</>
				);
			})}
		</div>
	);
}

export default GetHomeProducts;
