import { Link } from "react-router-dom";
import mac1 from "../assets/products/laptops/mac1.jpg";
import dell from "../assets/products/desktop/dell.jpg";
import hpprinter from "../assets/products/printer/hpprint.jpg";
import photocopy from "../assets/products/photocopy/photocopy.jpg";
import usb from "../assets/products/accessories/USB-C.jpg";
import { categories } from "../data/products";

const icons = [mac1, dell, hpprinter, photocopy, usb];
const accentCols = [
  "#1d7ef5",
  "#7c3aed",
  "#22c55e",
  "#F5C518",
  "#f97316",
  "#06b6d4",
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
            Click any category to explore products, brands, and prices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="card group p-0 overflow-hidden cursor-pointer block"
            >
              {/* Image area */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${accentCols[i]}12, ${accentCols[i]}05)`,
                }}
              >
                <img
                  src={icons[i]}
                  alt={cat.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Brand count badge */}
                <span
                  className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${accentCols[i]}22`,
                    color: accentCols[i],
                  }}
                >
                  {cat.brands.length} Brands
                </span>
                {/* Arrow indicator */}
                <div
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0"
                  style={{ background: accentCols[i], color: "#fff" }}
                >
                  →
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="font-bold text-lg transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span className="mr-2">{cat.icon}</span>
                    {cat.name}
                  </h3>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {cat.brands.flatMap((b) => b.products).length} items
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cat.description.slice(0, 80)}…
                </p>
                <div
                  className="flex items-center gap-1.5 text-sm font-bold transition-colors"
                  style={{ color: accentCols[i] }}
                >
                  Explore {cat.name}{" "}
                  <span className="group-hover:translate-x-1 inline-block transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
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
