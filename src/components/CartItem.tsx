import { useDispatch, useSelector } from 'react-redux'

import minusIcon from '../assets/minus.svg'
import plusIcon from '../assets/plus.svg'
import { increment, decrement } from '../features/product/productSlice'
import type { CartItem } from '../services/types'
import type { RootState } from '../store'

import BaseIconButton from './BaseIconButton'
import ImageSlider from './ImageSlider'
import ProductAttributes from './ProductAttributes'
import ProductBrandName from './ProductBrandName'
import ProductPriceTag from './ProductPriceTag'

export default function CartItemComponent({
  cartItem,
  mini,
}: {
  cartItem: CartItem
  mini: boolean
}) {
  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  )
  const getPriceByCurrency = () => {
    const price = cartItem.prices.find(
      (p) => p.currency.label === selectedCurrency.label
    )
    return price || cartItem.prices[0]
  }
  const dispatch = useDispatch()

  const { brand, name, attributes, id, quantity, gallery } = cartItem

  return (
    <div
      className={`first-border-t-gray-300 flex content-center justify-between border-b border-b-gray-300 py-6 first:border-t ${
        mini && 'gap-x-2 border-none pl-2 pr-2 pb-10'
      }`}
    >
      <div
        className={`grid h-full flex-grow place-items-start gap-4 ${
          mini && 'h-0'
        }`}
      >
        <ProductBrandName brand={brand} name={name} mini={mini} />
        <ProductPriceTag noTitle price={getPriceByCurrency()} mini={mini} />
        <ProductAttributes
          editMode={false}
          attributes={attributes}
          productId={id}
          mini={mini}
        />
      </div>

      <div className="flex gap-y-6">
        <div className="mr-2 flex flex-col items-center justify-between text-base font-medium leading-[160%] sm:text-2xl">
          <BaseIconButton
            className="h-6 w-6"
            onClick={() => {
              dispatch(increment(cartItem))
            }}
            icon={plusIcon}
          />
          <span>{quantity}</span>
          <BaseIconButton
            className="h-6 w-6"
            onClick={() => {
              dispatch(decrement(cartItem))
            }}
            icon={minusIcon}
          />
        </div>
        <ImageSlider images={gallery} mini={mini} />
      </div>
    </div>
  )
}
