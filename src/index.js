import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './Store/CreateStore';
import configureStore from './Store/CreateStore';
import Root from './Components/Root';
import './Styles/app.scss';
require('./favicon.png');

const store = configureStore();

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/*TOOD: Review this*/}
        <Component store={store} history={history} /> {/* Pass history and store */}
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp(Root);

if (module.hot) {
  module.hot.accept('./Components/Root', () => {
    const NewRoot = require('./Components/Root').default;
    renderApp(NewRoot);
  });
}
