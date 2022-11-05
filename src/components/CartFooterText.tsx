import type { Currency } from '../services/types'

export default function CartFooterText({
  tax,
  quantity,
  total,
  currency,
}: {
  tax: string
  quantity: number
  total: number
  currency: Currency
}) {
  return (
    <footer className="my-[20px] flex flex-col items-start justify-center gap-y-2 py-6 px-0 text-2xl  leading-7 text-gray-900">
      <div className="flex gap-x-4">
        <span className="font-medium">Tax {tax}%:</span>
        <span className="font-bold">
          {currency.symbol} {total}
        </span>
      </div>
      <div className="flex gap-y-2">
        <span className="font-normal">Quantity:</span>
        <span className="font-bold">{quantity}</span>
      </div>
      <div className="flex gap-y-2">
        <span className="font-medium"> Total:</span>
        <span className="font-bold">{currency.symbol + total}</span>
      </div>
    </footer>
  )
}
