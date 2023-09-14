import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import Survery from "@/components/Survery";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Featured />
      <Services />
      <Menu />
      <Survery />
    </main>
  );
}
