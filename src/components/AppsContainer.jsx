import { useAppContext } from "../context/ApplicationProvider";
import ApplicationCard from "./ApplicationCard";




/*helper function to sort the applications object by the "Newest" */ 
function byNewest(a, b) {
  return b.appliedOn.localeCompare(a.appliedOn);
}


/*
This function is the outer container element for all of the application cards .
This jsx element maps a sorted version of the applications array into a larger div element.
*/
function AppsContainer({tagFilter, searchFilter}){
    
    const search = (searchFilter)?.toLowerCase().trim();   
    const {applications, loading: isLoading, error: isError} = useAppContext();
    const isEmpty=applications.length <= 0;

//Filters a non mutated version of applications for a toggled "chip" 
//and the search value matched against the applications role and company
const sortedApps = [...applications].filter(app => tagFilter.length === 0 || tagFilter.includes(app.status))
                                    .filter(app => app.company.toLowerCase().includes(search) ||app.role.toLowerCase().includes(search))
                                    .sort(byNewest);


//helper function to render the applications cards or a loading or error message based on the state of the data.                                    
const appsRender = ()=>{
    if(isLoading){
        return(
        <h3 className="empty" style={{color:"GrayText", textAlign:"center"}}>
            Loading...
        </h3>)
    }
    else if(isError){
        return(
        <h3 className="empty" style={{color:"crimson", textAlign:"center"}}>
            Error loading applications.
        </h3>)
    }
    else if(applications.length <= 0 && !isError) {
        return( <p className="empty"> Applications are empty</p> )
     }
    else
        return(
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
        </div>)
    }
    return(
    <>
        {appsRender()}

    </>
    )
}
export default AppsContainer;