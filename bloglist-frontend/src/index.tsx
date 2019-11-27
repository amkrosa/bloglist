import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import CssBaseline from '@material-ui/core/CssBaseline';

const render = () => {
  ReactDOM.render(
    <>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </>,
    document.getElementById('root'),
  );
};

render();
store.subscribe(render);
