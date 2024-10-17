"use client";
import ParhoButton from "@/components/ParhoButton";
import { AnimatedModal } from "@/components/ui/animated-modal";
import { BoxReveal } from "@/components/ui/box-reveal";
import { Image } from "antd";
// import Image from "next/image";
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";

const gradients = [
  "from-[#043D2A] to-[#2DD7D3]",
  "bg-darkShadow",
  //   "from-orange-200 via-orange-500 to-rose-800",
  "from-[#043D2A] to-[#2DD7D3]",
];

const getRandomIndex = () => Math.floor(Math.random() * gradients.length);

const limitHTMLContent = (htmlContent, limit) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent;
  const textContent = tempDiv.textContent || tempDiv.innerText || "";
  const limitedText =
    textContent.length > limit
      ? `${textContent.slice(0, limit)}...`
      : textContent;

  return limitedText
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const TestimonialCard = ({ review, index, withMargin }) => {
  const randomIndex = useMemo(getRandomIndex, []);

  return (
    <div
      className={`relative ${withMargin && index === 0 ? "ml-24" : ""}`}
      key={index}
    >
      <div className="flex flex-col shadow-lg w-96 rounded-3xl pt-4 mx-4 bg-white max-h-30 mb-4 border-2 border-white border-opacity-20 text-[#20202C]">
        <div className="absolute top-1/3 transform -translate-y-1/2 -left-10">
          <Image
            height={64}
            width={64}
            className="w-12 h-12 rounded-full border-4 border-gray-200 object-contain"
            src={review?.UniLogo}
            alt={review?.UniName}
            priority={false}
          />
        </div>
        <div className="pl-8">
          <div className="flex flex-row gap-4 pr-4 pb-2">
            <div>
              {review?._id}

              <div className="font-bold text-md">{review?.Name}</div>
              <p
                className="text-xs"
                dangerouslySetInnerHTML={{
                  __html: limitHTMLContent(review?.ReviewContent, 110),
                }}
              ></p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div
                className={`w-63 font-bold text-md text-center text-transparent bg-gradient-to-r ${gradients[randomIndex]} bg-clip-text`}
              >
                {review?.highestScore != 0 && review?.highestScore?.length > 15
                  ? review?.highestScore?.slice(0, 15) + "..."
                  : review?.highestScore}
              </div>
              <div
                className={`w-71 font-bold text-center text-transparent bg-gradient-to-r ${gradients[randomIndex]} bg-clip-text`}
              >
                {review?.uniShortName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  review: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  withMargin: PropTypes.bool,
};

const Testimonials = ({ testimonialsData }) => {
  const [isMounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState({});

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return null;

  const thirdLength =
    testimonialsData?.length % 3 === 0
      ? testimonialsData?.length / 3
      : Math.ceil(testimonialsData?.length / 3);

  const firstPart = testimonialsData?.slice(0, thirdLength);
  const secondPart = testimonialsData?.slice(thirdLength, thirdLength * 2);
  //   const thirdPart = testimonialsData?.slice(thirdLength * 2);
  const thirdPart = [
    {
      UniLogo:
        "https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com/CDN/PreMed/about/vision/hasnain.png", // Image left as an empty string
      uniShortName: "Aga Khan University",
      Name: "Hasnain Mankani",
      color: "text-sunshine",
      ReviewContent:
        "MedSchool is a real game-changer. It has revolutionized the way med students study. Now, med studies have become easier due to the amazing services offered on MedSchool!",
    },
    {
      UniLogo:
        "https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com/CDN/PreMed/about/vision/fahd.png", // Image left as an empty string
      uniShortName: "Dow University of Health Sciences",
      Name: "Fahd Shaikh",
      color: "text-darkShadow",
      ReviewContent:
        "MedSchool is a real game-changer. It has revolutionized the way med students study. Now, med studies have become easier due to the amazing services offered on MedSchool!",
    },
    {
      UniLogo:
        "https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com/CDN/PreMed/about/vision/hasnain.png", // Image left as an empty string
      uniShortName: "Aga Khan University",
      Name: "Hasnain Mankani",
      color: "text-sunshine",
      ReviewContent:
        "MedSchool is a real game-changer. It has revolutionized the way med students study. Now, med studies have become easier due to the amazing services offered on MedSchool!",
    },
    {
      UniLogo:
        "https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com/CDN/PreMed/about/vision/fahd.png", // Image left as an empty string
      uniShortName: "Dow University of Health Sciences",
      Name: "Fahd Shaikh",
      color: "text-darkShadow",
      ReviewContent:
        "MedSchool is a real game-changer. It has revolutionized the way med students study. Now, med studies have become easier due to the amazing services offered on MedSchool!",
    },
    {
      UniLogo:
        "https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com/CDN/PreMed/about/vision/hasnain.png", // Image left as an empty string
      uniShortName: "Aga Khan University",
      Name: "Hasnain Mankani",
      color: "text-darkShadow",
      ReviewContent:
        "MedSchool is a real game-changer. It has revolutionized the way med students study. Now, med studies have become easier due to the amazing services offered on MedSchool!",
    },
    {
      UniLogo:
        "https://premedpk-cdn.sgp1.cdn.digitaloceanspaces.com/CDN/PreMed/about/vision/fahd.png", // Image left as an empty string
      uniShortName: "Dow University of Health Sciences",
      Name: "Fahd Shaikh",
      color: "text-darkShadow",
      ReviewContent:
        "MedSchool is a real game-changer. It has revolutionized the way med students study. Now, med studies have become easier due to the amazing services offered on MedSchool!",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col gap-7 relative">
        {/* <div className="absolute w-[500px] -z-10 opacity-25 blur-[122px] h-[500px] top-20 left-20 bg-gradient-to-r from-[#A6C8FF] from-5%  to-[#00FF78] to-95% rounded-full" /> */}
        <div className="flex flex-col gap-4 mx-auto">
          <div className="w-full md:w-3/4 mx-auto">
            <BoxReveal width="full" duration={0.5} boxColor={"#006992"}>
              <div className="text-center text-4xl md:text-6xl text-[#20202C] font-extrabold px-4 md:px-0 mt-8 !leading-[1.2]">
                Standup For The{" "}
                <span className="text-darkShadow">Champions</span>{" "}
              </div>
            </BoxReveal>
          </div>
          <div className="w-full md:w-3/5 mx-auto">
            <BoxReveal width="full" duration={0.8} boxColor={"#006992"}>
              <div className="text-center text-base md:text-2xl text-dull font-medium text-balance px-4 md:px-0">
                Doubtful? Hear our alumni stories. Parho wasn't just a path; it
                was their gateway to triumph. Success isn't a fixed endpoint but
                a dynamic journey, and we're ready to be your steadfast guides.
              </div>
            </BoxReveal>
          </div>
          {/* <div className="flex justify-center flex-col md:flex-row mx-auto items-center">
            <button
              className={`text-lg w-fit text-sunshine font-bold py-2 mt-4 hover:bg-opacity-80 shadow-lg border-none transition duration-300 transform hover:scale-105 !rounded-xl px-8 bg-white`}
            //   onClick={() => router.push(`/auth/onboarding`)}
            >
              Read the Stories
            </button>
            <button
              className={`text-lg w-fit text-white font-bold py-2 mt-4 hover:bg-opacity-80 shadow-lg border-none transition duration-300 transform hover:scale-105 !rounded-xl px-8 bg-international`}
            //   onClick={() => router.push(`/auth/onboarding`)}
            >
              Sign Up Free
            </button>
          </div> */}

          <ParhoButton
            text="Read Our Stories"
            chevron={false}
            className="mx-auto mt-7"
          />
        </div>

        <Marquee
          gradient={false}
          direction="right"
          speed={50}
          pauseOnHover={true}
        >
          <div className="flex gap-6 overflow-hidden mt-14">
            {firstPart?.map((review, index) => (
              <div
                className="cursor-pointer transition duration-300 hover:scale-105"
                onClick={() => {
                  setIsOpen(true);
                  setReview(review);
                }}
                key={index}
              >
                <TestimonialCard
                  key={index}
                  review={review}
                  index={index}
                  withMargin={true}
                />
              </div>
            ))}
          </div>
        </Marquee>

        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <div className="flex gap-6 overflow-hidden">
            {secondPart?.map((review, index) => {
              return (
                <div
                  className="cursor-pointer transition duration-300 hover:scale-105"
                  onClick={() => {
                    setIsOpen(true);
                    setReview(review);
                  }}
                  key={index}
                >
                  <TestimonialCard
                    key={index}
                    review={review}
                    index={index}
                    withMargin={true}
                  />
                </div>
              );
            })}
          </div>
        </Marquee>

        <Marquee
          gradient={false}
          direction="right"
          speed={50}
          pauseOnHover={true}
        >
          {thirdPart?.map((review, index) => {
            const randomIndex = getRandomIndex();
            return (
              <div
                className="relative flex items-center justify-between mx-10 mt-14 min-h-96 min-w-24"
                key={index}
              >
                <div
                  className="relative bg-white shadow-2xl rounded-xl p-8 pt-16 max-w-sm text-center h-72 cursor-pointer transition duration-300 hover:scale-105"
                  onClick={() => {
                    setIsOpen(true);
                    setReview(review);
                  }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      height={128}
                      width={128}
                      src={review?.UniLogo}
                      alt="Profile"
                      className="w-auto rounded-full border-4 border-white shadow-md object-contain"
                      priority={false}
                    />
                  </div>
                  {/* <h2
                    className={`mb-1 text-xl font-extrabold mt-4 text-transparent bg-gradient-to-r ${gradients[randomIndex]} bg-clip-text`}
                  >
                    {review?.highestScore != 0 &&
                    review?.highestScore?.length > 15
                      ? review?.highestScore?.slice(0, 15) + "..."
                      : review?.highestScore}
                  </h2> */}
                  <h2
                    className={`mb-1 text-3xl font-black mt-4  ${review.color} `}
                  >
                    {review?.Name}
                  </h2>
                  <div className={`text-[#20202C] font-bold text-lg`}>
                    {review?.uniShortName}
                  </div>

                  <div
                    className="text-[#20202C] text-base mt-4"
                    dangerouslySetInnerHTML={{
                      __html:
                        review?.ReviewContent?.length > 310
                          ? review?.ReviewContent?.slice(0, 310) + "..."
                          : review?.ReviewContent,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>

      <AnimatedModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        gradients={gradients}
        randomIndex={getRandomIndex()}
        review={review}
      />
    </div>
  );
};

Testimonials.propTypes = {
  testimonialsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Testimonials;
