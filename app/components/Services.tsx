import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="services__intro">
        <h2 id="services-title" className="section-title">
          What We Offer
        </h2>
        <p>
          We work at the intersection of design, marketing, and business strategy. Here&rsquo;s how
          we elevate your presence:
        </p>
      </div>

      <ul className="services__grid">
        {services.map((service) => (
          <li key={service.title} className="card">
            <h3 className="card__title">{service.title}</h3>
            <p className="card__text">{service.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
