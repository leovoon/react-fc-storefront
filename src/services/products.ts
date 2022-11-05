import { createApi } from '@reduxjs/toolkit/query/react'
import { gql } from 'graphql-request'

import { GRAPHQL_URL } from './config'
import { graphqlBaseQuery } from './graphql'
import type { Category, Product } from './types'

export const productApi = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: GRAPHQL_URL,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ({
        body: gql`
          query GetCategories {
            categories {
              name
            }
          }
        `,
      }),
      transformResponse(response: { categories: Category[] }) {
        return response.categories
      },
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => ({
        body: gql`
          query GetProductById {
            product(id: "${id}") {
              id
              brand
              name
              inStock
              gallery
              description
              category
              
              attributes {
                id
                name
                type
                items {
                  id
                  displayValue
                  value
                }
              }

              prices {
                currency {
                  label
                  symbol
                }
                amount
              }
            }
          }
        `,
      }),
      transformResponse: (response: { product: Product }) => {
        return response.product
      },
    }),
    getProducts: builder.query<Category, string>({
      query: (category) => ({
        body: gql`
          query GetProducts {
            category (input: {title: "${category}"}) {
              name
              products {
                id
                brand
                name
                inStock
                gallery
                category
                attributes {
                  id
                  name
                  type
                  items {
                    id
                    displayValue
                    value
                  }
                }
                prices {
                  currency {
                    label
                    symbol
                  }
                  amount
                }
              }

            }
          }
        `,
      }),
      transformResponse: (response: { category: Category }) => {
        return response.category
      },
    }),
  }),

  reducerPath: 'productApi',
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
} = productApi
