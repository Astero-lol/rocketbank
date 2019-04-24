import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { NavLink } from 'react-router-dom';

import Heading from '../ui/heading';

import './tabs.css';

type TTabs = {};

@cn('tabs')
export default class Tabs extends React.Component<TTabs> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() }>
                <NavLink
                    to='/'
                    className={ cn('tab') }
                    activeClassName={ cn('tab', { active: true }) }
                >
                    <Heading className={ cn('heading') }>Счета</Heading>
                </NavLink>
                <NavLink
                    to='/deposits'
                    className={ cn('tab') }
                    activeClassName={ cn('tab', { active: true }) }
                >
                    <Heading className={ cn('heading') }>Вклады</Heading>
                </NavLink>
            </div>
        );
    }
}
