"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import home from "@/assets/home.png";
import discover from "@/assets/discover.png";
import Statistic from "../../components/Statistic";
import Link from "next/link";
import Loading from "../../components/loading";
import { useStatistics } from "@/contexts/StatisticsContext";

function HomeComponent() {
  const { statistics, loading } = useStatistics();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-20">
      <div className="flex w-screen ps-20">
        <div className="flex flex-col justify-center items-start md:mt-0 mt-20">
          <p className="text-white font-semibold text-4xl">
            Discover Your Dream Property with Estatein
          </p>
          <p className="text-[#999999] mt-2">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          <div className="mt-5 flex gap-3">
            <button className="bg-[#703BF7] border-[#262626] border px-3 py-2 text-white cursor-pointer rounded-md  hover:border-white hover:text-white transition duration-300">
              Browse Properties
            </button>
            <Link
              href={"/about"}
              className="bg-[#141414] border-[#262626] border px-3 py-2 text-white cursor-pointer rounded-md hover:bg-[#262626] hover:border-white hover:text-white transition duration-300"
            >
              About Us
            </Link>
          </div>

          <div className="flex flex-wrap mt-10 gap-5">
            {statistics.map((stat) => (
              <Statistic value={stat.value} title={stat.title} />
            ))}
          </div>
        </div>
        <Image src={home} className="h-screen md:block hidden" />
      </div>
    </div>
  );
}

export default HomeComponent;
