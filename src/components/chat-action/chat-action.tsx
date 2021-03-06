import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { autobind } from 'core-decorators';

import TextareaAutosize from 'react-autosize-textarea';
import { EAuthorTypes, EMessageTypes } from '../../reducers/chat-reducer';
import { sendMessage } from '../../actions/chat/chat-actions';

import Icon from '../ui/icon';

import { generateId } from '../../utils/generate-id';

import { STICKERS } from '../../libs/stickers';
import { ONE_SECOND } from '../../constants';

import './chat-action.css';

type TChatAction = {
    className?: string;
    sendMessage: typeof sendMessage;
};

@cn('chat-action')
export default class ChatAction extends React.Component<TChatAction> {
    textarea = React.createRef<HTMLTextAreaElement>();

    componentDidMount() {
        this.handleSendStickerMessage(STICKERS[3].value, EAuthorTypes.user);
        setTimeout(() => (
            this.handleSendMessage('Ну што, возьмете меня к себе? 😊️', EAuthorTypes.user)
        ), ONE_SECOND);
    }

    render(cn?: CnFn) {
        return (
            <div className={ cn() }>
                <div className={ cn('actions') }>
                    <Icon className={ cn('action-icon') } type='text' />
                    <div className={ cn('stickers') }>
                        <Icon className={ cn('action-icon', { sticker: true }) } type='sticker' isHovered={ true } />
                        <div className={ cn('stickers-popup') }>
                            { STICKERS.map(sticker => this.renderSticker(cn, sticker)) }
                        </div>
                    </div>
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

    renderSticker(cn, sticker) {
        return (
            <div
                role='presentation'
                key={ sticker.value }
                className={ cn('sticker') }
                style={ { backgroundImage: `url(${sticker.value})` } }
                onClick={ () => this.handleStickerClick(sticker.value) }
            />
        );
    }

    @autobind
    handleSubmit(event) {
        event.preventDefault();

        if (this.textarea.current.value) {
            this.handleSendMessage(this.textarea.current.value);
        }
    }

    @autobind
    handleSendMessage(text, author = EAuthorTypes.support) {
        const {
            sendMessage
        } = this.props;

        sendMessage({
            id: generateId(),
            type: EMessageTypes.text,
            author,
            text
        });

        this.textarea.current.value = '';
        this.textarea.current.focus();
    }

    handleSendStickerMessage(value, author = EAuthorTypes.support) {
        const {
            sendMessage
        } = this.props;

        sendMessage({
            id: generateId(),
            type: EMessageTypes.sticker,
            author,
            value
        });
    }

    @autobind
    handleStickerClick(value) {
        this.handleSendStickerMessage(value);
    }
}
