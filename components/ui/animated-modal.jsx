"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Image } from "antd";
import { X } from "lucide-react";
export const AnimatedModal = ({
  isOpen,
  setIsOpen,
  randomIndex,
  review,
  gradients,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-auto cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="rounded-[20px] w-full max-w-lg cursor-default relative overflow-x-hidden pt-10"
          >
            <div
              className="relative shadow-2xl rounded-[20px] p-8 text-center"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                borderRadius: "20px",
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <Image
                  height={64}
                  width={64}
                  src={review.UniLogo}
                  alt="Profile"
                  priority={false}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md object-contain"
                />
              </div>
              <button
                className="absolute top-4 right-4"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <X className="w-6 h-6 text-primary" />
              </button>
              <h2
                className={`mb-1 text-xl font-extrabold mt-4 text-transparent bg-gradient-to-r ${gradients[randomIndex]} bg-clip-text`}
              >
                {review.highestScore}
              </h2>
              <div
                className={`text-gray-700 font-bold text-md text-transparent bg-gradient-to-r ${gradients[randomIndex]} bg-clip-text`}
              >
                {review.uniShortName}
              </div>
              <h2
                className={`mb-1 text-xl font-extrabold mt-4 text-transparent bg-gradient-to-r ${gradients[randomIndex]} bg-clip-text`}
              >
                {review.Name}
              </h2>
              <div
                className="text-gray-700 text-sm"
                dangerouslySetInnerHTML={{
                  __html: review.ReviewContent,
                }}
              ></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
