import { useState } from 'react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Get started and explore',
    features: [
      { text: '10 swipes per day', included: true },
      { text: 'Basic matching', included: true },
      { text: 'Text messaging', included: true },
      { text: 'Photo uploads (5)', included: true },
      { text: 'Video calls', included: false },
      { text: 'See who liked you', included: false },
      { text: 'Unlimited swipes', included: false },
      { text: 'Priority matching', included: false },
    ],
    cta: 'Get Started',
    popular: false,
    gradient: '',
  },
  {
    name: 'Premium',
    price: '$14.99',
    period: '/month',
    desc: 'Most popular for serious daters',
    features: [
      { text: 'Unlimited swipes', included: true },
      { text: 'AI smart matching', included: true },
      { text: 'Text & voice messaging', included: true },
      { text: 'Photo uploads (20)', included: true },
      { text: 'Video calls (5/week)', included: true },
      { text: 'See who liked you', included: true },
      { text: 'Rewind last swipe', included: true },
      { text: 'Travel mode', included: false },
    ],
    cta: 'Go Premium',
    popular: true,
    gradient: 'from-primary to-accent',
  },
  {
    name: 'VIP',
    price: '$29.99',
    period: '/month',
    desc: 'Everything, unlimited',
    features: [
      { text: 'Everything in Premium', included: true },
      { text: 'Unlimited video calls', included: true },
      { text: 'Priority in search', included: true },
      { text: 'Travel / Passport mode', included: true },
      { text: 'Read receipts', included: true },
      { text: 'Profile boost (monthly)', included: true },
      { text: 'Incognito mode', included: true },
      { text: 'VIP badge & support', included: true },
    ],
    cta: 'Go VIP',
    popular: false,
    gradient: 'from-purple to-lavender',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="section-padding relative">
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block glass rounded-full px-5 py-2 text-sm text-primary mb-4">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
            Find Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-8">
            Start free and upgrade when you're ready. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-text-muted'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 rounded-full bg-white/10 cursor-pointer transition-colors"
            >
              <div
                className={`absolute top-0.5 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                  annual ? 'left-7.5' : 'left-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-text-muted'}`}>
              Annual
              <span className="ml-1 text-xs text-success">Save 40%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-[-16px]' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-accent px-4 py-1.5 rounded-full text-xs font-bold">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div
                className={`glass rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:bg-white/[0.08] ${
                  plan.popular
                    ? 'border-accent/30 shadow-lg shadow-accent/10'
                    : ''
                }`}
              >
                <div className="mb-6">
                  <h3 className="font-outfit font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-text-muted text-sm">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-outfit font-bold">
                    {plan.price === '$0'
                      ? '$0'
                      : annual
                      ? `$${(parseFloat(plan.price.slice(1)) * 0.6).toFixed(2)}`
                      : plan.price}
                  </span>
                  <span className="text-text-muted text-sm ml-1">
                    {plan.price === '$0' ? ' forever' : annual ? '/month' : plan.period}
                  </span>
                  {annual && plan.price !== '$0' && (
                    <p className="text-xs text-success mt-1">
                      Billed ${(parseFloat(plan.price.slice(1)) * 0.6 * 12).toFixed(0)} annually
                    </p>
                  )}
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <span className={f.included ? 'text-success' : 'text-white/20'}>
                        {f.included ? '✓' : '✕'}
                      </span>
                      <span className={f.included ? 'text-white/80' : 'text-white/30'}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    plan.popular
                      ? 'gradient-btn text-white'
                      : 'gradient-btn-outline text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-8">
          All plans include a 7-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  )
}
