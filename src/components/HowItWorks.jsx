import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    icon: '📝',
    title: 'Create Profile',
    desc: 'Sign up in seconds. Add your photos, interests, and let your personality shine through your unique profile.',
    color: 'from-primary to-accent',
  },
  {
    num: '02',
    icon: '✨',
    title: 'Get Matched',
    desc: 'Our smart AI algorithm analyzes compatibility across 36 dimensions to find people who truly resonate with you.',
    color: 'from-accent to-purple',
  },
  {
    num: '03',
    icon: '💕',
    title: 'Start Dating',
    desc: 'Chat, video call, and meet your matches. Break the ice with fun prompts and plan your perfect first date.',
    color: 'from-purple to-lavender',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.step-card').forEach((card, i) => {
              card.style.animationDelay = `${i * 0.2}s`
              card.classList.add('animate-slide-up')
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block glass rounded-full px-5 py-2 text-sm text-accent mb-4">
            Simple & Easy
          </span>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
            How <span className="gradient-text">HeartSync</span> Works
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Finding love shouldn't be complicated. Three simple steps to start your journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-primary via-accent to-purple opacity-30" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="step-card opacity-0 group relative"
            >
              <div className="glass rounded-3xl p-8 text-center hover:bg-white/[0.08] transition-all duration-500 h-full">
                {/* Step Number */}
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {step.icon}
                </div>

                {/* Number Badge */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-xs font-bold opacity-50`}>
                  {step.num}
                </div>

                <h3 className="text-xl font-outfit font-bold mb-3">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
