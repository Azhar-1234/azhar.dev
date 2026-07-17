export type TechLogo = { name: string; src: string };
export type Stat = { num: string; label: string };
export type SkillGroup = { title: string; items: string[] };
export type Job = { company: string; role: string; period: string; points: string[] };
export type RoxnorPlugin = { name: string; src: string };
export type Plugin = { tag: string; name: string; desc: string };
export type Project = { name: string; host: string; url: string; desc: string; tags: string[] };
export type Contact = { label: string; value: string; href: string };

export const techLogos: TechLogo[] = [
  { name: "PHP", src: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "WooCommerce", src: "https://cdn.simpleicons.org/woocommerce/96588A" },
  { name: "Elementor", src: "https://cdn.simpleicons.org/elementor/92003B" },
  { name: "Laravel", src: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "FilamentPHP", src: "https://cdn.simpleicons.org/filament/FDAE4B" },
  { name: "jQuery", src: "https://cdn.simpleicons.org/jquery/0769AD" },
  { name: "Bootstrap", src: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Git", src: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/1C1917" },
  { name: "Meta Pixel", src: "https://cdn.simpleicons.org/meta/0467DF" },
  { name: "Google Sheets", src: "https://cdn.simpleicons.org/googlesheets/34A853" },
  { name: "Zoho CRM", src: "https://cdn.simpleicons.org/zoho/E42527" },
  { name: "Mailchimp", src: "https://cdn.simpleicons.org/mailchimp/FFE01B" },
  { name: "Gutenberg", src: "https://cdn.simpleicons.org/wordpress/1C1917" },
  { name: "REST API", src: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/1C1917" },
  { name: "GitScrum", src: "https://gitscrum.com/favicon.ico" },
  { name: "Taiga", src: "https://www.google.com/s2/favicons?domain=taiga.io&sz=64" },
  { name: "SEO", src: "https://cdn.simpleicons.org/googlesearchconsole/458CF5" },
  { name: "Meta Ads", src: "https://cdn.simpleicons.org/meta/0467DF" },
];

export const stats: Stat[] = [
  { num: "4+", label: "Years of experience" },
  { num: "10+", label: "Plugins built & maintained" },
  { num: "1", label: "Approved WordPress.org plugin" },
];

export const skillGroups: SkillGroup[] = [
  { title: "LANGUAGES", items: ["PHP", "JavaScript", "HTML5", "CSS3"] },
  { title: "WORDPRESS", items: ["Plugin Development", "WooCommerce", "Elementor", "Gutenberg", "Coding Standards"] },
  { title: "FRAMEWORKS", items: ["Laravel", "FilamentPHP", "React", "jQuery", "AJAX", "Bootstrap"] },
  { title: "DATA & APIs", items: ["MySQL", "MongoDB", "REST API", "CRM Integration"] },
  { title: "MARKETING TECH", items: ["SEO", "Meta Ads", "PixelYourSite", "Conversion Tracking", "Zoho", "Mailchimp"] },
  { title: "WORKFLOW", items: ["Git", "GitHub", "Agile", "Scrum", "Project Management Tools", "Performance Optimization"] },
];

export const jobs: Job[] = [
  {
    company: "Roxnor",
    role: "Software Engineer",
    period: "May 2023 — Present · 3+ years",
    points: [
      "Contribute to widely-used WordPress plugins — MetForm, ShopEngine, WP Social, GutenKit, PopupKit, EmailKit, Met Sales Countdown, ElementsKit — with millions of combined installs.",
      "MetForm: built General Form & Global Analytics (user-data tracking), Dropbox & Google Drive integrations, and form scheduling; shipped built-in templates (job application, calculation, quiz forms) and integrated MailPoet, AWeber & Google Sheets.",
      "ShopEngine: built the Fake Order Block module, wishlist template widget with built-in templates, and payment-method template & widget; improved WooCommerce functionality with many bug fixes.",
      "PopupKit: architected the backend structure and core Gutenberg block support.",
      "WP Social: connected Facebook, LinkedIn, Google & Instagram APIs for social login and follower counters.",
      "YoSuite (Roxnor's new SaaS HRM & Payroll): built the Inventory Management module (asset & other requests) and People module features — employee effective dates with job scheduling — on a modular Laravel architecture similar to FilamentPHP.",
      "Integrated third-party APIs across products: Zoho, Mailchimp, Google reCAPTCHA, Facebook, Pinterest, LinkedIn.",
    ],
  },
  {
    company: "Freelance",
    role: "WordPress Plugin Developer",
    period: "Ongoing",
    points: [
      "Author of my own approved WordPress.org plugin 'Azhar FAQ for Elementor'.",
      "Built custom WooCommerce plugins for client stores — Fake Order Notification (with user blocking + order data sent to Google Sheets), Cart Converter (cart recovery), Back Order, and Quick Buy Now.",
      "Connected WooCommerce to Ecom King CRM (servicekey.com.bd) via a custom WordPress plugin — syncing full order and customer data over REST APIs.",
      "Set up PixelYourSite for SEO and conversion tracking, sending WooCommerce event data to marketing platforms.",
      "Built dccbazar.com and ansclothes.com with Elementor; plugin developer for the DCC Bazar full-stack storefront on Vercel.",
    ],
  },
  {
    company: "BugBuildLabs",
    role: "Junior Backend Developer",
    period: "Nov 2022 — Mar 2023",
    points: [
      "Developed backend features using Laravel with modular architecture.",
      "Worked on CodeCanyon projects: SPA, charity, and portfolio systems.",
      "Built REST APIs and optimized database queries.",
    ],
  },
];

export const roxnorPlugins: RoxnorPlugin[] = [
  { name: "MetForm", src: "https://ps.w.org/metform/assets/icon-128x128.png" },
  { name: "ShopEngine", src: "https://ps.w.org/shopengine/assets/icon-128x128.gif" },
  { name: "ElementsKit", src: "https://ps.w.org/elementskit-lite/assets/icon-128x128.gif" },
  { name: "WP Social", src: "https://ps.w.org/wp-social/assets/icon-128x128.png" },
  { name: "GutenKit", src: "https://ps.w.org/gutenkit-blocks-addon/assets/icon-128x128.gif" },
  { name: "PopupKit", src: "https://ps.w.org/popup-builder-block/assets/icon-128x128.png" },
  { name: "EmailKit", src: "https://ps.w.org/emailkit/assets/icon-128x128.png" },
  { name: "Met Sales Countdown", src: "/images/met-sales-countdown.png" },
  { name: "WP Ultimate Review", src: "/images/wp-ultimate-review.png" },
  { name: "YoSuite HRM & Payroll", src: "/images/yosuite-hrm-payroll.png" },
];

export const plugins: Plugin[] = [
  {
    tag: "WP.ORG · MY OWN APPROVED PLUGIN",
    name: "Azhar FAQ for Elementor",
    desc: "My own approved WordPress.org plugin — a reusable, accessible FAQ widget for Elementor with clean markup and easy styling.",
  },
  {
    tag: "WOOCOMMERCE · FREELANCE",
    name: "Fake Order Notification",
    desc: "Detects and blocks fake orders, blocks abusive users, and sends order data to Google Sheets via a custom integration.",
  },
  {
    tag: "WOOCOMMERCE · FREELANCE",
    name: "Cart Converter",
    desc: "Cart recovery plugin that tracks abandoned carts and helps stores win back lost sales.",
  },
  {
    tag: "WOOCOMMERCE · FREELANCE",
    name: "Back Order",
    desc: "Lets stores keep selling out-of-stock products with clear back-order flows and stock handling.",
  },
  {
    tag: "WOOCOMMERCE · FREELANCE",
    name: "Quick Buy Now",
    desc: "One-click buy-now button that skips the cart and takes shoppers straight to checkout.",
  },
  {
    tag: "REST API · SYNC",
    name: "WC Product Sync → Vercel App",
    desc: "Syncs WooCommerce products to the DCC Bazar full-stack storefront on Vercel — keeping the modern JavaScript frontend in step with the store catalog.",
  },
  {
    tag: "CRM · REST API",
    name: "WooCommerce ⇄ Ecom King CRM",
    desc: "Custom plugin syncing full order and customer data between WooCommerce and Ecom King CRM (servicekey.com.bd) over REST APIs — powering SEO and sales tracking.",
  },
];

export const projects: Project[] = [
  {
    name: "DCC Bazar",
    host: "dccbazar.com",
    url: "https://www.dccbazar.com",
    desc: "Live WooCommerce store built with Elementor. Developed custom plugins, connected the store to Ecom King CRM syncing order/customer data via REST APIs, and integrated Messenger and WhatsApp messaging.",
    tags: ["WooCommerce", "Elementor", "CRM", "Messenger", "WhatsApp"],
  },
  {
    name: "ANS Clothes",
    host: "ansclothes.com",
    url: "https://www.ansclothes.com",
    desc: "Fashion e-commerce site built and maintained with Elementor — customized WooCommerce functionality and improved site performance.",
    tags: ["WooCommerce", "Elementor", "Performance"],
  },
];

export const contacts: Contact[] = [
  { label: "EMAIL", value: "azhar64100@gmail.com", href: "mailto:azhar64100@gmail.com" },
  { label: "PHONE / WHATSAPP", value: "+880 1815 128 784", href: "tel:+8801815128784" },
  { label: "GITHUB", value: "github.com/Azhar-1234", href: "https://github.com/Azhar-1234" },
  { label: "LINKEDIN", value: "in/azhar-uddin", href: "https://www.linkedin.com/in/azhar-uddin-5a961019" },
  { label: "LOCATION", value: "Mirpur-12, Dhaka, Bangladesh", href: "#contact" },
];
