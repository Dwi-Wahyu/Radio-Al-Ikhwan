import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full items-center justify-center hidden md:flex top-0 left-0 absolute">
      <div className="flex gap-5 py-4">
        <Link href="#home">
          <h1 className="font-semibold text-lg">Home</h1>
        </Link>
        <Link href="#program-acara">
          <h1 className="font-semibold text-lg">Program Acara</h1>
        </Link>
        <Link href="#struktur">
          <h1 className="font-semibold text-lg">Struktur</h1>
        </Link>
        <Link href="#gallery">
          <h1 className="font-semibold text-lg">Gallery</h1>
        </Link>
      </div>
    </div>
  );
}
