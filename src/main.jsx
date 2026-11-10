import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Layout from './layouts/Layout';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import ApplicationDetail from './pages/ApplicationDetail.jsx';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
					<Route index element={<App />} />
					<Route path="id/:id" element={<ApplicationDetail />} />
				</Route>
            </Routes>
		</BrowserRouter>
	</StrictMode>
);
