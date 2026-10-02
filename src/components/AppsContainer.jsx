import { applications } from "../applications";
import ApplicationCard from "./ApplicationCard";


function AppsContainer(){

    return(
    <>
        <h2>Applications</h2>

        <div className="job-list">
            {applications.map((app) => 
            {
                return <ApplicationCard key={app.id} {...app}/>
            })}
        </div>
    </>
    )
}
export default AppsContainer;

//     <div className="job-card">
//             <h3>{app.role}</h3>
//             <div className=" company">
//                 {app.company}
//             </div>
//             <div className="meta">
//                 {app.appliedOn} | {app.source}
//             </div>
//             {app.notes &&
//             <div className="note">
//                 {app.notes}
//             </div>}
//         </div>