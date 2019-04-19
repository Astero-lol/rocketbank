import * as React from 'react';
import cn, { CnFn } from 'cn-decorator';
import { connect } from 'react-redux';

import './app.css';

function mapStateToProps(state: any) {
    return {
        app: state.app
    };
}

@cn('app')
class App extends React.Component<{}, {}> {
    render(cn?: CnFn) {
        return (
            <div className={ cn() }>

            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
