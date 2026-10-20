import { navLinks } from "../data/content";

export function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Outsos, back to top">
      <svg className="logo__mark" viewBox="0 0 24 28" aria-hidden="true">
        <path d="M12 1c1.6 5.6 3.2 8 6.4 11.2 3.2 3.2 5 5.6 5 9.4 0 3.4-2.4 5.4-5.4 5.4-2.2 0-3.6-1-4.6-2.4h-3c-1 1.4-2.4 2.4-4.6 2.4-3 0-5.4-2-5.4-5.4 0-3.8 1.8-6.2 5-9.4C8.8 9 10.4 6.6 12 1z" />
      </svg>
      <span className="logo__word">Outsos</span>
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
