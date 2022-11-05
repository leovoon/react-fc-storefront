import { useParams } from 'react-router-dom'

import { ErrorComponent } from '../components/ErrorComponent'
import ProductDetail from '../components/ProductDetail'
import { useGetProductByIdQuery } from '../services/products'

export default function Product() {
  const { productId } = useParams<{ productId: string }>()
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(productId || '')

  if (isLoading) return <p>Loading...</p>

  if (error) <ErrorComponent error={error} />

  if (!product) {
    return <p>Product not found</p>
  }

  return <ProductDetail product={product} />
}
