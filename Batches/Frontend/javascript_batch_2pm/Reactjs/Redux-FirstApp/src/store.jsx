import rootReducer from './Reduceres/index'
import { createStore } from 'redux'

const store = createStore(rootReducer);
export default store;