import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
export const dynamic = 'force-dynamic'

import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import SearchBox from './components/SearchBox'
import christianArticles from '@/data'
import ArticleProvider from "../app/context/ArticleContext"
import Footer from './components/Footer'
import ProductProvider from './context/ProductContext'
import CheckoutProvider from './context/CheckoutContext'
import CartLink from './components/CartLink'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Talitha',
  description: 'A web app to bring people closer to God',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CheckoutProvider>
          <div className="flex flex-col min-h-screen">
            <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 lg:px-8 py-4 gap-4">
              {/* Logo and Mobile Menu */}
              <div className="flex items-center justify-between w-full sm:w-auto">
                <Link href="/" className="hover:opacity-90 transition-opacity">
                  <Image 
                    src="/images/talitha_logo4(1).png"
                    width={100}
                    height={100}
                    alt='Talitha Logo'
                    className="w-16 h-auto sm:w-20 lg:w-24"
                  />
                </Link>

                {/* Mobile Auth Buttons */}
                <div className="sm:hidden flex items-center gap-2">
                  <SignedOut>
                    <div className="flex gap-2">
                      <div className="p-2 bg-lime-300 text-white rounded-lg shadow-md cursor-pointer text-sm hover:bg-lime-400 transition-colors">
                        <SignInButton />
                      </div>
                      <div className="p-2 bg-lime-300 text-white rounded-lg shadow-md cursor-pointer text-sm hover:bg-lime-400 transition-colors">
                        <SignUpButton />
                      </div>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <div className="z-50">
                      <UserButton />
                    </div>
                  </SignedIn>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Navigation Links */}
                <nav className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6">
                  <Link 
                    href="/market" 
                    className="text-sm lg:text-base hover:text-lime-600 transition-colors w-full sm:w-auto"
                  >
                    Market
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-sm lg:text-base hover:text-lime-600 transition-colors w-full sm:w-auto"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/ticket" 
                    className="text-sm lg:text-base hover:text-lime-600 transition-colors w-full sm:w-auto"
                  >
                    Events
                  </Link>
                  <CartLink />
                </nav>

                {/* Search Box */}
                <div className="w-full sm:max-w-xs lg:max-w-md">
                  <SearchBox data={christianArticles} />
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden sm:flex items-center gap-2">
                  <SignedOut>
                    <div className="flex gap-2">
                      <div className="p-2 sm:p-3 bg-lime-300 text-white rounded-lg shadow-md cursor-pointer text-sm sm:text-base hover:bg-lime-400 transition-colors">
                        <SignInButton />
                      </div>
                      <div className="p-2 sm:p-3 bg-lime-300 text-white rounded-lg shadow-md cursor-pointer text-sm sm:text-base hover:bg-lime-400 transition-colors">
                        <SignUpButton />
                      </div>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <div className="z-50">
                      <UserButton />
                    </div>
                  </SignedIn>
                </div>
              </div>
            </header>

            <ProductProvider>
              <ArticleProvider>
                <main className="flex-1">{children}</main>
              </ArticleProvider>
            </ProductProvider>

            <Footer />
          </div>
          </CheckoutProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}