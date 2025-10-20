import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Sparkles } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white border-b border-gray-200 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-vintage-blue to-vintage-yellow p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-vintage-dark">VintageVibe</div>
                <div className="text-xs text-muted-foreground">Secondhand Fashion</div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-vintage-blue transition-colors font-medium"
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-vintage-blue transition-colors font-medium"
              >
                Blog
              </Link>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-vintage-blue transition-colors font-medium"
              >
                Sell
              </a>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-vintage-blue/10"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5 text-vintage-blue" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-vintage-yellow text-vintage-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-vintage-dark">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-vintage-dark text-white py-12 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-vintage-blue to-vintage-yellow p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">VintageVibe</div>
                <div className="text-xs text-white/70">Secondhand Fashion</div>
              </div>
            </div>
            <p className="text-white/70 mb-4 max-w-sm">
              Your trusted marketplace for authentic vintage and secondhand fashion. 
              Sustainable style with character and history.
            </p>
            <SocialLinks />
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Shop</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                All Items
              </Link>
              <a 
                href="#" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                Designer Vintage
              </a>
              <a 
                href="#" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                90s Streetwear
              </a>
              <a 
                href="#" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                Vintage Denim
              </a>
            </div>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Info</h3>
            <div className="space-y-2">
              <Link 
                to="/blog" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                Blog
              </Link>
              <a 
                href="#" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                About Us
              </a>
              <a 
                href="#" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                Sell With Us
              </a>
              <a 
                href="#" 
                className="block text-white/70 hover:text-vintage-yellow transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            &copy; 2024 VintageVibe. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-white/70 hover:text-vintage-yellow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-vintage-yellow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}