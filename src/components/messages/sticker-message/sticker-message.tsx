import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import { IStickerMassage } from '../../../reducers/chat-reducer';
import { TUserProfile } from '../../../reducers/user-reducer';

import BaseMessage from '../base-message';

import './sticker-message.css';

type TStickerMessage = {
    className?: string;
    message: IStickerMassage;
    profile: TUserProfile;
};

@cn('sticker-message')
export default class StickerMessage extends React.Component<TStickerMessage> {
    render(cn?: CnFn) {
        const {
            message,
            profile
        } = this.props;

        return (
            <div className={ cn() } style={ { backgroundImage: `url(${message.value})` } }>
                <BaseMessage profile={ profile } />
            </div>
        );
    }
}
