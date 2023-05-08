import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';
export const RocketsData = createAsyncThunk('Rockets/RocketsData', async () => {
  const request = await fetch(rocketsUrl);
  return request.json();
});

const initialState = {
  Rockets: [],
  reserveRockets: [],
  loading: false,
  error: '',
};

const rocketSlice = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {
    RocketsBooking: (state, action) => {
      const RocketsReserved = state.Rockets.find(
        (rocket) => rocket.id === action.payload,
      );
      return {
        ...state,
        reserveRockets: [...state.reserveRockets, RocketsReserved],
      };
    },
    CancelRocket: (state, action) => ({
      ...state,
      reserveRockets: state.reserveRockets.filter(
        (rocket) => rocket.id !== action.payload,
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(RocketsData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(RocketsData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      Rockets: action.payload,
    }));
    builder.addCase(RocketsData.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default rocketSlice.reducer;

// Book Button
export const { RocketsBooking, CancelRocket } = rocketSlice.actions;
