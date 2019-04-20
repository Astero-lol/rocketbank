type TTransaction = {
    id: string;
    icon: string;
    title: string;
    amount: string;
    cashback: string;
};

type TAccount = {
    number: number;
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
            number: 57890456,
            icon: '',
            amount: '69 650 ₽',
            percent: 8,
            createDate: '23 января 13:55',
            transactions: [
                {
                    id: '1',
                    icon: '',
                    title: 'Пополнение с карты',
                    amount: '+ 3500 ₽',
                    cashback: null
                },
                {
                    id: '2',
                    icon: '',
                    title: 'Пополнение с карты',
                    amount: '- 300 ₽',
                    cashback: '+3 рокетрубля'
                }
            ]
        }
    ]
};

export function accountReducer(state = initialState) {
    return state;
}
