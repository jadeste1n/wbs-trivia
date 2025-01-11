import {
	BrowserRouter,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import "./App.css";
import Root from "./pages/root";
import Home from "./pages/homepage";
import Quiz from "./pages/quizPage";
import Result from "./pages/resultPage";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />}></Route>
				<Route path="/quiz" element={<Quiz />}></Route>
				<Route path="/result" element={<Result />}></Route>
		
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
