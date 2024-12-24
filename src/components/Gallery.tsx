"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Gallery() {
  const [index, setIndex] = useState(2);

  return (
    <div className="w-full flex justify-center px-5 items-center flex-col pt-10 pb-10">
      <div className="lg:w-[50rem] w-full rounded">
        <div className="text-center mb-5">
          <h1 className="font-bold text-xl mb-1">Gallery</h1>
          <h1>Lebih Dekat dengan Aktivitas Kami</h1>
        </div>
      </div>

      <div className="justify-center items-center hidden md:flex gap-5">
        {index != 1 ? (
          <button onClick={() => setIndex(index - 1)}>
            <div className="md:w-[10rem]">
              <Image
                src={`/gallery/${index - 1}.jpg`}
                alt=""
                layout="responsive"
                width={1}
                height={1}
                className="rounded-lg shadow-xl "
              />
            </div>
          </button>
        ) : (
          <div className="md:w-[10rem]"></div>
        )}
        <div className="md:w-[30rem]">
          <Image
            src={`/gallery/${index}.jpg`}
            alt=""
            layout="responsive"
            width={1}
            height={1}
            className="rounded-lg shadow-xl"
          />
        </div>
        {index != 5 ? (
          <button onClick={() => setIndex(index + 1)}>
            <div className="md:w-[10rem]">
              <Image
                src={`/gallery/${index + 1}.jpg`}
                alt=""
                layout="responsive"
                width={1}
                height={1}
                className="rounded-lg shadow-xl "
              />
            </div>
          </button>
        ) : (
          <div className="md:w-[10rem]"></div>
        )}
      </div>

      {/*  */}
      <div className="flex justify-center items-center md:hidden w-full">
        {index != 1 ? (
          <button
            onClick={() => setIndex(index - 1)}
            className="w-20 z-10 relative h-56 opacity-60"
          >
            <Image
              src={`/gallery/${index - 1}.jpg`}
              alt={`Gambar ${index - 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-s-lg shadow-xl"
            />
          </button>
        ) : (
          <div className="w-20"></div>
        )}

        <div className="relative w-full h-64 z-30">
          <Image
            src={`/gallery/${index}.jpg`}
            alt={`Gambar ${index}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </div>

        {index != 5 ? (
          <button
            onClick={() => setIndex(index + 1)}
            className="w-20 z-10 relative h-56 opacity-60"
          >
            <Image
              src={`/gallery/${index + 1}.jpg`}
              alt={`Gambar ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-e-lg shadow-xl"
            />
          </button>
        ) : (
          <div className="w-20"></div>
        )}
      </div>
    </div>
  );
}
