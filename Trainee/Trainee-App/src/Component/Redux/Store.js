import { createStore } from "redux";
import { AddReducer } from "./Reducer";

export const reduxStore = createStore(AddReducer)