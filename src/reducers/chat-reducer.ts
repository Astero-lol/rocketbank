export enum EMessageTypes {
    TEXT = 'TEXT',
    TRANSACTION = 'TRANSACTION',
    STICKER = 'STICKER'
}
export enum EAuthorTypes {
    USER = 'USER',
    SUPPORT = 'SUPPORT'
}

interface IBaseMessageInterface {
    id: string;
    author: EAuthorTypes;
    userName?: string;
    photo?: string;
}
interface ITextMessage extends IBaseMessageInterface {
    type: EMessageTypes.TEXT;
    text: string;
}
interface ITransactionMessage extends IBaseMessageInterface {
    type: EMessageTypes.TRANSACTION;
    icon: string;
    title: string;
    amount: string;
    cashback: string;
}
interface IStickerMassage extends IBaseMessageInterface {
    type: EMessageTypes.STICKER;
    value: string;
}
type TMessage = ITextMessage | ITransactionMessage | IStickerMassage;

export type TChatState = {
    list: TMessage[];
};


const initialState: TChatState = {
    list: [
        {
            id: '1',
            author: EAuthorTypes.SUPPORT,
            type: EMessageTypes.TEXT,
            text: 'Привет, братишка. Что у тебя за проблемы опять?'
        },
        {
            id: '2',
            author: EAuthorTypes.USER,
            type: EMessageTypes.TEXT,
            text: 'Да вот снова логотип не отображается'
        },
        {
            id: '3',
            author: EAuthorTypes.USER,
            type: EMessageTypes.TRANSACTION,
            icon: '',
            title: 'Перексресток Экспресс',
            amount: '- 6200 ₽',
            cashback: '+62 рокетрубля'
        },
        {
            id: '4',
            author: EAuthorTypes.SUPPORT,
            type: EMessageTypes.TEXT,
            text: 'Попробуй перезапустить приложение'
        }
    ]
};

export function chatReducer(state = initialState) {
    return state;
}
