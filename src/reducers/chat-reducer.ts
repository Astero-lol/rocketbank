import { ETransactionIconsTypes, TIconType, TRANSACTION_ICONS } from '../libs/transaction-icons';
import { EChatTypes } from '../actions/chat/chat-types';
import { TGenericChatActions } from '../actions/chat/chat-actions';
import { STICKERS } from '../libs/stickers';

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
    messages: [
        {
            id: '1',
            author: EAuthorTypes.support,
            type: EMessageTypes.text,
            text: 'Привет, братишка. Что у тебя за проблемы опять?'
        },
        {
            id: '2',
            author: EAuthorTypes.user,
            type: EMessageTypes.text,
            text: 'Да вот снова логотип не отображается'
        },
        {
            id: '3',
            author: EAuthorTypes.user,
            type: EMessageTypes.transaction,
            icon: {
                type: ETransactionIconsTypes.image,
                value: TRANSACTION_ICONS.dicsi.value
            },
            title: 'Перексресток Экспресс',
            amount: '- 6200 ₽',
            cashback: '+62 рокетрубля'
        },
        {
            id: '4',
            author: EAuthorTypes.support,
            type: EMessageTypes.text,
            text: 'Попробуй перезапустить приложение'
        },
        {
            id: '5',
            author: EAuthorTypes.user,
            type: EMessageTypes.sticker,
            value: STICKERS[0].value
        }
    ]
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
