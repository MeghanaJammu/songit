/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamApi } from "./fetchings/shazam";
import { shazamLyricsApi } from "./fetchings/shazamLyrics";

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    [shazamLyricsApi.reducerPath]: shazamLyricsApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shazamApi.middleware)
      .concat(shazamLyricsApi.middleware),
});
