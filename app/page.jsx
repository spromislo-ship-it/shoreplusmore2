import Link from "next/link";
import {
  Home,
  Waves,
  MapPin,
  ArrowRight,
  Star,
  Umbrella,
  Building2,
  Utensils,
  Bike,
  Sailboat,
} from "lucide-react";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main className="site">
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroText">
            <div className="pill">
              <Waves size={16} /> Ventnor • Margate • Longport
            </div>
            <h1>Shore Plus More</h1>
            <p className="subtitle">Local real estate guidance for New Jersey’s premier beach towns.</p>
            <p className="copy">
              I’m Steve Promislo. I help buyers, sellers, and shore homeowners navigate Ventnor, Margate,
              and Longport with local insight, responsive service, and a practical eye for value.
            </p>
            <div className="buttons">
              <Link href="/#contact" className="button primary">
                Start a conversation <ArrowRight size={16} />
              </Link>
              <Link href="/#towns" className="button secondary">
                Explore the towns
              </Link>
              <Link href="/about-steve" className="button secondary">
                About Steve
              </Link>
            </div>
          </div>
          <div className="photoCard">
            <div>
              <p>shoreplusmore.com</p>
              <h2>The South Jersey shore, handled locally.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">
          <Feature
            icon={Home}
            title="Buy at the Shore"
            text="Find the right beach home, condo, investment property, or year-round residence."
          />
          <Feature
            icon={Building2}
            title="Sell with Confidence"
            text="Position your property with clear pricing, smart presentation, and local market context."
          />
          <Feature
            icon={Umbrella}
            title="Live the Lifestyle"
            text="Understand the blocks, beaches, restaurants, marinas, and seasonal rhythm before you decide."
          />
        </div>
      </section>

      <section id="towns" className="section whiteSection">
        <div className="container">
          <p className="eyebrow">Featured communities</p>
          <h2 className="sectionTitle">Three beach towns. One local guide.</h2>
          <div className="cardGrid">
            <TownCard
              town="Ventnor"
              link="#ventnor"
              text="Boardwalk energy, beach access, classic shore homes, and a relaxed year-round feel."
            />
            <TownCard
              town="Margate"
              link="#margate"
              text="A lively coastal community known for restaurants, shopping, beach blocks, and family appeal."
            />
            <TownCard
              town="Longport"
              link="#longport"
              text="A quieter luxury shore setting with oceanfront charm, privacy, and timeless beach-town character."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container details">
          <TownDetail
            id="ventnor"
            icon={Bike}
            town="Ventnor"
            title="Ventnor: boardwalk, beaches, and easy shore living"
            text="Ventnor offers a classic Jersey Shore feel with a beautiful boardwalk, wide beaches, bike rides, morning walks, and a relaxed pace that works for both summer visitors and year-round residents. It is a great fit for people who want beach access, local restaurants, neighborhood charm, and close proximity to Atlantic City without being in the middle of it all."
            highlights={[
              "Boardwalk walks and bike rides",
              "Restaurants and casual shore spots",
              "Classic beach blocks and year-round appeal",
            ]}
          />
          <TownDetail
            id="margate"
            icon={Utensils}
            town="Margate"
            title="Margate: restaurants, energy, and family-friendly appeal"
            text="Margate is known for its lively shore-town personality, strong dining scene, shopping, beach clubs, and family-friendly neighborhoods. From beach days to dinner out, Margate has the kind of summer rhythm that brings people back year after year."
            highlights={[
              "Popular restaurants and nightlife",
              "Shopping and local businesses",
              "Strong beach-town community feel",
            ]}
          />
          <TownDetail
            id="longport"
            icon={Sailboat}
            town="Longport"
            title="Longport: quiet luxury at the end of the island"
            text="Longport offers a quieter, more residential shore experience with beautiful homes, peaceful streets, ocean and bay views, and a refined coastal atmosphere. It is ideal for buyers who value privacy, calm, and an elegant beach-town setting."
            highlights={[
              "Quiet residential streets",
              "Oceanfront and bayfront charm",
              "Private, polished shore lifestyle",
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <div>
            <Star size={34} />
            <h2>A practical, personal approach to shore real estate.</h2>
          </div>
          <p>
            Whether you are searching for a summer place, preparing to list, comparing towns, or simply
            trying to understand what is possible at the shore, Shore Plus More is built to make the
            process clearer and more comfortable.{" "}
            <Link href="/about-steve" style={{ color: "#7dd3fc", fontWeight: 700 }}>
              Meet Steve
            </Link>
            .
          </p>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="card">
      <Icon size={34} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function TownCard({ town, link, text }) {
  return (
    <a className="townCard" href={link}>
      <MapPin size={30} />
      <h3>{town}</h3>
      <p>{text}</p>
      <strong>
        Learn about {town} <ArrowRight size={16} />
      </strong>
    </a>
  );
}

function TownDetail({ id, icon: Icon, town, title, text, highlights }) {
  return (
    <article id={id} className="detailCard">
      <div>
        <Icon size={38} />
        <p className="eyebrow gold">{town}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="highlightBox">
        <h3>Why people love {town}</h3>
        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>
              <Star size={16} /> {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
