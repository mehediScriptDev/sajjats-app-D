const footerLinks = {
  Product: ['Features', 'Pricing', 'Success Stories', 'Safety', 'Blog'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Contact', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Licenses'],
  Support: ['Help Center', 'Community', 'Status', 'Feedback', 'Developers'],
}

const socials = [
  { icon: '𝕏', label: 'Twitter' },
  { icon: '📸', label: 'Instagram' },
  { icon: '📘', label: 'Facebook' },
  { icon: '🎵', label: 'TikTok' },
  { icon: '💼', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl transition-transform group-hover:scale-110">
                💕
              </div>
              <span className="text-2xl font-bold font-outfit gradient-text">HeartSync</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Connecting hearts worldwide with AI-powered matching. Because everyone deserves to find their person.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass rounded-xl px-4 py-2.5 text-sm bg-transparent outline-none focus:border-accent/50 placeholder:text-white/30 transition-colors"
              />
              <button className="gradient-btn px-5 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-outfit font-bold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-text-muted text-sm hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-text-muted text-xs text-center">
              © {new Date().getFullYear()} HeartSync. All rights reserved. Made with 💕
            </p>

            {/* Language */}
            <div className="flex items-center gap-2 text-text-muted text-xs">
              <span>🌐</span>
              <select className="bg-transparent border-none outline-none text-xs text-text-muted cursor-pointer">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
                <option>日本語</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
