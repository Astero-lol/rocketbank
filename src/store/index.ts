import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducer, { AppState } from '../reducers';

const initState: AppState = {
    app: {}
};

export default createStore(
    reducer,
    initState,
    applyMiddleware(promise)
);
