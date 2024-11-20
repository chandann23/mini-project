'use client'

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmation() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const orderId = searchParams.get('orderId')
  const amount = searchParams.get('amount')

  if (!orderId) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <Card className="max-w-md text-center">
          <CardContent className="space-y-4 p-6">
            <p>No order details found.</p>
            <Button 
              onClick={() => router.push('/products')}
              className="w-full"
            >
              Back to Products
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <Card className="max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center space-x-2">
            <CheckCircle className="text-green-500 h-8 w-8" />
            <span>Order Confirmed</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div>
            <p className="text-gray-600">Order Number:</p>
            <p className="font-bold text-xl">{orderId}</p>
          </div>
          <div>
            <p className="text-gray-600">Order Date:</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Total Amount:</p>
            <p className="text-2xl font-bold">${amount}</p>
          </div>
          <Button 
            onClick={() => router.push('/dashboard')}
            className="w-full"
          >
            Continue Shopping
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
