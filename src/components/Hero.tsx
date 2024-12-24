"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GrGallery, GrScheduleNew } from "react-icons/gr";
import { IoClose, IoMenu } from "react-icons/io5";
import { PiTreeStructureBold } from "react-icons/pi";

export default function Hero() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = () => setDrawerOpened(!drawerOpened);
  return (
    <div>
      {drawerOpened ? (
        <div className="w-full h-screen bg-black opacity-50 fixed z-30"></div>
      ) : null}

      {/* Drawer */}
      <div
        className={`w-[70vw] h-screen fixed bg-[rgb(242,201,130)] z-40 p-5 transition-transform duration-300 ease-in-out transform ${
          drawerOpened ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <h1 className="font-semibold text-xl">Navigasi</h1>
          </div>
          <IoClose size={30} onClick={toggleDrawer} />
        </div>
        <div className="flex flex-col mt-4 gap-5">
          <Link href="/" className="flex gap-2 items-center">
            <FaHome size={20} />
            <h1 className="font-semibold text-lg">Home</h1>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <GrScheduleNew size={20} />
            <h1 className="font-semibold text-lg">Program Acara</h1>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <PiTreeStructureBold size={20} />
            <h1 className="font-semibold text-lg">Struktur</h1>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <GrGallery size={20} />
            <h1 className="font-semibold text-lg">Gallery</h1>
          </Link>
        </div>
      </div>

      <div className="md:hidden px-5 pb-7 bg-[rgb(242,201,130)] ">
        <div className="relative flex justify-between items-center">
          <Image src="/logo-hero.png" alt="" width={65} height={65} />
          <button onClick={toggleDrawer}>
            <IoMenu size={35} />
          </button>
        </div>
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src="/hero-brand.png"
            alt=""
            width={370}
            height={370}
            className="mb-3"
          />

          <Link
            href="https://alhastream.com/p/alikhwan/"
            className="text-white bg-[rgb(13,109,6)] hover:bg-[rgb(23,78,19)] focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none "
          >
            Mulai Mendengarkan
          </Link>
        </div>
      </div>

      <div className="w-full hidden md:block">
        <Image
          src="/banner.png"
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
