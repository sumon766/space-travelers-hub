import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import '@testing-library/jest-dom';
import Missions from '../../rockets/missions';

describe('performing test for missions', () => {
  it('testing if mission page really matches', () => {
    const missionRender = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(missionRender).toMatchSnapshot();
  });
});
