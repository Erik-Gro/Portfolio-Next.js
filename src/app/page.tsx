import { Main } from "@/sections/main/Main";
import Navbar from "@/sections/navbar/Navbar";
import Projects from "@/sections/projects/Projects";

export default function Home() {

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar/>
      <Main />
      <Projects />
    </main>
  );
}
