import hp1 from "../assets/products/laptops/hp1.jpg";
import hp2 from "../assets/products/laptops/hp2.jpg";
import hp3 from "../assets/products/laptops/hp3.jpg";
import dell1 from "../assets/products/laptops/dell1.jpg";
import dell2 from "../assets/products/laptops/dell2.jpg";
import asus1 from "../assets/products/laptops/asus1.jpg";
import asus2 from "../assets/products/laptops/asus2.jpg";
import lenovo1 from "../assets/products/laptops/lenovo1.jpg";
import lenovo2 from "../assets/products/laptops/lenovo2.jpg";
import mac1 from "../assets/products/laptops/mac1.jpg";
import mac2 from "../assets/products/laptops/mac2.jpg";
import dell from "../assets/products/desktop/dell.jpg";
import delldesktop2 from "../assets/products/desktop/dell2.jpg";
import hpdesktop from "../assets/products/desktop/hpdesktop.jpg";
import printer1 from "../assets/products/printer/hpprint.jpg";
import printer2 from "../assets/products/printer/hpprinter.jpg";
import photocopy from "../assets/products/photocopy/photocopy.jpg";
import photocopy2 from "../assets/products/photocopy/photocopy2.jpg";
import photocopy3 from "../assets/products/photocopy/photocopy3.jpg";
import longitech from "../assets/products/accessories/longi1.jpg";
import longitech2 from "../assets/products/accessories/longiHeadset.jpg";
import samsungdrive from "../assets/products/accessories/samsungdrive.jpg";
import hdmi from "../assets/products/accessories/HDMI.jpg";
import usb from "../assets/products/accessories/USB-C.jpg";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  originalPrice?: string;
  badge?: "Best Seller" | "New" | "Hot Deal" | "Featured";
  specs: string[];
  image: string;
  inStock: boolean;
}

export interface BrandGroup {
  brand: string;
  logo: string; // emoji or short text
  color: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  accentColor: string;
  icon: string;
  tagline: string;
  brands: BrandGroup[];
}

