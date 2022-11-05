import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { QuickShopButton } from '../components/QuickShopButton'
import { increment } from '../features/product/productSlice'
import type { Product } from '../services/types'
import type { RootState } from '../store'

export default function ProductCard({ product }: { product: Product }) {
  const { inStock, brand, gallery, name, prices, category, id } = product
  const [isHovered, setHover] = useState(false)
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  )

  const dispatch = useDispatch()
  const handleQuickAddProduct = (product: Product) => {
    if (!product.inStock) return

    const modifiedAttributes = product.attributes.map((attr) => {
      return {
        ...attr,
        items: attr.items.map((item) => {
          // first item is selected by default
          if (item.id === attr.items[0].id) {
            return {
              ...item,
              selected: true,
            }
          } else {
            return {
              ...item,
              selected: false,
            }
          }
        }),
      }
    })

    const newItem = { ...product, attributes: modifiedAttributes }

    dispatch(increment(newItem))

    // eslint-disable-next-line no-console
    console.log('quickshop - ', newItem)
  }

  return (
    <div
      className={`relative h-full w-full p-4 ${isHovered && 'shadow-md'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={`/${category}/${id}`}
        className="flex h-full w-full cursor-pointer flex-col items-center bg-white"
      >
        <div className="relative bg-gray-400">
          <img
            className="aspect-square h-full w-full bg-gray-400 bg-center object-cover"
            src={gallery[0]}
            alt={name}
          />
          {!inStock && (
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-white text-2xl font-normal leading-[160%] text-gray-600 opacity-50">
              OUT OF STOCK
            </div>
          )}
        </div>
        <div
          className={`
          mt-6 w-full text-left text-lg text-gray-900  ${
            !inStock && 'text-gray-400'
          })
          `}
        >
          <div className="flex items-center">
            {brand} {name}
          </div>
          <div className="flex items-center">
            {prices.map((price) => {
              if (price.currency.label === selectedCurrency.label) {
                return price.currency.symbol + ' ' + price.amount
              }
            })}
          </div>
        </div>
      </Link>
      {isHovered && (
        <QuickShopButton onAddProduct={() => handleQuickAddProduct(product)} />
      )}
    </div>
  )
}
