// LINE ANIMATION - LINE GROWS BIGGER FROM THE DOT

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import StateStart from '../public/assets/StateStart.svg'; // Make sure the extension matches
// import StateFinish from '../public/assets/StateFinish.svg'; // Make sure the extension matches

// const DotLineAnimation = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger animation after a short delay when the page loads
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 500); // Adjust the delay as needed

//     return () => clearTimeout(timer); // Clean up the timer
//   }, []);

//   return (
//     <div id="dot-line-section" className="relative flex justify-center items-center">
//       <div className="relative">
//         {/* Dot image using next/image */}
//         <Image
//           src={StateStart} // Use imported image directly
//           alt="Dot"
//           width={500} // Increase size for the dot image
//           height={500} // Increase size for the dot image
//           className="w-full absolute top-0 left-0 " // Ensure dot stays above other elements
//         />
        
//         {/* Line animation */}
//         <div
//           className={`absolute -top-0 -left-5 transition-all duration-1000 ${
//             isVisible ? 'w-[400px]' : 'w-0'
//           }`}
//           style={{
//             backgroundImage: `url(${StateFinish.src})`, // Use StateFinish.src to access the image path
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'contain',
//             height: '28px', // Increase height according to your line image
//             zIndex: 9, // Ensure line covers the dot
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default DotLineAnimation;








// LINE ANIMATION - LINE REVEALS FROM THE DOT

import React, { useEffect, useState } from 'react';
import StateFinish from '../public/assets/StateFinish.svg';
import '../app/globals.css';

const DotLineAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="dot-line-section" className="relative flex justify-center items-center">
      <div className="relative">
        
        {/* Line animation */}
        <div
          className={`absolute top-0 -left-40 md:-left-5 transition-all duration-2000 ${
            isVisible ? 'clip-reveal' : 'clip-initial'
          }`}
          style={{
            backgroundImage: `url(${StateFinish.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: '28px',
            width: '400px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default DotLineAnimation;
