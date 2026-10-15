//import { applications } from './applications';
import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import AppsContainer from './components/AppsContainer.jsx';
import {STATUSES} from './statuses.js';
import { useEffect, useState } from 'react';
/**
 * The starting point. Right now it dumps the raw data on the page so you can
 * see it is loading — replace all of this with your components.
 *
 * The stylesheet already has classes for everything you need, so you do not
 * have to write any CSS: container, site-header, summary, summary-tile,
 * job-list, job-card, badge, badge-applied (and one per status), page-head,
 * empty.
 */
export default function App() {
	const [applications, setApplications] = useState([]);
useEffect(() => {
        async function loadApplications() {
            try {
                const response = await fetch('http://localhost:5173/applications.json');

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const data = await response.json();
                setApplications(data);
            } catch (error) {
                console.error("Failed to fetch applications:", error);
            }
        }
		loadApplications();
		console.log(applications)
    }, []);
	//defining an object before passing the props into Summary Componant 

	
	const propsForSummary = {
		total: applications.length,
		applied: applications.filter(app => app.status == STATUSES[0]).length,
		interviewing: applications.filter(app => app.status == STATUSES[1]).length,
		offer: applications.filter(app => app.status == STATUSES[2]).length,
		rejected: applications.filter(app => app.status == STATUSES[3]).length
	}
	
	return (
		<>

			<Header />

			<Summary {...propsForSummary} />

			<main className="container">
				<AppsContainer applications={applications} />
			</main>
		</>
	);
}
