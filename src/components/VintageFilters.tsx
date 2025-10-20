import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'

interface VintageFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export interface FilterState {
  brands: string[]
  conditions: string[]
}

const BRANDS = ['Levi\'s', 'Chanel', 'Gucci', 'Tommy Hilfiger', 'Vintage Band Tees', 'Designer']
const CONDITIONS = ['Excellent', 'Very Good', 'Good', 'Fair']

export const VintageFilters = ({ onFilterChange }: VintageFiltersProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])

  const toggleBrand = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand]
    
    setSelectedBrands(newBrands)
    onFilterChange({ brands: newBrands, conditions: selectedConditions })
  }

  const toggleCondition = (condition: string) => {
    const newConditions = selectedConditions.includes(condition)
      ? selectedConditions.filter(c => c !== condition)
      : [...selectedConditions, condition]
    
    setSelectedConditions(newConditions)
    onFilterChange({ brands: selectedBrands, conditions: newConditions })
  }

  const clearAll = () => {
    setSelectedBrands([])
    setSelectedConditions([])
    onFilterChange({ brands: [], conditions: [] })
  }

  const hasActiveFilters = selectedBrands.length > 0 || selectedConditions.length > 0

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-vintage-dark">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAll}
            className="text-vintage-blue hover:text-vintage-blue/80"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Brand Filters */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-vintage-dark">Brand</h4>
        <div className="flex flex-wrap gap-2">
          {BRANDS.map((brand) => (
            <Badge
              key={brand}
              variant={selectedBrands.includes(brand) ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedBrands.includes(brand)
                  ? 'bg-vintage-blue hover:bg-vintage-blue/90 text-white'
                  : 'hover:border-vintage-blue hover:text-vintage-blue'
              }`}
              onClick={() => toggleBrand(brand)}
            >
              {brand}
              {selectedBrands.includes(brand) && (
                <X className="ml-1 h-3 w-3" />
              )}
            </Badge>
          ))}
        </div>
      </div>

      {/* Condition Filters */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-vintage-dark">Condition</h4>
        <div className="flex flex-wrap gap-2">
          {CONDITIONS.map((condition) => (
            <Badge
              key={condition}
              variant={selectedConditions.includes(condition) ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedConditions.includes(condition)
                  ? 'bg-vintage-yellow hover:bg-vintage-yellow/90 text-vintage-dark'
                  : 'hover:border-vintage-yellow hover:text-vintage-dark'
              }`}
              onClick={() => toggleCondition(condition)}
            >
              {condition}
              {selectedConditions.includes(condition) && (
                <X className="ml-1 h-3 w-3" />
              )}
            </Badge>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            {selectedBrands.length + selectedConditions.length} filter(s) active
          </p>
        </div>
      )}
    </div>
  )
}