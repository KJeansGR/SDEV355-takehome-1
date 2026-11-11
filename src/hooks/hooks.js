import { useEffect, useState } from "react";

/**
 * this is a custom hook that fetches the applications data from the JSON file and returns it along with loading and error states.
 * @returns {Object} An object containing the applications data, loading state, and error state.
 * @property {Array} applications - The array of job applications fetched from the JSON file.
 * @property {boolean} loading - A boolean indicating whether the data is still being loaded.
 * @property {Error|null} error - An error object if an error occurred during fetching, otherwise null.
 * @returns {Object} An object containing the applications data, loading state, and error state.
 */
export function useApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();


    async function loadApplications() {
      try {
        const response = await fetch("../applications.json", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setApplications(data);
      } catch (err) {
        //prevents abort error from treating ui elements like an actual visual error.
        if (err.name !== "AbortError") {
          setError(err);
          console.error("Failed to fetch applications:", err);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    const timer = setTimeout(() => {
        loadApplications();
    }, 1000);


    return () => {
        controller.abort();
        clearTimeout(timer);
    };
  }, []);

  return { applications, loading, error };
}