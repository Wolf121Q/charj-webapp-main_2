import React from "react";
import heroVideo from "../../assets/images/car-model.mp4";
import electricVehicle from "../../assets/images/electric-vehicle.mp4";
import charjMobile1 from "../../assets/images/1st.jpg";
import charjMobile2 from "../../assets/images/2nd.jpg";
import charjMobile3 from "../../assets/images/3rd.jpg";
import charjDesktop from "../../assets/images/charj-desktop.jpg";
import ecoSystem from "../../assets/images/eco-system.jpg";
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

const Home = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 780 });
  const products = [
    {
      id: 1,
      videoSrc: electricVehicle,
      background: true,
      title: "Cross Continent EV Revolution",
      subTitle: "Drive All Roads in the US, Canada, Europe and Middle East",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 2,
      videoSrc: heroVideo,
      background: true,

      title: "Cross Continent EV Revolution",
      subTitle: "Drive All Roads in the US, Canada, Europe and Middle East",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 3,
      imgSrc: charjDesktop,
      title: "Types of EV Chargers",
      background: false,
      imgSrcMobile: charjMobile1,
      imgSrcDesktop: true,
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },

   
    {
      id: 4,
      imgSrcMobile: charjMobile2,
      background: false,
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
      imgSrcMobile: ecoSystem,
      background: false,
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
          return null;
        }
        return (
          <div className="h-[100vh] max-w-screen relative snap-center" key={index}>
            {item.background ? (
              <div className="relative flex justify-center items-center h-screen w-full">
                {isSmallScreen && item.imgSrcMobile ? (
                  <img src={item.imgSrcMobile} alt="" className="h-[75vh] w-screen object-contain" />
                ) : (
                  item.imgSrc && <img src={item.imgSrc} alt="" className="h-[80vh] w-screen object-contain" />
                )}
                {item.videoSrc && <video src={item.videoSrc} autoPlay loop muted className="h-full w-screen object-cover" />}
                <div className="absolute top-20 w-full flex flex-col gap-3 text-center justify-center items-center text-white">
                  {item.title && <h1 className="text-4xl font-bold text-white z-10">{item.title}</h1>}
                  {item.subTitle && <p className="text-sm font-medium z-10 mt-5">{item.subTitle}</p>}
                </div>
                <div className="absolute w-full bottom-20 flex flex-col md:flex-row gap-3 text-center justify-center items-center z-10">
                  {item.id === 1 ? (
                    <Link to="/services" className="bg-gray-100 px-20 py-1.5 text-black text-md rounded-sm" >
                      Our Services
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ) : (
              <div className="grid gap-0 lg:gap-2 text-center pt-20">
                <div>
                  {item.title && <h1 className="text-2xl md:text-4xl  font-bold text-black z-10">{item.title}</h1>}
                  {item.subTitle && <p className="text-sm font-medium z-10 mt-5">{item.subTitle}</p>}
                </div>
                {isSmallScreen && item.imgSrcMobile ? (
                  <img src={item.imgSrcMobile} alt="" className="h-[80vh] w-screen object-contain" />
                ) : (
                  item.imgSrc && <img src={item.imgSrc} alt="" className="h-[80vh] md:h-auto lg:h-[80vh] w-screen object-contain" />
                )}
              </div>
            )}


          </div>
        );
      })}
      {/* <Footer/> */}

    </>
  );
};

export default Home;
