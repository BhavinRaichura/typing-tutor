
const initialState ={
    right: 0,
    wrong: 0,
    accuracy: 0,
    wpm: 0,
}

export function statsReducer(state=initialState, action){
    switch(action.type){
        case ACTION.UPDATE_STATS:
            return {
                right: action.payload.right,
                wrong: action.payload.wrong,
                accuracy: action.payload.accuracy,
                wpm: action.payload.wpm,
            }
            
        case ACTION.GET_STATS:
            return state

        case ACTION.RESET_STATS:
            return {
                right: 0,
                wrong: 0,
                accuracy: 0,
                wpm: 0,
            }
        
        default:
            return state

    }
}

