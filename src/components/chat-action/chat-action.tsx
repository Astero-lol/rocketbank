import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { autobind } from 'core-decorators';

import TextareaAutosize from 'react-autosize-textarea';
import { EAuthorTypes, EMessageTypes } from '../../reducers/chat-reducer';
import { sendMessage } from '../../actions/chat/chat-actions';

import Icon from '../ui/icon';

import { generateId } from '../../utils/generate-id';

import './chat-action.css';

type TChatAction = {
    className?: string;
    sendMessage: typeof sendMessage;
};

@cn('chat-action')
export default class ChatAction extends React.Component<TChatAction> {
    textarea = React.createRef<HTMLTextAreaElement>();

    render(cn?: CnFn) {
        return (
            <div className={ cn() }>
                <div className={ cn('actions') }>
                    <Icon className={ cn('action-icon') } type='text' />
                    <Icon className={ cn('action-icon') } type='sticker' isHovered={ true } />
                    <Icon className={ cn('action-icon') } type='picture' isHovered={ true } />
                    <Icon className={ cn('action-icon') } type='attach' isHovered={ true } />
                </div>
                <form className={ cn('form') } onSubmit={ this.handleSubmit }>
                    <TextareaAutosize
                        ref={ this.textarea }
                        className={ cn('textarea') }
                        placeholder='Введите сообщение…'
                    />
                    <button className={ cn('send') } type='submit'>
                        <Icon type='send' />
                    </button>
                </form>
            </div>
        );
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();

        const {
            sendMessage
        } = this.props;

        sendMessage({
            id: generateId(),
            author: EAuthorTypes.support,
            type: EMessageTypes.text,
            text: this.textarea.current.value
        });

        this.textarea.current.value = '';
        this.textarea.current.focus();
    }
}
