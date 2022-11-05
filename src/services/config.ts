export const GRAPHQL_URL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000'
    : import.meta.env.VITE_GRAPHQL_URL
