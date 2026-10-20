import { Loop, PlusMark } from "./Decor";
import Photo from "./Photo";

const chips = [
  { id: "mail", value: "12", tone: "blue", style: { top: "30%", left: "52%" } },
  { id: "heart", value: "72", tone: "red", style: { top: "14%", left: "60%" } },
  { id: "smile", value: "25", tone: "yellow", style: { top: "18%", left: "74%" } },
  { id: "like", value: "26", tone: "blue", style: { top: "40%", left: "46%" } },
  { id: "photo", value: "16", tone: "pink", style: { top: "38%", left: "59%" } },
  { id: "chat", value: "65", tone: "blue", style: { top: "40%", left: "73%" } },
  { id: "user", value: "12", tone: "blue", style: { top: "53%", left: "52%" } },
  { id: "cart", value: "14", tone: "blue", style: { top: "57%", left: "64%" } },
] as const;

export default function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="work__head">
        <div className="work__copy">
          <h2 id="work-title" className="section-title">
            Our Work
          </h2>
          <p>
            See how we&rsquo;ve helped brands grow their presence, amplify their voice, and connect
            with their audience.
          </p>
          <p className="work__note">
            Case studies coming soon. Want to be one of them?{" "}
            <a className="text-link" href="#contact">
              Let&rsquo;s talk.
            </a>
          </p>
        </div>
        <div className="work__doodle" aria-hidden="true">
          <Loop className="work__loop" />
          <PlusMark className="work__plus" />
        </div>
      </div>

      <div className="showcase">
        {/* Swap in a real photo: src="/images/social.jpg" (file in /public/images) */}
        <Photo
          className="showcase__photo"
          alt="A hand holding a phone with social media reactions rising from the screen"
          width={1200}
          height={370}
        />
        <ul className="showcase__chips" aria-hidden="true">
          {chips.map((chip) => (
            <li key={chip.id} className={`chip chip--${chip.tone}`} style={chip.style}>
              {chip.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
