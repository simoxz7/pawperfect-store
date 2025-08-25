import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star, Heart, Truck, Shield, ArrowLeft, Plus, Minus } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import premiumDonutPetBed from "../assets/premium_donut_pet_bed.webp"
import interactivePuzzleToy from "../assets/interactive_puzzle_toy.webp"
import orthopedicMemoryFoamBed from "../assets/orthopedic_memory_foam_bed.webp"
import noPullTrainingHarness from "../assets/no_pull_training_harness.webp"

const ProductDetailPage = () => {
  const { id } = useParams()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Sample product data - in a real app, this would be fetched based on the ID
  const product = {
    id: parseInt(id),
    name: "Premium Donut Pet Bed",
    price: 49.99,
    originalPrice: 69.99,
    images: [
      premiumDonutPetBed,
      premiumDonutPetBed,
      premiumDonutPetBed,
      premiumDonutPetBed
    ],
    rating: 4.8,
    reviews: 124,
    category: "beds",
    petType: "dogs",
    badge: "Best Seller",
    inStock: true,
    description: "Give your furry friend the ultimate comfort with our Premium Donut Pet Bed. This ultra-soft, plush bed features raised edges that provide a sense of security and warmth, perfect for pets who love to curl up while they sleep.",
    features: [
      "Ultra-soft plush fabric for maximum comfort",
      "Raised edges provide security and warmth",
      "Machine washable for easy maintenance",
      "Non-slip bottom keeps bed in place",
      "Available in multiple sizes and colors",
      "Hypoallergenic materials safe for sensitive pets"
    ],
    specifications: {
      "Material": "Premium plush fabric with polyester fill",
      "Dimensions": "24\" x 24\" x 6\"",
      "Weight": "2.5 lbs",
      "Care Instructions": "Machine wash cold, tumble dry low",
      "Suitable For": "Small to medium dogs up to 40 lbs",
      "Color Options": "Gray, Brown, Navy, Beige"
    },
    shipping: {
      "Standard Shipping": "5-7 business days - FREE on orders over $50",
      "Express Shipping": "2-3 business days - $9.99",
      "Overnight Shipping": "Next business day - $19.99"
    }
  }

  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      title: "My dog loves it!",
      content: "This bed is amazing! My golden retriever absolutely loves curling up in it. The quality is excellent and it\'s held up well to daily use."
    },
    {
      id: 2,
      author: "Mike R.",
      rating: 4,
      date: "1 month ago",
      title: "Great quality, fast shipping",
      content: "Very well made bed. My beagle took to it immediately. Only wish it came in more color options."
    },
    {
      id: 3,
      author: "Jennifer L.",
      rating: 5,
      date: "3 weeks ago",
      title: "Perfect for anxious dogs",
      content: "The raised edges really help my rescue dog feel secure. She sleeps so much better now. Highly recommend!"
    }
  ]

  const relatedProducts = [
    {
      id: 2,
      name: "Interactive Puzzle Toy",
      price: 24.99,
      image: interactivePuzzleToy,
      rating: 4.6
    },
    {
      id: 4,
      name: "No-Pull Training Harness",
      price: 29.99,
      image: noPullTrainingHarness,
      rating: 4.7
    },
    {
      id: 3,
      name: "Orthopedic Memory Foam Bed",
      price: 79.99,
      image: orthopedicMemoryFoamBed,
      rating: 4.9
    }
  ]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-orange-500">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-orange-500">Products</Link>
        <span>/</span>
        <Link to={`/products?category=${product.petType}`} className="hover:text-orange-500">
          {product.petType.charAt(0).toUpperCase() + product.petType.slice(1)}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Back button */}
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/products">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            {product.badge && (
              <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                {product.badge}
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
            )}
            {product.originalPrice && (
              <Badge variant="destructive">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </Badge>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button 
                size="lg" 
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-gray-700">Free shipping over $50</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-gray-700">30-day return policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
              <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="font-medium text-gray-900">{key}:</span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="shipping" className="mt-6">
            <div className="space-y-4">
              {Object.entries(product.shipping).map(([method, details]) => (
                <div key={method} className="flex justify-between py-3 border-b">
                  <span className="font-medium text-gray-900">{method}:</span>
                  <span className="text-gray-700">{details}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{review.author}</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
                  <p className="text-gray-700">{review.content}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`}>
              <div className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${relatedProduct.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage


