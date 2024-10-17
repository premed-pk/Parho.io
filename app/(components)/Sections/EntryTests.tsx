import React from "react";
import ParhoBig from "@/public/assets/ParhoLogoBig.svg";
import Image from "next/image";
const EntryTests: React.FC = () => {
  return (
    <>
      <div className="h-40 w-full bg-gradient-to-b from-transparent to-intoTheNight blur-md to-60%  -mb-5 scale-150"></div>
      <div className="relative w-full bg-intoTheNight">
        <div className="max-w-screen-xl px-4 mx-auto w-full z-50 relative">
          <h1 className="text-4xl md:text-7xl font-bold md:w-3/4 py-10 text-primary font-clash">
            You can prepare any exam with us!
          </h1>
          {/* Entry Test */}
          <div className="border-4 rounded-2xl border-white/10 bg-white/10 p-7 w-full backdrop-blur-xl shadow-black/15 shadow-xl flex flex-col gap-7 justify-center">
            <h1 className="text-4xl font-clash font-bold text-sunshine">
              Entry <span className="text-primary">Tests</span>
            </h1>
            <div className="grid lg:grid-cols-3 gap-7 md:gap-24">
              <div className="flex flex-col">
                <h1 className="text-primary font-bold text-2xl">Pre-Medical</h1>
                {/* <div className="flex flex-wrap text-primary gap-4 my-6">
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    National MDCAT
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    NUMS
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    Allied Health Sciences
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    Private Universities Entry Tests
                  </div>
                </div> */}
                <div className="flex flex-wrap text-primary gap-4 my-6">
                  {[
                    "National MDCAT",
                    "NUMS",
                    "Allied Health Sciences",
                    "Private Universities Entry Tests",
                  ].map((test) => (
                    <div
                      key={test}
                      className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2"
                    >
                      {test}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-primary font-bold text-2xl">
                  Pre-Engineering
                </h1>
                {/* <div className="flex flex-wrap text-primary gap-4 my-6">
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    SAT®
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    FAST
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    NUST
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    LCAT (LUMS)
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    ECAT (UET)
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    GIKI
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    PIEAS
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                    COMSATS
                  </div>
                </div> */}
                <div className="flex flex-wrap text-primary gap-4 my-6">
                  {[
                    "SAT®",
                    "FAST",
                    "NUST",
                    "LCAT (LUMS)",
                    "ECAT (UET)",
                    "GIKI",
                    "PIEAS",
                    "COMSATS",
                  ].map((test) => (
                    <div
                      key={test}
                      className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2"
                    >
                      {test}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col relative">
                <h1 className="text-primary font-bold text-2xl">
                  Business and Management
                </h1>
                <div className="absolute left-0 top-16 mix-blend-plus-lighter flex flex-col gap-2">
                  <h1 className="font-bold text-sunshine text-4xl font-clash ">
                    Coming Soon!
                  </h1>
                  <p className="text-sunshine text-lg w-11/12">
                    The Parho Team is actively working on Business and
                    Management Entry Tests!
                  </p>
                </div>
                {/* <div className="flex flex-wrap flex-col text-primary gap-4 my-6 blur-sm relative">
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit">
                    IBACAT
                  </div>
                  <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit">
                    LCAT (LUMS)
                  </div>
                </div> */}
                <div className="flex flex-wrap flex-col text-primary gap-4 my-6 blur-sm relative">
                  {["IBACAT", "LCAT (LUMS)"].map((test) => (
                    <div
                      key={test}
                      className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit"
                    >
                      {test}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* High School and UnderGrad*/}
          <div className="flex flex-col md:flex-row md:justify-between gap-10 mt-10">
            {/* HighSchool  */}
            <div className="border-4 relative rounded-2xl border-white/10  bg-white/10 p-7 w-full backdrop-blur-xl shadow-black/15 shadow-xl flex flex-col gap-7 ">
              <h1 className="text-4xl font-clash font-bold text-sunshine">
                High <span className="text-primary">School</span>
              </h1>
              <div className="absolute left-7 top-[30%] mix-blend-plus-lighter flex flex-col gap-2">
                <h1 className="font-bold text-sunshine text-4xl font-clash">
                  Coming Soon!
                </h1>
                <p className="text-sunshine text-lg w-11/12">
                  The Parho Team is actively working on High School: F.Sc. and
                  Cambridge Courses and Programs!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-16 blur-sm">
                <div className="flex flex-col">
                  <h1 className="text-primary font-bold text-2xl">
                    Intermediate
                  </h1>
                  {/* <div className="flex flex-wrap text-primary gap-4 my-6">
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                      F.Sc. (Pre-Medical)
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                      F.Sc. (Pre-Engineering)
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                      F.A.
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                      I.C.S.
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                      I.Com
                    </div>
                  </div> */}
                  <div className="flex flex-wrap text-primary gap-4 my-6">
                    {[
                      "F.Sc. (Pre-Medical)",
                      "F.Sc. (Pre-Engineering)",
                      "F.A.",
                      "I.C.S.",
                      "I.Com",
                    ].map((course) => (
                      <div
                        key={course}
                        className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <h1 className="text-primary font-bold text-2xl">Cambridge</h1>

                  {/* <div className="flex flex-wrap text-primary gap-4 my-6 relative">
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit">
                      O Levels
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit">
                      A Levels
                    </div>
                  </div> */}
                  <div className="flex flex-wrap text-primary gap-4 my-6 relative">
                    {["O Levels", "A Levels"].map((course) => (
                      <div
                        key={course}
                        className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* UnderGrad  */}
            <div className="border-4 rounded-2xl border-white/10 bg-white/10 p-7 w-full backdrop-blur-xl shadow-black/15 shadow-xl flex flex-col gap-7 justify-center">
              <h1 className="text-4xl font-clash font-bold text-sunshine">
                Under<span className="text-primary">grad</span>
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h1 className="text-primary font-bold text-2xl">
                    MedSchool.PK
                  </h1>
                  <div className="flex flex-wrap text-primary gap-4 my-6">
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2">
                      MBBS
                    </div>
                  </div>
                </div>
                <div className="flex flex-col relative">
                  <h1 className="text-primary font-bold text-2xl">
                    Engineering Universities
                  </h1>
                  <div className="absolute left-0 lg:top-14 md:top-20 top-14 mix-blend-plus-lighter flex flex-col gap-2">
                    <h1 className="font-bold text-sunshine text-4xl font-clash">
                      Coming Soon!
                    </h1>
                    <p className="text-sunshine text-lg w-11/12">
                      The Parho Team is actively working on Undergrad
                      Engineering programs and courses!
                    </p>
                  </div>
                  {/* <div className="flex flex-wrap text-primary gap-4 blur-sm my-6 relative">
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit">
                      Computer Science
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit">
                      Electrical Engineering
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit">
                      Mechanical Engineering
                    </div>
                    <div className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit">
                      Software Engineering
                    </div>
                  </div> */}
                  <div className="flex flex-wrap text-primary gap-4 blur-sm my-6 relative">
                    {[
                      "Computer Science",
                      "Electrical Engineering",
                      "Mechanical Engineering",
                      "Software Engineering",
                    ].map((course) => (
                      <div
                        key={course}
                        className="rounded-lg border border-white/25 bg-white/10 backdrop-blur-lg shadow-xl font-normal text-xl p-2 max-w-fit"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          alt="bg"
          src={ParhoBig}
          className=" absolute top-0 right-0  mix-blend-hard-light"
        />
      </div>

      <div className="h-32 w-full bg-gradient-to-t from-transparent to-intoTheNight to-50% blur-md -mt-5 relative -z-10 scale-150"></div>
    </>
  );
};

export default EntryTests;
