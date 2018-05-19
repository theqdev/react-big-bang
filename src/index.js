/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { history } from './Stor/CreateStore';
import createStore from './Redux/index'



import Root from './Components/Root';

// import 'semantic/dist/semantic.min.css';
import 'semantic-ui-css/semantic.min.css';
import './Styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
// const Stor = configureStore();
const store = createStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Components/Root', () => {
    const NewRoot = require('./Components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
