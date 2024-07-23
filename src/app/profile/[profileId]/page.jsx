"use client";
import ProfileCard from "@/components/ProfileCard";
import { useStateContext } from "@/contexts/StateContext";
import React from "react";
import { Card } from "@/components/ui/card";
import {
  peopleYouMayKnow,
  posts,
  recentFriends,
  sugesstedFollows,
  sugesstedJobs,
} from "@/Constants/Constants";
import { Button } from "@/components/ui/button";
import ArrayOfCards from "@/components/ArrayOfCards";
import Image from "next/image";
import { FirstAidKit, Link } from "phosphor-react/dist";
import PostCard from "@/components/PostCard";

const ProfileById = () => {
  const { dummyUser } = useStateContext();

  return (
    <section className="flex_start gap-6 mt-2 h-full ">
      <div className="min-w-[300px] flex-col flex gap-6 sticky top-4 ">
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

      <div className="flex-1 flex flex-col gap-6 ">
        <Card className="p-6 flex flex-col gap-4">
          <Card className="flex w-full items-center p-2 ">
            <Image
              src={dummyUser?.profileImg}
              alt={dummyUser.name}
              width={50}
              height={50}
              className=""
            />

            <span className="text-[#515151] text-sm">
              Say what’s in your mind
            </span>
          </Card>
          <div className="flex gap-3">
            <FirstAidKit size={22} className="cursor-pointer" />
            <Link size={22} className="cursor-pointer" />
          </div>
        </Card>

        <section className="w-full flex flex-col gap-2 ">
          {posts.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}
        </section>
      </div>

      <div className="min-w-[300px] flex-col flex gap-6 sticky top-4 ">
        <ArrayOfCards data={sugesstedJobs} heading="Suggested Jobs" />
        <ArrayOfCards data={peopleYouMayKnow} heading="People You May Know" />
      </div>
    </section>
  );
};

export default ProfileById;
