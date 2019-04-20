import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';

import Paragraph from '../../../ui/paragraph';

import { TAccountProfile } from '../../../../reducers/account-reducer';

import './base-message.css';

type TBaseMessage = {
    className?: string;
    profile: TAccountProfile;
};

@cn('base-message')
export default class BaseMessage extends React.Component<TBaseMessage> {
    render(cn?: CnFn) {
        const {
            profile
        } = this.props;

        return (
            <div className={ cn() }>
                <Paragraph className={ cn('name') } size='xs'>{ profile.userName }</Paragraph>
                <div className={ cn('photo') } style={ { backgroundImage: `url(${profile.photo})` } } />
            </div>
        );
    }
}
