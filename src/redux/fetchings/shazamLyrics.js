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
        "88583fac81mshc2bafd27ebf9676p18ecc6jsn0f48ebcced28"
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
