import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();


// creates the Store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []


  /* ------------- Saga Middleware ------------- */
  const sagaMonitor =  null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  const createAppropriateStore =  createStore
  const composeMethod = process.env.NODE_ENV === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const store = createAppropriateStore(rootReducer, composeMethod(...enhancers))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../Redux', () => {
      const nextReducer = require('../Redux/index').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store
}
