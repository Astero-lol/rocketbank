import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import { TMessage } from '../../../reducers/chat-reducer';

import ChatField from '../chat-field';
import ChatAction from '../chat-action';

import { TAccountProfile } from '../../../reducers/account-reducer';

import './chat.css';

type TChat = {
    messages: TMessage[];
    profile: TAccountProfile;
};

@cn('chat')
export default class Chat extends React.Component<TChat> {
    render(cn?: CnFn) {
        const {
            messages,
            profile
        } = this.props;

        return (
            <div className={ cn() }>
                <ChatField
                    profile={ profile }
                    messages={ messages }
                    className={ cn('chat-field') }
                />
                <ChatAction className={ cn('chat-action') } />
            </div>
        );
    }
}
