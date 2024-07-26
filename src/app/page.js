"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowDownRight, Plus, WarningCircle } from "phosphor-react";
import SortableTable from "@/components/SortedTable";
import {
  dashboardCards,
  dummyData,
  columns,
  checkbox_verifications,
} from "@/Constants/Constants";
import ProfileCard from "@/components/ProfileCard";
import { useStateContext } from "@/contexts/StateContext";
import { Skeleton } from "@/components/ui/skeleton";
import { CardSkeleton } from "./profile/[profileId]/page";

export default function Home() {
  const { dummyUser } = useStateContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full flex-col flex gap-2">
      <section className="gap-3 max-lg:flex-col flex">
        <section className="flex flex-col items-center gap-6 pt-0 lg:min-w-[300px] lg:w-[296px] ">
          {loading ? (
            <>
              <Skeleton className="bg-white w-full p-6">
                <FakeSkeleton />
              </Skeleton>
            </>
          ) : (
            <ProfileCard userInfo={dummyUser} />
          )}

          {loading ? (
            <CardSkeleton length={4} />
          ) : (
            <>
              <Card className="w-full">
                <CardHeader className="p-2 py-3">
                  <CardTitle className="text-xl">Organisation Info</CardTitle>
                  <CardDescription>
                    Complete your organization profile for a better experience
                  </CardDescription>
                </CardHeader>
                <div className="p-2">
                  {loading ? (
                    <Skeleton className="w-full h-4" />
                  ) : (
                    <Progress value={dummyUser?.profileComplete} className="" />
                  )}
                </div>

                <div className="p-2">
                  {checkbox_verifications?.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center space-x-2 mb-4"
                    >
                      <Checkbox id={item.name} disabled={item.isOrg} />
                      <label
                        htmlFor={item.name}
                        className="text-[16px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:text-[#8A8A8A] peer-disabled:opacity-70"
                      >
                        {item.label}
                      </label>
                    </div>
                  ))}

                  <span className="bg-sidebar text-white mt-3 inline-block w-full text-center px-2 py-1.5 text-[16px] rounded-sm">
                    Complete Profile
                  </span>
                </div>
              </Card>
            </>
          )}
        </section>

        <Card className="w-full  lg:p-6 p-3 h-full flex flex-col gap-8">
          <DashboardCards loading={loading} />
          <DashboardTable loading={loading} />
        </Card>
      </section>
    </section>
  );
}

const DashboardCards = ({ loading }) => {
  return (
    <section className="flex gap-6 w-full lg:flex-nowrap flex-wrap ">
      {dashboardCards.map((card) => (
        <Card key={card.label} className="flex flex-col  gap-1 p-2 w-[35%] max-lg:w-[100%]">
          {loading ? (
            <FakeSkeleton />
          ) : (
            <>
              <div className="p-2 py-3 flex gap-3 items-center">
                <span
                  style={{
                    backgroundColor: card.bg,
                    color: card.color,
                  }}
                  className={`w-10 h-10 rounded-lg flex justify-center items-center`}
                >
                  {card?.icon}
                </span>

                <span className="text-semibold text-lg">{card?.label}</span>
              </div>

              <div className="p-2 py-3 flex justify-between">
                <h1 className="text-2xl font-medium ml-2">{card?.count}</h1>

                <div className="flex flex-col">
                  <h2
                    className={`flex text-[12px] gap-1`}
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
            </>
          )}
        </Card>
      ))}
    </section>
  );
};

const DashboardTable = ({ loading }) => {
  return (
    <section className="flex w-full gap-3 flex-col">
      {loading ? (
        <div className="flex w-full justify-between">
          <Skeleton className="w-[100px] h-10" />
          <Skeleton className="w-[100px] h-10" />
        </div>
      ) : (
        <div className="flex_between w-full">
          <h6 className="flex_center gap-2">
            Job Postings
            <WarningCircle size={20} className="text-[#8A8A8A]" />
          </h6>

          <Button
            variant="default"
            className="text-white max-h-9 flex_center gap-1 font-medium"
          >
            <Plus size={20} className="mr-1" />
            Post Job
          </Button>
        </div>
      )}

      <div className="w-full">
        {loading ? (
          <Skeleton className="w-full h-[60vh]" /> // Skeleton for table
        ) : (
          <SortableTable data={dummyData || []} columns={columns} />
        )}
      </div>
    </section>
  );
};

export const FakeSkeleton = () => {
  return (
    <div className="w-[35%] h-[100px] justify-between flex flex-col gap-5 items-start ">
      <div className="flex_center gap-3">
        <Skeleton className="min-w-10 h-10  " />
        <Skeleton className="min-w-[10rem] h-5" />
      </div>
      <div>
        <Skeleton className="w-20 h-10" />
      </div>
    </div>
  );
};
