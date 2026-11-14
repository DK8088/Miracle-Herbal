import React from "react";
import Header from "../components/cms/header";
import SideBar from "../components/cms/sidebar";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-admin",
});

export default function AdminLayout({ children }: LayoutProps<"/">) {
	return (
		<main className={`${inter.className}`}>
			<section className="min-h-screen flex p-5 gap-5 max-[900px]:flex-col-reverse">
				<SideBar />
				<article className="flex flex-col gap-5 flex-1">
					<Header/>
					<div className="w-full h-full">
						{children}
					</div>
				</article>
			</section>
		</main>
	);
}
