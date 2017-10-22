import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, undefined, applyMiddleware(promiseMiddleware()));
// The first parameter is our reducer
// The second parameter is initialStore, undefined here (we define it in the reducer file)
// The third parameter is promiseMiddleware, invoked