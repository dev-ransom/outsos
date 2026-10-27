import { Burst, ScribbleArrow, SparkleOutline, Swirl } from "./Decor";
import { whatsappUrl } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <SparkleOutline className="hero__deco hero__deco--outline-lg" />
      <SparkleOutline className="hero__deco hero__deco--outline-sm" />
      <Burst className="hero__deco hero__deco--burst-sm" />
      <Burst className="hero__deco hero__deco--burst-lg" />
      <Swirl className="hero__deco hero__deco--swirl" />

      <p className="hero__eyebrow">Elevate Your Presence</p>
      <h1 id="hero-title" className="hero__title">
        Strategic Marketing &amp; Communication Agency in Dubai
      </h1>
      <p className="hero__lead">
        We help you build and amplify your brand, online and offline.
      </p>

      <div className="hero__cta">
        <ScribbleArrow className="hero__arrow" />
        <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
          Let&rsquo;s Talk
        </a>
      </div>
    </section>
  );
}
