import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { autobind } from 'core-decorators';

import './icon.css';

type TIcon = {
    className?: string;
    type: 'text' | 'sticker' | 'picture' | 'attach' | 'send' | 'chat';
    isHovered?: boolean;
    onClick?: (event?: React.MouseEvent<any>) => void;
};

@cn('icon')
export default class Icon extends React.Component<TIcon> {
    render(cn?: CnFn) {
        const {
            type,
            isHovered
        } = this.props;

        return (
            <div
                className={ cn({ type, hovered: isHovered }) }
                onClick={ this.handleClick }
                role='presentation'
            />
        );
    }

    @autobind
    handleClick(event) {
        const {
            onClick
        } = this.props;

        if (onClick) {
            onClick(event);
        }
    }
}