/* ─── LAPTOPS ────────────────────────────────────────────────────── */
const laptopBrands: BrandGroup[] = [
  {
    brand: "HP",
    logo: "HP",
    color: "#0096D6",
    products: [
      {
        id: "hp-1",
        name: "HP Pavilion 15",
        brand: "HP",
        category: "laptops",
        price: "₦420,000",
        originalPrice: "₦480,000",
        badge: "Best Seller",
        specs: [
          "Intel Core i5 12th Gen",
          "8GB RAM",
          "512GB SSD",
          '15.6" FHD Display',
          "Windows 11",
        ],
        image: hp1,
        inStock: true,
      },
      {
        id: "hp-2",
        name: "HP EliteBook 840",
        brand: "HP",
        category: "laptops",
        price: "₦680,000",
        badge: "Featured",
        specs: [
          "Intel Core i7 12th Gen",
          "16GB RAM",
          "512GB SSD",
          '14" FHD IPS',
          "Windows 11 Pro",
        ],
        image: hp2,
        inStock: true,
      },
      {
        id: "hp-3",
        name: "HP ProBook 450",
        brand: "HP",
        category: "laptops",
        price: "₦510,000",
        badge: "New",
        specs: [
          "Intel Core i5 13th Gen",
          "8GB RAM",
          "256GB SSD",
          '15.6" Display',
          "Windows 11",
        ],
        image: hp3,
        inStock: true,
      },
      {
        id: "hp-4",
        name: "HP Stream 14",
        brand: "HP",
        category: "laptops",
        price: "₦220,000",
        specs: [
          "Intel Celeron",
          "4GB RAM",
          "64GB eMMC",
          '14" HD Display',
          "Windows 11 S",
        ],
        image: hp1,
        inStock: true,
      },
    ],
  },
  {
    brand: "Dell",
    logo: "DELL",
    color: "#007DB8",
    products: [
      {
        id: "dl-1",
        name: "Dell Inspiron 15",
        brand: "Dell",
        category: "laptops",
        price: "₦445,000",
        originalPrice: "₦500,000",
        badge: "Best Seller",
        specs: [
          "Intel Core i5 12th Gen",
          "8GB RAM",
          "512GB SSD",
          '15.6" FHD',
          "Windows 11",
        ],
        image: dell1,
        inStock: true,
      },
      {
        id: "dl-2",
        name: "Dell XPS 13",
        brand: "Dell",
        category: "laptops",
        price: "₦1,100,000",
        badge: "Featured",
        specs: [
          "Intel Core i7 13th Gen",
          "16GB RAM",
          "1TB SSD",
          '13.4" OLED Touch',
          "Windows 11",
        ],
        image: dell2,
        inStock: true,
      },
      {
        id: "dl-3",
        name: "Dell Latitude 5420",
        brand: "Dell",
        category: "laptops",
        price: "₦590,000",
        badge: "New",
        specs: [
          "Intel Core i5 11th Gen",
          "16GB RAM",
          "256GB SSD",
          '14" FHD',
          "Windows 11 Pro",
        ],
        image: dell2,
        inStock: true,
      },
    ],
  },
  {
    brand: "Lenovo",
    logo: "LENOVO",
    color: "#E2231A",
    products: [
      {
        id: "lv-1",
        name: "Lenovo ThinkPad X1",
        brand: "Lenovo",
        category: "laptops",
        price: "₦980,000",
        badge: "Featured",
        specs: [
          "Intel Core i7 12th Gen",
          "16GB RAM",
          "512GB SSD",
          '14" 2.8K OLED',
          "Windows 11 Pro",
        ],
        image: lenovo1,
        inStock: true,
      },
      {
        id: "lv-2",
        name: "Lenovo IdeaPad 3",
        brand: "Lenovo",
        category: "laptops",
        price: "₦385,000",
        originalPrice: "₦430,000",
        badge: "Best Seller",
        specs: [
          "Intel Core i3 12th Gen",
          "8GB RAM",
          "256GB SSD",
          '15.6" FHD',
          "Windows 11",
        ],
        image: lenovo2,
        inStock: true,
      },
      {
        id: "lv-3",
        name: "Lenovo Legion 5",
        brand: "Lenovo",
        category: "laptops",
        price: "₦820,000",
        badge: "Hot Deal",
        specs: [
          "AMD Ryzen 7",
          "16GB RAM",
          "512GB SSD",
          '15.6" 144Hz',
          "NVIDIA RTX 3060",
        ],
        image: lenovo1,
        inStock: true,
      },
    ],
  },
  {
    brand: "Apple",
    logo: "🍎",
    color: "#555",
    products: [
      {
        id: "ap-1",
        name: "MacBook Air M2",
        brand: "Apple",
        category: "laptops",
        price: "₦1,350,000",
        badge: "Best Seller",
        specs: [
          "Apple M2 Chip",
          "8GB Unified Memory",
          "256GB SSD",
          '13.6" Liquid Retina',
          "macOS Ventura",
        ],
        image: mac1,
        inStock: true,
      },
      {
        id: "ap-2",
        name: 'MacBook Pro 14"',
        brand: "Apple",
        category: "laptops",
        price: "₦2,100,000",
        badge: "Featured",
        specs: [
          "Apple M3 Pro",
          "18GB Unified Memory",
          "512GB SSD",
          '14.2" Liquid Retina XDR',
          "macOS",
        ],
        image: mac2,
        inStock: true,
      },
      {
        id: "ap-3",
        name: "MacBook Air M1",
        brand: "Apple",
        category: "laptops",
        price: "₦920,000",
        originalPrice: "₦1,050,000",
        badge: "Hot Deal",
        specs: [
          "Apple M1 Chip",
          "8GB Unified Memory",
          "256GB SSD",
          '13.3" Retina',
          "macOS",
        ],
        image: mac1,
        inStock: false,
      },
    ],
  },
  {
    brand: "ASUS",
    logo: "ASUS",
    color: "#00AEEF",
    products: [
      {
        id: "as-1",
        name: "ASUS VivoBook 15",
        brand: "ASUS",
        category: "laptops",
        price: "₦395,000",
        badge: "Best Seller",
        specs: [
          "Intel Core i5 12th Gen",
          "8GB RAM",
          "512GB SSD",
          '15.6" OLED FHD',
          "Windows 11",
        ],
        image: asus1,
        inStock: true,
      },
      {
        id: "as-2",
        name: "ASUS ROG Strix G15",
        brand: "ASUS",
        category: "laptops",
        price: "₦890,000",
        badge: "Hot Deal",
        specs: [
          "AMD Ryzen 9",
          "16GB RAM",
          "1TB SSD",
          '15.6" 300Hz',
          "NVIDIA RTX 4070",
        ],
        image: asus2,
        inStock: true,
      },
    ],
  },
];

