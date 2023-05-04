import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Authentification from "../pages/authentification/Authentification";
import { ToastContainer } from "react-toastify";
import useSession from "../hooks/useSession.js";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "./components/main";

function Layout() {
	useEffect(() => {
		if (process.env.NODE_ENV === "development" && !document.title.match(/DEV/))
			document.title = "DEV " + document.title;
	}, []);

	const session = useSession();

	return (
		<>
			<Header />
			{session || process.env.NODE_ENV === "development" ? (
				<>
					<Sidebar />
					<Main>
						<Outlet />
					</Main>
				</>
			) : (
				<Authentification />
			)}
			<ToastContainer />
		</>
	);
}

export default Layout;
