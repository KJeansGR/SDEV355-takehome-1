import Home from './pages/Home.jsx';
import { Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout.jsx';
import ApplicationDetail from './pages/ApplicationDetail.jsx';
import NotFound from './pages/NotFound.jsx';

//ROuting with a block of routes that are a single Page 
// application design using outlet in a layout component.
export default function App() {

	return (
		<>
			<Routes>
				<Route path="/"  element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="applications/:id" element={<ApplicationDetail />} />
					<Route path="*" element={<NotFound />} />
					<Route path="applications/*" element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
}
