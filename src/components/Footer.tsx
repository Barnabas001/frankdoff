export default function Footer() {
  return (
    <footer className="border-t py-12" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                   style={{ background: 'var(--blue)' }}>F</div>
              <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
                Frankdoff <span style={{ color: 'var(--yellow)' }}>360</span> Computers
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              Your trusted dealer for computers, accessories, phones, and office equipment in Lagos, Nigeria.
            </p>
            <p className="text-xs mt-4 font-semibold" style={{ color: 'var(--text-muted)' }}>
              MD/CEO: Francis Chinonso
            </p>
          </div>

          <div>
            <p className="font-bold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>Navigation</p>
            <ul className="space-y-2.5">
              {['Products', 'Services', 'About', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm transition-colors"
                     style={{ color: 'var(--text-secondary)' }}
                     onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                     onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>Contact</p>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li>Lagos, Nigeria</li>
              <li><a href="tel:+2348000000000" className="hover:underline">+234 800 000 0000</a></li>
              <li>Mon – Sat: 8am – 6pm</li>
              <li><a href="https://wa.me/2348000000000" className="font-semibold" style={{ color: 'var(--blue)' }}>WhatsApp Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
             style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Frankdoff 360 Computers. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Dealer in Computers • Printers • Phones • Office Equipment
          </p>
        </div>
      </div>
    </footer>
  )
}
