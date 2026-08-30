'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Zap,
  Users,
  BarChart3,
  Layers,
  Check,
  Menu,
  X,
  ArrowRight,
  Star,
  Sparkles,
  Target,
  Clock,
  Shield,
} from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real time updates across your entire workspace. No more waiting for syncs or refreshes.',
    size: 'large',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built for teams of any size with granular permissions and shared workspaces.',
    size: 'medium',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track velocity, burndown, and team performance with beautiful dashboards.',
    size: 'medium',
  },
  {
    icon: Layers,
    title: 'Integrations',
    description: 'Connect with 200+ tools including Slack, GitHub, Figma, and more.',
    size: 'small',
  },
]

const stats = [
  { value: '10K+', label: 'Teams Worldwide' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50M+', label: 'Tasks Completed' },
  { value: '4.9', label: 'User Rating', icon: Star },
]

const pricingTiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      '3 team members',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/user/month',
    description: 'For growing teams who need more power',
    features: [
      'Unlimited projects',
      'Unlimited team members',
      'Advanced analytics',
      'Priority support',
      'Custom workflows',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with advanced needs',
    features: [
      'Everything in Pro',
      'Dedicated success manager',
      'SSO & SAML',
      'Advanced security',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const testimonials = [
  {
    quote: 'Stellar transformed how our engineering team operates. We shipped 40% faster in the first quarter.',
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechVentures',
    initials: 'SC',
    bgColor: 'bg-violet-500',
  },
  {
    quote: 'Finally, a project management tool that feels like it was designed for how we actually work.',
    author: 'Marcus Rodriguez',
    role: 'Product Director',
    company: 'InnovateCo',
    initials: 'MR',
    bgColor: 'bg-emerald-500',
  },
  {
    quote: 'The analytics alone are worth the price. We can finally see where our time goes.',
    author: 'Elena Kowalski',
    role: 'Operations Lead',
    company: 'ScaleUp Studios',
    initials: 'EK',
    bgColor: 'bg-amber-500',
  },
]

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-brand" />
              <span className="text-xl font-bold text-foreground">Stellar</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-brand hover:bg-brand-light text-white">
                <a href="#pricing">Start Free</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 glass-card transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileNavOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-foreground hover:text-brand transition-all duration-300"
                style={{ transitionDelay: mobileNavOpen ? `${index * 60}ms` : '0ms' }}
                onClick={() => setMobileNavOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full mt-4 bg-brand hover:bg-brand-light text-white">
              <a href="#pricing">Start Free</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-brand/10 text-brand border-brand/20 hover:bg-brand/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Now with AI powered workflows
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Ship faster with</span>
              <br />
              <span className="gradient-text">Stellar</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8">
              Ship faster. Stay aligned. Zero chaos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-brand hover:bg-brand-light text-white glow-brand">
                <a href="#pricing">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-surface">
                <a href="#features">See How It Works</a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="relative rounded-xl overflow-hidden border border-border glow-brand">
              <Image
                src="/images/hero.png"
                alt="Stellar dashboard showing project boards and team collaboration"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">Features</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything you need to ship
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Powerful features designed to help your team move faster and stay aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <Card className="lg:col-span-2 lg:row-span-2 bg-surface border-border overflow-hidden group hover:border-brand/50 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                  <Zap className="w-6 h-6 text-brand" />
                </div>
                <CardTitle className="text-2xl text-foreground">{features[0].title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted mb-6">{features[0].description}</p>
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <Image
                    src="/images/feature.png"
                    alt="Stellar real time collaboration feature"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Medium Feature Cards */}
            {features.slice(1, 3).map((feature) => (
              <Card
                key={feature.title}
                className="bg-surface border-border group hover:border-brand/50 transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-brand" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted">{feature.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Small Feature Card */}
            <Card className="bg-surface border-border group hover:border-brand/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                  <Layers className="w-6 h-6 text-brand" />
                </div>
                <CardTitle className="text-xl text-foreground">{features[3].title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">{features[3].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 px-4 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  {stat.icon && <stat.icon className="w-6 h-6 text-amber-400 fill-amber-400" />}
                </div>
                <p className="text-sm sm:text-base text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative ${
                  tier.highlighted
                    ? 'bg-gradient-to-b from-brand/10 to-surface border-brand glow-brand'
                    : 'bg-surface border-border'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-foreground">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted">{tier.period}</span>}
                  </div>
                  <p className="text-sm text-muted mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      tier.highlighted
                        ? 'bg-brand hover:bg-brand-light text-white'
                        : 'bg-surface hover:bg-border text-foreground border border-border'
                    }`}
                  >
                    <a href={tier.name === 'Enterprise' ? 'mailto:sales@stellarflow.io' : '#pricing'}>
                      {tier.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Loved by teams everywhere
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              See what our customers have to say about Stellar.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Card className="bg-background border-border p-8 sm:p-12">
                <CardContent className="p-0 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl sm:text-2xl text-foreground mb-8">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full ${testimonials[currentTestimonial].bgColor} flex items-center justify-center text-white font-bold`}
                    >
                      {testimonials[currentTestimonial].initials}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-sm text-muted">
                        {testimonials[currentTestimonial].role} at{' '}
                        {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Carousel Controls */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-background border border-border hover:border-brand transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowRight className="w-5 h-5 text-foreground rotate-180" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-brand' : 'bg-border'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-background border border-border hover:border-brand transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand/20 via-surface to-background border border-brand/30 p-8 sm:p-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-2xl" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-brand" />
                <span className="text-brand font-medium">Ready to transform your workflow?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Start building better products today
              </h2>
              <p className="text-lg text-muted mb-8 max-w-xl mx-auto">
                Join thousands of teams already using Stellar to ship faster and collaborate better.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-brand hover:bg-brand-light text-white glow-brand">
                  <a href="#pricing">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-surface"
                >
                  <a href="mailto:sales@stellarflow.io">Talk to Sales</a>
                </Button>
              </div>
              <p className="text-sm text-muted mt-6 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> 14 day free trial
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4" /> No credit card required
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-brand" />
                <span className="text-lg font-bold text-foreground">Stellar</span>
              </a>
              <p className="text-sm text-muted">
                Project management for teams who ship fast.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-sm text-muted hover:text-foreground transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@stellarflow.io" className="text-sm text-muted hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="mailto:careers@stellarflow.io" className="text-sm text-muted hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@stellarflow.io" className="text-sm text-muted hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:legal@stellarflow.io" className="text-sm text-muted hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="mailto:legal@stellarflow.io" className="text-sm text-muted hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Stellar. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@stellarflow.io"
                className="text-muted hover:text-foreground transition-colors"
              >
                hello@stellarflow.io
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
