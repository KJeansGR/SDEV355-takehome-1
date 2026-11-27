import { createContext, useContext} from "react";

const appContext = createContext();

export function AppProvider({children}){
    
    return(
        <appContext.Provider value={{
            
        }}>
            {children}
        </appContext.Provider>
    );
};

export function useAppContext() {
  return useContext(appContext);
}