import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import './account-icon.css';

type TAccountIcon = {
    icon: string;
    className?: string;
};

@cn('account-icon')
export default class AccountIcon extends React.Component<TAccountIcon> {
    render(cn?: CnFn) {
        const {
            icon
        } = this.props;

        return (
            <div className={ cn() }>
                { icon }
            </div>
        );
    }
}
