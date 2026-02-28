import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: "I was skeptical about dating apps, but HeartSync changed everything. Met my fiancé within 3 months! The AI matching is incredible — we have so much in common.",
    name: 'Sarah & Michael',
    location: 'New York, USA',
    emoji: '👩🏻‍🤝‍👨🏽',
    rating: 5,
    together: '2 years together',
  },
  {
    quote: "The video date feature gave me confidence to meet someone for real. No catfishing, no surprises — just genuine connection. We're getting married next spring!",
    name: 'Emily & James',
    location: 'London, UK',
    emoji: '👩🏼‍🤝‍👨🏻',
    rating: 5,
    together: '1.5 years together',
  },
  {
    quote: "After years of swiping on other apps, HeartSync actually matched me with someone compatible. It's like they read my mind. Best decision I ever made!",
    name: 'Priya & Arjun',
    location: 'Mumbai, India',
    emoji: '👩🏽‍🤝‍👨🏾',
    rating: 5,
    together: '3 years together',
  },
  {
    quote: "The ice breaker feature made it so easy to start conversations. No more awkward 'hey' messages. We talked for hours on our first chat!",
    name: 'Lisa & David',
    location: 'Sydney, Australia',
    emoji: '👩🏻‍🤝‍👨🏼',
    rating: 5,
    together: '1 year together',
  },
  {
    quote: "I love how safe I feel on HeartSync. The verification system and privacy controls gave me peace of mind. Found an amazing partner who respects boundaries.",
    name: 'Maria & Carlos',
    location: 'Barcelona, Spain',
    emoji: '👩🏽‍🤝‍👨🏽',
    rating: 5,
    together: '2.5 years together',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (i) => {
    clearInterval(intervalRef.current)
    setActive(i)
    startAutoPlay()
  }

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block glass rounded-full px-5 py-2 text-sm text-gold mb-4">
            Real Love Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Thousands of couples found each other on HeartSync. Here are some of their stories.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === active
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="glass rounded-3xl p-8 md:p-12 text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-gold text-xl">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-5xl">{t.emoji}</span>
                    <div>
                      <h4 className="font-outfit font-bold text-lg">{t.name}</h4>
                      <p className="text-text-muted text-sm">{t.location}</p>
                      <span className="inline-block mt-2 text-xs bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full">
                        {t.together}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === active
                    ? 'w-10 h-3 bg-gradient-to-r from-primary to-accent'
                    : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { num: '10M+', label: 'Active Users' },
            { num: '500K+', label: 'Matches Daily' },
            { num: '150K+', label: 'Success Stories' },
            { num: '4.9★', label: 'App Rating' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center">
              <p className="text-2xl md:text-3xl font-outfit font-bold gradient-text">{stat.num}</p>
              <p className="text-text-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
