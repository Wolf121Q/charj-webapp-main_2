// import React from "react";
// import heroVideo from "../../assets/images/car-model.mp4";
// import homeVideo from "../../assets/images/Electric.webm"
// import { Link } from "react-router-dom";
// import IndustryInsights from "../../components/learnmore";
// import About from "../../components/about";

// const Home = () => {
  
//   return (
//     <>
//       <div className="h-[100vh] max-w-screen relative ">
//         <div className="relative flex justify-center items-center h-screen w-full ">
          
//           <video
//             src={heroVideo}
//             autoPlay
//             loop
//             muted
//             className="h-full w-screen object-cover"
//           />
//           <div className="absolute top-28 w-full flex flex-col text-center justify-center items-center text-white gap-y-7">
//             <h1 className="text-5xl font-bold">eMOBILITY ACCELERATOR</h1>
//             <p className="text-3xl font-normal ">
//               Be on the road of the future
//             </p>
//           </div>
//           <div className="absolute w-full bottom-20 flex flex-row gap-3 text-center justify-center items-center">
//             <Link
//               to="/services"
//               className="bg-gray-100 px-20 py-1.5 text-black text-xl font-semibold rounded-sm hover:bg-gray-900 hover:text-white ease-in-out duration-300"
//             >
//               ASK US HOW
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="bg-black py-20 max-w-screen">
//           <div className="bg-[#000000] h-full  flex justify-center">
//             <video
//               src={homeVideo}
//               autoPlay
//               loop
//               muted
//               controls
//               className="h-full w-[1200px] object-cover"
//             />
//           </div>
//       </div>

//       <IndustryInsights />
//       {/* <About /> */}
//     </>
//   );
// };

// export default Home;


import React from "react";
import heroVideo from "../../assets/images/car-model.mp4";
import homeVideo from "../../assets/images/Electric.webm";
import electricVehicle from "../../assets/images/electric-vehicle.mp4";
import Hero from "../../assets/images/tesla-model-x.webp";
import charjMobile1 from "../../assets/images/charj-mobile-1.jpg";
import charjMobile2 from "../../assets/images/charj-mobile-2.jpg";
import charjMobile3 from "../../assets/images/charj-mobile-3.jpg";
import charjDesktop from "../../assets/images/charj-desktop.jpg";
import ecoSystem from "../../assets/images/eco-system.jpg";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import IndustryInsights from "../../components/learnmore";
import About from "../../components/about";
import Footer from "../../components/footer";

const Home = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const products = [
    {
      id: 1,
      videoSrc: heroVideo,
      title: "Cross Continent EV Revolution",
      subTitle: "Drive All Roads in the US, Canada, Europe and Middle East",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 2,
      videoSrc: electricVehicle,
      title: "Cross Continent EV Revolution",
      subTitle: "Drive All Roads in the US, Canada, Europe and Middle East",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 3,
      imgSrc: charjDesktop,
      imgSrcMobile: charjMobile2,
      imgSrcDesktop: true,
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 4,
      imgSrcMobile: charjMobile2,

      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 5,
      imgSrcMobile: charjMobile3,
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 6,
      imgSrc: ecoSystem,
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
  ];
  return (
    <>
      {products.map((item, index) => {
        const hasImage = isSmallScreen ? !!item.imgSrcMobile : !!item.imgSrc;
        const hasVideo = !!item.videoSrc;

        if (!hasImage && !hasVideo) {
          return null; // Skip rendering if no image or video on large screens
        }
        return (
          <div className="h-[100vh] max-w-screen relative snap-center" key={index}>
            <div className="relative flex justify-center items-center h-screen w-full">
              {isSmallScreen && item.imgSrcMobile ? (
                <img src={item.imgSrcMobile} alt="" className="h-[90vh] w-screen object-contain" />
              ) : (
                item.imgSrc && <img src={item.imgSrc} alt="" className="h-[90vh] w-[1200px] object-cover" />
              )}
              {item.videoSrc && <video src={item.videoSrc} autoPlay loop muted className="h-full w-screen object-cover" />}
              <div className="absolute top-20 w-full flex flex-col gap-3 text-center justify-center items-center text-white">
                {item.title && <h1 className="text-4xl font-bold z-10">{item.title}</h1>}
                {item.subTitle && <p className="text-sm font-medium z-10">{item.subTitle}</p>}
              </div>
              <div className="absolute w-full bottom-20 flex flex-col md:flex-row gap-3 text-center justify-center items-center z-10">
                {item.id === 1 ? (
                  <button className="bg-gray-100 px-20 py-1.5 text-black text-md rounded-sm ">
                    Demo Drive
                  </button>
                ) : (
                 ""
                )}
              </div>
            </div>

           
          </div>
        );
      })}
      {/* <Footer/> */}

    </>
  );
};

export default Home;
