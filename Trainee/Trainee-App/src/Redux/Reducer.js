const initialState = 0

export const reducer = (state=initialState,action) => {
    switch(action.type){
        case "ADD" :
            return state + action.payload;

        case "REMOVE" :
            return state - action.payload

            default :
            return state
    }
}