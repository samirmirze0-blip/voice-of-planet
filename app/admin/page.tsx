

const sections = [
  { icon: "📰", title: "Articles", desc: "Create, edit and publish stories" },
  { icon: "📂", title: "Categories", desc: "Organize website content" },
  { icon: "🖼️", title: "Media Library", desc: "Manage images and files" },
  { icon: "🔍", title: "SEO Manager", desc: "Improve search visibility" },
  { icon: "📊", title: "Analytics", desc: "Monitor audience and traffic" },
  { icon: "💰", title: "Monetization", desc: "Manage advertising and revenue" },
  { icon: "⚡", title: "Performance", desc: "Website speed and optimization" },
  { icon: "🛡️", title: "Security Center", desc: "Review website security" },
  { icon: "🤖", title: "AI Assistant", desc: "Prepare content with AI support" },
  { icon: "👥", title: "Team Management", desc: "Manage team members and roles" },
  { icon: "⚙️", title: "Settings", desc: "Configure your platform" },
];

export default function AdminPage() {
  return (
    <main className="admin">
      <style>{`
        * { box-sizing: border-box; }
        .admin {
          min-height: 100vh;
          padding: 40px;
          background: #080b12;
          color: #f3f5f7;
          font-family: Arial, sans-serif;
        }
        .admin-inner { max-width: 1250px; margin: auto; }
        .admin-header {
          display: flex; justify-content: space-between;
          align-items: center; gap: 20px; margin-bottom: 38px;
        }
        .brand { color: #c8f169; font-size: 12px; letter-spacing: 3px; font-weight: bold; }
        h1 { font-size: 34px; margin: 12px 0; }
        .subtitle { color: #8993a1; font-size: 14px; }
        .status {
          color: #c8f169; border: 1px solid #46552b;
          padding: 10px 14px; border-radius: 30px; font-size: 12px;
        }
        .stats {
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px; margin-bottom: 38px;
        }
        .stat, .section-card {
          background: #111827; border: 1px solid #263241;
          border-radius: 14px; padding: 22px;
        }
        .stat-label { color: #8993a1; font-size: 13px; }
        .stat-value { font-size: 30px; font-weight: bold; margin-top: 12px; }
        .section-title { font-size: 21px; margin-bottom: 18px; }
        .sections {
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .section-card { min-height: 155px; transition: border-color .2s; }
        .section-card:hover { border-color: #c8f169; }
        .section-icon { font-size: 28px; }
        .section-card h3 { font-size: 16px; margin: 14px 0 8px; }
        .section-card p { color: #8993a1; font-size: 13px; margin: 0; line-height: 1.5; }
        .pending { color: #c8f169; font-size: 11px; margin-top: 15px; }
        .admin-footer {
          border-top: 1px solid #263241; margin-top: 40px;
          padding-top: 22px; color: #8993a1; font-size: 12px;
        }
        @media (max-width: 850px) {
          .sections { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 550px) {
          .admin { padding: 22px 16px; }
          .admin-header { align-items: flex-start; flex-direction: column; }
          h1 { font-size: 27px; }
          .sections { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="admin-inner">
        <header className="admin-header">
          <div>
            <div className="brand">VOICE OF PLANET</div>
            <h1>Admin Dashboard</h1>
            <div className="subtitle">Manage your technology media platform</div>
          </div>
          <div className="status">● System dashboard</div>
        </header>

        <section className="stats">
          {[
            ["Total Articles", "0"],
            ["Published Stories", "0"],
            ["Drafts", "0"],
            ["Team Members", "0"],
          ].map(([label, value]) => (
            <div className="stat" key={label}>
              <div className="stat-label">{label}</div>
              <div className="stat-value">{value}</div>
            </div>
          ))}
        </section>

        <h2 className="section-title">Management Center</h2>

        <section className="sections">
          {sections.map((item) => (
            <div className="section-card" key={item.title}>
              <div className="section-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="pending">Setup pending</div>
            </div>
          ))}
        </section>

        <footer className="admin-footer">
          Voice of Planet · Administration
        </footer>
      </div>
    </main>
  );
}

