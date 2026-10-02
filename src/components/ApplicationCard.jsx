import {STATUSES} from '../statuses.js';


function ApplicationCard({
    role,
    company,
    appliedOn,
    source,
    notes,
    status
    }){

    return(
    <>
    <div className="job-card">
        <div>
            <h3>{role}</h3><br/>

            <div className=" company">
                {company}
            </div>
            <div className="meta">
                {appliedOn} | {source}
            </div>
            {notes &&
                <div className="note">
                    {notes}
                </div>
            }
        </div>
        <div className={"badge "+"badge-"+ status}>
        {
            status
        }
        </div>
    </div>
            

    
    </>
    )
}
export default ApplicationCard;