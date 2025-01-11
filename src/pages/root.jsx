import { Outlet } from "react-router-dom";

import Nav from '../components/nav'

const Root = () => {
	return (
		<main>
			<Nav />
			<Outlet />
		</main>
	);
};

export default Root;
