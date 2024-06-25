import { HiOutlineTrash } from "react-icons/hi2";
import { LuUsers, LuPencil, LuMessageSquare } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";
import { PiEyeBold } from "react-icons/pi";

const data = [
  {
    icon: <LuUsers />,
    label: "Applications",
    stat: 400,
  },
  {
    icon: <TbUserCheck />,
    label: "Matches",
    stat: 100,
  },
  {
    icon: <LuMessageSquare />,
    label: "Messages",
    stat: 147,
  },
  {
    icon: <PiEyeBold />,
    label: "Views",
    stat: 800,
  },
];

export default function JobStats() {
  return (
    <div className="border-b h-[802px] w-1/4 py-20">
      <div className="flex items-center justify-evenly">
        <button className="border flex items-center gap-x-2 py-2.5 px-8 border-colorBrand text-colorBrand bg-[#FEF4F2] rounded-lg">
          <HiOutlineTrash />
          <p className="text-[13px]"> Delete job</p>
        </button>

        <button className="border-2 flex items-center gap-x-2 py-2.5 px-8 border-[#FED3CA] text-white  bg-colorBrand rounded-lg">
          <LuPencil />
          <p className="text-[13px]">Edit job</p>
        </button>
      </div>

      <div className="flex flex-col gap-y-5 px-12 my-8">
        {data.map((item) => (
          <>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-x-2 text-[#4F4F4F] flex-grow">
                {item.icon}
                <p className="text-sm">{item.label}</p>
              </div>

              <h4 className="font-semibold">{item.stat}</h4>
            </div>

            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
