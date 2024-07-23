"use client";

import React from "react";
import { sidebarView } from "@/Constants/Constants";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <section className="h-full  w-[104px]  bg-sidebar flex flex-col gap-3  items-center ">
      <section className="w-full border-b p-4 mx-auto border-b-[#8A8A8A] hover:border-b-[#6B6B6B] flex justify-center items-center">
        <span className=" text-2xl text-white ">
          {" "}
          <TbGridDots />{" "}
        </span>
      </section>

      <section className="py-4 flex flex-col gap-8 w-full">
        {sidebarView.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={`flex w-full justify-center items-center gap-1.5 flex-col text-white transition-all  ${
              item.href === currentPath ? `border-l-[3px]  border-white` : ""
            } `}
          >
            <span className="text-2xl mb-1 ">{item.icon}</span>
            <span className="text-[12px] text-[#C7C7C7]  ">{item.label}</span>
            {/* <item.Icon width={28} height={28} /> */}
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Sidebar;
