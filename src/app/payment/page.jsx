'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const productId = searchParams.get('productId')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }))
    setError(null) // Clear any previous errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    setError(null)

    try {
      // Validate payment details
      if (!validatePaymentDetails()) {
        setError('Please fill all payment details correctly')
        setIsProcessing(false)
        return
      }

      // Simulate payment processing
      const response = await processPayment({
        productId,
        ...paymentDetails
      })

      if (response.success) {
        // Pass order details to confirmation page
        router.push(`/order-confirmation?orderId=${response.transactionId}&amount=${response.amount}`)
      } else {
        setError(response.message || 'Payment failed. Please try again.')
      }
    } catch (error) {
      console.error('Payment error:', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const validatePaymentDetails = () => {
    const { cardNumber, cardName, expiryDate, cvv } = paymentDetails
    return cardNumber.length === 16 && 
           cardName.trim() !== '' && 
           /\d{2}\/\d{2}/.test(expiryDate) && 
           cvv.length === 3
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Card Number</Label>
              <Input 
                type="text" 
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                maxLength={16}
                pattern="\d{16}"
                required
                disabled={isProcessing}
              />
            </div>
            <div>
              <Label>Cardholder Name</Label>
              <Input 
                type="text" 
                name="cardName"
                placeholder="John Doe"
                value={paymentDetails.cardName}
                onChange={handleInputChange}
                required
                disabled={isProcessing}
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Label>Expiry Date</Label>
                <Input 
                  type="text" 
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={paymentDetails.expiryDate}
                  onChange={handleInputChange}
                  maxLength={5}
                  pattern="\d{2}/\d{2}"
                  required
                  disabled={isProcessing}
                />
              </div>
              <div className="w-1/2">
                <Label>CVV</Label>
                <Input 
                  type="text" 
                  name="cvv"
                  placeholder="123"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  maxLength={3}
                  pattern="\d{3}"
                  required
                  disabled={isProcessing}
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Complete Payment'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Mock payment processing function
async function processPayment(paymentData) {
  // Simulate an API call to payment gateway
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate potential payment scenarios
      const randomSuccess = Math.random() > 0.2 // 80% success rate
      if (randomSuccess) {
        resolve({ 
          success: true, 
          transactionId: `ORD-${Math.random().toString(36).substr(2, 9)}`,
          amount: Math.floor(Math.random() * 1000) + 100
        })
      } else {
        resolve({ 
          success: false, 
          message: 'Payment could not be processed. Please check your card details.'
        })
      }
    }, 2000)
  })
}
