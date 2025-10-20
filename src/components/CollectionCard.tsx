import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'
import { ArrowRight } from 'lucide-react'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-2 border-gray-200 overflow-hidden vintage-card-hover group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative">
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vintage-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              No image
            </div>
          )}
          
          {collection.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-vintage-yellow text-vintage-dark text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                ✨ Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-vintage-dark font-bold text-xl mb-2 line-clamp-1 group-hover:text-vintage-blue transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full border-2 border-vintage-blue text-vintage-blue hover:bg-vintage-blue hover:text-white font-semibold group/btn"
            onClick={() => onViewProducts(collection.id)}
          >
            View Collection
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}