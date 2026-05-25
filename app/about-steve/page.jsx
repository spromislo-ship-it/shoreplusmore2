import Link from "next/link";
import {
  Waves,
  ArrowRight,
  Heart,
  MapPin,
  Briefcase,
  Store,
  CheckCircle2,
  Anchor,
} from "lucide-react";
import ContactSection from "../../components/ContactSection";

export const metadata = {
  title: "About Steve",
  description:
    "Meet Steve Promislo — over 30 years of shore real estate experience, a lifelong New Jersey local, and your guide to Ventnor, Margate, and Longport.",
};

export default function AboutStevePage() {
  return (
    <main className="site">
      <section className="hero heroCompact">
        <div className="container heroGrid">
          <div className="heroText">
            <div className="pill">
              <Anchor size={16} /> New Jersey shore local
            </div>
            <h1 className="pageTitle">About Steve</h1>
            <p className="subtitle">Steve Promislo — realtor, resident, and lifelong shore guide.</p>
            <p className="copy">
              For more than three decades, Steve has worked in every aspect of real estate along the
              South Jersey coast. He lives here full time, runs his business here, and knows the towns,
              blocks, and local favorites that make shore life special.
            </p>
            <div className="buttons">
              <Link href="/#contact" className="button primary">
                Work with Steve <ArrowRight size={16} />
              </Link>
              <Link href="/#towns" className="button secondary">
                Explore the towns
              </Link>
            </div>
          </div>
          <div className="photoCard photoCardPortrait">
            <div>
              <p>Steve Promislo</p>
              <h2>Local knowledge you can trust at the shore.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pullQuote">
            <Heart size={36} aria-hidden />
            <blockquote>
              Steve’s greatest pleasure is using his experience to help people find the perfect home for
              them so they and their families can enjoy the shore as much as he and his family do.
            </blockquote>
            <cite>Steve Promislo — Shore Plus More</cite>
          </div>
        </div>
      </section>

      <section className="section whiteSection">
        <div className="container">
          <p className="eyebrow">Experience</p>
          <h2 className="sectionTitle">Over 30 years in every aspect of real estate</h2>
          <div className="statRow">
            <div className="statCard">
              <strong>30+</strong>
              <span>Years of hands-on real estate experience</span>
            </div>
            <div className="statCard">
              <strong>3</strong>
              <span>Beach towns: Ventnor, Margate &amp; Longport</span>
            </div>
            <div className="statCard">
              <strong>1</strong>
              <span>Goal — the right home for you at the shore</span>
            </div>
          </div>
          <ul className="experienceList">
            {[
              "Residential sales and purchases along the barrier islands",
              "Investment properties, condos, and year-round shore homes",
              "Listing preparation, pricing strategy, and market positioning",
              "Guidance for buyers new to shore ownership and seasonal living",
              "Long-term relationships built on clear communication and local insight",
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container storyGrid">
          <div>
            <p className="eyebrow">His story</p>
            <h2 className="sectionTitle" style={{ marginBottom: 24 }}>
              A New Jersey shore local through and through
            </h2>
            <p>
              Steve is not a visitor passing through the summer market — he is a New Jersey shore local,
              a full-time resident, and a business owner rooted in the communities he serves. That
              everyday presence means he understands how the towns feel in January as well as July, which
              streets flood after a storm, and which neighborhoods fit different lifestyles and budgets.
            </p>
            <p>
              Growing up and building a life at the shore shaped how Steve works with clients. He listens
              first, explains options plainly, and focuses on what will actually work for your family —
              not just what looks good on a listing sheet. Whether you are buying your first beach place,
              selling a home you have loved for years, or comparing towns before you commit, Steve brings
              patience, perspective, and genuine care to the process.
            </p>
          </div>
          <div className="card">
            <MapPin size={34} />
            <h3>Why local roots matter</h3>
            <p>
              Shore real estate is seasonal, emotional, and detail-heavy. Steve’s long tenure here means
              fewer surprises — and more confidence — when you are making one of the biggest decisions
              of your life.
            </p>
          </div>
        </div>
      </section>

      <section className="section whiteSection">
        <div className="container">
          <p className="eyebrow">Local expertise</p>
          <h2 className="sectionTitle">Businesses, neighborhoods &amp; hidden gems</h2>
          <div className="cardGrid">
            <div className="card">
              <Store size={34} />
              <h3>Local businesses</h3>
              <p>
                Steve knows the restaurants, shops, marinas, and service providers that define daily life
                in Ventnor, Margate, and Longport — the kind of insight that helps you picture your real
                routine at the shore.
              </p>
            </div>
            <div className="card">
              <Waves size={34} />
              <h3>Hidden gems</h3>
              <p>
                From quiet beach access points to favorite morning coffee spots and family-friendly
                outings, Steve shares the local favorites that do not always show up in a property search.
              </p>
            </div>
            <div className="card">
              <Briefcase size={34} />
              <h3>Practical guidance</h3>
              <p>
                Taxes, insurance, seasonal rentals, renovations, and town-specific rules — Steve helps you
                understand the full picture so you can enjoy the lifestyle you are buying into.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta">
          <div>
            <Heart size={34} />
            <h2>Let Steve help you find your place at the shore.</h2>
          </div>
          <p>
            Ready to buy, sell, or explore what is possible in Ventnor, Margate, or Longport? Steve would
            welcome the chance to put his experience to work for you and your family.
          </p>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
