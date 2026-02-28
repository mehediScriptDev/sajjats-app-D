export default function Download() {
  return (
    <section id="download" className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-purple/10" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Phone */}
              <div className="w-64 h-[520px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-2.5 shadow-2xl shadow-accent/20 animate-float">
                <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-dark-card to-dark-light overflow-hidden">
                  {/* Mock App Screen */}
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4 pt-6">
                      <span className="text-lg">💕</span>
                      <span className="font-outfit font-bold text-sm gradient-text">HeartSync</span>
                      <span className="text-lg">⚡</span>
                    </div>

                    <div className="text-center mb-4">
                      <p className="text-xs text-white/60 mb-2">Your Matches Today</p>
                      <div className="flex justify-center gap-2">
                        {['👩🏻', '👨🏽', '👩🏼', '👨🏻', '👩🏽'].map((e, i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-accent/30 flex items-center justify-center text-lg"
                          >
                            {e}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Messages Preview */}
                    <div className="flex-1 space-y-3">
                      {[
                        { name: 'Sarah', msg: 'Hey! Your travel pics are amazing 😍', time: '2m', emoji: '👩🏻' },
                        { name: 'Alex', msg: 'Coffee this weekend? ☕', time: '15m', emoji: '👨🏽' },
                        { name: 'Emma', msg: 'Love that you hike too! 🏔️', time: '1h', emoji: '👩🏼' },
                      ].map((chat, i) => (
                        <div key={i} className="flex items-center gap-3 glass rounded-xl p-2.5">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-base flex-shrink-0">
                            {chat.emoji}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-semibold">{chat.name}</span>
                              <span className="text-[10px] text-white/40">{chat.time}</span>
                            </div>
                            <p className="text-[10px] text-white/60 truncate">{chat.msg}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Popup */}
              <div className="absolute -top-6 -right-12 glass rounded-2xl px-4 py-3 animate-float-reverse hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎉</span>
                  <div>
                    <p className="text-xs font-semibold">New Match!</p>
                    <p className="text-[10px] text-white/60">Start chatting now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <span className="inline-block glass rounded-full px-5 py-2 text-sm text-accent mb-6">
              Download Now
            </span>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
              Ready to Find{' '}
              <span className="gradient-text">Your Person?</span>
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-lg mx-auto lg:mx-0">
              Join millions of people who have already found meaningful connections.
              Download HeartSync and start your love story today.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#"
                className="glass-strong hover:bg-white/[0.15] rounded-2xl px-6 py-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 group"
              >
                <span className="text-3xl">🍎</span>
                <div className="text-left">
                  <p className="text-[10px] text-white/60">Download on the</p>
                  <p className="font-outfit font-bold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="glass-strong hover:bg-white/[0.15] rounded-2xl px-6 py-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 group"
              >
                <span className="text-3xl">▶️</span>
                <div className="text-left">
                  <p className="text-[10px] text-white/60">Get it on</p>
                  <p className="font-outfit font-bold">Google Play</p>
                </div>
              </a>
            </div>

            {/* Download Stats */}
            <div className="flex gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-2xl font-outfit font-bold gradient-text">10M+</p>
                <p className="text-xs text-text-muted">Downloads</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-outfit font-bold gradient-text">4.9★</p>
                <p className="text-xs text-text-muted">Rating</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-2xl font-outfit font-bold gradient-text">150+</p>
                <p className="text-xs text-text-muted">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
