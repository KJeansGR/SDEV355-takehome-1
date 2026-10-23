//import { applications } from "../applications";
import ApplicationCard from "./ApplicationCard";

/*helper function to sort the applications object by the "Newest" */ 
function byNewest(a, b) {
  return b.appliedOn.localeCompare(a.appliedOn);
}

/*
This function is the outer container element for all of the application cards .
iThisjsx element maps a sorted version of the applications array into a larger div element.
*/
function AppsContainer({applications, isLoading, isError, isEmpty, tagFilter, searchFilter, children}){

const search = (searchFilter)?.toLowerCase().trim();   
//const search = (searchFilter ?? "").toLowerCase().trim();

const sortedApps = [...applications].filter(app => !tagFilter?.length || tagFilter.includes(app.status))
                                    .filter(app => app.company.toLowerCase().includes(search) ||app.role.toLowerCase().includes(search))
                                    .sort(byNewest);

    return(
    <>
        <h2>Applications</h2>

        <div className= {"job-list"}>
            {sortedApps.length > 0 &&
                sortedApps.map((app) => 
                {
                    return <ApplicationCard key={app.id} {...app}/>
                })
            }
            { (sortedApps.length===0 && !isEmpty) &&
                <p className="empty">No applications match these filters</p>
            }
        
            { children}
        </div>
        

    </>
    )
}
export default AppsContainer;