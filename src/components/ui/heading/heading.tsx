import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import './heading.css';

type THeading = {
    className?: string;
    size?: 's' | 'l';
};

@cn('heading')
export default class Heading extends React.Component<THeading> {
    static defaultProps = {
        size: 'l'
    };

    render(cn?: CnFn) {
        const {
            children,
            size
        } = this.props;

        return <h3 className={ cn({ size }) }>{ children }</h3>;
    }
}
