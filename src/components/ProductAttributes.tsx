import type { AttributeSet } from '../services/types'

import ProductSwatches from './ProductSwatches'

export default function ProductAttributes({
  attributes,
  productId,
  editMode,
  mini,
}: {
  attributes: AttributeSet[]
  productId: string
  editMode: boolean
  mini: boolean
}) {
  return (
    <ProductSwatches
      attributes={attributes}
      productId={productId}
      editMode={editMode}
      mini={mini}
    />
  )
}
