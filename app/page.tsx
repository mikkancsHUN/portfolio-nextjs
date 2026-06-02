import BackgroundAnimation from "@/components/BackgroundAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}