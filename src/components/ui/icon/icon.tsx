import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import './icon.css';

type TIcon = {
    className?: string;
    type: 'text' | 'sticker' | 'picture' | 'attach' | 'send';
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
            <i className={ cn({ type, hovered: isHovered }) } />
        );
    }
}
