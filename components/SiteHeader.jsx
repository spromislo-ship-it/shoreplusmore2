"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Waves } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-steve", label: "About Steve" },
  { href: "/#towns", label: "Towns" },
  { href: "/#contact", label: "Contact", cta: true },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href="/" className="brand">
          <Waves size={22} />
          Shore Plus More
        </Link>
        <nav className="siteNav" aria-label="Main">
          {navLinks.map(({ href, label, cta }) => {
            const pathOnly = href.split("#")[0] || "/";
            const active =
              pathOnly === "/"
                ? pathname === "/"
                : pathname === pathOnly;
            const className = [cta && "navCta", active && "active"].filter(Boolean).join(" ");

            return (
              <Link key={href} href={href} className={className || undefined}>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
