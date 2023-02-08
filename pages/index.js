import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import HomeLayout from "@/components/HomeLayout";
import Layout from "@/components/Layout";

export default function Home() {
	return (
		<>
			<Layout>
				<main className={styles.main}>
					<HomeLayout />
				</main>
			</Layout>
		</>
	);
}