/* ─── DESKTOPS ───────────────────────────────────────────────────── */
const desktopBrands: BrandGroup[] = [
  {
    brand: "HP",
    logo: "HP",
    color: "#0096D6",
    products: [
      {
        id: "dhp-1",
        name: "HP Pavilion Desktop",
        brand: "HP",
        category: "desktops",
        price: "₦580,000",
        badge: "Best Seller",
        specs: [
          "Intel Core i5 12th Gen",
          "16GB RAM",
          "512GB SSD + 1TB HDD",
          "Windows 11",
          "WiFi + Bluetooth",
        ],
        image: hpdesktop,
        inStock: true,
      },
      {
        id: "dhp-2",
        name: "HP EliteDesk 800",
        brand: "HP",
        category: "desktops",
        price: "₦720,000",
        badge: "Featured",
        specs: [
          "Intel Core i7 11th Gen",
          "16GB RAM",
          "512GB SSD",
          "Windows 11 Pro",
          "Small Form Factor",
        ],
        image: hpdesktop,
        inStock: true,
      },
    ],
  },
  {
    brand: "Dell",
    logo: "DELL",
    color: "#007DB8",
    products: [
      {
        id: "ddl-1",
        name: "Dell OptiPlex 7090",
        brand: "Dell",
        category: "desktops",
        price: "₦690,000",
        badge: "Featured",
        specs: [
          "Intel Core i7 10th Gen",
          "16GB RAM",
          "512GB SSD",
          "Windows 11 Pro",
          "Tower Form",
        ],
        image: dell,
        inStock: true,
      },
      {
        id: "ddl-2",
        name: "Dell Vostro 3910",
        brand: "Dell",
        category: "desktops",
        price: "₦520,000",
        badge: "Best Seller",
        specs: [
          "Intel Core i5 12th Gen",
          "8GB RAM",
          "1TB HDD",
          "Windows 11",
          "Mid Tower",
        ],
        image: delldesktop2,
        inStock: true,
      },
    ],
  },
  {
    brand: "Lenovo",
    logo: "LENOVO",
    color: "#E2231A",
    products: [
      {
        id: "dlv-1",
        name: "Lenovo ThinkCentre M720",
        brand: "Lenovo",
        category: "desktops",
        price: "₦610,000",
        badge: "New",
        specs: [
          "Intel Core i5 9th Gen",
          "8GB RAM",
          "256GB SSD",
          "Windows 11 Pro",
          "Tiny Form Factor",
        ],
        image: dell,
        inStock: true,
      },
    ],
  },
];

