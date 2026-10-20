import { marqueeItems } from "../data/content";
import { SparkleOutline } from "./Decor";

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee__track" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <li key={item} className="marquee__item">
          <span>{item}</span>
          <SparkleOutline className="marquee__icon" />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Our services">
      <div className="marquee__band">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
