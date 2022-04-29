import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { newBikesArray } from "./db/bikes_data";
import { addBikeCollection, calculateMinMax,addChartFields } from './features/bikes/newBikeSlice';
import App from './App.js'

store.dispatch(addBikeCollection(newBikesArray))
store.dispatch(calculateMinMax())
store.dispatch(addChartFields())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
