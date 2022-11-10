import { useState } from 'react'

/* eslint-disable jsx-a11y/interactive-supports-focus */
export default function ProductImageViewer({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [currentImage, setCurrentImage] = useState(0)
  const handleClickImage = (index: number) => {
    setCurrentImage(index)
  }

  return (
    <div className="grid sm:grid-cols-[0.2fr_1fr] ">
      <div className="order-2 my-2 flex max-h-[550px] w-full  flex-row gap-8 overflow-x-scroll sm:order-1 sm:flex-col sm:overflow-y-scroll">
        {images.map((image, index) => (
          <div
            className="h-20 w-20 shrink-0 cursor-pointer border border-gray-300 bg-gray-400"
            key={index}
            onClick={() => handleClickImage(index)}
            onKeyDown={() => handleClickImage(index)}
            role="button"
          >
            <img
              className="aspect-square h-full  w-full object-cover"
              src={image}
              alt={name}
            />
          </div>
        ))}
      </div>
      <div className="-pl-4 order-1 max-h-[550px] border border-gray-300 sm:order-2">
        <img
          className="aspect-square h-full w-full  object-contain"
          src={images[currentImage]}
          alt={name}
        />
      </div>
    </div>
  )
}
