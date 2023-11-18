import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(combineReducers({

}), applyMiddleware(thunk))

export default store;