import { combineReducers } from 'redux';

import { chatReducer, TChatState } from './chat-reducer';
import { accountReducer, TAccountState } from './account-reducer';
import { userReducer, TUserState } from './user-reducer';

export type AppState = {};
export type TApplicationState = {
    app: AppState;
    chat: TChatState;
    account: TAccountState;
    user: TUserState;
};

export default combineReducers<TApplicationState>({
    app: (app = {}) => app,
    chat: chatReducer,
    account: accountReducer,
    user: userReducer
});
