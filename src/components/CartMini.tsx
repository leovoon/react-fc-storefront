/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { resetCart } from '../features/product/productSlice'
import { useCart } from '../hooks/useCart'

import BaseButton from './BaseButton'
import CartItemList from './CartItemList'

export default function CartMini({
  onOverlayClick,
}: {
  onOverlayClick: () => void
}) {
  const dispatch = useDispatch()

  const { cartTotalQty, cartItems, selectedCurrency, cartTotalPrice } =
    useCart()

  return (
    <div
      title="toggle cart"
      className="pointer-events-none fixed right-0 bottom-0 z-10 h-full w-full overflow-hidden sm:top-[80px]"
      aria-label="toggle cart"
    >
      <div
        onClick={() => onOverlayClick()}
        className="pointer-events-auto absolute inset-0 z-30 h-full w-full bg-gray-500/50"
        aria-label="overlay"
      ></div>
      <div className="pointer-events-auto absolute top-14 z-40 h-full max-h-max min-h-[250px] w-full bg-white py-8 px-4 sm:top-0 sm:right-[101px] sm:w-[330px] ">
        <div className="px-2 pb-8 text-base font-bold leading-[160%]">
          My Bag
          <span className="font-normal">
            , {cartTotalQty} {cartTotalQty > 1 ? 'items' : 'item'}
          </span>
        </div>

        <button
          onClick={() => onOverlayClick()}
          className="absolute right-0 top-8 px-4 font-raleway sm:hidden "
        >
          close
        </button>

        <div>
          {cartItems.length === 0 && (
            <p className="flex h-full min-h-[120px] items-center justify-center font-raleway">
              Your cart is empty
            </p>
          )}
          <CartItemList mini={true} cartItems={cartItems} />
        </div>

        <div className="flex min-h-[20px] max-w-max items-center justify-between gap-x-2 py-2.5 text-base ">
          <span className="font-medium leading-4">Total</span>
          <span className="font-bold leading-[160%]">
            {selectedCurrency.symbol}
            {cartTotalPrice}
          </span>
        </div>

        <div className="flex items-stretch justify-between gap-y-3">
          <Link
            to="/cart"
            onClick={() => onOverlayClick()}
            title="go to cart page"
            aria-label="go to cart page"
          >
            <BaseButton className="h-10 w-32 border border-gray-500">
              view bag
            </BaseButton>
          </Link>
          <BaseButton
            className="h-10 w-32"
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Checked Out')
              dispatch(resetCart())
            }}
          >
            check out
          </BaseButton>
        </div>
      </div>
    </div>
  )
}
