import { useEffect, useRef } from 'react'

const safetyFeatures = [
  {
    icon: '🛡️',
    title: 'Photo Verification',
    desc: 'AI-powered selfie verification ensures every profile is a real person. Blue badge = verified.',
  },
  {
    icon: '🔐',
    title: 'End-to-End Encryption',
    desc: 'Your messages, photos, and personal data are encrypted. Nobody can read them, not even us.',
  },
  {
    icon: '🚫',
    title: 'Block & Report',
    desc: 'Instant blocking and a 24/7 moderation team reviews reports within minutes for your safety.',
  },
  {
    icon: '👁️',
    title: 'Incognito Mode',
    desc: 'Browse profiles invisibly. Control exactly who can see you and when your profile is visible.',
  },
  {
    icon: '📍',
    title: 'Safe Location',
    desc: 'Fuzzy location sharing never reveals your exact address. Share precise location only when you choose.',
  },
  {
    icon: '🆘',
    title: 'Safety Toolkit',
    desc: 'Built-in date check-in, emergency contacts, and safety tips for meeting in person.',
  },
]

export default function Safety() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.safety-item').forEach((item, i) => {
              item.style.animationDelay = `${i * 0.1}s`
              item.classList.add('animate-slide-up')
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="safety" ref={sectionRef} className="section-padding relative">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-success/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block glass rounded-full px-5 py-2 text-sm text-success mb-4">
              Your Safety Matters
            </span>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
              Safe & <span className="gradient-text">Secure</span>
            </h2>
            <p className="text-text-muted text-lg mb-10">
              Built from the ground up with your safety as our #1 priority.
              We set the industry standard for dating app security.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {safetyFeatures.map((feature, i) => (
                <div key={i} className="safety-item opacity-0 group">
                  <div className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                    <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-sm mb-1">{feature.title}</h4>
                      <p className="text-text-muted text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Shield Visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main Shield */}
              <div className="w-72 h-80 md:w-80 md:h-96 relative">
                <div className="absolute inset-0 glass rounded-[3rem] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🛡️</div>
                    <h3 className="font-outfit font-bold text-2xl gradient-text mb-2">100% Protected</h3>
                    <p className="text-text-muted text-sm px-8">
                      Military-grade encryption protects every interaction
                    </p>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-3 animate-float">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">✅</span>
                    <span className="text-xs font-semibold">Verified</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-8 glass rounded-2xl p-3 animate-float-reverse">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🔒</span>
                    <span className="text-xs font-semibold">Encrypted</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-10 glass rounded-full px-3 py-1.5 animate-float">
                  <span className="text-xs">🔐 Secure</span>
                </div>

                <div className="absolute top-1/4 -left-10 glass rounded-full px-3 py-1.5 animate-float-reverse">
                  <span className="text-xs">👁️ Private</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {['🏆 GDPR Compliant', '🔒 SOC 2 Certified', '✅ ID Verified Users', '🛡️ 24/7 Moderation'].map((badge, i) => (
            <div key={i} className="glass rounded-full px-5 py-2.5 text-sm text-white/80">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
