/* eslint-disable operator-linebreak */
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
        "459395da6amsh780423b2e732f18p162a45jsn32a3d58a41de"
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const { useGetSongDetailsQuery, useGetArtistDetailsQuery } =
  shazamLyricsApi;
