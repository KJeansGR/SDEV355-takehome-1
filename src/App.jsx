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
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [filterSearch, setFilterSearch] = useState("");
	const [tagFilter, setTagFilter] = useState("all applied interviewing offer rejected");

	//on mount this use effect trys to fewtch applications otherwise returns appropriate erro
	useEffect(() => {
		const controller = new AbortController();

        async function loadApplications() {
            try {
                const response = await fetch('http://localhost:5173/applications.json', {signal: controller.signal});

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const data = await response.json();
                setApplications(data);

            } catch (error) {
				//prevents abort error from treating ui elements like an actual visual error.
				if(error.name === "AbortError"){
					return;
				}
				setError(true);
                console.error("Failed to fetch applications:", error);
            } finally{
				setLoading(false);
			}
        }

		loadApplications();
		return () => controller.abort();
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

			<main className="container">

			<Summary {...propsForSummary} />
			
			<div className="filters">
				<button className= {`chip ${tagFilter.includes("all") ? "active" :""}`}  
				onClick={()=> setTagFilter("all applied interviewing offer rejected") }>All</button>
				
				<button className={`chip ${tagFilter == "applied" ? "active" :""}`}
				onClick={()=>setTagFilter("applied")}>applied</button>
				
				<button className={`chip ${tagFilter == "interviewing" ? "active" :""}`}
				onClick={()=>setTagFilter("interviewing")}>interviewing</button>

				<button className={`chip ${tagFilter == "offer" ? "active" :""}`}
				onClick={()=>setTagFilter("offer")}>offer</button>

				<button className={`chip ${tagFilter == "rejected" ? "active" :""}`}
				onClick={()=>setTagFilter("rejected")}>rejected</button>

				<input type="search" value={filterSearch} onChange={(e) => setFilterSearch(e.target.value)}/>
			</div>

			<AppsContainer 
				applications={applications} 
				isLoading={loading} 
				isError={error} 
				isEmpty={applications.length <= 0} 
				tagFilter = {tagFilter} 
				searchFilter={filterSearch} 
				>
					{ (applications.length <= 0 && !error) &&
						<p className="empty"> Applications are empty</p>
					}
					{error &&
						<p className="error"> Error Loading Applications</p>
					}
					{loading &&
						<p className="loading"> Loading</p>
					}
			</AppsContainer>

			</main>
		</>
	);
}
