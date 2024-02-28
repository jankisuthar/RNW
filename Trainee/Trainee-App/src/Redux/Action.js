export const Add = (payload) => {
    return {
        type : "ADD",
        payload : payload

    }
}

export const Remove = (payload) => {
    return {
        type : "REMOVE",
        payload
    }
}

export const AddTodo = (payload) => {
    return {
        type : "ADDTODO",
        payload
    }
}

export const DeleteTodo = (payload) => {
    return {
        type : "DELETETODO",
        payload
    }
}

export const EditTodo = (payload) => {
    return {
        type : "EDITODO",
        payload
    }
}