
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
            return {
            ...state, applications: action.applications }
        default:
        throw new Error(`Unknown action: ${action.type}`);
    }
}