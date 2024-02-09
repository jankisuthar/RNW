import { createStore,combineReducers } from "redux";
import MyData from './Reducres/Reducer';
// import rootreducer from './Reducres/index'

const store = createStore(combineReducers({
    listdata:MyData,
}))
export default store;