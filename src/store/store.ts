import { combineReducers, createStore } from "redux";
import bookReducer from "./reducers/bookReducer";

const rootReducer = combineReducers({
    bookReducer
})
const store = createStore(rootReducer);
export default store;