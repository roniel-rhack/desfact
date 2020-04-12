import {createStore, combineReducers} from 'redux';
import newRecord from "./reducers/newRecord";

const reducer = combineReducers({
    newRecord
});

const store = createStore(reducer);

export default store;