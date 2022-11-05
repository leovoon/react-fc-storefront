import quickshopIcon from '../assets/quickshop.svg'

export function QuickShopButton({
  onAddProduct,
}: {
  onAddProduct: () => void
}) {
  return (
    <button
      onClick={onAddProduct}
      className=" absolute bottom-[92px] right-4 z-10 translate-y-1/2 cursor-pointer border-none bg-transparent p-0 active:translate-y-1/2 active:scale-90 active:brightness-90"
    >
      <img src={quickshopIcon} alt="quick add to cart" />
    </button>
  )
}
