import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createRootReducer } from '../Redux';
import rootSaga from '../Sagas/index';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const routingMiddleware = routerMiddleware(history);

  const middleware = [sagaMiddleware, routingMiddleware];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState, // initial state
    composeEnhancers(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../Redux', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}
