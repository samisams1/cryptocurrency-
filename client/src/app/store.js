import { cryptoApi } from '../services/cryptoApi';


import { configureStore } from '@reduxjs/toolkit';
import { cryptoNewsApi } from '../services/cryptoNewsApi';


export default configureStore({
    reducer: {  

        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
        
     },
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware,cryptoNewsApi.middleware),
        
})