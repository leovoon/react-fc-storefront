import { get, set } from 'local-storage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSelectedAttributeSet } from '../features/product/productSlice'
import type { AttributeSet } from '../services/types'
import type { RootState } from '../store'

import ProductSwatch from './ProductSwatch'

export default function ProductSwatches({
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
  const dispatch = useDispatch()
  const selectedAttributeSet = useSelector(
    (state: RootState) => state.product.selectedAttributeSet
  )
  const handleOnSelected = (attrId: string, itemId: string) => {
    const selectAttrByProduct = selectedAttributeSet.find(
      (a) => a.pid === productId
    )?.attributes
    const _selectedAttributeSet = selectAttrByProduct?.map((attr) => {
      if (attr.id === attrId) {
        return {
          ...attr,
          items: attr.items.map((item) => {
            if (item.id === itemId) {
              return {
                ...item,
                selected: !item.selected,
              }
            } else {
              return {
                ...item,
                selected: false,
              }
            }
          }),
        }
      } else {
        return attr
      }
    })

    set(productId, _selectedAttributeSet)
    dispatch(
      setSelectedAttributeSet({
        attributes: _selectedAttributeSet!,
        pid: productId,
      })
    )
  }

  useEffect(() => {
    const selectedAttributeSet =
      (get(productId) as AttributeSet[]) || attributes
    if (selectedAttributeSet) {
      dispatch(
        setSelectedAttributeSet({
          attributes: selectedAttributeSet,
          pid: productId,
        })
      )
    }
  }, [])

  const attributesByMode = editMode
    ? selectedAttributeSet.find((attr) => attr.pid === productId)?.attributes
    : attributes

  return (
    <div
      className={`flex flex-col items-start gap-y-2 ${
        mini && 'flex-wrap gap-y-1'
      }`}
    >
      {attributesByMode &&
        attributesByMode.map((attribute) => {
          return (
            <ProductSwatch
              key={attribute.id}
              attribute={attribute}
              onSelected={handleOnSelected}
              mini={mini}
            />
          )
        })}
    </div>
  )
}
