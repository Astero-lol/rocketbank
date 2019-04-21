import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChatField from '../../components/chat-field';
import ChatAction from '../../components/chat-action';

import { TApplicationState } from '../../reducers';

import { sendMessage } from '../../actions/chat/chat-actions';

import './chat.css';

function mapStateToProps(state: TApplicationState) {
    return {
        chat: state.chat,
        account: state.account
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators({
            sendMessage
        }, dispatch)
    };
}

type TChatReduxProps = ReturnType<typeof mapStateToProps>;
type TChatDispatchProps = ReturnType<typeof mapDispatchToProps>;
type TChat = TChatReduxProps & TChatDispatchProps;

@cn('chat')
class Chat extends React.Component<TChat> {
    render(cn?: CnFn) {
        const {
            chat,
            account,
            action
        } = this.props;

        return (
            <div className={ cn() }>
                <ChatField
                    profile={ account.profile }
                    messages={ chat.messages }
                    className={ cn('chat-field') }
                />
                <ChatAction sendMessage={ action.sendMessage } className={ cn('chat-action') } />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
