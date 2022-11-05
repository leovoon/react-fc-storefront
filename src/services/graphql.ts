import { ClientError, request } from 'graphql-request'
export const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body, variables }: { body: string; variables?: Object }) => {
    try {
      const result = await request(baseUrl, body, variables)
      return { data: result }
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { data: error, status: error.response.status } }
      }
      return { error: { data: error, status: 500 } }
    }
  }
