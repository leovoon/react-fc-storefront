import type { SerializedError } from '@reduxjs/toolkit'

type ErrorProps = {
  error: { data: unknown; status: number } | SerializedError | undefined
}

export const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {
  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error : JSON.stringify(error.data)

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return <div>{error.message}</div>
    }
  }
  return null
}
