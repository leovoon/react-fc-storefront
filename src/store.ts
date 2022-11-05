import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import currencyReducer from './features/currency/currencySlice'
import productReducer from './features/product/productSlice'
import { currencyAPI } from './services/currency'
import { productApi } from './services/products'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      currencyAPI.middleware
    ),
  reducer: {
    currency: currencyReducer,
    product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    [currencyAPI.reducerPath]: currencyAPI.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
