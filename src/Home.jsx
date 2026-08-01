
function Home() {
  return (
    <>
    <section className="hero-card">
      <div className="hero-copy">
        <p className="eyebrow">Discover the edit</p>
        <h2>Curated food, product drops, and a signup flow that feels premium.</h2>
        <p className="hero-text">A sharper storefront with a cinematic header, textured cards, and a layout that gives each route a stronger visual identity.</p>
        <div className="hero-actions">
          <button>Signup</button>
          <span className="hero-note">Built for browsing, not just scrolling.</span>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="floating-panel panel-one">
          <span>Hot picks</span>
          <strong>24</strong>
        </div>
        <div className="floating-panel panel-two">
          <span>Fresh arrivals</span>
          <strong>08</strong>
        </div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
      </div>
    </section>
    </>
  )
}

export default Home