/* eslint-disable comma-dangle */
/* eslint-disable quotes */
// src/redux/fetchings/shazamV2Api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamLyricsApi = createApi({
  reducerPath: "shazamLyricsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v2",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "1f02b793acmsh4a3267589c7b02dp172addjsnd2f282ad0b23"
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
  }),
});

export const { useGetSongDetailsQuery } = shazamLyricsApi;
