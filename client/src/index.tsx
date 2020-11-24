import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// cookie
import { CookiesProvider } from "react-cookie";


// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import RootReducer from './redux/reducers/rootReducer';
import createSagaMiddleware from "redux-saga";
import saga from './redux/saga/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

