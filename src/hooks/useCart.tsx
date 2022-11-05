import { useSelector } from 'react-redux'

import type { RootState } from '../store'

export const useCart = () => {
  const cartItems = useSelector((state: RootState) => state.product.cart)

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  )

  const cartTotalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const cartTotalPrice = +cartItems
    .reduce(
      (acc, item) =>
        acc +
        item.quantity *
          (item.prices.find((p) => p.currency.label === selectedCurrency.label)
            ?.amount || 0),
      0
    )
    .toFixed(2)
  return {
    cartItems,
    cartTotalPrice,
    cartTotalQty,
    selectedCurrency,
  }
}
