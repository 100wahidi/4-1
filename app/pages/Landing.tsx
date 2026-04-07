import { ArrowRight, CheckCircle2, Database, FileCheck, Filter, AlertTriangle, BarChart3, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-8">
      {/* Header */}
      <header className="mx-auto mb-12 flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25">
            <Database className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">DataQuality Pro</h1>
            <p className="text-xs text-slate-400">Professional Data Monitoring</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
        >
          Sign In
        </button>
      </header>

      <main className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            <Activity className="h-4 w-4" />
            Enterprise Data Quality Platform
          </div>
          <h2 className="mb-4 text-5xl font-bold leading-tight text-white lg:text-6xl">
            Professional Data Quality
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Management System
            </span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Monitor and validate your data with automated quality checks, real-time analytics, and comprehensive reporting.
          </p>
        </section>

        {/* Data Flow Workflow */}
        <section className="mb-16">
          <div className="mb-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-white">Data Quality Workflow</h3>
            <p className="text-slate-400">Automated pipeline for comprehensive data validation and monitoring</p>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-card/90 to-card/50 p-8 shadow-2xl backdrop-blur-sm lg:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.15),transparent_50%)]" />

            <div className="relative">
              {/* Workflow Steps */}
              <div className="grid gap-6 md:grid-cols-5">
                {/* Step 1: Data Source */}
                <div className="group relative">
                  <div className="rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-6 transition-all hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 ring-2 ring-purple-400/30">
                      <Database className="h-6 w-6 text-purple-300" />
                    </div>
                    <h4 className="mb-2 font-semibold text-white">Data Source</h4>
                    <p className="text-xs leading-relaxed text-slate-400">
                      CSV, Database, API ingestion
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-purple-400/50" />
                  </div>
                </div>

                {/* Step 2: Schema Validation */}
                <div className="group relative">
                  <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 p-6 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 ring-2 ring-cyan-400/30">
                      <FileCheck className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h4 className="mb-2 font-semibold text-white">Schema Check</h4>
                    <p className="text-xs leading-relaxed text-slate-400">
                      Data type & structure validation
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-cyan-400/50" />
                  </div>
                </div>

                {/* Step 3: Quality Rules */}
                <div className="group relative">
                  <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 p-6 transition-all hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/20">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 ring-2 ring-emerald-400/30">
                      <Filter className="h-6 w-6 text-emerald-300" />
                    </div>
                    <h4 className="mb-2 font-semibold text-white">Quality Rules</h4>
                    <p className="text-xs leading-relaxed text-slate-400">
                      Completeness, uniqueness checks
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-emerald-400/50" />
                  </div>
                </div>

                {/* Step 4: Anomaly Detection */}
                <div className="group relative">
                  <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-500/20 to-amber-500/5 p-6 transition-all hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/20">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 ring-2 ring-amber-400/30">
                      <AlertTriangle className="h-6 w-6 text-amber-300" />
                    </div>
                    <h4 className="mb-2 font-semibold text-white">Issue Detection</h4>
                    <p className="text-xs leading-relaxed text-slate-400">
                      Duplicates, nulls, errors
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-amber-400/50" />
                  </div>
                </div>

                {/* Step 5: Reporting */}
                <div className="group">
                  <div className="rounded-2xl border border-rose-400/30 bg-gradient-to-br from-rose-500/20 to-rose-500/5 p-6 transition-all hover:border-rose-400/50 hover:shadow-lg hover:shadow-rose-500/20">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/20 ring-2 ring-rose-400/30">
                      <BarChart3 className="h-6 w-6 text-rose-300" />
                    </div>
                    <h4 className="mb-2 font-semibold text-white">Analytics</h4>
                    <p className="text-xs leading-relaxed text-slate-400">
                      Reports & dashboards
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Metrics Summary */}
              <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">98.5%</p>
                  <p className="text-xs text-slate-400">Completeness</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-purple-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">96.2%</p>
                  <p className="text-xs text-slate-400">Uniqueness</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">94.8%</p>
                  <p className="text-xs text-slate-400">Consistency</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-amber-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">1.2M</p>
                  <p className="text-xs text-slate-400">Records</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 ring-1 ring-purple-400/20">
                <Database className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Multi-Source Support</h3>
              <p className="text-sm text-slate-400">
                Connect to CSV files, databases, APIs, and cloud storage for unified quality monitoring.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 ring-1 ring-cyan-400/20">
                <Activity className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Real-Time Monitoring</h3>
              <p className="text-sm text-slate-400">
                Track data quality metrics in real-time with instant alerts and automated validation rules.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 ring-1 ring-emerald-400/20">
                <BarChart3 className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Comprehensive Reports</h3>
              <p className="text-sm text-slate-400">
                Generate detailed reports with trend analysis, KRI analytics, and technical validation insights.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section - Enter Dashboard */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-card/90 to-cyan-500/10 p-12 text-center shadow-2xl lg:p-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.25),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.2),transparent_50%)]" />

            <div className="relative">
              <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Start Monitoring Your Data Quality
              </h3>
              <p className="mb-8 text-lg text-slate-300">
                Access comprehensive dashboards, validation reports, and real-time analytics
              </p>

              <button
                onClick={() => navigate('/overview')}
                className="group inline-flex h-16 items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 px-10 text-lg font-bold text-white shadow-2xl shadow-purple-500/30 transition-all hover:-translate-y-1 hover:shadow-3xl hover:shadow-purple-500/50"
              >
                Enter Dashboard
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
              </button>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>No installation required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Real-time validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Comprehensive analytics</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl border-t border-white/10 pt-8">
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
          </div>
        </div>
      </footer>
    </div>
  );
}
