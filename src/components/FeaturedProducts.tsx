import { Link } from 'react-router-dom'
import { featuredProducts } from '../data/products'

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="blob-blue w-[300px] h-[300px] top-0 right-[-60px] opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">⭐ Handpicked</span>
          <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Featured Products
          </h2>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Premium picks our team recommends — exceptional specs, outstanding value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/category/${p.category}`}
              className="card group overflow-hidden cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Wide image banner */}
              <div className="relative h-52 flex items-center justify-center overflow-hidden"
                   style={{ background: `linear-gradient(135deg, var(--blue-dim), var(--bg-card))` }}>
                <img src={p.image} alt={p.name}
                     className="w-full h-full object-contain p-5 transition-transform duration-700 group-hover:scale-105" />
                {/* Featured ribbon */}
                <div className="absolute top-0 right-0 px-4 py-1.5 text-[10px] font-extrabold text-white tracking-wider"
                     style={{ background: 'var(--blue)', borderRadius: '0 16px 0 16px' }}>
                  FEATURED
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1"
                       style={{ color: 'var(--blue)' }}>{p.brand}</p>
                    <h3 className="font-extrabold text-base leading-snug"
                        style={{ color: 'var(--text-primary)' }}>{p.name}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-extrabold text-base" style={{ color: 'var(--text-primary)' }}>{p.price}</p>
                    {p.originalPrice && (
                      <p className="text-xs line-through mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {p.originalPrice}
                      </p>
                    )}
                  </div>
                </div>

                {/* All specs */}
                <ul className="space-y-1.5 mb-5">
                  {p.specs.map(s => (
                    <li key={s} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--blue)' }}/>
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="w-full text-center text-xs font-bold py-2.5 rounded-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
                     style={{ background: 'var(--blue)', color: '#fff' }}>
                  View & Enquire →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
