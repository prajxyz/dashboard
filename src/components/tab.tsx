"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    label: "Job Preview",
  },
  {
    id: 2,
    label: "Applicants",
  },
  {
    id: 3,
    label: "Match",
  },
  {
    id: 4,
    label: "Messages",
  },
];

export default function Tab() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <div className="hidden my-4 w-[450px]  md:flex lg:flex justify-between space-x-1 mx-14 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setCurrentTab(tab.id)}
          className={`${
            currentTab === tab.id
              ? "text-colorBrand"
              : "hover:text-colorBrand duration-300 text-lightGray"
          } flex items-center gap-2 relative rounded-full duration-300 transition-all  px-4 py-2 text-sm font-medium focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {currentTab === tab.id && (
            <motion.span
              layoutId="linear"
              className="absolute border-b w-12 mx-auto border-colorBrand inset-0 -z-20  py-5"
              //   style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <p>{tab.label}</p>
        </button>
      ))}
    </div>
  );
}
