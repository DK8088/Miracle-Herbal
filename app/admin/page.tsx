import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const page = () => {
	return (
		<>
			<Header />
			<main className="flex">
				<SideBar />
				<MainContent />
			</main>
		</>
	);
};

export default page;
