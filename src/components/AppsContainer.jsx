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
function AppsContainer({applications}){
    const sortedApps = [...applications].sort(byNewest)
    return(
    <>
        <h2>Applications</h2>

        <div className="job-list">
            {sortedApps.map((app) => 
            {
                return <ApplicationCard key={app.id} {...app}/>
            })}
        </div>
    </>
    )
}
export default AppsContainer;