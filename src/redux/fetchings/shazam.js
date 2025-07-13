/* eslint-disable spaced-comment */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "88583fac81mshc2bafd27ebf9676p18ecc6jsn0f48ebcced28" /*your own api key here */
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world?country_code=IN",
    }),
    getByCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getByGenre: builder.query({
      query: (genre) =>
        `/charts/genre-world?genre_code=${genre}&country_code=IN`,
    }),
    getSongBySearch: builder.query({
      query: (searchVal) =>
        `/search/multi?offset=10&search_type=SONGS_ARTISTS&query=${searchVal}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetByCountryQuery,
  useGetByGenreQuery,
  useGetSongBySearchQuery,
} = shazamApi;
