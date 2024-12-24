import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full bg-[#F2C982] py-10 px-5 gap-5 grid grid-cols-1 md:grid-cols-7">
      <div className="flex relative col-span-2 justify-center">
        <Image src="/logo-footer-nobg.png" alt="" width={500} height={250} />
      </div>

      <div className="col-span-3">
        <h1 className="font-semibold mb-2">Alamat</h1>
        <div className="flex gap-2">
          <FaLocationDot className="pt-1" />
          <h1>
            Radio Al-Ikhwan 101,90 FM Makassar, Jl. Abd. Kadir No. 1 A
            Makassar 085210210911
          </h1>
        </div>
      </div>

      <div className="col-span-2">
        <h1 className="font-semibold mb-2">Kontak Kami</h1>
        <div className="flex gap-2 flex-col">
          <div className="flex items-center gap-1">
            <FaInstagram size={20} />
            <h1>RadioAlIkhwan</h1>
          </div>
          <div className="flex items-center gap-1">
            <FaFacebookSquare size={20} />
            <h1>RadioAlIkhwanFm</h1>
          </div>
          <div className="flex items-center gap-1">
            <FaWhatsapp size={20} />
            <h1>089623674514</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
