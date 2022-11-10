export default function BaseIconButton({
  className,
  children,
  onClick,
  disabled,
  icon,
}: {
  className?: string
  onClick?: () => void
  disabled?: boolean
  icon: string
  children?: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`grid h-12 w-12 place-items-center border border-gray-400 bg-white p-1.5 ${className}`}
    >
      {children || <img src={icon} alt="icon" className=" bg-white" />}
    </button>
  )
}
