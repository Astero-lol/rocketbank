import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { autobind } from 'core-decorators';

import { TMessage, EMessageTypes } from '../../reducers/chat-reducer';
import { TAccountProfile } from '../../reducers/account-reducer';

import TextMessage from '../messages/text-message';
import TransactionMessage from '../messages/transaction-message';

import './chat-field.css';

type TChatField = {
    className?: string;
    messages: TMessage[];
    profile: TAccountProfile;
};

@cn('chat-field')
export default class ChatField extends React.Component<TChatField> {
    render(cn?: CnFn) {
        const {
            messages
        } = this.props;

        return (
            <div className={ cn() }>
                { messages.map(message => this.renderMessage(cn, message)) }
            </div>
        );
    }

    @autobind
    renderMessage(cn, message) {
        const {
            profile
        } = this.props;
        const messageProps = {
            key: message.id,
            profile,
            message
        };

        const MESSAGE_NODES = {
            [EMessageTypes.text]: (
                <TextMessage
                    { ...messageProps }
                    className={ cn('message', { author: message.author }) }
                />
            ),
            [EMessageTypes.transaction]: (
                <TransactionMessage
                    { ...messageProps }
                    className={ cn('message', { author: message.author }) }
                />
            )
        };

        return MESSAGE_NODES[message.type];
    }
}
