import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Truck, Shield, Heart, ArrowRight } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import heroBanner1 from '../assets/hero_banner_1.png'
import heroBanner2 from '../assets/hero_banner_2.png'

const HomePage = () => {
  const { addItem } = useCart()

  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Donut Pet Bed",
      price: 49.99,
      originalPrice: 69.99,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 124,
      category: "beds",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Interactive Puzzle Toy",
      price: 24.99,
      originalPrice: 34.99,
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 89,
      category: "toys",
      badge: "Sale"
    },
    {
      id: 3,
      name: "Orthopedic Memory Foam Bed",
      price: 79.99,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 156,
      category: "beds",
      badge: "Premium"
    },
    {
      id: 4,
      name: "No-Pull Training Harness",
      price: 29.99,
      originalPrice: 39.99,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 203,
      category: "accessories",
      badge: "Popular"
    }
  ]

  const categories = [
    { name: "Dogs", icon: "🐕", link: "/products?category=dogs", count: "500+ items" },
    { name: "Cats", icon: "🐱", link: "/products?category=cats", count: "400+ items" },
    { name: "Birds", icon: "🐦", link: "/products?category=birds", count: "150+ items" },
    { name: "Fish", icon: "🐠", link: "/products?category=fish", count: "200+ items" },
    { name: "Small Pets", icon: "🐹", link: "/products?category=small-pets", count: "100+ items" },
    { name: "Reptiles", icon: "🦎", link: "/products?category=reptiles", count: "80+ items" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Everything Your Pet Needs,{' '}
                <span className="text-orange-500">Delivered with Love</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover premium pet supplies, from nutritious food to cozy beds and fun toys. 
                Your furry friends deserve the best, and we deliver it right to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                  asChild
                >
                  <Link to="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroBanner1} 
                alt="Happy pets with supplies" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-4">
              <Truck className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                <p className="text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Shield className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Quality Guarantee</h3>
                <p className="text-gray-600">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Heart className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Pet Approved</h3>
                <p className="text-gray-600">Loved by 50,000+ pets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Pet Type
            </h2>
            <p className="text-xl text-gray-600">
              Find everything your pet needs in one place
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked favorites that pets and owners love
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.badge && (
                      <Badge className="absolute top-2 left-2 bg-orange-500 text-white">
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      onClick={() => addItem(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated with Pet Care Tips
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get exclusive offers and expert advice delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

