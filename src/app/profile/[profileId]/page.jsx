"use client";
import ProfileCard from "@/components/ProfileCard";
import { useStateContext } from "@/contexts/StateContext";
import React from "react";
import { Card } from "@/components/ui/card";
import { peopleYouMayKnow, sugesstedFollows, sugesstedJobs } from "@/Constants/Constants";
import { Button } from "@/components/ui/button";
import ArrayOfCards from "@/components/ArrayOfCards";

const ProfileById = () => {
  const { dummyUser } = useStateContext();

  return (
    <section className="flex_start gap-6 mt-2 ">
      <div className="min-w-[300px] flex-col flex gap-6">
        <ProfileCard userInfo={dummyUser} />

        <ArrayOfCards heading={"Suggested Follows"} data={sugesstedFollows} />

        <Card className="p-4 max-w-[300px] w-full flex gap-2 flex-col rounded-2xl">
          <h2 className="font-medium text-lg text-wrap">
            Didn't find what you were looking for?
          </h2>

          <Button variant="default" className="text-white w-[130px]">
            Contact Us
          </Button>
        </Card>
      </div>

      <div className="flex-1">2</div>
      <div className="min-w-[300px] flex-col flex gap-6">
        <ArrayOfCards data={sugesstedJobs} heading="Suggested Jobs" />
        <ArrayOfCards data={peopleYouMayKnow} heading="People You May Know" />
      </div>
    </section>
  );
};

export default ProfileById;
