import { useDispatch, useSelector } from 'react-redux'

import { increment } from '../features/product/productSlice'
import type { Product } from '../services/types'
import type { RootState } from '../store'

import BaseButton from './BaseButton'
import ProductAttributes from './ProductAttributes'
import ProductBrandName from './ProductBrandName'
import ProductDescription from './ProductDescription'
import ProductPriceTag from './ProductPriceTag'

export default function ProductDetailContent({
  product,
}: {
  product: Product
}) {
  const { id, brand, name, attributes, inStock, description, prices } = product
  const dispatch = useDispatch()
  const selectedAttributes = useSelector(
    (state: RootState) => state.product.selectedAttributeSet
  )

  const handleAddToCart = () => {
    if (!product.inStock) return

    if (!validateSelectedAttributes()) {
      // eslint-disable-next-line no-alert
      alert('Please select all attributes.')
      return
    }

    const currentSelectedAttributes = selectedAttributes.find(
      (set) => set.pid === product.id
    )?.attributes

    if (currentSelectedAttributes) {
      const newProduct = { ...product, attributes: currentSelectedAttributes }
      dispatch(increment(newProduct))
      // eslint-disable-next-line no-console
      console.log('fromDetailPage - ', newProduct)
    }
  }

  const validateSelectedAttributes = () => {
    let isValid = true

    const currentSelectedAttributes = selectedAttributes.find(
      (set) => set.pid === product.id
    )?.attributes

    if (currentSelectedAttributes) {
      currentSelectedAttributes.forEach((attr) => {
        if (!attr.items.find((item) => item.selected)) {
          isValid = false
        }
      })
    }

    return isValid
  }

  const selectedCurrency = useSelector(
    (state: RootState) => state.currency.selectedCurrency
  )

  const getPriceFromSelectedCurrency = () => {
    return (
      prices.find((price) => price.currency.label === selectedCurrency.label) ||
      prices[0]
    )
  }
  return (
    <div className="flex flex-col justify-start gap-y-6">
      <ProductBrandName brand={brand} name={name} mini={false} />

      <ProductPriceTag price={getPriceFromSelectedCurrency()} mini={false} />

      <ProductAttributes
        editMode={true}
        attributes={attributes}
        productId={id}
        mini={false}
      />

      <BaseButton
        onClick={handleAddToCart}
        className="btn-green mt-6 h-12 disabled:bg-gray-400 disabled:text-gray-500"
        disabled={!inStock}
      >
        {inStock ? 'Add to cart' : 'Out of stock'}
      </BaseButton>

      <ProductDescription description={description} />
    </div>
  )
}
