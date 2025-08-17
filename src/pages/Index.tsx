import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Blog } from "@/components/Blog"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