/* ─── PRINTERS ───────────────────────────────────────────────────── */
const printerBrands: BrandGroup[] = [
  {
    brand: "HP",
    logo: "HP",
    color: "#0096D6",
    products: [
      {
        id: "php-1",
        name: "HP LaserJet Pro M404",
        brand: "HP",
        category: "printers",
        price: "₦185,000",
        badge: "Best Seller",
        specs: [
          "40 ppm",
          "Up to 1200 dpi",
          "256MB Memory",
          "USB + Ethernet",
          "Monthly Duty Cycle: 80,000",
        ],
        image: printer1,
        inStock: true,
      },
      {
        id: "php-2",
        name: "HP OfficeJet Pro 9010",
        brand: "HP",
        category: "printers",
        price: "₦145,000",
        badge: "Hot Deal",
        specs: [
          "22 ppm Black",
          "All-in-One Printer",
          "WiFi Direct + Bluetooth",
          "Duplex Printing",
          "Mobile Print Ready",
        ],
        image: printer2,
        inStock: true,
      },
    ],
  },
  {
    brand: "Canon",
    logo: "CANON",
    color: "#CC0000",
    products: [
      {
        id: "pc-1",
        name: "Canon PIXMA G3420",
        brand: "Canon",
        category: "printers",
        price: "₦98,000",
        badge: "Best Seller",
        specs: [
          "MegaTank Ink System",
          "Print, Scan, Copy",
          "WiFi",
          "4800 x 1200 dpi",
          "Low Cost Per Page",
        ],
        image: printer1,
        inStock: true,
      },
      {
        id: "pc-2",
        name: "Canon imageRUNNER 2206",
        brand: "Canon",
        category: "printers",
        price: "₦320,000",
        badge: "Featured",
        specs: [
          "22 ppm",
          "600 x 600 dpi",
          "Copy, Print, Scan",
          "USB + Network",
          "Paper Capacity: 250 sheets",
        ],
        image: printer2,
        inStock: true,
      },
    ],
  },
  {
    brand: "Epson",
    logo: "EPSON",
    color: "#003087",
    products: [
      {
        id: "pe-1",
        name: "Epson EcoTank L3250",
        brand: "Epson",
        category: "printers",
        price: "₦112,000",
        badge: "Best Seller",
        specs: [
          "Print, Scan, Copy",
          "WiFi",
          "5760 x 1440 dpi",
          "Ultra-Low Cost Printing",
          "Borderless Photo Print",
        ],
        image: printer1,
        inStock: true,
      },
      {
        id: "pe-2",
        name: "Epson WorkForce WF-2830",
        brand: "Epson",
        category: "printers",
        price: "₦135,000",
        badge: "New",
        specs: [
          "All-in-One",
          "WiFi + USB",
          "Auto Duplex Print",
          "Fax Capable",
          "10 ppm Black",
        ],
        image: printer2,
        inStock: true,
      },
    ],
  },
  {
    brand: "Brother",
    logo: "BROTHER",
    color: "#0057A8",
    products: [
      {
        id: "pb-1",
        name: "Brother HL-L2350DW",
        brand: "Brother",
        category: "printers",
        price: "₦165,000",
        badge: "Hot Deal",
        specs: [
          "34 ppm",
          "WiFi + USB",
          "Auto Duplex",
          "Up to 2400 dpi",
          "250-sheet Paper Tray",
        ],
        image: printer1,
        inStock: true,
      },
    ],
  },
];

/* ─── PHOTOCOPIERS ───────────────────────────────────────────────── */
const copierBrands: BrandGroup[] = [
  {
    brand: "Ricoh",
    logo: "RICOH",
    color: "#E8000D",
    products: [
      {
        id: "rc-1",
        name: "Ricoh MP 2555SP",
        brand: "Ricoh",
        category: "copiers",
        price: "₦850,000",
        badge: "Best Seller",
        specs: [
          "25 ppm",
          "Print, Copy, Scan, Fax",
          "Network Ready",
          "1200 dpi",
          "Paper Capacity: 1,200 sheets",
        ],
        image: photocopy,
        inStock: true,
      },
      {
        id: "rc-2",
        name: "Ricoh IM C3000",
        brand: "Ricoh",
        category: "copiers",
        price: "₦1,450,000",
        badge: "Featured",
        specs: [
          "30 ppm Colour",
          "A3 Format",
          "Print, Copy, Scan, Fax",
          "Cloud Ready",
          "Smart Operation Panel",
        ],
        image: photocopy2,
        inStock: true,
      },
    ],
  },
  {
    brand: "Canon",
    logo: "CANON",
    color: "#CC0000",
    products: [
      {
        id: "cc-1",
        name: "Canon iR2206",
        brand: "Canon",
        category: "copiers",
        price: "₦480,000",
        badge: "Best Seller",
        specs: [
          "22 ppm",
          "Print, Copy, Scan",
          "USB + Network",
          "600 x 600 dpi",
          "Paper Capacity: 250 sheets",
        ],
        image: photocopy3,
        inStock: true,
      },
      {
        id: "cc-2",
        name: "Canon imageRUNNER ADVANCE C3525i",
        brand: "Canon",
        category: "copiers",
        price: "₦2,100,000",
        badge: "Featured",
        specs: [
          "25 ppm Colour",
          "A3 Format",
          "Touch Screen",
          "Cloud + WiFi",
          "Finishing Options",
        ],
        image: photocopy,
        inStock: false,
      },
    ],
  },
  {
    brand: "Toshiba",
    logo: "TOSHIBA",
    color: "#E4002B",
    products: [
      {
        id: "tc-1",
        name: "Toshiba e-STUDIO 2523A",
        brand: "Toshiba",
        category: "copiers",
        price: "₦680,000",
        badge: "New",
        specs: [
          "25 ppm",
          "Print, Copy, Scan",
          "Network Ready",
          "600 dpi",
          "Duplex Standard",
        ],
        image: photocopy2,
        inStock: true,
      },
    ],
  },
];

