import { GoDotFill } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { TbCoins } from "react-icons/tb";
import figma from "@/images/figma.png";
import xd from "@/images/xd.png";
import ai from "@/images/ai.png";
import Image from "next/image";

export default function JobDescription() {
  return (
    <div className="w-3/4 my-10 border-r">
      <div className="flex flex-col justify-center borer-b">
        <JobHeader />
        {/* <JobLocationCompensation /> */}
      </div>

      <div className="border-b">
        <JobRequirements />
      </div>

      <div className="border-b">
        <AboutTheJob />
      </div>
    </div>
  );
}

function JobHeader() {
  return (
    <div className="py-10 border-b px-14 ">
      <div className="flex items-center justify-between w-1/2">
        <h2 className="text-2xl font-semibold">Senior Product Designer</h2>

        <GoDotFill size={10} className="text-[#D1D1D1]" />
        <div className="flex items-center gap-x-3">
          <h4 className="text-xs text-[#888888]">posted 2 days ago</h4>
          {/* badge  */}
          <div className="flex items-center gap-x-[1px] px-[5px] -py-1 rounded-full border text-sm border-greenBorder bg-lightGreen">
            <GoDotFill size={12} className="text-mediumGreen" />
            <p className="text-darkGreen text-[10px]">Open</p>
          </div>
        </div>
      </div>

      <JobLocationCompensation />
    </div>
  );
}

function JobLocationCompensation() {
  return (
    <div className="flex items-center gap-x-2 text-[#5D5D5D] pt-7">
      <div className="flex items-center gap-x-1">
        <GrLocation size={18} />
        <p>Delaware, USA</p>
      </div>

      <GoDotFill size={10} className="text-[#D1D1D1]" />

      <div className="flex items-center gap-x-1">
        <TbCoins size={20} />
        <p>$300k-$400k</p>
      </div>
    </div>
  );
}

const requirements = [
  {
    id: 1,
    heading: "Skills",
    badges: [
      {
        icon: figma,
        label: "Figma",
      },
      {
        icon: ai,
        label: "Adobe Illustrator",
      },
      {
        icon: xd,
        label: "Adobe XD",
      },
    ],
  },
  {
    id: 2,
    heading: "Prefered Language",
    content: "English",
  },
  {
    id: 3,
    heading: "Type",
    content: "Full time",
  },
  {
    id: 4,
    heading: "Years of Experience",
    content: "3+ Years of Experience",
  },
];
function JobRequirements() {
  return (
    <div className="flex items-start justify-between py-8 px-14 w-3/4">
      {requirements.map((item) => (
        <div key={item.id}>
          <h4 className="text-[#6E6D6D] text-sm pb-1.5">{item.heading}</h4>

          {item.id === 1 ? (
            <div className="flex flex-col gap-y-2">
              {item.badges?.map((badge) => (
                <div className="flex items-center gap-x-1 rounded-lg border w-fit px-1.5 py-[3px] border-[#D0D5DD]">
                  <Image src={badge.icon} alt="badge" width={15} height={15} />
                  <p className="text-xs">{badge.label}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-semibold">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

const about = [
  "Handle the UI/UX research design",
  "Work on researching on latest web applications designs & trends",
  "Work on conceptualizing and visualizing",
  "Work on creating graphics content and other graphic related works",
];

const benefits = ["Health insurance", "Provident Fund"];
const suppliements = ["Performance bonus", "Yearly bonus"];

function AboutTheJob() {
  return (
    <div className="px-14 py-6">
      <h4 className="text-[#6E6D6D] text-sm my-1.5">About the job</h4>

      <div className="flex flex-col">
        {about.map((item, idx) => (
          <p className="flex items-center gap-x-1 text-sm py-[3px]" key={idx}>
            {idx + 1}.<p>{item}</p>
          </p>
        ))}
      </div>

      <h4 className="text-sm py-[3px]">Benefits</h4>
      <div className="flex flex-col">
        {benefits.map((item) => (
          <p className="flex items-center gap-x-1 text-sm py-[3px]" key={item}>
            <GoDotFill size={8} />
            <p>{item}</p>
          </p>
        ))}
      </div>

      <h4 className="text-sm py-[3px]">Schedule </h4>

      <p className="flex items-center gap-x-1 text-sm py-[3px]">
        <GoDotFill size={8} />
        <p>Day shift</p>
      </p>

      <h4 className="text-sm py-[3px]">Supplemental pay types:</h4>
      <div className="flex flex-col">
        {suppliements.map((item) => (
          <p className="flex items-center gap-x-1 text-sm py-[3px]" key={item}>
            <GoDotFill size={8} />
            <p>{item}</p>
          </p>
        ))}
      </div>

      <h4 className="text-sm py-[3px]">Work location: In person</h4>
    </div>
  );
}
