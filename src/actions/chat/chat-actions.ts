import { EChatTypes } from './chat-types';
import { TMessage } from '../../reducers/chat-reducer';

type TSendMessage = ReturnType<typeof sendMessage>;

export function sendMessage(message: TMessage) {
    return {
        type: EChatTypes.SEND_MESSAGE as EChatTypes.SEND_MESSAGE,
        message
    };
}

export type TGenericChatActions = TSendMessage;
