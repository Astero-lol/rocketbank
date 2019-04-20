import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import './paragraph.css';

type TParagraph = {
    className?: string;
    size?: 'xs' | 's' | 'm';
};

@cn('paragraph')
export default class Paragraph extends React.Component<TParagraph> {
    static defaultProps = {
        size: 'm'
    };

    render(cn?: CnFn) {
        const {
            children,
            size
        } = this.props;

        return <p className={ cn({ size }) }>{ children }</p>;
    }
}
