import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { TApplicationState } from '../../reducers';

import Chat from '../chat';
import Accounts from '../accounts';
import Deposits from '../deposits';
import Transactions from '../transactions';

import './app.css';
import { ANIMATION_DURATION } from '../../constants';

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
        return (
            <div className={ cn() }>
                <div className={ cn('inner') }>
                    <div className={ cn('content') }>
                        <Chat />
                    </div>
                    <aside className={ cn('sidebar') }>
                        <Route render={ ({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={ location.key }
                                    classNames='animate'
                                    timeout={ ANIMATION_DURATION }
                                >
                                    <Switch>
                                        <Route path='/' exact={ true } component={ Accounts } />
                                        <Route path='/accounts/:accountNumber' component={ Transactions } />
                                        <Route path='/deposits' component={ Deposits } />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        ) }
                        />
                    </aside>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
