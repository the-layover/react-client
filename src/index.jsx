import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/index.jsx'

//Components
import HelloWorldComponent from './components/HelloWorldComponent.jsx';
import App from './components/App.jsx';

let store = createStore(todoApp)


require('./images/dog.jpg');
require('./styles/styles.css');
require('./styles/main.scss');
require('./index.html');

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('content')
);
