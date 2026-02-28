import { useEffect, useRef } from 'react'

const features = [
  {
    icon: '🧠',
    title: 'AI Smart Matching',
    desc: 'Advanced algorithms analyze 36+ compatibility dimensions for meaningful connections.',
    span: 'md:col-span-2',
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    icon: '📹',
    title: 'Video Dates',
    desc: 'Face-to-face video calls before you meet. See the real person behind the profile.',
    span: '',
    gradient: 'from-purple/20 to-lavender/20',
  },
  {
    icon: '👆',
    title: 'Intuitive Swiping',
    desc: 'Smooth, addictive swiping experience with detailed profiles at your fingertips.',
    span: '',
    gradient: 'from-accent/20 to-primary/20',
  },
  {
    icon: '🔒',
    title: 'Privacy Mode',
    desc: 'Control who sees your profile. Browse invisibly and reveal yourself on your terms.',
    span: 'md:col-span-2',
    gradient: 'from-lavender/20 to-purple/20',
  },
  {
    icon: '💬',
    title: 'Ice Breakers',
    desc: 'Fun conversation starters and prompts to make the first message easy and natural.',
    span: '',
    gradient: 'from-gold/20 to-primary/20',
  },
  {
    icon: '📍',
    title: 'Location Based',
    desc: 'Discover amazing people near you with precise distance filters and travel mode.',
    span: '',
    gradient: 'from-success/20 to-lavender/20',
  },
  {
    icon: '🎯',
    title: 'Advanced Filters',
    desc: 'Filter by interests, lifestyle, values, and more to find exactly who you\'re looking for.',
    span: '',
    gradient: 'from-primary/20 to-purple/20',
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.feature-card').forEach((card, i) => {
              card.style.animationDelay = `${i * 0.1}s`
              card.classList.add('animate-slide-up')
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
    <section id="features" ref={sectionRef} className="section-padding relative">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block glass rounded-full px-5 py-2 text-sm text-lavender mb-4">
            Packed with Love
          </span>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
            Features You'll <span className="gradient-text">Love</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Every feature designed to make finding your person easier, safer, and more fun.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`feature-card opacity-0 group ${feature.span}`}
            >
              <div className={`glass rounded-3xl p-7 h-full hover:bg-white/[0.08] transition-all duration-500 relative overflow-hidden`}>
                {/* Gradient Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-outfit font-bold mb-2">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
