import { ArrowRight, BarChart3, CheckCircle2, Database, GitBranch, LineChart, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">DataQuality Pro</h2>
                <p className="text-xs text-slate-400">Professional Data Monitoring</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/login')}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              Sign In
            </button>
          </div>

          {/* Hero Content */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Enterprise-Grade Data Quality
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-white lg:text-6xl">
                  Transform Your Data Quality
                  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"> Management</span>
                </h1>
                <p className="text-lg leading-relaxed text-slate-300 lg:text-xl">
                  Monitor, validate, and ensure the highest quality standards for your data with our comprehensive analytics platform.
                  Real-time insights, automated validation, and actionable intelligence.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/login')}
                  className="group inline-flex h-14 items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-8 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('/overview')}
                  className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                >
                  View Demo
                  <Zap className="h-5 w-5" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  <p className="mt-1 text-sm text-slate-400">Accuracy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="mt-1 text-sm text-slate-400">Monitoring</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">Real-time</p>
                  <p className="mt-1 text-sm text-slate-400">Validation</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="absolute inset-0 -rotate-6 rounded-3xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-card/80 p-6 shadow-2xl backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">Data Quality Dashboard</span>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/60" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/60" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/60" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Completeness</span>
                      <span className="text-2xl font-bold text-emerald-400">98.5%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[98.5%] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Uniqueness</span>
                      <span className="text-2xl font-bold text-purple-400">96.2%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[96.2%] rounded-full bg-gradient-to-r from-purple-400 to-purple-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">Consistency</span>
                      <span className="text-2xl font-bold text-cyan-400">94.8%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[94.8%] rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl bg-white/5 p-3 text-center">
                      <p className="text-2xl font-bold text-white">1.2M</p>
                      <p className="text-xs text-slate-400">Records Validated</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-3 text-center">
                      <p className="text-2xl font-bold text-white">45</p>
                      <p className="text-xs text-slate-400">Active Rules</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
              <Shield className="h-4 w-4 text-cyan-300" />
              Powerful Features
            </div>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Everything You Need for Data Excellence
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Comprehensive tools to monitor, validate, and improve your data quality
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all hover:border-purple-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 ring-1 ring-purple-500/20 group-hover:ring-purple-500/40">
                <BarChart3 className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Real-time Analytics</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Monitor data quality metrics in real-time with comprehensive dashboards and instant alerts for anomalies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 ring-1 ring-cyan-500/20 group-hover:ring-cyan-500/40">
                <CheckCircle2 className="h-7 w-7 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Automated Validation</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Define custom validation rules and schemas. Automatically detect inconsistencies, duplicates, and missing values.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all hover:border-emerald-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 ring-1 ring-emerald-500/20 group-hover:ring-emerald-500/40">
                <TrendingUp className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Trend Analysis</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Track quality improvements over time with historical analysis and predictive insights for proactive management.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all hover:border-amber-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-amber-500/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 ring-1 ring-amber-500/20 group-hover:ring-amber-500/40">
                <Database className="h-7 w-7 text-amber-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Multi-Source Support</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Connect to databases, APIs, CSV files, and cloud storage. Unified quality monitoring across all data sources.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all hover:border-rose-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-rose-500/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 ring-1 ring-rose-500/20 group-hover:ring-rose-500/40">
                <Shield className="h-7 w-7 text-rose-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Data Governance</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Ensure compliance with industry standards. Role-based access control and comprehensive audit trails.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 transition-all hover:border-indigo-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 ring-1 ring-indigo-500/20 group-hover:ring-indigo-500/40">
                <GitBranch className="h-7 w-7 text-indigo-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">Data Lineage</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Track data flow from source to destination. Visualize transformations and dependencies for full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.3),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.2),transparent_50%)]" />

            <div className="relative text-center">
              <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                Ready to Elevate Your Data Quality?
              </h2>
              <p className="mb-8 text-lg text-slate-300">
                Join leading organizations that trust our platform for enterprise-grade data quality management.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => navigate('/login')}
                  className="group inline-flex h-14 items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-8 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('/overview')}
                  className="inline-flex h-14 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30"
                >
                  Explore Features
                  <LineChart className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-6 text-sm text-slate-400">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
                <Database className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">DataQuality Pro</p>
                <p className="text-xs text-slate-400">© 2026 All rights reserved</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <button className="transition-colors hover:text-white">Privacy</button>
              <button className="transition-colors hover:text-white">Terms</button>
              <button className="transition-colors hover:text-white">Support</button>
              <button className="transition-colors hover:text-white">Documentation</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
