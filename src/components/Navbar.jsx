// components/Navbar.js
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import MobileMenu from '@/components/MobileScreen'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';


const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
              <ShoppingCart className="h-6 w-6 mr-2" />
              TechGadgets
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
              About
            </Link>
            {user ? <>
              <Link
                href="/api/auth/logout"
                className={buttonVariants({ size: "default", variant: "ghost" })}>
                Sign Out
              </Link>

              <div className='h-8 w-px bg-zinc-200 hidden sm:block' />
              <ShoppingCart className="h-6 w-6 mr-2" />
            </> : <>
              <Link
                href="/api/auth/register"
                className={buttonVariants({ size: "default", variant: "ghost" })}>
                Sign Up
              </Link>
              <Link
                href="/api/auth/login"
                className={buttonVariants({ size: "default", variant: "ghost" })}>
                Login
              </Link>

              <div className='h-8 w-px bg-zinc-200 hidden sm:block' />
              <Link
                href="/"
                className={buttonVariants({ size: "default", variant: "outline" })}>
                Admin
              </Link>
            </>}
          </div>
          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

