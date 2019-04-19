import { combineReducers } from 'redux';

import { chatReducer, TChatState } from './chat-reducer';
import { accountReducer, TAccountState } from './account-reducer';

export type AppState = {};
export type TApplicationState = {
    app: AppState;
    chat: TChatState;
    account: TAccountState;
};

export default combineReducers<TApplicationState>({
    app: (app = {}) => app,
    chat: chatReducer,
    account: accountReducer
});
