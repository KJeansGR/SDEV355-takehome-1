
/**
 * Renders a Banner style summary of current application statistics for the user.
 *
 * @param {number} props.total - Total number of job applications.
 * @param {number} props.applied - Number of applications currently in the applied stage.
 * @param {number} props.interviewing - Number of applications currently in the interviewing stage.
 * @param {number} props.offer - Number of applications that resulted in an offer.
 * @param {number} props.rejected - Number of applications that were rejected.
 *
 * @returns {JSX.Element} A summary banner displaying application counts by status.
 */
function Summary({
    total, 
    applied,
    interviewing,
    offer,
    rejected
    }){

    return(
    <div className="summary">
        <div className="summary-tile">
            <div className="count ">
                {total}
            </div>
            <label className="label">Total</label>
        </div>

        <div className="summary-tile">
            <div className="count ">
                {applied}
            </div>
            <label className="label">Applied</label>
        </div>
        
        <div className="summary-tile">
            <div className="count ">
                {interviewing}
            </div>
            <label className="label">Interviewing</label>
        </div>
    
        <div className="summary-tile">
            <div className="count ">
                {offer}
            </div>
            <label className="label">Offer</label>
        </div>

        <div className="summary-tile">
            <div className="count ">
                {rejected}
            </div>
            <label className="label">Rejected</label>
        </div>
    
    </div>

    )
}
export default Summary;