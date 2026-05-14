export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Local SEO Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Validate NAP Consistency Across Local Directories
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Inconsistent Name, Address &amp; Phone data across Google, Yelp, Yellow Pages and 50+ directories silently kills your local rankings. Find and fix every discrepancy in minutes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Validating – $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for free scan preview.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["50+", "Directories Checked"],
            ["Real-Time", "Discrepancy Alerts"],
            ["Actionable", "Fix Recommendations"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Check 50+ local directories",
              "Automated monthly re-scans",
              "NAP discrepancy dashboard",
              "Priority fix recommendations",
              "CSV export of all citations",
              "Email alerts on new issues"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is NAP consistency and why does it matter?",
              a: "NAP stands for Name, Address, and Phone. Search engines cross-reference your business info across directories. Inconsistencies confuse algorithms and lower your local search rankings."
            },
            {
              q: "Which directories does the validator check?",
              a: "We check 50+ directories including Google Business Profile, Yelp, Yellow Pages, Bing Places, Apple Maps, Facebook, Foursquare, TripAdvisor, and many more niche directories."
            },
            {
              q: "How often are citations re-scanned?",
              a: "Your citations are automatically re-scanned every month. You'll receive email alerts whenever a new discrepancy is detected so you can fix it fast."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Local SEO Citation Validator. All rights reserved.
      </footer>
    </main>
  );
}
