import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

ReactDOM.render(<App firebase={firebase} />, document.getElementById('root'));
registerServiceWorker();
