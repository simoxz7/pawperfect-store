import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Star, Heart, Filter } from 'lucide-react'
import { useCart } from '../hooks/useCart'

const ProductsPage = () => {
  const [searchParams] = useSearchParams()
  const { addItem } = useCart()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [selectedCategories, setSelectedCategories] = useState([])

  // Sample product data - in a real app, this would come from an API
  const allProducts = [
    {
      id: 1,
      name: "Premium Donut Pet Bed",
      price: 49.99,
      originalPrice: 69.99,
      image: "/src/assets/premium_donut_pet_bed.webp",
      rating: 4.8,
      reviews: 124,
      category: "beds",
      petType: "dogs",
      badge: "Best Seller",
      description: "Ultra-soft donut bed perfect for small to medium dogs"
    },
    {
      id: 2,
      name: "Interactive Puzzle Toy",
      price: 24.99,
      originalPrice: 29.99,
      image: "/src/assets/interactive_puzzle_toy.webp",
      rating: 4.6,
      reviews: 89,
      category: "toys",
      petType: "dogs",
      badge: "Sale",
      description: "Mental stimulation toy that keeps dogs engaged"
    },
    {
      id: 3,
      name: "Orthopedic Memory Foam Bed",
      price: 79.99,
      originalPrice: 99.99,
      image: "/src/assets/orthopedic_memory_foam_bed.webp",
      rating: 4.9,
      reviews: 156,
      category: "beds",
      petType: "dogs",
      badge: "Premium",
      description: "Therapeutic bed for senior dogs with joint issues"
    },
    {
      id: 4,
      name: "No-Pull Training Harness",
      price: 29.99,
      originalPrice: 34.99,
      image: "/src/assets/no_pull_training_harness.webp",
      rating: 4.7,
      reviews: 203,
      category: "accessories",
      petType: "dogs",
      badge: "Popular",
      description: "Comfortable harness that reduces pulling behavior"
    },
    {
      id: 5,
      name: "Automatic Cat Feeder",
      price: 89.99,
      originalPrice: 109.99,
      image: "/src/assets/automatic_cat_feeder.webp",
      rating: 4.5,
      reviews: 78,
      category: "feeding",
      petType: "cats",
      badge: "Tech",
      description: "Smart feeder with portion control and scheduling"
    },
    {
      id: 6,
      name: "Catnip Infused Scratching Post",
      price: 19.99,
      originalPrice: 24.99,
      image: "/src/assets/catnip_infused_scratching_post.webp",
      rating: 4.4,
      reviews: 92,
      category: "toys",
      petType: "cats",
      badge: "Sale",
      description: "Natural sisal scratching post with organic catnip"
    },
    {
      id: 7,
      name: "Bird Cage Deluxe",
      price: 129.99,
      originalPrice: 149.99,
      image: "/src/assets/bird_cage_deluxe.webp",
      rating: 4.8,
      reviews: 45,
      category: "housing",
      petType: "birds",
      badge: "Premium",
      description: "Spacious cage perfect for medium-sized birds"
    },
    {
      id: 8,
      name: "Aquarium LED Light System",
      price: 59.99,
      originalPrice: 79.99,
      image: "/src/assets/aquarium_led_light_system.webp",
      rating: 4.6,
      reviews: 67,
      category: "accessories",
      petType: "fish",
      badge: "Sale",
      description: "Full spectrum LED lighting for healthy aquatic plants"
    }
  ]

  const categories = [
    { id: "beds", name: "Beds & Furniture" },
    { id: "toys", name: "Toys & Entertainment" },
    { id: "feeding", name: "Food & Feeding" },
    { id: "accessories", name: "Accessories" },
    { id: "housing", name: "Housing & Habitats" },
    { id: "grooming", name: "Grooming & Care" }
  ]

  const petTypes = [
    { id: "dogs", name: "Dogs" },
    { id: "cats", name: "Cats" },
    { id: "birds", name: "Birds" },
    { id: "fish", name: "Fish" },
    { id: "small-pets", name: "Small Pets" },
    { id: "reptiles", name: "Reptiles" }
  ]

  useEffect(() => {
    let filtered = [...allProducts]
    
    // Filter by URL category parameter
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      filtered = filtered.filter(product => product.petType === categoryParam)
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => selectedCategories.includes(product.category))
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        // In a real app, you'd sort by creation date
        break
      default:
        // Featured - keep original order
        break
    }

    setFilteredProducts(filtered)
  }, [searchParams, selectedCategories, priceRange, sortBy])

  const handleCategoryChange = (categoryId, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-6">
              <Filter className="h-5 w-5 mr-2" />
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={(checked) => handleCategoryChange(category.id, checked)}
                    />
                    <label htmlFor={category.id} className="text-sm text-gray-700 cursor-pointer">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-20 px-2 py-1 border rounded text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-20 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Pet Types */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Pet Types</h3>
              <div className="space-y-2">
                {petTypes.map((petType) => (
                  <Link
                    key={petType.id}
                    to={`/products?category=${petType.id}`}
                    className="block text-sm text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    {petType.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {searchParams.get('category') 
                  ? `${searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)} Supplies`
                  : 'All Products'
                }
              </h1>
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <Link to={`/products/${product.id}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform"
                      />
                    </Link>
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
                    <Link to={`/products/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategories([])
                  setPriceRange([0, 200])
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage

