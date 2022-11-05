/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import chevron from '../../assets/chevron.svg'
import { useGetCurrenciesQuery } from '../../services/currency'

import { setCurrency } from './currencySlice'

export default function CurrencySwitcher() {
  const dispatch = useDispatch()

  const currencies = useGetCurrenciesQuery()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const handleClick = () => setOpen(!open)
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <div
      ref={ref}
      className="relative flex h-8 w-10 cursor-pointer items-center justify-center bg-transparent font-medium"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="grid h-8 w-8 place-items-center py-0 px-2.5">$</div>

      <img
        src={chevron}
        alt="currency switcher"
        className={open ? 'rotate-180 transform' : ''}
      />

      {open && (
        <ul className="absolute top-[120%] -left-[16px] z-50 flex h-max w-32 flex-col bg-white py-1.5  shadow-md">
          {currencies.data?.map((currency) => {
            return (
              <button
                className="grid h-12 w-full cursor-pointer items-center bg-white pl-6 font-medium text-gray-900 first:-mt-1 first:h-12 last:-mb-1 last:h-12 hover:bg-gray-200"
                key={currency.label}
                onClick={() => {
                  dispatch(setCurrency(currency))
                  setOpen(false)
                }}
              >
                <div className="flex gap-x-1.5">
                  <span>{currency.symbol}</span>
                  <span>{currency.label}</span>
                </div>
              </button>
            )
          })}
        </ul>
      )}
    </div>
  )
}
