export default function Hero() {
  const brands = [
    "HP",
    "Dell",
    "Lenovo",
    "Apple",
    "Samsung",
    "Canon",
    "Epson",
    "Logitech",
    "Intel",
    "ASUS",
    "Acer",
    "Brother",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Glow blobs */}
      <div className="blob-blue w-[500px] h-[500px] top-[-100px] left-[-150px] opacity-60" />
      <div className="blob-yellow w-[350px] h-[350px] bottom-[10%] right-[-80px] opacity-50" />

      <div className="relative max-w-6xl mx-auto w-full px-6 pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div
              className="anim-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7 border"
              style={{
                background: "var(--blue-dim)",
                borderColor: "var(--border-accent)",
                color: "var(--blue)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full pulse-dot inline-block"
                style={{ background: "var(--blue)" }}
              />
              Ibadan's Trusted Tech Dealer
            </div>

            <h1
              className="anim-up-1 font-extrabold text-[2.8rem] md:text-[3.8rem] leading-[1.06] tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Premium Tech.
              <br />
              <span className="shimmer-text">Unbeatable</span>
              <br />
              Prices.
            </h1>

            <p
              className="anim-up-2 text-base leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              Frankdoff 360 Computers — your go-to source for laptops, desktops,
              printers, office equipment, phones, and accessories across Ibadan.
            </p>

            <div className="anim-up-3 flex flex-wrap gap-3 mb-12">
              <a href="#products" className="btn-primary">
                Browse Products →
              </a>
              <a href="#contact" className="btn-ghost">
                Get a Quote
              </a>
            </div>

            {/* Stats row */}
            <div className="anim-up-4 flex flex-wrap gap-8">
              {[
                ["500+", "Products"],
                ["10+", "Years"],
                ["1,000+", "Customers"],
              ].map(([val, lbl]) => (
                <div key={lbl}>
                  <p
                    className="text-2xl font-extrabold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {val}
                  </p>
                  <p
                    className="text-xs font-medium mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {lbl}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — visual card stack */}
          <div className="anim-scale hidden lg:flex justify-center items-center relative h-[420px]">
            {/* Main card */}
            <div
              className="float card absolute w-72 p-7 text-center z-20"
              style={{ boxShadow: "0 20px 60px var(--glow-blue)" }}
            >
              <div className="text-5xl mb-4">💻</div>
              <p
                className="font-bold text-base mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Latest Laptops
              </p>
              <p
                className="text-xs mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                HP, Dell, Lenovo, Apple & more
              </p>
              <div className="flex items-center justify-center gap-2">
                <span
                  className="w-2 h-2 rounded-full pulse-dot"
                  style={{ background: "var(--blue)" }}
                />
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--blue)" }}
                >
                  In Stock Now
                </span>
              </div>
            </div>

            {/* Back cards */}
            <div className="card absolute w-64 p-5 z-10 rotate-[-7deg] translate-y-4 -translate-x-16 opacity-70">
              <div className="text-3xl mb-3">🖨️</div>
              <p
                className="font-bold text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                Printers & Copiers
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                All major brands
              </p>
            </div>
            <div className="card absolute w-64 p-5 z-10 rotate-[6deg] translate-y-6 translate-x-16 opacity-70">
              <div className="text-3xl mb-3">📱</div>
              <p
                className="font-bold text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                Phones & Tablets
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                Latest models
              </p>
            </div>

            {/* Badge */}
            <div
              className="absolute bottom-4 right-4 z-30 card px-4 py-2.5 flex items-center gap-2.5"
              style={{ borderColor: "var(--border-accent)" }}
            >
              <span className="text-xl">✅</span>
              <div>
                <p
                  className="text-xs font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Genuine Products
                </p>
                <p
                  className="text-[10px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  100% Authentic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand marquee */}
      <div
        className="relative w-full overflow-hidden py-5 border-t border-b mt-8"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="marquee-wrap">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="text-sm font-semibold px-4"
                style={{ color: "var(--text-muted)" }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
