import React from 'react'

import type { Attribute, AttributeSet } from '../services/types'

export default function ProductSwatch({
  attribute,
  onSelected,
  mini,
}: {
  attribute: AttributeSet
  onSelected: (attrId: string, itemId: string) => void
  mini: boolean
}) {
  const selectedClass = (type: string) => {
    if (type === 'text') {
      return 'bg-gray-900 text-white'
    }
    if (type === 'swatch') {
      return 'outline outline-green-500'
    }
  }
  return (
    <>
      <div
        className={`mt-4 font-robotoCondensed text-lg font-bold uppercase leading-4 text-gray-900 ${
          mini && 'font-raleway text-sm font-normal capitalize leading-4'
        }`}
      >
        {attribute.name}:
      </div>
      <div className="flex flex-row flex-wrap items-end gap-3 ">
        {attribute.items?.map((item: Attribute) => {
          return (
            <button
              title={item.displayValue}
              onClick={() => onSelected(attribute.id, item.id)}
              className={`
              min-w-max
              ${
                mini &&
                'flex h-6 max-h-6 max-w-[24px] items-center justify-center p-1'
              }
                            ${
                              attribute.type === 'text'
                                ? 'font-sourceSansPro inline-block h-12 w-16 cursor-pointer border border-gray-300 bg-white text-center text-base leading-4 text-gray-900 hover:bg-gray-900 hover:text-white'
                                : ''
                            }
                            ${
                              attribute.type === 'swatch'
                                ? 'h-8 w-8 cursor-pointer border border-gray-400 outline-offset-2 hover:outline hover:outline-green-500'
                                : ''
                            }
                            ${
                              item.selected ? selectedClass(attribute.type) : ''
                            }
                            
                            `}
              style={{
                backgroundColor: attribute.type === 'swatch' ? item.value : '',
              }}
              key={item.id}
            >
              {attribute.type === 'text' && <span>{item.value}</span>}
            </button>
          )
        })}
      </div>
    </>
  )
}
