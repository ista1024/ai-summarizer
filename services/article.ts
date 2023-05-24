import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => {
        return {
          url: `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
          headers: {
            'X-RapidAPI-Key': params.rapidApiKey,
            'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
          }
        }
      },
    })
  }),
})

export const { useLazyGetSummaryQuery } = articleApi
