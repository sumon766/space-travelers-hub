import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';
import missionReducer from './missions/missionSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    Rocket: rocketReducer,
    Mission: missionReducer,
    dragons: dragonsReducer,
  },
});

export default store;
