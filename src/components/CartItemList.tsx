import React from 'react'

import type { Cart } from '../services/types'

import CartItem from './CartItem'

export default function CartItemList({
  cartItems,
  mini,
}: {
  cartItems: Cart
  mini: boolean
}) {
  return (
    <div
      className={`
    border-b border-gray-300 last:border-b-0
    ${mini && 'max-h-[60vh] min-h-[200px] overflow-y-auto border-none'}
    `}
    >
      {cartItems.map((cartItem, idx) => (
        <CartItem key={idx} cartItem={cartItem} mini={mini} />
      ))}
    </div>
  )
}
