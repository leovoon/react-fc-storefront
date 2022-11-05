export interface Category {
  name: string
  products: Product[]
}

export type Product = {
  quantity: any
  id: string
  name: string
  inStock: Boolean
  gallery: string[]
  description: string
  category: string
  attributes: AttributeSet[]
  prices: Price[]
  brand: string
}

export type Attribute = {
  displayValue: string
  value: string
  id: string
  selected?: boolean
}

export type AttributeSet = {
  id: string
  name: string
  type: string
  items: Attribute[]
}

export interface SelectedAttributeSet {
  pid: string
  attributes: AttributeSet[]
}

export type Price = {
  currency: Currency
  amount: number
}

export interface CartItem extends Product {
  quantity: number
  selectedAttributes?: {
    attrId: string
    attributeSet: AttributeSet[]
  }
}

export type Cart = CartItem[]

export interface Currency {
  label: string
  symbol: string
}
