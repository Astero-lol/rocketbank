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

export type TAccountState = {
    list: TAccount[];
};

const initialState: TAccountState = {
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
