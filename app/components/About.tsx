import { aboutParagraphs } from "../data/content";
import { Burst } from "./Decor";
import Photo from "./Photo";

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__text">
        <h2 id="about-title" className="section-title">
          Who We Are
        </h2>
        {aboutParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="about__media">
        <div className="about__backing" aria-hidden="true" />
        {/* Swap in a real photo: src="/images/team.jpg" (file in /public/images) */}
        <Photo
          className="about__photo"
          alt="The Outsos team working together in a studio"
          width={640}
          height={560}
        />
        <Burst className="about__burst about__burst--a" />
        <Burst className="about__burst about__burst--b" />
      </div>
    </section>
  );
}
