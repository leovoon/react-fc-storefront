import { createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'

import { GRAPHQL_URL } from './config'
import { graphqlBaseQuery } from './graphql'
import type { Currency } from './types'

export const currencyAPI = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: GRAPHQL_URL,
  }),
  endpoints: (builder) => ({
    getCurrencies: builder.query<Currency[], void>({
      query: () => ({
        body: gql`
          query {
            currencies {
              label
              symbol
            }
          }
        `,
      }),
      transformResponse: (response: { currencies: Currency[] }) => {
        return response.currencies
      },
    }),
  }),
  reducerPath: 'currencyApi',
})

export const { useGetCurrenciesQuery } = currencyAPI
