import { useParams } from 'react-router-dom';
import { useApplications } from '../hooks/hooks';

export default function ApplicationDetail() {
    const {applications, loading, error} = useApplications();
    const {id} = useParams();
    const targetApp = applications.filter(a => a.id == id);

	return (
		<main>
            <h1>Application Detail</h1>
            <p>Application ID: {id}</p>
            <div className="">
                {JSON.stringify(targetApp)}
            </div>
		</main>
	);
}
