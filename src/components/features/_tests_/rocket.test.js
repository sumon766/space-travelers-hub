import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Rockets from '../../rockets/rockets';
import '@testing-library/jest-dom';

describe('performing test for rockets', () => {
  it('testing if rockets page really matches', () => {
    const rocketRender = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(rocketRender).toMatchSnapshot();
  });
});
