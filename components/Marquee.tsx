const ITEMS = [
  "Eid Edit '26 — now live",
  "Free nationwide delivery over Rs 5,000",
  "New: Gulbahar Luxury Lawn 3-piece",
  "7-day easy exchange, no questions asked",
  "Cash on delivery available across Pakistan",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <span key={half}>
            {row.map((t, i) => (
              <span key={i} style={{ padding: 0 }}>
                {t}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
