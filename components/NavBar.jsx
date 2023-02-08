import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart from "assets/bag.png";
import logo from "assets/logo.png";
function NavBar() {
	return (
		<div>
			<section className="flex items-center justify-between mx-10 mt-10 mb-7">
				<Link href="">yo</Link>
				<Link href="">
					<Image src={logo} />
				</Link>
				<section className="flex items-center gap-x-2">
					<Link href={""}>
						<p className="text-sm">HELP</p>
					</Link>
					<Link href={""}>
						<p className="text-sm">ACCOUNT</p>
					</Link>
					<Link href={""}>
						<Image src={cart} />
					</Link>
				</section>
			</section>
		</div>
	);
}

export default NavBar;
