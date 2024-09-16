import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Quotes from "./components/quote";
import Works from "./components/works";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
      <Features />
      <Quotes />
      <Footer />
    </>
  );
}
