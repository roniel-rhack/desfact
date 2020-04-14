import {createStore, combineReducers, applyMiddleware} from 'redux';
import newRecord from "./reducers/newRecord";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const reducer = combineReducers({
    newRecord
});
const composeEnhancers = composeWithDevTools({'trace':true});
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;