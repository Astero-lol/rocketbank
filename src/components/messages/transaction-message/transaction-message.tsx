import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import { EAuthorTypes, ITransactionMessage } from '../../../reducers/chat-reducer';
import { ETransactionIconsTypes } from '../../../libs/transaction-icons';
import { TUserProfile } from '../../../reducers/user-reducer';

import Heading from '../../ui/heading';
import Paragraph from '../../ui/paragraph';

import './transaction-message.css';
import BaseMessage from '../base-message';

type TTransactionMessage = {
    className?: string;
    message: ITransactionMessage;
    profile: TUserProfile;
};

@cn('transaction-message')
export default class TransactionMessage extends React.Component<TTransactionMessage> {
    render(cn?: CnFn) {
        const {
            message,
            profile
        } = this.props;

        return (
            <div className={ cn({ type: message.type }) }>
                { message.author === EAuthorTypes.user && <BaseMessage profile={ profile } /> }
                <div className={ cn('message', { author: message.author }) }>
                    {
                        message.icon.type === ETransactionIconsTypes.emoji
                            ? this.renderEmojiIcon(cn, message.icon.value)
                            : this.renderImageIcon(cn, message.icon.value)
                    }
                    <Paragraph className={ cn('paragraph') }>{ message.title }</Paragraph>
                    <Heading className={ cn('heading') }>{ message.amount }</Heading>
                    <Paragraph className={ cn('note') } size='s'>{ message.cashback }</Paragraph>
                </div>
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
