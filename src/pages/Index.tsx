import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ConsentBanner } from "@/components/ConsentBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  );
};

export default Index;
