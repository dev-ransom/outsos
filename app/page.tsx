import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <div id="top" className="shell">
      <div className="shell__glow shell__glow--top" aria-hidden="true" />
      <div className="shell__glow shell__glow--mid" aria-hidden="true" />
      <div className="shell__glow shell__glow--low" aria-hidden="true" />

      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Insights />
      </main>
      <Footer />
    </div>
  );
}
