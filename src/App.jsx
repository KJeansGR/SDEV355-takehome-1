import { applications } from './applications';
import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import {STATUSES} from './statuses.js';
/**
 * The starting point. Right now it dumps the raw data on the page so you can
 * see it is loading — replace all of this with your components.
 *
 * The stylesheet already has classes for everything you need, so you do not
 * have to write any CSS: container, site-header, summary, summary-tile,
 * job-list, job-card, badge, badge-applied (and one per status), page-head,
 * empty.
 */
export default function App() {
	return (
		<>

			<Header />

			<Summary 
			total={applications.length}
			applied={applications.filter(app => app.status == STATUSES[0]).length}
			interviewing={applications.filter(app => app.status == STATUSES[1]).length}
			offer ={applications.filter(app => app.status == STATUSES[2]).length}
			rejected={applications.filter(app => app.status == STATUSES[3]).length}
			/>

			<main className="container">
				<p>{applications.length} applications loaded.</p>
				<pre>{JSON.stringify(applications[0], null, 2)}</pre>
			</main>
		</>
	);
}
