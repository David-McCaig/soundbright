import Hero from "../components/hero";
import { PrimaryFeatures } from "../components/primary-features";
import { CallToAction } from "../components/call-to-action";
import { Faq } from "../components/faq";
import { Footer } from "../components/footer";


export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* <Header /> */}
      <Hero />
      <PrimaryFeatures />
      <CallToAction />
      <Faq />
      <Footer />
    </main>
  );
}
