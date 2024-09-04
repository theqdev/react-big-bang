import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router'; // Update this import
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}> {/* Use ConnectedRouter from connected-react-router */}
          <App history={history} />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
