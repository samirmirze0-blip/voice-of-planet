
export default function AdminPage() {
  const sections = [
    ["📰", "Articles", "Manage and publish stories"],
    ["📂", "Categories", "Organize content"],
    ["🖼️", "Media Library", "Manage images and files"],
    ["🔍", "SEO Manager", "Search optimization"],
    ["📊", "Analytics", "Website traffic and audience"],
    ["💰", "Monetization", "Advertising and revenue"],
    ["⚡", "Performance", "Speed and optimization"],
    ["🛡️", "Security Center", "Website protection"],
    ["🤖", "AI Assistant", "AI-powered content support"],
    ["👥", "Team Management", "Manage team access"],
    ["⚙️", "Settings", "Website configuration"],
  ];

  return (
    <main className="min-h-screen bg-[#080b12] text-white p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-cyan-400">
              VOICE OF PLANET
            </p>
            <h1 className="mt-3 text-3xl font-bold">Admin Dashboard</h1>
            <p className="mt-2 text-sm text-slate-400">
              Manage your technology media platform
            </p>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            ● System dashboard
          </span>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Total Articles", "0"],
            ["Published Stories", "0"],
            ["Drafts", "0"],
            ["Team Members", "0"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-[#111827] p-5">
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-3 text-3xl font-bold">{value}</p>
            </div>
          ))}
        </section>

        <h2 className="mb-4 text-xl font-semibold">Management Center</h2>
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-[#111827] p-6 transition hover:border-cyan-400/50"
            >
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{description}</p>
              <p className="mt-5 text-xs text-cyan-400">Setup pending</p>
            </div>
          ))}
        </section>

        <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          Voice of Planet · Administration
        </footer>
      </div>
    </main>
  );
}
