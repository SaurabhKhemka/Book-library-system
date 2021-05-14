import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import EditBook from './components/AddEditBook';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      < BrowserRouter >
        <div>
          <Route exact path="/" component={App} />
          <Route path="/add" component={EditBook} />
          <Route path="/edit" component={EditBook} />
        </div>
      </ BrowserRouter >
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
