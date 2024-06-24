"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuBriefcase, LuMessageSquare } from "react-icons/lu";
// import { PiBellSimple } from "react-icons/pi";
import { PiHandCoinsBold, PiBellSimple } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import atlassianLogo from "@/images/atlassian-logo.png";
import Image from "next/image";

const navLinks = [
  {
    id: 1,
    icon: <LuBriefcase size={16} />,
    label: "Jobs",
  },
  {
    id: 2,
    icon: <LuMessageSquare size={16} />,
    label: "Messages",
  },
  {
    id: 3,
    icon: <PiHandCoinsBold size={16} />,
    label: "Payments",
  },
];

export default function Navbar() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <nav className="flex items-center justify-between py-4 px-10  border-b">
      {/* logo  */}
      <div className="bg-logoGray px-4 py-2">
        <h3 className="text-colorBrand">Logo</h3>
      </div>

      {/* navigation links  */}
      <div className="hidden  md:flex lg:flex justify-between space-x-1 sticky bottom-0 w-[400px] rounded-full py-1.5 px-2 border   border-[#D1D1D1]">
        {navLinks.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`${
              currentTab === tab.id
                ? "text-white "
                : "hover:text-colorBrand duration-300 text-lightGray"
            } flex items-center gap-2 relative rounded-full duration-300 transition-all  px-4 py-2 text-sm font-lighter focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {tab.icon}
            {currentTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute border-2 border-[#FCB4A5] inset-0 -z-20 bg-colorBrand py-2"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <p>{tab.label}</p>
          </button>
        ))}
      </div>

      {/* options  */}
      <div className="flex items-center gap-x-2">
        <PiBellSimple size={20} />
        <Image
          src={atlassianLogo}
          alt="logo"
          width={30}
          height={20}
          className="rounded-full"
        />
        <FiChevronDown />
      </div>
    </nav>
  );
}
