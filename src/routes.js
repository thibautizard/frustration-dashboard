import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Revenus from "./pages/revenus/Revenus";
import Accueil from "./pages/Accueil";
import Audiences from "./pages/Audiences";
import Laboratoire from "./pages/Laboratoire";
import Passwords from "./pages/Passwords";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Accueil />
			},
			{
				path: "/revenus",
				element: <Revenus />
			},
			{
				path: "/audiences",
				element: <Audiences />
			},
			{
				path: "/passwords",
				element: <Passwords />
			},
			{
				path: "/laboratoire",
				element: <Laboratoire />
			}
		]
	}
]);

export default router;
