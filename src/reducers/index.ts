import { combineReducers } from 'redux';

export type AppState = {};
type TApplicationState = {
    app: AppState;
};

export default combineReducers<TApplicationState>({
    app: (app = {}) => app
});
