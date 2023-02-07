import Image from "next/image";
import React from "react";
function Card({ imageUrl, name, price, collection, badge, badgeMessage }) {
	return (
		<div className="w-52">
			<Image src={imageUrl} width="208" height={"208"} />
			<div className="flex justify-between">
				<h4 className="text-base">{name}</h4>
				<h4 className="text-base">${price}</h4>
			</div>
			<p className="text-pri text-base">{collection}</p>
			{badge && (
				<p className="bg-pri text-white w-fit p-1 text-xs">{badgeMessage}</p>
			)}
		</div>
	);
}

export default Card;
