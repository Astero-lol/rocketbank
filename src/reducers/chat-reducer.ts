import { TIconType } from '../libs/transaction-icons';
import { EChatTypes } from '../actions/chat/chat-types';
import { TGenericChatActions } from '../actions/chat/chat-actions';

export enum EMessageTypes {
    text = 'text',
    transaction = 'transaction',
    sticker = 'sticker'
}
export enum EAuthorTypes {
    user = 'user',
    support = 'support'
}
export interface IBaseMessageInterface {
    id: string;
    author: EAuthorTypes;
}
export interface ITextMessage extends IBaseMessageInterface {
    type: EMessageTypes.text;
    text: string;
}
export interface ITransactionMessage extends IBaseMessageInterface {
    type: EMessageTypes.transaction;
    icon: TIconType;
    title: string;
    amount: string;
    cashback: string;
}
export interface IStickerMassage extends IBaseMessageInterface {
    type: EMessageTypes.sticker;
    value: string;
}
export type TMessage = ITextMessage | ITransactionMessage | IStickerMassage;

export type TChatState = {
    messages: TMessage[];
};

const initialState: TChatState = {
    messages: []
};

export function chatReducer(state = initialState, action: TGenericChatActions) {
    switch (action.type) {
        case EChatTypes.SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        }

        default:
            return state;
    }
}
