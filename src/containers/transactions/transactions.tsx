import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { TApplicationState } from '../../reducers';

import { currentAccountSelector } from '../../selectors/current-account-selector';

import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import Icon from '../../components/ui/icon';
import AccountIcon from '../../components/ui/account-icon';

import './transactions.css';
import { ETransactionIconsTypes } from '../../libs/transaction-icons';

function mapStateToProps(state: TApplicationState, ownProps) {
    return {
        account: state.account,
        currentAccount: currentAccountSelector(state)(ownProps.match.params.accountNumber)
    };
}

type TTransactions = ReturnType<typeof mapStateToProps>;

@cn('transactions')
class Transactions extends React.Component<TTransactions> {
    render(cn?: CnFn) {
        const {
            currentAccount
        } = this.props;

        return (
            currentAccount
            && (
                <div className={ cn() }>
                    <header className={ cn('header') }>
                        <Link to='/accounts' className={ cn('close-icon') } />
                        <div className={ cn('main') }>
                            <AccountIcon className={ cn('account-icon') } icon={ currentAccount.icon } />
                            <div className={ cn('info') }>
                                <Paragraph className={ cn('account') } size='s'>
                                    Счёт №
                                    { currentAccount.number }
                                </Paragraph>
                                <Heading className={ cn('account-amount') } size='s'>{ currentAccount.amount }</Heading>
                            </div>
                        </div>
                        <div className={ cn('other') }>
                            <Paragraph className={ cn('text') } size='s'>
                                { currentAccount.percent }
                                % годовых
                            </Paragraph>
                            <Paragraph className={ cn('text') } size='s'>
                                Создан:
                                { currentAccount.createDate }
                            </Paragraph>
                        </div>
                    </header>
                    <div className={ cn('content') }>
                        <Paragraph className={ cn('label') } size='s'>История операций</Paragraph>
                        <div className={ cn('transactions') }>
                            { currentAccount.transactions.map(transaction => (
                                this.renderTransaction(cn, transaction)
                            )) }
                        </div>
                    </div>
                </div>
            )
        );
    }

    renderTransaction(cn, transaction) {
        return (
            <div key={ transaction.id } className={ cn('transaction-item') }>
                {
                    transaction.icon.type === ETransactionIconsTypes.emoji
                        ? this.renderEmojiIcon(cn, transaction.icon.value)
                        : this.renderImageIcon(cn, transaction.icon.value)
                }
                <div className={ cn('info') }>
                    <div className={ cn('main-info') }>
                        <Paragraph className={ cn('title') } size='xs'>{ transaction.title }</Paragraph>
                        <Paragraph className={ cn('amount') } size='xs'>{ transaction.amount }</Paragraph>
                    </div>
                    <Paragraph className={ cn('date') } size='s'>{ transaction.date }</Paragraph>
                </div>
                <Icon type='chat' className={ cn('icon-chat') } />
            </div>
        );
    }

    renderEmojiIcon(cn, icon) {
        return <div className={ cn('icon', { emoji: true }) }>{ icon }</div>;
    }

    renderImageIcon(cn, icon) {
        return <div className={ cn('icon', { image: true }) } style={ { backgroundImage: `url(${icon})` } } />;
    }
}

export default connect(mapStateToProps)(Transactions);
