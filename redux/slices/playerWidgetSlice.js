import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songId: null,
};

export const playerWidgetSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setSongId: (state, action) => {
      state.songId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSongId } = playerWidgetSlice.actions;

//Selectors
export const selectSongId = (state) => state.player.songId;

export default playerWidgetSlice.reducer;