/* ─── ACCESSORIES ────────────────────────────────────────────────── */
const accessoryBrands: BrandGroup[] = [
  {
    brand: "Logitech",
    logo: "LOGI",
    color: "#00B2A9",
    products: [
      {
        id: "lg-1",
        name: "Logitech MX Master 3",
        brand: "Logitech",
        category: "accessories",
        price: "₦48,000",
        badge: "Best Seller",
        specs: [
          "Wireless 2.4GHz + Bluetooth",
          "4000 DPI",
          "USB-C Charging",
          "7 Buttons",
          "Multi-device Support",
        ],
        image: longitech,
        inStock: true,
      },
      {
        id: "lg-2",
        name: "Logitech MK850 Combo",
        brand: "Logitech",
        category: "accessories",
        price: "₦55,000",
        badge: "Hot Deal",
        specs: [
          "Wireless Keyboard + Mouse",
          "Bluetooth + Unifying",
          "Multi-device",
          "Full-size Keyboard",
          "18-month Battery",
        ],
        image: longitech,
        inStock: true,
      },
      {
        id: "lg-3",
        name: "Logitech H390 Headset",
        brand: "Logitech",
        category: "accessories",
        price: "₦22,000",
        badge: "Best Seller",
        specs: [
          "USB Wired",
          "Noise-cancelling Mic",
          "Stereo Sound",
          "Inline Audio Controls",
          "Plug & Play",
        ],
        image: longitech2,
        inStock: true,
      },
    ],
  },
  {
    brand: "Samsung",
    logo: "SAMSUNG",
    color: "#1428A0",
    products: [
      {
        id: "sg-1",
        name: "Samsung 128GB Flash Drive",
        brand: "Samsung",
        category: "accessories",
        price: "₦12,500",
        badge: "Best Seller",
        specs: [
          "USB 3.1",
          "Read: 300MB/s",
          "Compact Design",
          "Windows + Mac",
          "Plug & Play",
        ],
        image: samsungdrive,
        inStock: true,
      },
    ],
  },
  {
    brand: "Generic",
    logo: "GENERIC",
    color: "#6B7280",
    products: [
      {
        id: "gn-1",
        name: "USB-C Hub 7-in-1",
        brand: "Generic",
        category: "accessories",
        price: "₦18,500",
        badge: "Hot Deal",
        specs: [
          "4K HDMI",
          "USB 3.0 x3",
          "SD/MicroSD",
          "100W PD Charging",
          "Plug & Play",
        ],
        image: usb,
        inStock: true,
      },
      {
        id: "gn-2",
        name: "HDMI Cable 3m",
        brand: "Generic",
        category: "accessories",
        price: "₦3,500",
        specs: [
          "4K@60Hz",
          "Gold-plated Connectors",
          "Braided Cable",
          "3 Metres",
          "For TV/Monitor/Laptop",
        ],
        image: hdmi,
        inStock: true,
      },
    ],
  },
];

