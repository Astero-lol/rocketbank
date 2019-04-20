import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import TextareaAutosize from 'react-autosize-textarea';
import Icon from '../../ui/icon';

import './chat-action.css';

type TChatAction = {
    className?: string;
};

@cn('chat-action')
export default class ChatAction extends React.Component<TChatAction> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() }>
                <div className={ cn('actions') }>
                    <Icon className={ cn('action-icon') } type='text' />
                    <Icon className={ cn('action-icon') } type='sticker' isHovered={ true } />
                    <Icon className={ cn('action-icon') } type='picture' isHovered={ true } />
                    <Icon className={ cn('action-icon') } type='attach' isHovered={ true } />
                </div>
                <form className={ cn('form') }>
                    <TextareaAutosize className={ cn('textarea') } placeholder='Введите сообщение…' />
                    <button className={ cn('send') } type='submit'>
                        <Icon type='send' />
                    </button>
                </form>
            </div>
        );
    }
}
