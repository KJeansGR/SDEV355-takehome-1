import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<main style={{ textAlign: "center", padding: "4rem 1rem" }}>
			<h1>Page Not Found</h1>
			<p>Sorry, the page you’re looking for could not be found.</p>
			<Link className="chip" to={"/"}>back to HomePage</Link>
		</main>
	);
}
