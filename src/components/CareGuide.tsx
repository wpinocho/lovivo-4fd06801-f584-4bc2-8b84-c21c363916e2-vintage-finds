import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Droplet, Wind, Sun } from 'lucide-react'

const CARE_TIPS = [
  {
    icon: Droplet,
    title: 'Gentle Washing',
    description: 'Hand wash or use delicate cycle for vintage pieces. Cold water preserves fabric integrity.',
    color: 'text-vintage-blue'
  },
  {
    icon: Wind,
    title: 'Air Dry',
    description: 'Always air dry vintage clothing. Avoid tumble dryers to prevent shrinkage and damage.',
    color: 'text-vintage-blue'
  },
  {
    icon: Sun,
    title: 'Proper Storage',
    description: 'Store in cool, dry places away from direct sunlight. Use padded hangers for delicate items.',
    color: 'text-vintage-yellow'
  },
  {
    icon: Sparkles,
    title: 'Professional Care',
    description: 'For designer pieces and delicate fabrics, consider professional dry cleaning.',
    color: 'text-vintage-yellow'
  }
]

export const CareGuide = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-vintage-blue/5 via-white to-vintage-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vintage-dark mb-4">
            Vintage Care Guide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep your vintage treasures looking their best with our expert care tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARE_TIPS.map((tip, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-vintage-blue transition-all duration-300 vintage-card-hover"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-full bg-gradient-to-br from-vintage-blue/10 to-vintage-yellow/10`}>
                    <tip.icon className={`h-8 w-8 ${tip.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-vintage-dark mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-vintage-dark text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-3">
                Need More Help?
              </h3>
              <p className="text-white/80 mb-4">
                Our vintage experts are here to help you care for your unique pieces. 
                Each item comes with specific care instructions.
              </p>
              <p className="text-sm text-vintage-yellow">
                💡 Pro tip: Always check the care label before washing
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}