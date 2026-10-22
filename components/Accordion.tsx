"use client";

import { useRef, useState, type ReactNode } from "react";

export type AccordionEntry = {
  title: string;
  body: ReactNode;
};

export default function Accordion({ entries }: { entries: AccordionEntry[] }) {
  const [open, setOpen] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="accordion">
      {entries.map((e, i) => (
        <div className={`acc-item ${open === i ? "open" : ""}`} key={e.title}>
          <button className="acc-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {e.title}
            <span className="plus" aria-hidden="true">+</span>
          </button>
          <div
            className="acc-a"
            ref={(el) => {
              refs.current[i] = el;
            }}
            style={{ maxHeight: open === i ? refs.current[i]?.scrollHeight : 0 }}
          >
            <div className="acc-a-inner">{e.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
