import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Dragons from '../dragons';
import store from '../../../redux/store';
import '@testing-library/jest-dom';

describe('Dragon component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('that jest is working', () => {
    expect(true).toBe(true);
  });
});
