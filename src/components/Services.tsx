const pillars = [
  { icon: '🔒', title: 'Genuine Products',    body: 'We stock only verified, authentic hardware and accessories — no counterfeits.' },
  { icon: '⚡', title: 'Same-Day Pickup',     body: 'Walk in and walk out. Fast service for urgent orders, same day in Lagos.' },
  { icon: '💰', title: 'Best Price Match',    body: 'Find it cheaper elsewhere? We\'ll match or beat it. Bulk discounts available.' },
  { icon: '🛠️', title: 'Expert Guidance',     body: 'Our team helps you pick the right spec for your budget — no upselling.' },
  { icon: '🚚', title: 'Delivery Available',  body: 'We deliver across Lagos. Corporate and bulk orders get priority logistics.' },
  { icon: '🏢', title: 'Corporate Supply',    body: 'Trusted by offices, schools, and businesses for large equipment orders.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="blob-yellow w-[400px] h-[400px] bottom-0 left-[-100px] opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Why Frankdoff 360</span>
          <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
            The smarter way to buy
            <br />
            <span className="shimmer-text">tech in Lagos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div key={p.title} className="card p-6 group cursor-default"
                 style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="text-3xl mb-4">{p.icon}</div>
              <h4 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>{p.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* Testimonial strip */}
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {[
            { quote: 'Got my office laptops in under 2 hours. Fast and genuine!', name: 'Emeka O.', role: 'IT Manager' },
            { quote: 'Best prices in Lagos, hands down. Will keep coming back.', name: 'Aisha M.', role: 'Small Business Owner' },
            { quote: 'They helped me pick the right printer for my print shop.', name: 'Chidi N.', role: 'Print Shop Owner' },
          ].map((t) => (
            <div key={t.name} className="card p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm" style={{ color: 'var(--yellow)' }}>★</span>
                ))}
              </div>
              <p className="text-sm italic leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
