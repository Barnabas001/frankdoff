export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Full-bleed card */}
        <div
          className="rounded-3xl overflow-hidden border"
          style={{
            borderColor: "var(--border-accent)",
            background: "var(--bg-card)",
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left — gradient panel */}
            <div
              className="relative p-10 md:p-14 flex flex-col justify-between overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--blue) 0%, #0d2d5e 100%)",
              }}
            >
              {/* Decorative circles */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-10"
                style={{ background: "white" }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-10"
                style={{ background: "white" }}
              />

              <div className="relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-200 block mb-6">
                  About Us
                </span>
                <h2 className="font-extrabold text-3xl md:text-4xl text-white leading-tight mb-6">
                  Built on trust,
                  <br />
                  driven by tech.
                </h2>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Frankdoff 360 Computers was founded with one mission — make
                  quality technology accessible and affordable for every
                  Nigerian, from individuals to large enterprises.
                </p>
                <a href="#contact" className="btn-yellow w-fit">
                  Talk to us →
                </a>
              </div>

              <div className="relative z-10 mt-12 grid grid-cols-2 gap-4">
                {[
                  ["10+", "Years in business"],
                  ["500+", "Products stocked"],
                  ["1,000+", "Happy clients"],
                  ["Lagos", "Based & serving Nigeria"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <p className="font-extrabold text-xl text-white">{v}</p>
                    <p className="text-xs text-blue-200 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CEO profile */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center font-extrabold text-2xl text-white mb-6"
                style={{
                  background: "linear-gradient(135deg, var(--blue), #7c3aed)",
                }}
              >
                FC
              </div>

              <h3
                className="font-extrabold text-2xl mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Francis Chinonso
              </h3>
              <p
                className="font-semibold text-sm mb-6"
                style={{ color: "var(--yellow)" }}
              >
                MD / CEO — Frankdoff 360 Computers
              </p>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                With over a decade of experience in the Nigerian computer
                hardware industry, Francis has built Frankdoff 360 into one of
                Ibadan's most respected tech suppliers.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                His commitment to genuine products, fair pricing, and
                after-sales support has earned the trust of hundreds of
                businesses and individual customers across Ibadan.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Computers",
                  "Printers",
                  "Networking",
                  "Office Supply",
                  "Phones",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
