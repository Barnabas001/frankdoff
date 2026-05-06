import { useState, useEffect } from 'react'

interface NavbarProps { dark: boolean; onToggle: () => void }

export default function Navbar({ dark, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      style={{
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
               style={{ background: 'var(--blue)' }}>F</div>
          <span className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>
            Frankdoff <span style={{ color: 'var(--yellow)' }}>360</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
               className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
               style={{ color: 'var(--text-secondary)' }}
               onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
               onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button onClick={onToggle} className="theme-toggle" title="Toggle theme" aria-label="Toggle dark/light mode">
            <span className="sr-only">{dark ? 'Switch to light' : 'Switch to dark'}</span>
          </button>
          <a href="#contact" className="btn-primary text-sm">Get a Quote →</a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={onToggle} className="theme-toggle" aria-label="Toggle theme" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-1.5" style={{ color: 'var(--text-primary)' }}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></>
                : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="3" y1="19" x2="21" y2="19"/></>}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-5 flex flex-col gap-4 border-t"
             style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
          {links.map(l => (
            <a key={l.label} href={l.href}
               onClick={() => setMenuOpen(false)}
               className="font-medium text-sm"
               style={{ color: 'var(--text-secondary)' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-fit">Get a Quote →</a>
        </div>
      )}
    </nav>
  )
}
