import Summary from '../components/Summary.jsx';
import { useState } from 'react';
import AppsContainer from '../components/AppsContainer';


export default function Home() {

    const [filterSearch, setFilterSearch] = useState("");
    const [tagFilter, onTagFilterChange] = useState("all applied interview offer rejected");
    
    return (
        <main className="container">

            <Summary/>

            <h2>Applications</h2>

            <div className="filters">
                <button className= {`chip ${tagFilter.includes("all") ? "active" :""}`}  
                onClick={()=> onTagFilterChange("all applied interviewing offer rejected") }>All</button>
                
                <button className={`chip ${tagFilter == "applied" ? "active" :""}`}
                onClick={()=>onTagFilterChange("applied")}>applied</button>
                
                <button className={`chip ${tagFilter == "interview" ? "active" :""}`}
                onClick={()=>onTagFilterChange("interview")}>interviewing</button>

                <button className={`chip ${tagFilter == "offer" ? "active" :""}`}
                onClick={()=>onTagFilterChange("offer")}>offer</button>

                <button className={`chip ${tagFilter == "rejected" ? "active" :""}`}
                onClick={()=>onTagFilterChange("rejected")}>rejected</button>

                <input type="search" value={filterSearch} onChange={(e) => setFilterSearch(e.target.value)}/>
            </div>
            
            <AppsContainer 
                tagFilter = {tagFilter} 
                searchFilter={filterSearch} 
                >
            </AppsContainer>

        </main>
    )
}