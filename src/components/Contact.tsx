import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="blob-blue w-[350px] h-[350px] top-0 right-0 opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">Get In Touch</span>
          <h2
            className="font-extrabold text-4xl md:text-5xl tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to order?
          </h2>
          <p
            className="mt-4 text-sm max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you need one laptop or 50 printers — we're ready. Reach out
            via WhatsApp or fill the form.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info cards — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: "📞",
                title: "Call / WhatsApp",
                body: "Reach us directly for fast responses",
                sub: "+234 906 416 8156",
                href: "tel:+2349064168156",
              },
              {
                icon: "📍",
                title: "Visit Our Store",
                body: "Ibadan, Nigeria",
                sub: "Contact us for directions",
                href: "#",
              },
              {
                icon: "🕐",
                title: "Opening Hours",
                body: "Mon – Sat: 8:00am – 6:00pm",
                sub: "Sunday: Closed",
                href: undefined,
              },
            ].map((item) => (
              <div key={item.title} className="card p-5 flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "var(--blue-dim)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-bold text-sm mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.body}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xs font-semibold"
                      style={{ color: "var(--blue)" }}
                    >
                      {item.sub}
                    </a>
                  ) : (
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center justify-between group cursor-pointer"
              style={{ borderColor: "#22c55e44", background: "#22c55e0a" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Chat on WhatsApp
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Usually responds in minutes
                  </p>
                </div>
              </div>
              <span className="text-green-500 text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          {/* Form — 3 cols */}
          <div className="md:col-span-3 card p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <span className="text-5xl mb-4">✅</span>
                <p
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message sent!
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  We'll get back to you shortly. You can also WhatsApp us for
                  faster response.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-6 text-xs"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <h3
                  className="font-bold text-xl mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Send an Enquiry
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    {
                      label: "Full Name",
                      placeholder: "e.g. Emeka Johnson",
                      type: "text",
                    },
                    {
                      label: "Phone / WhatsApp",
                      placeholder: "+234 8xx xxx xxxx",
                      type: "tel",
                    },
                  ].map((f) => (
                    <div key={f.label}>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors border"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--border-accent)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "var(--border)")
                        }
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    What are you looking for?
                  </label>
                  <select
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none border"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <option>Laptops / Desktops</option>
                    <option>Printers / Photocopiers</option>
                    <option>Accessories / Cables</option>
                    <option>Phones / Tablets</option>
                    <option>Office Equipment</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Message / Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you need — quantity, specs, budget..."
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none border resize-none"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--border-accent)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border)")
                    }
                  />
                </div>

                <button
                  onClick={() => setSent(true)}
                  className="btn-primary w-full justify-center text-center"
                >
                  Send Enquiry →
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
