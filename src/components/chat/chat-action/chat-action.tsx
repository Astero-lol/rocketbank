import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import './chat-action.css';

type TChatAction = {
    className?: string;
};

@cn('chat-action')
export default class ChatAction extends React.Component<TChatAction> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() } />
        );
    }
}
