import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
var rootNode = document.getElementById('root-node');
var appInstance = React.createElement(App);
render(appInstance, rootNode);
