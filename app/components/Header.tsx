import Image from "next/image";
import { navLinks } from "../data/content";

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Outsos, back to top">
      <Image
        className="logo__image"
        src="/images/outsosLogo.png"
        alt=""
        width={500}
        height={500}
      />
    </a>
  );
}

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav aria-label="Main">
        <ul className="header__nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
