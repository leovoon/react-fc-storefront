import type { ReactNode } from 'react'

export default function BaseButton({
  onClick,
  children,
  className,
  disabled,
  plain,
}: {
  className?: string
  plain?: boolean
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        text-base font-semibold uppercase leading-[120%]
        ${
          plain && 'border border-gray-600 bg-white text-gray-900'
        } ${className}`}
    >
      {children}
    </button>
  )
}
