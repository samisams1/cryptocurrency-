import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders ={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'dcc452c8e5mshffc5b0c16f32bb8p1940f6jsne41c28af7d4b',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'

}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });


export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),  
    })
});
export const  {
     useGetCryptoNewsQuery
}=cryptoNewsApi