import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './auth/reducer';

const store = createStore(combineReducers({
    auth: AuthReducer
}), applyMiddleware(thunk))

export default store;