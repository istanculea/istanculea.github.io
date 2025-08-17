import { Header } from "@/components/Header"
import { Blog } from "@/components/Blog"
import { Footer } from "@/components/Footer"

const BlogIndex = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;