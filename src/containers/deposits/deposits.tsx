import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import './deposits.css';

type TDeposits = {};

@cn('deposits')
export default class Deposits extends React.Component<TDeposits> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() }>deposits</div>
        );
    }
}
