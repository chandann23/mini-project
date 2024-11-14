import { Button } from "@/components/ui/button"
import { ShoppingCart, Truck, Headphones, Shield } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">About TechGadgets</h1>

      <section className="mb-12">
        <p className="text-lg mb-4">
          TechGadgets is your premier destination for cutting-edge electronic devices. Founded in 2024, we've quickly become a leader in providing high-quality laptops, smartphones, smartwatches, and other tech gadgets to customers worldwide.
        </p>
        <p className="text-lg mb-4">
          Our mission is to make the latest technology accessible to everyone, offering a curated selection of products that combine innovation, quality, and value.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose TechGadgets?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <ShoppingCart className="h-6 w-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold">Wide Selection</h3>
              <p>Curated collection of the latest tech from top brands.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Truck className="h-6 w-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold">Fast Shipping</h3>
              <p>Quick and reliable delivery to your doorstep.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Headphones className="h-6 w-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold">Expert Support</h3>
              <p>Knowledgeable team ready to assist you.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 mt-1 text-primary" />
            <div>
              <h3 className="font-semibold">Secure Shopping</h3>
              <p>Your data and transactions are always protected.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Experience the TechGadgets Difference?</h2>
        <Link href="/api/auth/register">
          <Button size="lg">Shop Now</Button>
        </Link>
      </section>
    </div>
  )
}
