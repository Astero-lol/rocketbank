import { createSelector } from 'reselect';

const accountSelector = state => state.account;

export const currentAccountSelector = createSelector(
    accountSelector,
    account => accountNumber => account.list.find(
        accountItem => accountItem.number === accountNumber
    )
);
