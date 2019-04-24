import { sendMessage } from '../actions/chat/chat-actions';

import { EAuthorTypes, EMessageTypes } from '../reducers/chat-reducer';
import { ANSWERS, EAnswerTypes } from '../libs/answers';

import { ONE_SECOND } from '../constants';
import { STICKERS } from '../libs/stickers';

import { getRandomNumber } from '../utils/get-random-number';
import { generateId } from '../utils/generate-id';

let isPending = false;

const callAfterTimeout = func => (timeout, ...args) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(func(...args));
    }, timeout);
});

export default ({ dispatch }) => next => (action) => {
    if (
        action.message.author === EAuthorTypes.support
        && !isPending
        && action.message.type === EMessageTypes.text
    ) {
        const MIN_ANSWER_DELAY = 1;
        const MAX_ANSWER_DELAY = 2;
        isPending = true;
        const currentAnswerType = ANSWERS.find(
            answer => answer.value === action.message.text.toLowerCase().trim()
        ) || { type: EAnswerTypes.UNKNOWN };

        const sendTextMessage = (text) => {
            dispatch(sendMessage({
                id: generateId(),
                type: EMessageTypes.text,
                author: EAuthorTypes.user,
                text: text
            }));
        };
        const sendStickerMessage = (sticker) => {
            dispatch(sendMessage({
                id: generateId(),
                type: EMessageTypes.sticker,
                author: EAuthorTypes.user,
                value: sticker.value
            }));
        };

        const sendTextMessageWithTimeout = callAfterTimeout(sendTextMessage);
        const sendStickerMessageWithTimeout = callAfterTimeout(sendStickerMessage);

        const api = {
            [EAnswerTypes.POSITIVE]: () => (sendTextMessageWithTimeout(
                ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                'Ура!🥳'
            )
                .then(() => sendStickerMessageWithTimeout(
                    ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                    STICKERS[10]
                )).then(() => sendStickerMessageWithTimeout(
                    ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                    STICKERS[1]
                ))
                .then(() => sendTextMessageWithTimeout(
                    ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                    '💃💃💃💅💅💅'
                ))
            ),
            [EAnswerTypes.NEGATIVE]: () => (sendTextMessageWithTimeout(
                ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                '...'
            )
                .then(() => sendStickerMessageWithTimeout(
                    ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                    STICKERS[0]
                ))
                .then(() => sendStickerMessageWithTimeout(
                    ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                    STICKERS[2]
                ))
                .then(() => sendStickerMessageWithTimeout(
                    ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                    STICKERS[4]
                ))
                .then(() => sendTextMessageWithTimeout(
                    ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                    'Ня.Пока'
                ))
            ),
            [EAnswerTypes.UNKNOWN]: () => (sendTextMessageWithTimeout(
                ONE_SECOND * getRandomNumber(MIN_ANSWER_DELAY, MAX_ANSWER_DELAY),
                'Я не понимаю ваших намеков 🤷 Скажите прямо, я все выдержу 🙄'
            ))
        };

        api[currentAnswerType.type]().then(() => {
            isPending = false;
        });
    }

    return next(action);
};
