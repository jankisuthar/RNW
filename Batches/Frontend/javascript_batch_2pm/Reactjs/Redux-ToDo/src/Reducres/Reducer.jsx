const intialData={
    list:[]
}
const MyData=(state=intialData,action)=>{
    switch(action.type)
    {
        case 'ADDTODO':
            const id = action.payload.id;
            const data = action.payload.data;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case 'DELETETODO':
            const list = state.list.filter((elem)=>elem.id!==action.id)
            return{
                ...state,
                list:list
            }
        default:
            return state;
    }
}
export default MyData;