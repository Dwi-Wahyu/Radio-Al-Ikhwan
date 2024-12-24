import Image from "next/image";

const team = [
  {
    path: "1",
    nama: "Ayu Lestari",
  },
  {
    path: "2",
    nama: "Andika Pratama",
  },
  {
    path: "3",
    nama: "Bimo Santoso",
  },
  {
    path: "4",
    nama: "Rizky Darmawan",
  },
  {
    path: "5",
    nama: "Aditya Nugraha",
  },
  {
    path: "6",
    nama: "Nabila Putri",
  },
];

export default function Struktur() {
  return (
    <div className="w-full flex justify-center items-center bg-[#F2C982] py-6 flex-col">
      <div className="md:w-[50rem] px-5 sm:px-0">
        <div className="text-center mb-5">
          <h1 className="font-bold text-xl mb-1 ">
            Tim Profesional di Balik Layar
          </h1>
          <h1>
            Kenali struktur organisasi dan peran tim kami dalam menghadirkan
            siaran berkualitas.
          </h1>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {team.map((value, idx) => (
            <div key={idx}>
              <div className="relative w-full h-52">
                <Image
                  fill
                  src={"/team_image/" + value.path + ".jpg"}
                  alt=""
                  className="rounded-xl shadow-lg"
                  sizes="100%"
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
