import { useEffect, useRef } from 'react'

const floatingHearts = ['💕', '💖', '✨', '💗', '💝', '💘', '❤️', '💜']

export default function Hero() {
  const heartsRef = useRef(null)

  useEffect(() => {
    const container = heartsRef.current
    if (!container) return

    const createHeart = () => {
      const heart = document.createElement('span')
      heart.textContent = floatingHearts[Math.floor(Math.random() * floatingHearts.length)]
      heart.className = 'absolute text-2xl pointer-events-none select-none'
      heart.style.left = Math.random() * 100 + '%'
      heart.style.bottom = '-40px'
      heart.style.opacity = '0'
      heart.style.transition = 'none'

      container.appendChild(heart)

      const duration = 4000 + Math.random() * 4000
      const drift = (Math.random() - 0.5) * 200

      heart.animate(
        [
          { transform: 'translateY(0) translateX(0) scale(0.5)', opacity: 0 },
          { transform: `translateY(-40vh) translateX(${drift * 0.5}px) scale(1)`, opacity: 0.8 },
          { transform: `translateY(-80vh) translateX(${drift}px) scale(0.3)`, opacity: 0 },
        ],
        { duration, easing: 'ease-out' }
      )

      setTimeout(() => heart.remove(), duration)
    }

    const interval = setInterval(createHeart, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating Hearts */}
      <div ref={heartsRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-white/80">10M+ Happy Matches Made</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight mb-6 animate-slide-up">
            Find Your{' '}
            <span className="gradient-text">Perfect</span>
            <br />
            Match
          </h1>

          <p className="text-lg md:text-xl text-text-muted max-w-lg mx-auto lg:mx-0 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Connect with genuine people near you. Our AI-powered matching finds someone
            who truly gets you — not just your profile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#download" className="gradient-btn px-8 py-4 rounded-full text-lg font-semibold text-white text-center animate-pulse-glow">
              Get Started Free
            </a>
            <a href="#how-it-works" className="gradient-btn-outline px-8 py-4 rounded-full text-lg font-semibold text-white text-center">
              See How It Works
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex -space-x-3">
              {['👩🏻', '👨🏽', '👩🏼', '👨🏻'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-dark flex items-center justify-center text-lg"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-gold text-sm">{'★★★★★'}</div>
              <p className="text-xs text-text-muted">4.9 stars from 50K+ reviews</p>
            </div>
          </div>
        </div>

        {/* Right - Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative w-72 h-[580px] rounded-[3rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-3 shadow-2xl shadow-accent/20">
              <div className="w-full h-full rounded-[2.4rem] bg-gradient-to-b from-dark-card to-dark-light overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-4 pb-2">
                  <span className="text-xs text-white/60">9:41</span>
                  <div className="w-20 h-5 bg-black rounded-full" />
                  <span className="text-xs text-white/60">📶</span>
                </div>

                {/* App Content */}
                <div className="px-4 pt-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl">💕</span>
                    <span className="font-outfit font-bold gradient-text">HeartSync</span>
                    <span className="text-xl">🔔</span>
                  </div>

                  {/* Profile Card */}
                  <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-accent/20 to-purple/20 p-0.5">
                    <div className="rounded-2xl overflow-hidden">
                      <div className="h-64 bg-gradient-to-br from-primary/40 via-accent/30 to-purple/40 flex items-center justify-center relative">
                        <span className="text-8xl">👩🏻‍🦰</span>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="glass rounded-xl px-3 py-2">
                            <p className="font-outfit font-bold text-sm">Sarah, 26</p>
                            <p className="text-xs text-white/70">📍 2 miles away</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-6 mt-4">
                    <button className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                      ✕
                    </button>
                    <button className="w-16 h-16 rounded-full gradient-btn flex items-center justify-center text-3xl hover:scale-110 transition-transform">
                      ❤️
                    </button>
                    <button className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl hover:scale-110 transition-transform">
                      ⭐
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards Around Phone */}
            <div className="absolute -top-4 -left-16 glass rounded-2xl px-4 py-3 animate-float hidden md:block">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="text-xs font-semibold">New Match!</p>
                  <p className="text-[10px] text-white/60">You and Alex matched</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-16 glass rounded-2xl px-4 py-3 animate-float-reverse hidden md:block">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎉</span>
                <div>
                  <p className="text-xs font-semibold">It's a Date!</p>
                  <p className="text-[10px] text-white/60">Coffee tomorrow at 5pm</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/3 -right-20 glass rounded-full px-4 py-2 animate-float hidden lg:block">
              <span className="text-sm">98% Match 🔥</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-text-muted">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
