/* globals it describe */
import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import NeatComponent from '../src/NeatComponent';
Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('NeatComponent', function () {
    it('should render the neatMessageProp', function () {
        var message = 'This is a test message!';
        var componentInstance = React.createElement(NeatComponent, { neatMessageProp: message });
        var mountedComponent = Enzyme.shallow(componentInstance);
        var messageNode = mountedComponent.find('p');
        expect(messageNode.text()).to.equal(message);
    });
});
