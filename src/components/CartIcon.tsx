import { useSelector } from 'react-redux'

import cartIcon from '../assets/cart.svg'
import type { RootState } from '../store'

export default function CartIcon() {
  const cartQuantity = useSelector((state: RootState) =>
    state.product.cart.reduce((acc, item) => acc + item.quantity, 0)
  )
  return (
    <div className="relative  h-full w-10 cursor-pointer place-items-center ">
      {cartQuantity > 0 && (
        <div className="absolute bottom-[80%] left-[60%] z-10 grid h-5 w-5 min-w-max  -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-gray-900 font-roboto text-sm font-bold uppercase leading-4 text-white">
          <span>{cartQuantity}</span>
        </div>
      )}

      <img
        src={cartIcon}
        className="absolute inset-0 z-20 grid  h-full place-items-center"
        alt="cart"
        width={20}
        height={20}
      />
    </div>
  )
}
