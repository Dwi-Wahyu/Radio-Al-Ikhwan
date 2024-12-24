import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramAcara from "@/components/ProgramAcara";
import Struktur from "@/components/Struktur";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ style: "normal", subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProgramAcara />
      <Struktur />
      <Gallery />
      <Footer />
    </div>
  );
}
