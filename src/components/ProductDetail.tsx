import type { Product } from '../services/types'

import ProductDetailContent from './ProductDetailContent'
import ProductImageViewer from './ProductImageViewer'

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="grid grid-cols-[1fr] gap-x-0 gap-y-1 pr-0 md:grid-cols-[2fr_1.2fr] md:gap-[101px] md:pr-24">
      <ProductImageViewer images={product.gallery} name={product.name} />
      <ProductDetailContent product={product} />
    </div>
  )
}
