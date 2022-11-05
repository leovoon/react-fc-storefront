import React from 'react'

import type { Price } from '../services/types'

export default function ProductPriceTag({
  price,
  mini = false,
  noTitle,
}: {
  price: Price
  mini?: boolean
  noTitle?: boolean
}) {
  return (
    <div>
      {!noTitle && (
        <div className="mb-2 text-lg font-bold leading-4 text-gray-900">
          PRICE:
        </div>
      )}
      <div
        className={`py-2 text-2xl font-bold leading-4 text-gray-900 ${
          mini && 'text-base font-medium leading-[120%]'
        }`}
      >
        <span>{price.currency.symbol}</span>
        <span>{price.amount}</span>
      </div>
    </div>
  )
}
