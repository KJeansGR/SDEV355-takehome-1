import { useParams } from 'react-router-dom';
import Badge from '../components/Badge.jsx';
import { Link } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import { useAppContext } from '../context/ApplicationProvider.jsx';


export default function ApplicationDetail() {
    const {applications, loading, error, dispatch} = useAppContext();

    const {id} = useParams();

    const targetApp = [...applications.filter(a => a.id == id)];

    // Wait until applications have loaded
    if (loading) {
        return <div>Loading...</div>;
    }
    // Handle fetch errors
    if (error) {
        return <div>Error loading applications</div>;
    }
    // Handle bad IDs
    if (targetApp.length == 0) {
        return <NotFound />;
    }

    function handleDelete(){
        const isConfirmed = window.confirm("Are you sure you want to delete this Application?");
        
        if (isConfirmed) {
            //reducer call
            dispatch({ type: "applicationDeleted", id });
        }
    };
	return (
        <>
        <h1>Application Detail</h1>
    
        { !loading &&  
            <div className="job-card" >
                <div>
                    <div>
                        <h2>{targetApp[0].role}</h2>
                        <h3>{targetApp[0].company}</h3>
                    </div>

                    <br/>
                    <div className="">
                        {`Applied ${targetApp[0].appliedOn}`}
                    </div>

                    <div className="">
                        {`Source ${targetApp[0].source &&  targetApp[0].source}`}
                    </div>

                    {targetApp[0].url &&
                        <div className="">
                            Posting <a target="_blank" href={targetApp[0].url}>{targetApp[0].url}</a>
                        </div>
                    }

                    {targetApp[0].notes &&
                        <div className="">
                        Notes  {targetApp[0].notes}
                        </div>
                    }

                    <div style={{ display:"flex", gap:".5rem"}}>
                        
                        <Link to={`/applications/${targetApp[0].id}/edit`}>
                            <button className="btn-primary btn">Edit</button>
                        </Link>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>

                    </div>
                </div>

                <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <div><Badge status ={targetApp[0].status} /></div>
                    <Link className="" to={"/"}><button className='btn btn-primary'>back to HomePage</button></Link>
                </div>

            </div>
        }

        </>
	);
}
