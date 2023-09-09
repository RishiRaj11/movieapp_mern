import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  payload: [],
  isError: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (building) => {
    building.addCase(movieAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    building.addCase(movieAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.payload = action.payload;
    });
    building.addCase(movieAPI.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const movieAPI = createAsyncThunk("movieAPI", async () => {
  const res = await fetch("http://localhost:5000/movies");

  return res?.json();
});

export default movieSlice.reducer;
