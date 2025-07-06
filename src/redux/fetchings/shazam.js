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
        "1f02b793acmsh4a3267589c7b02dp172addjsnd2f282ad0b23"
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/world?country_code=IN",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamApi;
