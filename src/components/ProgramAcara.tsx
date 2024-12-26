import {
  LuClock1,
  LuClock10,
  LuClock12,
  LuClock4,
  LuClock6,
  LuClock7,
  LuClock8,
  LuClock9,
} from "react-icons/lu";
import { MdOutlineSchedule } from "react-icons/md";

const program = [
  {
    icon: <LuClock6 size={25} />,
    title: "Opening",
    time: "06:00 - 06:10",
  },
  {
    icon: <LuClock9 size={25} />,
    title: "Salam Pagi",
    time: "06:10 - 09:00",
  },
  {
    icon: <LuClock9 size={25} />,
    title: "News",
    time: "09:00 - 09:10",
  },
  {
    icon: <LuClock12 size={25} />,
    title: "Bedah Buku",
    time: "09:10 - 12:00",
  },
  {
    icon: <LuClock12 size={25} />,
    title: "News",
    time: "12:00 - 12:10",
  },
  {
    icon: <LuClock1 size={25} />,
    title: "Intermezzo",
    time: "12:10 - 13:00",
  },
  {
    icon: <LuClock4 size={25} />,
    title: "Bedah Musik",
    time: "13:00 - 16:00",
  },
  {
    icon: <LuClock4 size={25} />,
    title: "News",
    time: "16:00 - 16:10",
  },
  {
    icon: <LuClock6 size={25} />,
    title: "Sosok (Dialogue, Tokoh Islam, Monologue, Naratif)",
    time: "16:10 - 18:00",
  },
  {
    icon: <LuClock7 size={25} />,
    title: "Chilling Time, Maghreb Intermezzo",
    time: "18:00 - 19:00",
  },
];

const extraProgram = [
  {
    icon: <LuClock8 size={25} />,
    title: "Father to Son or Mother to Daughter",
    time: "19:00 - 20:00",
  },
  {
    icon: <LuClock10 size={25} />,
    title: "Salam Malam (Bagaimana hari ini, interaktif)",
    time: "20:00 - 22:00",
  },
  {
    icon: <LuClock10 size={25} />,
    title: "Closing",
    time: "22:00 - 22:10",
  },
];

export default function ProgramAcara() {
  return (
    <div className="w-full flex justify-center px-5 items-center flex-col py-10">
      <div className="lg:w-[50rem] w-full rounded">
        <div className="text-center mb-5">
          <h1 id="program-acara" className="font-bold text-xl mb-1">
            Program Acara
          </h1>
          <h1>Program Pilihan untuk Setiap Suasana</h1>
        </div>

        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3 relative">
          {program.map((temp, idx) => (
            <div
              key={idx}
              className="shadow-lg p-3 rounded flex flex-col items-center text-center"
            >
              {temp.icon}
              <div>
                <h1 className="font-semibold mt-1">{temp.time}</h1>
              </div>
              <h1>{temp.title}</h1>
            </div>
          ))}
        </div>
        <div className="w-full grid gap-3 md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
          <div className="col-span-1 hidden md:block"></div>
          {extraProgram.map((temp, idx) => (
            <div
              key={idx}
              className="shadow-lg p-3 rounded flex flex-col items-center text-center"
            >
              {temp.icon}
              <div>
                <h1 className="font-semibold mt-1">{temp.time}</h1>
              </div>
              <h1>{temp.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
