import React from 'react'

import caret from '../assets/caret.svg'
export default function ImageSlider({
  images,
  mini,
}: {
  images: string[]
  mini: boolean
}) {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const handlePrevious = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleNext = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <div className={`relative h-[288px] w-48  ${mini && 'h-full w-32'}`}>
      <img
        className="h-full w-full border border-gray-300 object-contain"
        src={images[currentSlide]}
        alt="product"
      />
      {images.length > 1 && (
        <div
          className={`absolute bottom-0 right-0 m-4 flex gap-y-2 ${
            mini && 'm-2'
          } `}
        >
          <button
            className={`grid h-8 w-8 place-items-center bg-black/50 hover:bg-black/40  ${
              mini && 'h-6 w-6'
            }`}
            onClick={handlePrevious}
            title={'Previous'}
          >
            <img
              src={caret}
              alt="previous"
              style={{ transform: 'rotate(-180deg)' }}
            />
          </button>
          <button
            className={`grid h-8 w-8 place-items-center bg-black/50 hover:bg-black/40 ${
              mini && 'h-6 w-6'
            }`}
            onClick={handleNext}
            title={'Next'}
          >
            <img src={caret} alt="next" />
          </button>
        </div>
      )}
    </div>
  )
}
