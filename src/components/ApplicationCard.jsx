import Badge from './Badge.jsx';

/**
 * Renders a card containing information about a job application.
 *
 * @param {Object} props -          The application data.
 * @param {string} props.role -     The job title or role applied for.
 * @param {string} props.company -  The company offering the position.
 * @param {string} props.appliedOn - The date the application was submitted.
 * @param {string} props.source -   Where the job posting was found.
 * @param {string} props.notes -    Additional notes about the application.
 * @param {string} props.status -   The current status of the application.
 *
 * @returns {JSX.Element} A card displaying the application's information.
 */
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
                {appliedOn} {source && "| " + source}
            </div>

            {notes &&
                <div className="note">
                    {notes}
                </div>
            }
        </div>
        <Badge status ={status} />
    </div>
            

    
    </>
    )
}
export default ApplicationCard;