import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './containers/app';

import store from './store';

ReactDOM.render(
    <AppContainer>
        <Provider store={ store }>
            <App />
        </Provider>
    </AppContainer>,
  document.getElementById('root') as HTMLElement,
);
