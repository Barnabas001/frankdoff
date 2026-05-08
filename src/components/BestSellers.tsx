import { Link } from 'react-router-dom'
import { bestSellers } from '../data/products'

const badgeColors: Record<string, string> = {
  'Best Seller': '#F5C518',
  'Featured':    '#1d7ef5',
  'Hot Deal':    '#ef4444',
  'New':         '#22c55e',
}

export default function BestSellers() {
  return (
    <section id="bestsellers" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="blob-yellow w-[350px] h-[350px] top-0 left-[-80px] opacity-40" />
      <div className="blob-blue  w-[280px] h-[280px] bottom-0 right-0 opacity-35" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="section-label">🔥 Trending Now</span>
            <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Best Sellers
            </h2>
            <p className="mt-3 text-sm max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Our most popular products — trusted by hundreds of customers across Lagos.
            </p>
          </div>
          <Link to="/category/laptops" className="btn-ghost whitespace-nowrap text-sm">
            View All Products →
          </Link>
        </div>

        {/* Scroll row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestSellers.map((p) => {
            const bc = p.badge ? badgeColors[p.badge] : null
            return (
              <Link
                key={p.id}
                to={`/category/${p.category}`}
                className="card group overflow-hidden flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-36 flex items-center justify-center p-3 overflow-hidden"
                     style={{ background: 'var(--bg-secondary)' }}>
                  <img src={p.image} alt={p.name}
                       className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                  {p.badge && (
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ background: bc! }}>
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-1"
                     style={{ color: 'var(--text-muted)' }}>{p.brand}</p>
                  <p className="font-bold text-sm leading-snug mb-2"
                     style={{ color: 'var(--text-primary)' }}>{p.name}</p>
                  <p className="text-xs mb-3 line-clamp-1" style={{ color: 'var(--text-secondary)' }}>
                    {p.specs[0]}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-extrabold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {p.price}
                    </span>
                    {p.originalPrice && (
                      <span className="text-[10px] line-through" style={{ color: 'var(--text-muted)' }}>
                        {p.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 w-full text-center text-xs font-bold py-2 rounded-xl transition-all duration-200 group-hover:opacity-90"
                       style={{ background: 'var(--blue)', color: '#fff' }}>
                    Enquire →
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