/* ─── MASTER CATEGORIES ──────────────────────────────────────────── */
export const categories: Category[] = [
  {
    id: "laptops",
    name: "Laptops",
    slug: "laptops",
    description:
      "Browse our full range of laptops from the world's top brands. New and fairly used options available.",
    image: hp1,
    accentColor: "#1d7ef5",
    icon: "💻",
    tagline: "Work, study, create — find the perfect laptop.",
    brands: laptopBrands,
  },
  {
    id: "desktops",
    name: "Desktop PCs",
    slug: "desktops",
    description:
      "Complete desktop setups for home, office, and power users. Towers, all-in-ones and mini PCs.",
    image: hpdesktop,
    accentColor: "#7c3aed",
    icon: "🖥️",
    tagline: "Power your workspace with the right desktop.",
    brands: desktopBrands,
  },
  {
    id: "printers",
    name: "Printers",
    slug: "printers",
    description:
      "Inkjet, laser, and multifunction printers for every need and budget. All major brands in stock.",
    image: printer2,
    accentColor: "#22c55e",
    icon: "🖨️",
    tagline: "Print smarter — great quality, great value.",
    brands: printerBrands,
  },
  {
    id: "copiers",
    name: "Photocopiers",
    slug: "copiers",
    description:
      "Office-grade photocopiers for high-volume environments. We also supply toner cartridges & consumables.",
    image: photocopy,
    accentColor: "#F5C518",
    icon: "📠",
    tagline: "High-volume office copying made affordable.",
    brands: copierBrands,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description:
      "Keyboards, mice, headsets, cables, flash drives and everything in between.",
    image: longitech2,
    accentColor: "#f97316",
    icon: "🖱️",
    tagline: "Complete your setup with the right accessories.",
    brands: accessoryBrands,
  },
];

/* ─── BEST SELLERS (cross-category, badge = 'Best Seller') ──────── */
export const bestSellers: Product[] = categories
  .flatMap((c) => c.brands.flatMap((b) => b.products))
  .filter((p) => p.badge === "Best Seller")
  .slice(0, 8);

/* ─── FEATURED PRODUCTS ─────────────────────────────────────────── */
export const featuredProducts: Product[] = categories
  .flatMap((c) => c.brands.flatMap((b) => b.products))
  .filter((p) => p.badge === "Featured")
  .slice(0, 6);

/* ─── ALL BRANDS ─────────────────────────────────────────────────── */
export const allBrands = [
  {
    name: "HP",
    logo: "HP",
    color: "#0096D6",
    cat: "Laptops, Desktops, Printers",
  },
  { name: "Dell", logo: "DELL", color: "#007DB8", cat: "Laptops, Desktops" },
  {
    name: "Lenovo",
    logo: "LENOVO",
    color: "#E2231A",
    cat: "Laptops, Desktops",
  },
  { name: "Apple", logo: "🍎", color: "#555555", cat: "MacBooks, MacMini" },
  { name: "ASUS", logo: "ASUS", color: "#00AEEF", cat: "Laptops, Accessories" },
  { name: "Canon", logo: "CANON", color: "#CC0000", cat: "Printers, Copiers" },
  { name: "Epson", logo: "EPSON", color: "#003087", cat: "Printers" },
  { name: "Brother", logo: "BROTHER", color: "#0057A8", cat: "Printers" },
  { name: "Ricoh", logo: "RICOH", color: "#E8000D", cat: "Copiers" },
  { name: "Toshiba", logo: "TOSHIBA", color: "#E4002B", cat: "Copiers" },
  {
    name: "Samsung",
    logo: "SAMSUNG",
    color: "#1428A0",
    cat: "Phones, Accessories",
  },
  { name: "Tecno", logo: "TECNO", color: "#E31E24", cat: "Phones" },
  { name: "Itel", logo: "ITEL", color: "#FF6B00", cat: "Phones" },
  { name: "Logitech", logo: "LOGI", color: "#00B2A9", cat: "Accessories" },
];
