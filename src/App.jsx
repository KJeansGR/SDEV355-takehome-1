import Home from './pages/Home.jsx';
import { Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout.jsx';
import ApplicationDetail from './pages/ApplicationDetail.jsx';

export default function App() {

	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="id/:id" element={<ApplicationDetail />} />
				</Route>
			</Routes>
		</>
	);
}
