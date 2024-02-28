var arr=[];

export const AddReducer=(state=arr,action)=>{
    switch(action.type)
    {
        case "ADD":
            state=[...state,action.payload]
        default:
            return state;
    }
 
}