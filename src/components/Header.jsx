import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, Heart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '../hooks/useCart'
import logo from '../assets/pawperfect_logo.png'

const Header = () => {
  const { getTotalItems } = useCart()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center space-x-4">
            <span>Free shipping on orders over $50</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Customer Service: 1-800-PET-LOVE</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="PawPerfect" className="h-12 w-auto" />
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for pet supplies..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-5 w-5 mr-2" />
              Account
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="h-5 w-5 mr-2" />
              Wishlist
            </Button>

            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                {getTotalItems() > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 bg-orange-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-3 border-t">
          <div className="flex items-center space-x-8">
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              All Products
            </Link>
            <Link 
              to="/products?category=dogs" 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Dogs
            </Link>
            <Link 
              to="/products?category=cats" 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Cats
            </Link>
            <Link 
              to="/products?category=birds" 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Birds
            </Link>
            <Link 
              to="/products?category=fish" 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Fish
            </Link>
            <Link 
              to="/products?category=small-pets" 
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Small Pets
            </Link>
            <span className="text-orange-500 font-medium">Sale</span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

