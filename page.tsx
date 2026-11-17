const stories = [
  { category: "ARTIFICIAL INTELLIGENCE", time: "8 MIN READ", title: "The next era of AI is being built around agents", summary: "A new generation of systems is moving beyond answering questions to completing useful, multi-step work.", tag: "AI & FUTURE", tone: "violet" },
  { category: "SCIENCE", time: "6 MIN READ", title: "Inside the race to make clean energy more efficient", summary: "Researchers are rethinking how energy is stored, transported and used at scale.", tag: "DISCOVERY", tone: "cyan" },
  { category: "CYBERSECURITY", time: "5 MIN READ", title: "Why digital trust is becoming a core technology", summary: "Security, identity and privacy are moving from the background to the center of product design.", tag: "SECURITY", tone: "orange" }
];

const categories = ["Artificial Intelligence", "Gadgets", "Science", "Cybersecurity", "Startups", "Space"];

export default function Home() {
  return (
    <main>
      <div className="topline"><span>THE SIGNAL FOR WHAT&apos;S NEXT</span><span>INDEPENDENT TECHNOLOGY COVERAGE</span></div>
      <header className="header wrap">
        <a className="brand" href="/" aria-label="Voice of Planet home"><span className="brand-mark">V<span>•</span>P</span><span className="brand-name">VOICE OF<br/>PLANET</span></a>
        <nav aria-label="Main navigation">
          <a href="#latest">Latest</a><a href="#categories">Categories</a><a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#newsletter">Stay informed <span>↗</span></a>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><i/> TECHNOLOGY · IDEAS · TOMORROW</div>
          <h1>The future<br/>doesn&apos;t wait.<br/><em>Neither do we.</em></h1>
          <p className="hero-intro">A sharper perspective on the technology changing our world — from artificial intelligence to the next scientific frontier.</p>
          <div className="hero-actions"><a className="primary-btn" href="#latest">Explore the latest <span>↗</span></a><span className="edition">VOL. 01 &nbsp; / &nbsp; GLOBAL EDITION</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract digital planet artwork">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="planet"><div className="planet-shine"/></div>
          <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
          <div className="art-label"><span>FIG. 001</span><b>THE CONNECTED<br/>WORLD</b><small>ALWAYS IN MOTION</small></div>
          <div className="art-coordinate">35° 41&apos; N&nbsp; / &nbsp;139° 41&apos; E</div>
        </div>
      </section>

      <section className="ticker"><div className="ticker-track"><span>IDEAS THAT MOVE US</span> ✳ <span>TECHNOLOGY THAT MATTERS</span> ✳ <span>THE WORLD, REIMAGINED</span> ✳ <span>IDEAS THAT MOVE US</span> ✳</div></section>

      <section className="content-section wrap" id="latest">
        <div className="section-head"><div><div className="eyebrow">THE FRONT PAGE</div><h2>Latest <em>signals.</em></h2></div><a className="text-link" href="#categories">Explore all topics ↗</a></div>
        <article className="feature-card">
          <div className="feature-visual"><div className="visual-grid"/><div className="feature-orb"/><span className="visual-index">VOP / 001</span><span className="visual-caption">INTELLIGENCE<br/>IN MOTION</span></div>
          <div className="feature-copy"><div className="story-meta"><span>EDITOR&apos;S PICK</span><span>10 MIN READ</span></div><h3>Technology is not just changing the world. It&apos;s changing how we see it.</h3><p>From intelligent systems to breakthroughs in science, explore the ideas and people shaping the next chapter.</p><a className="read-link" href="#latest">Read the perspective <span>↗</span></a></div>
        </article>
        <div className="story-grid">{stories.map((story) => <article className="story-card" key={story.title}><div className={`story-art ${story.tone}`}><span>{story.tag}</span><b>0{stories.indexOf(story) + 2}</b></div><div className="story-meta"><span>{story.category}</span><span>{story.time}</span></div><h3>{story.title}</h3><p>{story.summary}</p><a className="read-link" href="#latest">Read story <span>↗</span></a></article>)}</div>
      </section>

      <section className="categories-section" id="categories"><div className="wrap"><div className="eyebrow">FOLLOW YOUR CURIOSITY</div><div className="category-heading"><h2>Explore the<br/><em>frontiers.</em></h2><p>Big questions. Bold ideas. Find the subjects moving the world forward.</p></div><div className="category-list">{categories.map((category, i) => <a href="#latest" key={category}><span className="category-number">0{i + 1}</span><b>{category}</b><span className="category-arrow">↗</span></a>)}</div></div></section>

      <section className="newsletter wrap" id="newsletter"><div><div className="eyebrow">THE WORLD, IN YOUR INBOX</div><h2>Stay curious.<br/><em>Stay ahead.</em></h2><p>A considered briefing on the ideas shaping tomorrow.</p></div><form action="#" className="newsletter-form"><label htmlFor="email">YOUR EMAIL ADDRESS</label><div><input id="email" type="email" placeholder="you@example.com" required/><button type="submit" aria-label="Subscribe">↗</button></div><small>Newsletter signup is a visual placeholder until an email service is connected.</small></form></section>

      <footer id="about"><div className="wrap footer-inner"><a className="brand" href="/"><span className="brand-mark">V<span>•</span>P</span><span className="brand-name">VOICE OF<br/>PLANET</span></a><span className="footer-note">A GLOBAL PERSPECTIVE ON WHAT&apos;S NEXT.</span><span className="copyright">© 2026 VOICE OF PLANET</span></div></footer>
    </main>
  );
}
