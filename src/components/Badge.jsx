
 
/**
 * Creates a styalized badge elemeent for all applications via CSS specifications
 * 
 * @param {String} status  the actual app status from the application status value, it is also a string
 * */
function Badge({ status }){
    return(

        <div className={"badge "+"badge-"+ status}>
        {
            status
        }
        </div>
    )
}
export default Badge;