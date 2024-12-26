import Image from "next/image";

const team = [
  {
    path: "pak-musholly",
    nama: "Musholly Nihe",
  },
  {
    path: "2",
    nama: "Rizky Darmawan",
  },
  {
    path: "3",
    nama: "Andika Pratama",
  },
  {
    path: "4",
    nama: "Bimo Santoso",
  },
  {
    path: "6",
    nama: "Ayu Lestari",
  },
];

export default function Struktur() {
  return (
    <div className="w-full flex justify-center items-center bg-[#F2C982] py-10 flex-col">
      <div className="md:w-[50rem] px-5 sm:px-0">
        <div className="text-center mb-5">
          <h1 id="struktur" className="font-bold text-xl mb-1 ">
            Tim Profesional di Balik Layar
          </h1>
          <h1>
            Kenali struktur organisasi dan peran tim kami dalam menghadirkan
            siaran berkualitas.
          </h1>
        </div>
        <div className="relative flex flex-wrap justify-center gap-7">
          {team.map((value, idx) => (
            <div key={idx}>
              <div className="relative w-full h-52">
                <Image
                  width={200}
                  height={200}
                  src={"/team_image/" + value.path + ".jpg"}
                  alt=""
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h1 className="font-semibold text-center mt-1">{value.nama}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
