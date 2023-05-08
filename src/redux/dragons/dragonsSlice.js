import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/dragons';
export const dragonData = createAsyncThunk('dragons/dragonData', async () => {
  const request = await fetch(url);
  return request.json();
});

const initialState = {
  dragons: [],
  reserveDragons: [],
  loading: false,
  error: '',
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    dragonBooking: (state, action) => {
      const dragonsReserved = state.dragons.find(
        (dragon) => dragon.id === action.payload,
      );
      return {
        ...state,
        reserveDragons: [...state.reserveDragons, dragonsReserved],
      };
    },
    CancelDragon: (state, action) => ({
      ...state,
      reserveDragons: state.reserveDragons.filter(
        (dragon) => dragon.id !== action.payload,
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(dragonData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(dragonData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      dragons: action.payload,
    }));
    builder.addCase(dragonData.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default dragonsSlice.reducer;

export const { dragonBooking, CancelDragon } = dragonsSlice.actions;
