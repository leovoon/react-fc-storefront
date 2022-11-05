import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { Currency } from '../../services/types'

export interface CurrencyState {
  selectedCurrency: {
    label: string
    symbol: string
  }
}

const initialState: CurrencyState = {
  selectedCurrency: {
    label: 'USD',
    symbol: '$',
  },
}

export const currencySlice = createSlice({
  initialState,
  name: 'currency',
  reducers: {
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.selectedCurrency = action.payload
    },
  },
})

export const { setCurrency } = currencySlice.actions

export default currencySlice.reducer
