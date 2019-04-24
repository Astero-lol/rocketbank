export enum EAnswerTypes {
    POSITIVE = 'POSITIVE',
    NEGATIVE = 'NEGATIVE',
    UNKNOWN = 'UNKNOWN'
}
type TAnswer = {
    type: EAnswerTypes;
    value: string;
};

export const ANSWERS: TAnswer[] = [
    {
        type: EAnswerTypes.POSITIVE,
        value: 'да'
    },
    {
        type: EAnswerTypes.POSITIVE,
        value: 'ага'
    },
    {
        type: EAnswerTypes.POSITIVE,
        value: 'конечно'
    },
    {
        type: EAnswerTypes.POSITIVE,
        value: 'разумеется да'
    },
    {
        type: EAnswerTypes.NEGATIVE,
        value: 'нет'
    },
    {
        type: EAnswerTypes.NEGATIVE,
        value: 'неа'
    },
    {
        type: EAnswerTypes.NEGATIVE,
        value: 'не-а'
    },
    {
        type: EAnswerTypes.NEGATIVE,
        value: 'конечно нет'
    }, {
        type: EAnswerTypes.NEGATIVE,
        value: 'разумеется нет'
    }
];
