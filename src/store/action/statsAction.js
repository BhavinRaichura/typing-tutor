const STATS_ACTION = [
    "UPDATE_STATS",
    "GET_STATS",
    "RESET_STATS"
]

export const updateStats = (right, wrong,wpm) =>{
    let accuracy = Math.round((right / (right + wrong)) * 100);
    return {
        type: STATS_ACTION.UPDATE_STATS, 
        payload: {
            right: right,
            wrong:wrong,
            accuracy: (accuracy>=0 ? accuracy : 0),
            wpm:wpm

        }
    }
}

export const getStats= () =>{
    return {
        type: STATS_ACTION.GET_STATS
    }
}

export const resetStats =() =>{
    return {
        type: STATS_ACTION.RESET_STATS
    }
}