
export const initialState = {
    applications: [],
}
// export const initialState = {
//     applications: [],
//     loading: false,
//     error: false
// }

export function applicationReducer(state, action){
    
    switch(action.type){
        case "fetch" :

            if(localStorage.getItem('applications')){
                console.log("fetched Local storage");
                return {...state, 
                    applications: JSON.parse(localStorage.getItem('applications'))
                }
            }
            else{
                console.log("initial fetch");
                localStorage.setItem('applications', JSON.stringify(action.applications))
                return {...state, 
                    applications: action.applications 
                }
            }

        case "applicationDeleted":
            // localStorage.clear()
            
            const appsU = state.applications.filter((app) => String(app.id) !== String(action.id))
            console.log("Item deleted!")
            localStorage.setItem('applications', JSON.stringify(appsU));
            console.log("Local Storage updated!")

            return {
                ...state,
                applications: appsU
            }
        case "applicationEdited":
            return {
                ...state,
               applications: state.applications.find((app) =>{
                    if(String(app.id) == String(action.id)){
                        app = action.app;
                        return true;
                    }
                    return false;
               }), 
            }
        default:
        throw new Error(`Unknown action: ${action.type}`);
    }
}