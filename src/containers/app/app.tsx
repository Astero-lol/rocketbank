import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';

import { TApplicationState } from '../../reducers';

import Chat from '../../components/chat/chat';
import Accounts from '../accounts';
import Deposits from '../deposits';

import './app.css';
import Heading from '../../components/ui/heading';

function mapStateToProps(state: TApplicationState) {
    return {
        app: state.app,
        chat: state.chat,
        account: state.account
    };
}

type TAppProps = ReturnType<typeof mapStateToProps>;

@cn('app')
class App extends React.Component<TAppProps> {
    render(cn?: CnFn) {
        const {
            account,
            chat
        } = this.props;

        return (
            <div className={ cn() }>
                <div className={ cn('inner') }>
                    <div className={ cn('content') }>
                        <Chat
                            profile={ account.profile }
                            messages={ chat.messages }
                        />
                    </div>
                    <aside className={ cn('sidebar') }>
                        <div className={ cn('tabs') }>
                            <NavLink
                                to='/accounts'
                                className={ cn('tab') }
                                activeClassName={ cn('tab', { active: true }) }
                            >
                                <Heading className={ cn('heading') }>Счета</Heading>
                            </NavLink>
                            <NavLink
                                to='/deposits'
                                className={ cn('tab') }
                                activeClassName={ cn('tab', { active: true }) }
                            >
                                <Heading className={ cn('heading') }>Вклады</Heading>
                            </NavLink>
                        </div>
                        <Switch>
                            <Route path='/accounts' exact={ true } component={ Accounts } />
                            <Route path='/deposits' component={ Deposits } />
                        </Switch>
                    </aside>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
