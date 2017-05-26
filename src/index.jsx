import React from 'react';
import { render } from 'react-dom';
import HelloWorldComponent from './components/HelloWorldComponent.jsx';

// require('./images/myImage.jpg');
require('./images/dog.jpg');
require('./styles/styles.css');
require('./styles/main.scss');
require('./index.html');

render(<HelloWorldComponent />, document.getElementById('content'));
