import { useState } from 'react'
import { Link } from 'react-router-dom'
import { allBrands, categories } from '../data/products'

export default function Brands() {
  const [hovered, setHovered] = useState<string | null>(null)

  // Find which category slug a brand belongs to (first match)
  const getBrandLink = (brandName: string): string => {
    for (const cat of categories) {
      const found = cat.brands.find(b => b.brand === brandName)
      if (found) return `/category/${cat.slug}`
    }
    return '/'
  }

  return (
    <section id="brands" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="blob-yellow w-[300px] h-[300px] bottom-0 right-0 opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">🏷️ Our Brands</span>
          <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Brands We Carry
          </h2>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We stock products from the world's most trusted technology manufacturers.
            Click any brand to explore their products.
          </p>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-10">
          {allBrands.map((brand) => {
            const isHovered = hovered === brand.name
            const link = getBrandLink(brand.name)
            return (
              <Link
                key={brand.name}
                to={link}
                onMouseEnter={() => setHovered(brand.name)}
                onMouseLeave={() => setHovered(null)}
                className="card flex flex-col items-center justify-center py-5 px-3 text-center cursor-pointer"
                style={{
                  borderColor: isHovered ? brand.color : 'var(--border)',
                  background: isHovered ? `${brand.color}12` : 'var(--bg-card)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? `0 8px 24px ${brand.color}30` : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* Logo pill */}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-xs mb-2 transition-all duration-200"
                     style={{
                       background: isHovered ? `${brand.color}22` : 'var(--bg-secondary)',
                       color: isHovered ? brand.color : 'var(--text-secondary)',
                       fontSize: brand.logo.length > 4 ? '9px' : brand.logo.length > 2 ? '10px' : '16px',
                     }}>
                  {brand.logo}
                </div>
                <p className="font-bold text-[11px] leading-tight transition-colors duration-200"
                   style={{ color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  {brand.name}
                </p>
                <p className="text-[9px] mt-0.5 leading-tight"
                   style={{ color: 'var(--text-muted)' }}>
                  {brand.cat.split(',')[0]}
                </p>
              </Link>
            )
          })}
        </div>

        {/* Category quick-links */}
        <div className="border-t pt-10" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs font-bold uppercase tracking-widest text-center mb-6"
             style={{ color: 'var(--text-muted)' }}>
            Or browse by category
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:border-current"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-card)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = cat.accentColor
                  e.currentTarget.style.color = cat.accentColor
                  e.currentTarget.style.background = `${cat.accentColor}10`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                <span>{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
