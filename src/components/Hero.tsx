import { Link } from "react-router-dom";
// import laptopImg from '../assets/products/laptop.svg'
import hp1 from "../assets/products/laptops/hp1.jpg";
import phoneImg from "../assets/products/phone.svg";
import printerImg from "../assets/products/printer.svg";

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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
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
              Lagos's Trusted Tech Dealer
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
              printers, office equipment, phones, and accessories across Lagos.
            </p>

            <div className="anim-up-3 flex flex-wrap gap-3 mb-12">
              <Link to="/category/laptops" className="btn-primary">
                Browse Products →
              </Link>
              <a href="#contact" className="btn-ghost">
                Get a Quote
              </a>
            </div>

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

          {/* RIGHT — product card stack with real images */}
          <div className="anim-scale hidden lg:flex justify-center items-center relative h-[440px]">
            {/* Main card — laptop */}
            <div
              className="float card absolute w-72 overflow-hidden z-20"
              style={{ boxShadow: "0 20px 60px var(--glow-blue)" }}
            >
              <div
                className="h-44 flex items-center justify-center p-3"
                style={{
                  background:
                    "linear-gradient(135deg, var(--blue-dim), transparent)",
                }}
              >
                <img
                  src={hp1}
                  alt="Laptop"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p
                    className="font-bold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Latest Laptops
                  </p>
                  <span
                    className="flex items-center gap-1 text-xs font-semibold"
                    style={{ color: "var(--blue)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full pulse-dot inline-block"
                      style={{ background: "var(--blue)" }}
                    />
                    In Stock
                  </span>
                </div>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  HP, Dell, Lenovo, Apple & more
                </p>
              </div>
            </div>

            {/* Back card — phone */}
            <div className="card absolute w-60 overflow-hidden z-10 rotate-[-7deg] translate-y-4 -translate-x-20 opacity-80">
              <div
                className="h-32 flex items-center justify-center p-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.1), transparent)",
                }}
              >
                <img
                  src={phoneImg}
                  alt="Phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <p
                  className="font-bold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Phones & Tablets
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Latest models
                </p>
              </div>
            </div>

            {/* Back card — printer */}
            <div className="card absolute w-60 overflow-hidden z-10 rotate-[6deg] translate-y-6 translate-x-20 opacity-80">
              <div
                className="h-32 flex items-center justify-center p-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(34,197,94,0.1), transparent)",
                }}
              >
                <img
                  src={printerImg}
                  alt="Printer"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <p
                  className="font-bold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Printers
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  All major brands
                </p>
              </div>
            </div>

            {/* Badge */}
            <div
              className="absolute bottom-4 right-0 z-30 card px-4 py-2.5 flex items-center gap-2.5"
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
