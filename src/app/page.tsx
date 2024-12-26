import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Home from "@/components/Home";
import ProgramAcara from "@/components/ProgramAcara";
import Struktur from "@/components/Struktur";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ style: "normal", subsets: ["latin"] });

export default function Page() {
  return (
    <div className="scroll-smooth">
      <Home />
      <ProgramAcara />
      <Struktur />
      <Gallery />
      <Footer />
    </div>
  );
}
