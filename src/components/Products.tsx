const cats = [
  {
    icon: "💻",
    name: "Laptops",
    desc: "HP, Dell, Lenovo, Apple, ASUS & more — new and fairly used",
    tag: "Most Popular",
    col: "var(--blue)",
  },
  {
    icon: "🖥️",
    name: "Desktop PCs",
    desc: "Full setups for home, office, and heavy-duty work",
    tag: "Available",
    col: "#a855f7",
  },
  {
    icon: "🖨️",
    name: "Printers",
    desc: "Inkjet, laser, multifunction — Canon, Epson, HP, Brother",
    tag: "In Stock",
    col: "#22c55e",
  },
  {
    icon: "📠",
    name: "Photocopiers",
    desc: "Office-grade copiers & toner cartridges, all sizes",
    tag: "Bulk Orders",
    col: "var(--yellow)",
  },
  {
    icon: "🖱️",
    name: "Accessories",
    desc: "Keyboards, mice, headsets, cables, flash drives & more",
    tag: "Wide Range",
    col: "#f97316",
  },
  {
    icon: "📱",
    name: "Phones & Tablets",
    desc: "Smartphones, children pads & tablets at competitive prices",
    tag: "Available",
    col: "#06b6d4",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="blob-blue w-[300px] h-[300px] top-0 right-0 opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">What We Carry</span>
            <h2
              className="font-extrabold text-4xl md:text-5xl tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Products &<br />
              Categories
            </h2>
          </div>
          <p
            className="max-w-xs text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Everything your home and office needs — under one roof in Ibadan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cats.map((c) => (
            <div key={c.name} className="card group p-7 cursor-pointer">
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${c.col}18` }}
                >
                  {c.icon}
                </div>
                <span
                  className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${c.col}18`, color: c.col }}
                >
                  {c.tag}
                </span>
              </div>
              <h3
                className="font-bold text-lg mb-2 group-hover:text-[var(--blue)] transition-colors"
                style={{ color: "var(--text-primary)" }}
              >
                {c.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {c.desc}
              </p>
              <div
                className="mt-5 flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--blue)" }}
              >
                Enquire <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border"
          style={{
            background: "var(--blue-dim)",
            borderColor: "var(--border-accent)",
          }}
        >
          <div>
            <p
              className="font-bold text-xl mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              Need something not listed?
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              We source on request. Contact us and we'll find it for you.
            </p>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap">
            Make a Request →
          </a>
        </div>
      </div>
    </section>
  );
}
