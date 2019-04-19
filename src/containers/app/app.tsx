import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';

import { TApplicationState } from '../../reducers';

import './app.css';

function mapStateToProps(state: TApplicationState) {
    return {
        app: state.app
    };
}

@cn('app')
class App extends React.Component<{}, {}> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() } />
        );
    }
}

export default connect(mapStateToProps)(App);
