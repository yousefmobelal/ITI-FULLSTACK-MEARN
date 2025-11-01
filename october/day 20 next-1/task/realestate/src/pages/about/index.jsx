import React from "react";
import Image from "next/image";
import aboutImage from "@/assets/about.png";
import Statistic from "@/components/Statistic";
import star from "@/assets/star.png";
import cap from "@/assets/cap.png";
import group from "@/assets/group.png";
import Value from "@/components/Value";
import VerticalDivider from "@/components/VerticalDivider";
import HorizontalDivider from "@/components/HorizontalDivider";
import { useStatistics } from "@/contexts/StatisticsContext";
import Loading from "../../components/loading";

const About = () => {
  const { statistics, loading } = useStatistics();

  if (loading) return <Loading />;

  return (
    <div className="w-full px-20 pb-20">
      <div className="relative flex w-full gap-10 pt-20 flex-col md:flex-row">
        <div className="flex flex-col justify-center md:w-1/2">
          <p className="text-white font-semibold text-4xl">Our Journey</p>
          <p className="text-[#999999] mt-2">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>

          <div className="flex flex-wrap mt-10 gap-5">
            {statistics.map((stat) => (
              <Statistic value={stat.value} title={stat.title} />
            ))}
          </div>
        </div>

        <Image
          src={aboutImage}
          alt="About"
          className="mt-10 w-full md:w-1/2 hidden md:block"
        />
      </div>

      <div className="mt-20 flex gap-10 flex-wrap">
        <div className="flex-1">
          <p className="text-white font-semibold text-4xl">Our Values</p>
          <p className="text-[#999999] mt-2">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>

        <div className="flex-2 shadow-lg shadow-[#262626] p-5 rounded-lg">
          <div className="flex">
            <Value
              icon={star}
              title={"Trust"}
              description={
                "Trust is the cornerstone of every successful real estate transaction."
              }
            />

            <VerticalDivider />
            <Value
              icon={cap}
              title={"Excellence"}
              description={
                "We set the bar high for ourselves. From the properties we list to the services we provide."
              }
            />
          </div>
          <HorizontalDivider />
          <div className="flex">
            <Value
              icon={group}
              title={"Client-Centric"}
              description={
                "Your dreams and needs are at the center of our universe. We listen, understand."
              }
            />

            <VerticalDivider />
            <Value
              icon={star}
              title={"Our Commitment"}
              description={
                "We are dedicated to providing you with the highest level of service, professionalism, and support."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
