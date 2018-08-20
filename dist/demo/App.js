/* eslint import/no-extraneous-dependencies: "off" */
import * as React from 'react';
import { hot } from 'react-hot-loader';
import NeatComponent from '../src/NeatComponent';
var App = function () { return (React.createElement("div", null,
    React.createElement(NeatComponent, { neatMessageProp: "Woooo! The demo is working!" }))); };
export default hot(module)(App);
