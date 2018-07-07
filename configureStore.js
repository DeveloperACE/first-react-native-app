import { createStore, applyMiddleware } from 'redux';
import app from './reducers';
import thunk from 'redux-thunk';

let store = createStore(app, applyMiddleware(thunk));

export default store;
