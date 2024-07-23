"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Faders, MapPin } from "phosphor-react";
import { GoHomeFill } from "react-icons/go";
import profileImg from "../../public/verifiedProfile.png";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowDownRight,
  Plus,
  WarningCircle,
} from "phosphor-react/dist";
import SortableTable from "@/components/SortedTable";
import { dashboardCards,dummyData,columns,checkbox_verifications } from "@/Constants/Constants";

const userInfo = {
  name: "Sindhu Uppalapati",
  city: "Hyderabad",
  profile: "",
  isVerified: true,
  profileImg,
  profileComplete: 33,
};







export default function Home() {
  return (
    <section className="w-full flex-col flex gap-2 my-5">
      <div className="flex justify-between ">
        <span className="text-xl">
          {" "}
          <GoHomeFill />
        </span>
        <span>
          <Faders size={20} />
        </span>
      </div>

      <section className="flex gap-3 mt-4 ">
        <section className="flex flex-col items-center gap-2 p-4 pt-0 min-w-[300px]  w-[296px]">
          <div className="flex items-center justify-center gap-2 ">
            <Image
              alt={userInfo.name}
              src={userInfo.profileImg}
              width={80}
              height={80}
              className="object-contain"
            />

            <div className="flex-col flex items-start gap-[2px] ">
              <span
                className={`bg-[#DDF2E4] text-[#1AA94A] w-[60px] flex items-center justify-center text-[10px] p-1 rounded-sm  `}
              >
                {userInfo.isVerified ? "Verified" : "Un Verified"}
              </span>
              <p className="font-normal"> {userInfo.name} </p>
              <p className="flex g-2 items-center justify-center text-sm ">
                {" "}
                <span className=" text-[#515151] mr-[1px] ">
                  <MapPin size={15} />
                </span>{" "}
                {userInfo?.city}
              </p>
            </div>
          </div>

          <span className=" user_verified w-full text-center  px-2 py-1.5 text-[16px] rounded-sm  ">
            Verification Report
          </span>

          <Card className="w-full">
            <CardHeader className="p-2 py-3">
              <CardTitle className="text-xl">Organisation Info</CardTitle>
              <CardDescription>
                Complete your organization profile for better experience
              </CardDescription>
            </CardHeader>
            <div className="p-2">
              <Progress value={userInfo.profileComplete} className="" />
            </div>

            <div className="p-2">
              {checkbox_verifications?.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center space-x-2  mb-4"
                >
                  <Checkbox id={item.name} disabled={item.isOrg} />
                  <label
                    htmlFor={item.name}
                    className="text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed 

                    peer-disabled:text-[#8A8A8A]
                    
                    peer-disabled:opacity-70"
                  >
                    {item.label}
                  </label>
                </div>
              ))}

              <span className="bg-sidebar text-white mt-3 inline-block  w-full  text-center  px-2 py-1.5 text-[16px] rounded-sm ">
                Verification Report
              </span>
            </div>
          </Card>
        </section>

        <Card className="w-full p-6 h-full flex flex-col gap-8 ">
          <DashboardCards />
          <DashboardTable />
        </Card>
      </section>
    </section>
  );
}

const DashboardCards = () => {
  return (
    <section className="flex gap-6 w-full ">
      {dashboardCards.map((card) => (
        <Card key={card.label} className="flex flex-col gap-1 p-2 w-[35%]">
          <div className="p-2 py-3 flex gap-3 items-center ">
            <span
              style={{
                backgroundColor: card.bg,
                color: card.color,
              }}
              className={` w-10 h-10 rounded-lg flex justify-center items-center`}
            >
              {card?.icon}
            </span>

            <span className="text-semibold text-lg ">{card?.label}</span>
          </div>

          <div className="p-2 py-3 flex justify-between   ">
            <h1 className="text-2xl font-medium ml-2 ">{card?.count}</h1>

            <div className="flex flex-col">
              {" "}
              <h2
                className={` flex text-[12px] gap-1 `}
                style={{
                  color: card.color,
                }}
              >
                <span>
                  <ArrowDownRight size={20} />
                </span>{" "}
                <span> {card?.percentage}</span>
              </h2>
              <span className="text-[#8A8A8A] text-[12px]">
                Since last {card?.inDays} Days
              </span>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};

const DashboardTable = () => {
  return (
    <section className="flex gap-3 flex-col ">
      <div className="flex_between w-full">
        <h6 className="flex_center gap-2">Job Postings 
          <WarningCircle size={20} className="text-[#8A8A8A]" /> </h6>

        <Button
          variant="default"
          className="text-white max-h-9 flex_center gap-1 font-medium"
        >
          <Plus size={20} className="mr-1" />
          Post Job
        </Button>
      </div>

      <div className="w-full">

        <SortableTable
        

        data={dummyData || []}
        columns={columns}
        
        />



      </div>
    </section>
  );
};
