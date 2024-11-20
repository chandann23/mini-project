'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Smartphone, Watch, ArrowLeft } from 'lucide-react'
import { fetchProductById } from '@/utils/api'


// Replace this with an actual API call in your application

export default function ProductDetailsPage() {
  const router = useRouter()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProductById(id)
        setProduct(fetchedProduct)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [id])

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Laptops':
        return <Laptop className="h-6 w-6" />
      case 'Smartphones':
        return <Smartphone className="h-6 w-6" />
      case 'Smartwatches':
        return <Watch className="h-6 w-6" />
      default:
        return null
    }
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="outline" 
        className="mb-8" 
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Button>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-3xl">
            {product.name}
            {getCategoryIcon(product.category)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              className="w-full md:w-1/2 h-96 object-cover rounded-lg"
            />
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
              <p>{product.quantity} in stock</p>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-gray-700">{product.description}</p>
              <Button
                  onClick={() => router.push(`/payment?productId=${id}`)}
                className="w-full">Buy Now</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

