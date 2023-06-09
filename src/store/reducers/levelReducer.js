export function levelReducer(state, action){
    switch(action.type){
        case "LEVEL":
            return {
                level: action.payload.level,
            }
        default:
            return state;
    }
}