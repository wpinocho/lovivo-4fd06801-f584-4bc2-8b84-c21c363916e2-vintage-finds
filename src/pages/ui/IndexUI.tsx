import { useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { CollectionCard } from '@/components/CollectionCard'
import { FloatingCart } from '@/components/FloatingCart'
import { NewsletterSection } from '@/components/NewsletterSection'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { VintageHero } from '@/components/VintageHero'
import { VintageFilters, type FilterState } from '@/components/VintageFilters'
import { CareGuide } from '@/components/CareGuide'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic

  const [filters, setFilters] = useState<FilterState>({ brands: [], conditions: [] })

  const handleExploreClick = () => {
    const productsSection = document.getElementById('products-section')
    productsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <VintageHero onExploreClick={handleExploreClick} />

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-vintage-dark mb-4">
                Curated Collections
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked vintage pieces organized by style, era, and vibe
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <div key={collection.id} className="animate-fade-in">
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section with Filters */}
      <section id="products-section" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-vintage-yellow/20 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-vintage-blue" />
              <span className="text-sm font-semibold text-vintage-dark">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name 
                  : 'All Vintage Finds'
                }
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vintage-dark mb-4">
              {selectedCollectionId 
                ? `${collections.find(c => c.id === selectedCollectionId)?.name} Collection` 
                : 'Featured Vintage Pieces'
              }
            </h2>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="mt-4 border-vintage-blue text-vintage-blue hover:bg-vintage-blue hover:text-white"
              >
                See All Products
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <VintageFilters onFilterChange={setFilters} />
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-muted rounded-lg h-96 animate-pulse"></div>
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="animate-fade-in">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border-2 border-dashed border-gray-200">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-vintage-dark mb-2">
                    No items found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or browse all products
                  </p>
                  {selectedCollectionId && (
                    <Button 
                      onClick={handleShowAllProducts}
                      className="bg-vintage-blue hover:bg-vintage-blue/90"
                    >
                      View All Products
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Care Guide Section */}
      <CareGuide />

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}