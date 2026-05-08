import { useParams, Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import { categories } from '../data/products'
import type { Product, BrandGroup } from '../data/products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Props { dark?: boolean; onToggle: () => void }

function ProductCard({ product }: { product: Product }) {
  const badgeColors: Record<string, string> = {
    'Best Seller': '#F5C518',
    'Featured':    '#1d7ef5',
    'Hot Deal':    '#ef4444',
    'New':         '#22c55e',
  }
  const bc = product.badge ? badgeColors[product.badge] : null

  return (
    <div className="card group overflow-hidden flex flex-col" style={{ opacity: product.inStock ? 1 : 0.65 }}>
      {/* Image */}
      <div className="relative h-44 flex items-center justify-center p-4 overflow-hidden"
           style={{ background: 'var(--bg-secondary)' }}>
        <img src={product.image} alt={product.name}
             className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ background: bc! }}>
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center"
               style={{ background: 'rgba(0,0,0,0.4)' }}>
            <span className="text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>{product.brand}</p>
        <h4 className="font-bold text-sm mb-3 leading-snug" style={{ color: 'var(--text-primary)' }}>{product.name}</h4>

        {/* Specs */}
        <ul className="mb-4 flex flex-col gap-1.5">
          {product.specs.slice(0, 3).map(s => (
            <li key={s} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--blue)' }}/>
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-extrabold text-lg" style={{ color: 'var(--text-primary)' }}>{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs line-through" style={{ color: 'var(--text-muted)' }}>{product.originalPrice}</span>
            )}
          </div>
          <a href="#contact"
             className="w-full block text-center text-xs font-bold py-2.5 rounded-xl transition-all duration-200"
             style={{ background: product.inStock ? 'var(--blue)' : 'var(--bg-card)', color: product.inStock ? '#fff' : 'var(--text-muted)', cursor: product.inStock ? 'pointer' : 'not-allowed' }}>
            {product.inStock ? 'Enquire / Order' : 'Out of Stock'}
          </a>
        </div>
      </div>
    </div>
  )
}

