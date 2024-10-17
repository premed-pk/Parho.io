import React, { useEffect, useState } from 'react';

const TextAnimation = () => {
  const textArray = ["MDCAT?", "Med School?", "SAT®?", "GIKI?", "LCAT?", "ECAT?", "NUMS?", "SAAT?", "NET?"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [textArray.length]);

  return (
    <div className="flex justify-center items-center">
      <div className="relative h-16 overflow-hidden font-bold text-black text-3xl">
        <ul
          className="transition-transform duration-1000"
          style={{ transform: `translateY(-${currentIndex * 11}%)` }}
        >
          {textArray.map((text, index) => (
            <li key={index} className="h-16 font-semibold text-intoTheNight text-5xl md:text-7xl font-clash leading-[80%]">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextAnimation;
