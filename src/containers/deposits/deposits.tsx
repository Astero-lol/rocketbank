import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import Tabs from '../../components/tabs';
import Koshacha from '../../components/koshacha';

import Paragraph from '../../components/ui/paragraph';

import './deposits.css';

type TDeposits = {};

@cn('deposits')
export default class Deposits extends React.Component<TDeposits> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() }>
                <Tabs />
                <Koshacha className={ cn('koshacha') } />
                <Paragraph className={ cn('text') } size='s'>
                    Других вкладов у меня для вас нет
                    { ' ' }
                    <span role='img' aria-label='Smile'>😩</span>
                </Paragraph>
            </div>
        );
    }
}
