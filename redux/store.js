import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../redux/slices/playerWidgetSlice";

export default configureStore({
  reducer: {
    player: playerReducer,
  },
});
