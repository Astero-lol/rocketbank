import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';

import { TApplicationState } from '../../reducers';

import Chat from '../../components/chat/chat';

import './app.css';

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
                    <aside className={ cn('sidebar') } />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
