import { useParams } from 'react-router-dom'

import { ErrorComponent } from '../components/ErrorComponent'
import ProductCard from '../components/ProductCard'
import ProductCardGrid from '../components/ProductCardGrid'
import { useGetProductsQuery } from '../services/products'
export default function Products() {
  const params = useParams<{ category: string }>()

  const {
    data: category,
    isLoading,
    error,
  } = useGetProductsQuery(params.category || '')

  if (isLoading) return <p>Loading...</p>
  if (error) <ErrorComponent error={error} />
  if (!category) {
    return <p>Category not found</p>
  }
  return (
    <div className="relative">
      <h1 className="text-2xl font-normal capitalize leading-[160%] text-gray-900">
        {category.name}
      </h1>

      <ProductCardGrid>
        {category?.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductCardGrid>
    </div>
  )
}
