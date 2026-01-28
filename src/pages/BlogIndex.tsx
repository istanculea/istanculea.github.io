import { Header } from "@/components/Header"
import { Blog } from "@/components/Blog"
import { Footer } from "@/components/Footer"
import { RevealObserver } from "@/components/RevealObserver"

const BlogIndex = () => {
  return (
    <div className="min-h-screen">
      <RevealObserver />
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
