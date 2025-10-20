import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingBag, Tag } from 'lucide-react'

interface VintageHeroProps {
  onExploreClick: () => void
}

export const VintageHero = ({ onExploreClick }: VintageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-vintage-dark via-vintage-blue to-vintage-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FDE047' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-vintage-yellow text-vintage-dark px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Sustainable Fashion
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Buy & Sell
              <span className="block text-vintage-yellow mt-2">
                Vintage Finds
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl">
              Discover unique secondhand fashion pieces with history and character. 
              From designer vintage to 90s streetwear, find your perfect style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onExploreClick}
                className="bg-vintage-yellow hover:bg-vintage-yellow/90 text-vintage-dark font-semibold text-lg px-8 py-6 group"
              >
                Explore Finds
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-vintage-dark font-semibold text-lg px-8 py-6"
              >
                Sell Your Items
                <Tag className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-vintage-yellow">5K+</div>
                <div className="text-sm text-white/70">Unique Items</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vintage-yellow">98%</div>
                <div className="text-sm text-white/70">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vintage-yellow">2K+</div>
                <div className="text-sm text-white/70">Happy Sellers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl vintage-card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop" 
                  alt="Vintage fashion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl vintage-card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop" 
                  alt="Vintage accessories"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl vintage-card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop" 
                  alt="Vintage denim"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl vintage-card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop" 
                  alt="Vintage dress"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}