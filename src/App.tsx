import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Products        from './components/Products'
import BestSellers     from './components/BestSellers'
import FeaturedProducts from './components/FeaturedProducts'
import Brands          from './components/Brands'
import Services        from './components/Services'
import About           from './components/About'
import Contact         from './components/Contact'
import Footer          from './components/Footer'
import CategoryPage    from './pages/CategoryPage'

function HomePage({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar dark={dark} onToggle={onToggle} />
      <Hero />
      <Products />
      <BestSellers />
      <FeaturedProducts />
      <Brands />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  const [dark, setDark] = useState(true)
  const toggle = () => setDark(d => !d)

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage dark={dark} onToggle={toggle} />} />
        <Route path="/category/:slug" element={<CategoryPage dark={dark} onToggle={toggle} />} />
      </Routes>
    </BrowserRouter>
  )
}
