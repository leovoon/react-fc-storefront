export default function ProductBrandName({
  brand,
  name,
  mini = false,
}: {
  brand: string
  name: string
  mini?: boolean
}) {
  return (
    <div>
      <h1
        className={`mb-4 text-3xl font-semibold leading-7 text-gray-900 ${
          mini && 'text-base font-light leading-[80%]'
        }`}
      >
        {brand}
      </h1>
      <h2
        className={`text-base font-normal leading-7 text-gray-900 sm:text-2xl  ${
          mini && 'text-base font-light leading-[80%]'
        }`}
      >
        {name}
      </h2>
    </div>
  )
}
