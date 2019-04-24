import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import { EAuthorTypes, ITextMessage } from '../../../reducers/chat-reducer';
import { TUserProfile } from '../../../reducers/user-reducer';

import Paragraph from '../../ui/paragraph';
import BaseMessage from '../base-message';

import './text-message.css';

type TTextMessage = {
    message: ITextMessage;
    className?: string;
    profile: TUserProfile;
};

@cn('text-message')
export default class TextMessage extends React.Component<TTextMessage> {
    render(cn?: CnFn) {
        const {
            message,
            profile
        } = this.props;

        return (
            <div className={ cn({ type: message.type, author: message.author }) }>
                { message.author === EAuthorTypes.user && <BaseMessage profile={ profile } /> }
                <div className={ cn('message', { author: message.author }) }>
                    <Paragraph className={ cn('text') }>{ message.text }</Paragraph>
                </div>
            </div>
        );
    }
}
