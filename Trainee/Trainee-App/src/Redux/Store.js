import { combineReducers, createStore } from "redux";
import { reducer } from "./Reducer";
import { todoReducer } from "./ToDoReducer";

const rootReducer = combineReducers({
    todoreducer:todoReducer,
    reducer:reducer
})

export const store = createStore(rootReducer)