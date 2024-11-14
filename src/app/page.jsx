import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Laptop, Smartphone, Watch, ShoppingCart, User, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to TechGadgets Store
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Your one-stop shop for the latest electronic devices. Discover cutting-edge technology at your fingertips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Laptop className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Laptops</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Powerful and portable computing solutions</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Smartphone className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Smartphones</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Stay connected with the latest mobile technology</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Watch className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Smartwatches</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Wearable tech for fitness and productivity</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <ShoppingCart className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Wide Selection</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Explore our vast range of electronic devices</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <User className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">User-Friendly</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Easy shopping experience for all customers</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Shield className="h-12 w-12 mb-2" />
                <h3 className="text-xl font-bold">Secure Platform</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Shop with confidence on our protected site</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Shopping?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join our community of tech enthusiasts and start exploring the latest gadgets today.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mt-6">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input className="flex-grow" placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TechGadgets Store. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
