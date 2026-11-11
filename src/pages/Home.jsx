import Summary from '../components/Summary.jsx';
import { useApplications } from "../hooks/hooks.js";
import { useState } from 'react';
import AppsContainer from '../components/AppsContainer';
import {STATUSES} from '../statuses.js';

export default function Home() {

    const { applications, loading, error } = useApplications();
    const [filterSearch, setFilterSearch] = useState("");
    const [tagFilter, setTagFilter] = useState("all applied interviewing offer rejected");

    //defining an object before passing the props into Summary Componant 
	const propsForSummary = {
		total: applications.length,
		applied: applications.filter(app => app.status == STATUSES[0]).length,
		interviewing: applications.filter(app => app.status == STATUSES[1]).length,
		offer: applications.filter(app => app.status == STATUSES[2]).length,
		rejected: applications.filter(app => app.status == STATUSES[3]).length
	}
    
    return (
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
            </AppsContainer>

        </main>
    )
}