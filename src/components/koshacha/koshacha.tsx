import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import './koshacha.css';

type TKoshacha = {
    className?: string;
};

@cn('koshacha')
export default class Koshacha extends React.Component<TKoshacha> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() }>
                <div className={ cn('body') } />
                <div className={ cn('eyes') } />
                <div className={ cn('hand', { left: true }) } />
                <div className={ cn('hand', { right: true }) } />
            </div>
        );
    }
}
