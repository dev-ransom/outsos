import {
  contactEmail,
  copyrightYear,
  navLinks,
  socialLinks,
} from "../data/content";
import { Logo } from "./Header";

type SocialPlatform = (typeof socialLinks)[number]["platform"];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  switch (platform) {
    case "x":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.6 22H2.4l7.3-8.4L1.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle className="social-icon__dot" cx="17.5" cy="6.8" r="1" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V21h3.4Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.5 3h-3.2v12.2a2.7 2.7 0 1 1-2.3-2.7v-3.3a6 6 0 1 0 5.5 6V9a8 8 0 0 0 4.5 1.4V7.1A4.8 4.8 0 0 1 15.5 3Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.2 8.4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 10h3.4v10.5H3.5V10Zm5.5 0h3.2v1.4h.1a3.5 3.5 0 0 1 3.2-1.7c3.4 0 4 2.2 4 5v5.8h-3.4v-5.1c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6v5.2H9V10Z" />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__cta">
        <h2 className="footer__title">Ready to make your mark in Dubai?</h2>
        <div className="footer__contact">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
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
        <div className="footer__social">
          <span className="footer__social-label">Follow us</span>
          <ul className="footer__social-links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="footer__social-link"
                  href={link.href}
                  aria-label={`${link.label} (link coming soon)`}
                  title={`${link.label} — link coming soon`}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="footer__legal">
          &copy; {copyrightYear} Outsos. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
