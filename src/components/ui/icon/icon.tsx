import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import './icon.css';

type TIcon = {
    className?: string;
    type: 'text' | 'sticker' | 'picture' | 'attach' | 'send' | 'chat';
    isHovered?: boolean;
};

@cn('icon')
export default class Icon extends React.Component<TIcon> {
    render(cn?: CnFn) {
        const {
            type,
            isHovered
        } = this.props;

        return (
            <div className={ cn({ type, hovered: isHovered }) } />
        );
    }
}
