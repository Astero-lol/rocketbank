import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { autobind } from 'core-decorators';
import { animateScroll } from "react-scroll";

import { TMessage, EMessageTypes } from '../../reducers/chat-reducer';
import { TAccountProfile } from '../../reducers/account-reducer';

import TextMessage from '../messages/text-message';
import TransactionMessage from '../messages/transaction-message';
import StickerMessage from '../messages/sticker-message';

import { ANIMATION_DURATION } from '../../constants';

import './chat-field.css';

type TChatField = {
    className?: string;
    messages: TMessage[];
    profile: TAccountProfile;
};

@cn('chat-field')
export default class ChatField extends React.Component<TChatField> {
    componentWillUpdate() {
        animateScroll.scrollToBottom({
            containerId: 'chat-field',
            duration: ANIMATION_DURATION
        })
    }

    render(cn?: CnFn) {
        const {
            messages
        } = this.props;

        return (
            <div className={ cn() } id='chat-field'>
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
            ),
            [EMessageTypes.sticker]: (
                <StickerMessage
                    { ...messageProps }
                    className={ cn('message', { author: message.author }) }
                />
            )
        };

        return MESSAGE_NODES[message.type];
    }
}
