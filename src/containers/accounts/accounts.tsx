import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { TApplicationState } from '../../reducers';

import Heading from '../../components/ui/heading';
import Paragraph from '../../components/ui/paragraph';
import AccountIcon from '../../components/ui/account-icon';
import Tabs from '../../components/tabs';

import './accounts.css';

function mapStateToProps(state: TApplicationState) {
    return {
        account: state.account
    };
}

type TAccounts = ReturnType<typeof mapStateToProps>;

@cn('accounts')
class Accounts extends React.Component<TAccounts> {
    render(cn?: CnFn) {
        const {
            account
        } = this.props;

        return (
            <div className={ cn() }>
                <Tabs />
                { account.list.map(item => this.renderAccount(cn, item)) }
            </div>
        );
    }

    renderAccount(cn, item) {
        const lastOperation = item.transactions[item.transactions.length - 1];
        const link = `/accounts/${item.number}`;

        return (
            <div className={ cn('account-item') } key={ item.number }>
                <header className={ cn('header') }>
                    <AccountIcon icon={ item.icon } className={ cn('account-icon') } />
                    <div className={ cn('info') }>
                        <Paragraph size='s' className={ cn('account') }>
                            Счёт №
                            { item.number }
                        </Paragraph>
                        <Heading size='s'>{ item.amount }</Heading>
                    </div>
                    <Link to={ link } className={ cn('icon-open') } />
                </header>
                <div className={ cn('details') }>
                    <Paragraph size='s' className={ cn('text') }>
                        <span className={ cn('note') }>
                            { item.percent }
                            % годовых
                        </span>
                    </Paragraph>
                    <Paragraph size='s' className={ cn('text') }>
                        <span className={ cn('note') }>
                            Создан:
                            { item.createDate }
                        </span>
                    </Paragraph>
                    <Paragraph size='s' className={ cn('text') }>
                        <span className={ cn('note') }>Последнее операция:</span>
                    </Paragraph>
                    <Paragraph size='s' className={ cn('text') }>
                        <span className={ cn('note') }>
                            { lastOperation.date }
                            (
                        </span>
                        { lastOperation.amount }
                        <span className={ cn('note') }>)</span>
                    </Paragraph>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Accounts);