function BrandSection({ group }: { group: BrandGroup }) {
  return (
    <div id={`brand-${group.brand.toLowerCase().replace(/\s/g,'-')}`} className="mb-16 scroll-mt-24">
      {/* Brand header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-sm text-white shrink-0"
             style={{ background: `linear-gradient(135deg, ${group.color}, ${group.color}99)` }}>
          {group.logo.length > 2 ? group.logo.slice(0,2) : group.logo}
        </div>
        <div>
          <h3 className="font-extrabold text-2xl" style={{ color: 'var(--text-primary)' }}>{group.brand}</h3>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{group.products.length} products available</p>
        </div>
        <div className="ml-auto h-px flex-1 max-w-xs" style={{ background: 'var(--border)' }} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {group.products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}

export default function CategoryPage({ dark, onToggle }: Props) {
  const { slug } = useParams<{ slug: string }>()
  const category = categories.find(c => c.slug === slug)
  const [activeBrand, setActiveBrand] = useState<string>('all')
  const allRef = useRef<HTMLDivElement>(null)

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
        <Navbar dark={dark} onToggle={onToggle} />
        <p className="text-2xl font-bold mt-20" style={{ color: 'var(--text-primary)' }}>Category not found</p>
        <Link to="/" className="btn-primary mt-6">← Back to Home</Link>
      </div>
    )
  }

  const allProducts: Product[] = category.brands.flatMap(b => b.products)
  const displayedBrands = activeBrand === 'all' ? category.brands : category.brands.filter(b => b.brand === activeBrand)

  const scrollToBrand = (brand: string) => {
    setActiveBrand(brand)
    if (brand === 'all') {
      allRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    setTimeout(() => {
      const el = document.getElementById(`brand-${brand.toLowerCase().replace(/\s/g, '-')}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar dark={dark} onToggle={onToggle} />

      {/* Hero banner */}
      <div className="relative overflow-hidden pt-20" style={{ background: 'var(--bg-secondary)' }}>
        <div className="blob-blue w-[400px] h-[400px] top-0 right-0 opacity-30" />
        <div className="max-w-6xl mx-auto px-6 py-14 relative">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold mb-6 transition-colors"
                    style={{ color: 'var(--text-muted)' }}>
                ← Back to Home
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{category.icon}</span>
                <h1 className="font-extrabold text-4xl md:text-5xl" style={{ color: 'var(--text-primary)' }}>
                  {category.name}
                </h1>
              </div>
              <p className="text-base max-w-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                {category.description}
              </p>
              <p className="text-sm font-semibold italic" style={{ color: category.accentColor }}>
                "{category.tagline}"
              </p>
              <div className="flex gap-6 mt-8">
                <div>
                  <p className="font-extrabold text-2xl" style={{ color: 'var(--text-primary)' }}>{allProducts.length}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Products Listed</p>
                </div>
                <div>
                  <p className="font-extrabold text-2xl" style={{ color: 'var(--text-primary)' }}>{category.brands.length}</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Brands Available</p>
                </div>
                <div>
                  <p className="font-extrabold text-2xl" style={{ color: 'var(--text-primary)' }}>
                    {allProducts.filter(p => p.inStock).length}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>In Stock</p>
                </div>
              </div>
            </div>
            <div className="w-64 h-48 flex items-center justify-center opacity-80">
              <img src={category.image} alt={category.name} className="w-full h-full object-contain float" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky brand nav */}
      <div className="sticky top-16 z-40 border-b"
           style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(16px)', borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => scrollToBrand('all')}
              className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
              style={{
                background: activeBrand === 'all' ? category.accentColor : 'var(--bg-card)',
                color: activeBrand === 'all' ? '#fff' : 'var(--text-secondary)',
                border: `1px solid ${activeBrand === 'all' ? category.accentColor : 'var(--border)'}`,
              }}>
              All Brands ({allProducts.length})
            </button>
            {category.brands.map(b => (
              <button
                key={b.brand}
                onClick={() => scrollToBrand(b.brand)}
                className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200"
                style={{
                  background: activeBrand === b.brand ? b.color : 'var(--bg-card)',
                  color: activeBrand === b.brand ? '#fff' : 'var(--text-secondary)',
                  border: `1px solid ${activeBrand === b.brand ? b.color : 'var(--border)'}`,
                }}>
                {b.brand} ({b.products.length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products content */}
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* All brands section (always visible when "all" selected) */}
        {activeBrand === 'all' && (
          <div ref={allRef} className="mb-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 rounded-full" style={{ background: category.accentColor }} />
              <h2 className="font-extrabold text-2xl" style={{ color: 'var(--text-primary)' }}>
                All {category.name} — Every Brand
              </h2>
              <span className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${category.accentColor}18`, color: category.accentColor }}>
                {allProducts.length} items
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {allProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
            <div className="my-16 h-px" style={{ background: 'var(--border)' }} />
          </div>
        )}

        {/* Per-brand sections */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-8 rounded-full" style={{ background: category.accentColor }} />
            <h2 className="font-extrabold text-2xl" style={{ color: 'var(--text-primary)' }}>
              {activeBrand === 'all' ? 'Browse by Brand' : `${activeBrand} Products`}
            </h2>
          </div>
          {displayedBrands.map(group => (
            <BrandSection key={group.brand} group={group} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border"
             style={{ background: 'var(--blue-dim)', borderColor: 'var(--border-accent)' }}>
          <div>
            <p className="font-bold text-xl mb-1" style={{ color: 'var(--text-primary)' }}>
              Don't see what you need?
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              We source any {category.name.toLowerCase()} on request. Contact us with your specs.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link to="/" className="btn-ghost text-sm">← Back to Home</Link>
            <a href="/#contact" className="btn-primary text-sm">Request a Product →</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
