const inititialValue = []

export const todoReducer = (state=inititialValue,action) => {
    switch(action.type) {
        case "ADDTODO" :
            return [...state,action.payload]

        case "DELETETODO" :
            return state.filter((ele,i)=>i !== action.payload)

            case "EDITODO" :
                const {index,newValue} = action.payload
                console.log(index);
                return state.map((ele,i)=> (index === i? newValue : ele));

    


                 
        default :
        return state;
    }
}