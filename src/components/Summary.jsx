import { useAppContext } from "../context/ApplicationProvider.jsx";
import {STATUSES} from '../statuses.js';

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
function Summary(){

    const{applications} = useAppContext();

    //summary tickker/tracker values
    const total = applications.length;
    const applied = applications.filter(app => app.status == STATUSES[0]).length;
    const interviewing = applications.filter(app => app.status == STATUSES[1]).length;
    const offer= applications.filter(app => app.status == STATUSES[2]).length;
    const rejected= applications.filter(app => app.status == STATUSES[3]).length;
	

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