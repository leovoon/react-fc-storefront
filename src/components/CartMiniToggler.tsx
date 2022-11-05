import { useState } from 'react'

import CartIcon from './CartIcon'
import CartMini from './CartMini'

/* eslint-disable jsx-a11y/no-static-element-interactions */
export default function CartMiniToggler() {
  const [open, setOpen] = useState(false)
  const handleCartMiniOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <div
        onClick={handleCartMiniOpen}
        onKeyDown={handleCartMiniOpen}
        className="flex h-full max-w-max items-center justify-center"
      >
        <CartIcon />
      </div>
      {open && <CartMini onOverlayClick={() => handleCartMiniOpen()} />}
    </>
  )
}
