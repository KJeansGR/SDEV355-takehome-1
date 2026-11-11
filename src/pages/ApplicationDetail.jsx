import { useParams } from 'react-router-dom';
import { useApplications } from '../hooks/hooks';
import Badge from '../components/Badge.jsx';
import { Link } from 'react-router-dom';
export default function ApplicationDetail() {
    const {applications, loading, error} = useApplications();
    const {id} = useParams();
    const targetApp = [...applications.filter(a => a.id == id)];

	return (
        <>
        <h1>Application Detail</h1>
        { loading ? 
            <div className="">Loading</div> :
            error ? 
                <div className="">Error</div> : 
         "" 
        }
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
                </div>

                <div style={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
                <p><Badge status ={targetApp[0].status} /></p>
                <p><Link className="chip application-link" to={"/"}>back to HomePage</Link></p>
                </div>

            </div>
        }

        </>
	);
}
