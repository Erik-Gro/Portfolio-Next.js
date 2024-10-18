import About from "@/sections/about/About";
import Footer from "@/sections/footer/Footer";
import Knowledge from "@/sections/knowledge/knowledge";
import { Main } from "@/sections/main/Main";
import Navbar from "@/sections/navbar/Navbar";
import Projects from "@/sections/projects/Projects";
// import dynamic from "next/dynamic";

// const Projects = dynamic(() => import("@/sections/projects/Projects"), { ssr: false });

export default function Home() {

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Main />
      <About />
      {/* <Knowledge/> */}
      <Projects />
      <Footer/>
    </main>
  );
}
