```tsx
1| import { Header } from "@/components/Header";
2| import { Hero } from "@/components/Hero";
3| import { About } from "@/components/About";
4| import { Experience } from "@/components/Experience";
5| import { Skills } from "@/components/Skills";
6| import { Education } from "@/components/Education";
8| import { Blog } from "@/components/Blog";
9| import { Contact } from "@/components/Contact";
10| import { Footer } from "@/components/Footer";
11| 
12| const Index = () => {
13|   return (
14|     <div className="min-h-screen">
15|       <Header />
16|       <main id="main">
17|         <Hero />
18|         <About />
19|         <Experience />
20|         <Skills />
21|         <Education />
22|         <Blog />
23|         <Contact />
24|       </main>
25|       <Footer />
26|     </div>
27|   );
28| };
29| 
30| export default Index;
31| 
```