import { createContext, useContext,useEffect,useReducer} from "react";
import { applicationReducer, initialState } from "../state/applicationReducer.js";
import { useApplications } from "../hooks/hooks.js";

const appContext = createContext(null);

export function ApplicationProvider({children}){
    const [state, dispatch] = useReducer(applicationReducer, initialState);
    const { applications: initialApps, loading, error } = useApplications();
    
    useEffect(() => {
    if (!loading && !error) {
        dispatch({ type: "fetch", applications: initialApps });
    }
    }, [initialApps, loading, error]);

    return(
        <appContext.Provider value={{
            loading: loading,
            error: error,
            dispatch: dispatch,
            applications: state.applications
        }}>
            {children}
        </appContext.Provider>
    );
};

export function useAppContext() {
  return useContext(appContext);
}