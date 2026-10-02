

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