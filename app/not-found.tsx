import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <div
          className="display"
          style={{ fontSize: "5.5rem", fontStyle: "italic", color: "var(--accent)", fontWeight: 500 }}
        >
          404
        </div>
        <h1 style={{ marginBottom: 14, fontSize: "2.4rem" }}>This page slipped off the rack</h1>
        <p className="lead" style={{ margin: "0 auto 36px" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist — but twelve
          beautiful pieces do.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-accent" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/shop/">
            Browse the shop
          </Link>
        </div>
      </div>
    </section>
  );
}
