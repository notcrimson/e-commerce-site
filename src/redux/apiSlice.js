import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "products/categories",
    }),
  }),
});

export const { useGetAllCategoriesQuery } = productsApi;
