import { useState } from 'react'

import BaseButton from '../components/BaseButton'
import CartFooterText from '../components/CartFooterText'
import CartItemList from '../components/CartItemList'
import { useCart } from '../hooks/useCart'

export default function Cart() {
  const [tax] = useState('21')

  const { cartTotalQty, cartItems, selectedCurrency, cartTotalPrice } =
    useCart()

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-0 font-raleway text-base sm:px-[100px] sm:text-3xl">
        Your cart is empty
      </div>
    )
  }
  return (
    <>
      <h1 className="mb-12 text-3xl font-bold uppercase leading-10 text-gray-900">
        Cart
      </h1>
      <CartItemList mini={false} cartItems={cartItems} />

      <CartFooterText
        tax={tax}
        quantity={cartTotalQty}
        total={cartTotalPrice}
        currency={selectedCurrency}
      />

      <BaseButton
        // eslint-disable-next-line no-console
        onClick={() => console.log(cartItems)}
        className="btn-green h-10 w-[279px]"
      >
        Order
      </BaseButton>
    </>
  )
}
