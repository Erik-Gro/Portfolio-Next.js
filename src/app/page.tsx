import { Main } from "@/main/components/Main";
import Navbar from "@/sections/navbar/Navbar";
import { Canvas } from "@react-three/fiber";

export default function Home() {

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar/>
      <Main/>
    </main>
  );
}
