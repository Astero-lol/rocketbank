/* eslint-disable max-len */

import { ETransactionIconsTypes, TRANSACTION_ICONS, TIconType } from '../libs/transaction-icons';

type TTransaction = {
    id: string;
    icon: TIconType;
    title: string;
    amount: string;
    cashback: string;
    date: string;
};

type TAccount = {
    number: string;
    icon: string;
    amount: string;
    percent: number;
    createDate: string;
    transactions: TTransaction[];
};

export type TAccountProfile = {
    userName: string;
    photo: string;
};

export type TAccountState = {
    profile: TAccountProfile;
    list: TAccount[];
};

const initialState: TAccountState = {
    profile: {
        userName: 'Сережа',
        photo: 'data:image/jpeg;base64,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'
    },
    list: [
        {
            number: '57890456',
            icon: '⛵️',
            amount: '69 650 ₽',
            percent: 8,
            createDate: '23 января 13:55',
            transactions: [
                {
                    id: '1',
                    icon: {
                        type: ETransactionIconsTypes.emoji,
                        value: TRANSACTION_ICONS.replenishment.value
                    },
                    title: 'Пополнение с карты',
                    amount: '+ 3500 ₽',
                    cashback: null,
                    date: '5 марта 17:15'
                },
                {
                    id: '2',
                    icon: {
                        type: ETransactionIconsTypes.image,
                        value: TRANSACTION_ICONS.macdonalds.value
                    },
                    title: 'Макдональдс',
                    amount: '- 300 ₽',
                    cashback: '+3 рокетрубля',
                    date: '27 январ 21:13'
                },
                {
                    id: '3',
                    icon: {
                        type: ETransactionIconsTypes.image,
                        value: TRANSACTION_ICONS.dicsi.value
                    },
                    title: 'Дикси',
                    amount: '- 6200 ₽',
                    cashback: '+62 рокетрубля',
                    date: '5 марта 19:16'
                },
                {
                    id: '4',
                    icon: {
                        type: ETransactionIconsTypes.emoji,
                        value: TRANSACTION_ICONS.percent.value
                    },
                    title: 'Выплата процентов',
                    amount: '+ 250 ₽',
                    cashback: null,
                    date: '1 марта 10:25'
                },
                {
                    id: '5',
                    icon: {
                        type: ETransactionIconsTypes.image,
                        value: TRANSACTION_ICONS.person.value
                    },
                    title: 'Антону Бондаренкову',
                    amount: '- 100 ₽',
                    cashback: null,
                    date: '1 марта 09:35'
                }
            ]
        },
        {
            number: '57890398',
            icon: '🕹',
            amount: '3502 $',
            percent: 4.5,
            createDate: '14 августа 10:12',
            transactions: [
                {
                    id: '1',
                    icon: {
                        type: ETransactionIconsTypes.emoji,
                        value: TRANSACTION_ICONS.replenishment.value
                    },
                    title: 'Пополнение с карты',
                    amount: '+ 3500 ₽',
                    cashback: null,
                    date: '5 марта 17:15'
                },
                {
                    id: '2',
                    icon: {
                        type: ETransactionIconsTypes.image,
                        value: TRANSACTION_ICONS.macdonalds.value
                    },
                    title: 'Макдональдс',
                    amount: '- 96 $',
                    cashback: '+3 рокетрубля',
                    date: '27 январ 21:13'
                }
            ]
        }
    ]
};

export function accountReducer(state = initialState) {
    return state;
}
