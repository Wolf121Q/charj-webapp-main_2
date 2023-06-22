import React from "react";
import heroVideo from "../../assets/images/car-model.mp4";
import homeVideo from "../../assets/images/Electric.webm";
import Hero from "../../assets/images/tesla-model-x.webp";

import { Link } from "react-router-dom";
import IndustryInsights from "../../components/learnmore";
import About from "../../components/about";
import Footer from "../../components/footer";

const Home = () => {
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
      videoSrc: homeVideo,
      title: "Cross Continent EV Revolution",
      subTitle: "Drive All Roads in the US, Canada, Europe and Middle East",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
    {
      id: 3,
      imgSrc: Hero,
      title: "Cross Continent EV Revolution",
      subTitle: "Drive All Roads in the US, Canada, Europe and Middle East",
      orderUrl: "https://www.tesla.com/model3/design#overview",
      demoUrl: "https://www.tesla.com/drive?selectedModel=model3",
    },
   
  ];
  return (
    <>
      {products.map((item, index) => {
        return (
          <div className="h-[100vh] max-w-screen relative snap-center" key={index}>
            <div className="relative flex justify-center items-center h-screen w-full">
              {item.imgSrc && <img src={item.imgSrc} alt="" className="h-full w-screen object-cover" />}
              {item.videoSrc && <video src={item.videoSrc} autoPlay loop muted className="h-full w-screen object-cover" />}
              <div className="absolute top-20 w-full flex flex-col gap-3 text-center justify-center items-center text-white">
                <h1 className="text-4xl font-bold z-10">{item.title}</h1>
                <p className="text-sm font-medium z-10">{item.subTitle}</p>
              </div>
              <div className="absolute w-full bottom-20 flex flex-col md:flex-row gap-3 text-center justify-center items-center z-10">
                {item.id === 1 ? (
                  <button className="bg-gray-100 px-20 py-1.5 text-black text-md rounded-sm ">
                    Demo Drive
                  </button>
                ) : (
                  <>
                    <button className="bg-gray-600 px-20 py-1.5 text-white text-md rounded-sm">
                      Demo Drive
                    </button>
                    <button className="bg-gray-100 px-20 py-1.5 text-black text-md rounded-sm">
                      Demo Drive
                    </button>
                  </>
                )}
              </div>
            </div>
            {/* {index === products.length - 1 && <Footer />} */}
            <div className="layer">
            </div>
          </div>
        );
      })}
      {/* <Footer/> */}

    </>
  );
};

export default Home;
