"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

function useKeyboardNavigation(next, prev) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);
}

const slidesData = [
  {
    title: "Incredible India ? Tourism Pitch Deck",
    content: (
      <div className="grid" style={{ gridTemplateColumns: "7fr 5fr" }}>
        <div className="panel">
          <div className="h1">Unlocking India's Tourism Supercycle</div>
          <div className="h2" style={{ marginTop: 8 }}>Experiences at the intersection of culture, nature, and technology</div>
          <ul style={{ marginTop: 16 }}>
            <li>Massive domestic and inbound demand tailwinds</li>
            <li>Digitized discovery, trusted supply, seamless payments</li>
            <li>High-margin experiences layered on core itineraries</li>
          </ul>
        </div>
        <div className="panel">
          <img className="cover" alt="Taj Mahal" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </div>
    ),
  },
  {
    title: "The Opportunity",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">Why now</div>
          <ul>
            <li>Domestic travel at all-time highs; rising discretionary incomes</li>
            <li>Digital rails: UPI, eKYC, ONDC, affordable data</li>
            <li>Government focus on infrastructure and heritage conservation</li>
            <li>Global shift toward experience-first, sustainable travel</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">Scale snapshot</div>
          <div className="kpi" style={{ marginTop: 8 }}>
            <div className="item"><div className="num">1.4B+</div><div className="lbl">Population scale with rising travel intent</div></div>
            <div className="item"><div className="num">1000s</div><div className="lbl">of culturally-rich destinations & experiences</div></div>
            <div className="item"><div className="num">Top 5</div><div className="lbl">fastest-growing travel markets globally</div></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Customer Segments",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">Domestic explorers</div>
          <ul>
            <li>Tier 1: short breaks, premium stays, curated activities</li>
            <li>Tier 2/3: value-led packages, pilgrimage, group travel</li>
            <li>Millennials/Gen-Z: adventure, festivals, workcations</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">Inbound travelers</div>
          <ul>
            <li>Culture seekers: heritage circuits, culinary trails</li>
            <li>Nature & wellness: Himalayas, Ayurveda, retreats</li>
            <li>Luxury: palaces, safaris, boutique experiences</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Value Proposition",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">For travelers</div>
          <ul>
            <li>Trusted, verified hosts and experiences</li>
            <li>Seamless discovery ? booking ? on-trip support</li>
            <li>Personalized, local-first itineraries with transparent pricing</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">For suppliers</div>
          <ul>
            <li>Distribution to high-intent audiences</li>
            <li>Payments, scheduling, and inventory tools</li>
            <li>Performance insights and dynamic pricing</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Product: Experience Graph",
    content: (
      <div className="grid" style={{ gridTemplateColumns: "7fr 5fr" }}>
        <div className="panel">
          <div className="h3">Curate, personalize, and operate at scale</div>
          <ul>
            <li>Structured catalog of experiences across 50+ themes</li>
            <li>AI-assisted trip design with real-time availability</li>
            <li>On-trip guidance: offline maps, chat support, local tips</li>
          </ul>
        </div>
        <div className="panel">
          <img className="cover" alt="Himalayas" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </div>
    ),
  },
  {
    title: "Business Model",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">Revenue streams</div>
          <ul>
            <li>Marketplace commission on experiences and stays</li>
            <li>Premium bundles and concierge upsell</li>
            <li>B2B partnerships: corporate retreats, educational travel</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">Unit drivers</div>
          <ul>
            <li>High-margin add-ons per itinerary</li>
            <li>Repeat rates via membership & rewards</li>
            <li>Efficient CAC through content and community</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Go-To-Market",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">Distribution</div>
          <ul>
            <li>SEO-first destination guides and thematic hubs</li>
            <li>Influencer collaborations and UGC flywheel</li>
            <li>Pilgrimage and festival seasonality playbooks</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">Supply onboarding</div>
          <ul>
            <li>City-based operator cohorts with training</li>
            <li>Quality badges and transparent reviews</li>
            <li>Dynamic pricing and guaranteed payouts</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Competitive Landscape",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">Our edge</div>
          <ul>
            <li>Depth in experiences vs. generic listings</li>
            <li>Local-first operations with national network effects</li>
            <li>Technology-led personalization and support</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">Defensibility</div>
          <ul>
            <li>Experience graph + verified supply + community</li>
            <li>Content moat and brand trust</li>
            <li>Partner integrations across payments and mobility</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Impact & Sustainability",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">Responsible tourism</div>
          <ul>
            <li>Local employment and MSME enablement</li>
            <li>Heritage preservation funding via per-booking micro-levy</li>
            <li>Nature-positive itineraries and plastic-free standards</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">Measurement</div>
          <ul>
            <li>Supplier code of conduct and audits</li>
            <li>Destination carrying-capacity guides</li>
            <li>Annual public impact report</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Roadmap",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">12-month plan</div>
          <ul>
            <li>Phase 1: Top 8 cities + 6 circuits</li>
            <li>Phase 2: Wellness and wildlife verticals</li>
            <li>Phase 3: Cross-border South Asia routes</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">Key milestones</div>
          <ul>
            <li>10k bookable experiences with 90% verified</li>
            <li>Net promoter score (NPS) &gt; 70</li>
            <li>EBITDA-positive city cohorts</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Team & Advisors",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">Execution DNA</div>
          <ul>
            <li>Marketplace, operations, and travel-tech experience</li>
            <li>On-ground city teams with local expertise</li>
            <li>Advisors across hospitality, culture, and sustainability</li>
          </ul>
        </div>
        <div className="panel">
          <img className="cover" alt="Amber Fort" src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </div>
    ),
  },
  {
    title: "The Ask",
    content: (
      <div className="grid">
        <div className="panel">
          <div className="h3">Use of funds</div>
          <ul>
            <li>City expansion, supplier enablement, and brand</li>
            <li>Product: personalization, operations, and support</li>
            <li>Working capital and risk management</li>
          </ul>
        </div>
        <div className="panel">
          <div className="h3">Outcomes</div>
          <ul>
            <li>Scale to leadership in experiences within 24 months</li>
            <li>Strong unit economics with defensible moat</li>
            <li>Category-defining traveler delight</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="grid" style={{ gridTemplateColumns: "7fr 5fr" }}>
        <div className="panel">
          <div className="h1">Let's build Incredible journeys</div>
          <div className="p" style={{ marginTop: 10 }}>
            contact@incredibleindia-deck.example
          </div>
          <div className="tag" style={{ marginTop: 14 }}>
            Press ? to advance ? ? to go back ? P to print
          </div>
        </div>
        <div className="panel">
          <img className="cover" alt="Varanasi" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop" />
        </div>
      </div>
    ),
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const total = slidesData.length;

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  useKeyboardNavigation(next, prev);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === "p") window.print();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const progress = useMemo(() => ((index + 1) / total) * 100, [index, total]);
  const slide = slidesData[index];

  return (
    <div className="container">
      <header className="header">
        <div className="brand">
          <span style={{ width: 10, height: 10, background: "var(--accent)", borderRadius: 2, boxShadow: "0 0 12px var(--accent)" }} />
          <span>Incredible India ? Tourism</span>
          <span className="badge">Pitch Deck</span>
        </div>
        <div className="tag">{index + 1} / {total}</div>
      </header>

      <main className="main">
        <section className="slide">
          <div className="slide-header">
            <div className="slide-title">{slide.title}</div>
            <div className="tag">Use arrows or buttons below</div>
          </div>
          <div className="slide-content">
            {slide.content}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="controls">
          <button className="btn" onClick={prev} disabled={index === 0}>? Prev</button>
          <button className="btn" onClick={next} disabled={index === total - 1}>Next ?</button>
          <button className="btn" onClick={() => window.print()}>Print/PDF</button>
        </div>
        <div className="progress" aria-label="progress">
          <span style={{ width: `${progress}%` }} />
        </div>
      </footer>
    </div>
  );
}
