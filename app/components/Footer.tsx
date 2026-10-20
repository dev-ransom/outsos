import { contactEmail, copyrightYear, navLinks } from "../data/content";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__cta">
        <h2 className="footer__title">Ready to make your mark in Dubai?</h2>
        <a className="button" href={`mailto:${contactEmail}`}>
          Email {contactEmail}
        </a>
      </div>

      <div className="footer__bar">
        <Logo />
        <ul className="footer__nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <p className="footer__legal">
          &copy; {copyrightYear} Outsos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
