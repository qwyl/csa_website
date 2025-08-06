import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";




function Home() {
  // image srcs:
  const star = "/assets/images/misc/star.jpg";
  const softstar = "/assets/images/misc/softstar.jpg";
  const year = "/assets/images/misc/2025.jpg";
  const csa_sticker = "/assets/images/misc/csa_sticker.jpg";
  const finance = "/assets/images/departments/finance/spring_2025/finance.jpg";
  const atv = "/assets/images/events/retreat/spring_2025/atv.jpg";
  const pic2 = "/assets/images/misc/spring_2025/pic2.jpg";
  const pic3 = "/assets/images/departments/pr_design/spring_2025/pic3.jpg";
  const pic5 = "/assets/images/departments/pr_design/spring_2025/pr_design.jpg";
  const event1 = "/assets/images/events/mahjong/spring_2025/mahjong.jpg"
  const event2 = "/assets/images/events/mango_sago/spring_2025/mango_sago.jpg"
  const event3 = "/assets/images/events/mid_autumn_festival/spring_2025/midautumn.jpg"
  const event4 = "public/assets/images/events/shuaige/spring_2025/shuaige.jpg"

  const allImages = [
    finance, pic2, pic3, atv, pic5
  ];

  const eventImages = [
    event1, event2, event3, event4
  ];

  const eventNames = [
    "Fall 24’ ShaiGe Swagoff", "Fall 24’ Mid Autumn Festival", "Fall 24’ Mahjong Night", "Spring 25’ Mango Sago"
  ];


  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const visibleCount = 5;

  const scrollLeft = () => {
    setDirection(-1);
    setStartIndex((prev) => prev - 1 + allImages.length);

  };

  const scrollRight = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % allImages.length);
  };

  const arcStyles = [
    "bottom-[10%] left-[4%] scale-90 -rotate-6 z-0 w-[185px] h-[180px]",
    "bottom-[15%] left-[23%] scale-95 -rotate-3 z-10 w-[175px] h-[230px]",
    "bottom-[25%] left-[41%] scale-105 rotate-0 z-20 w-[185px] h-[240px]",
    "bottom-[15%] left-[60%] scale-95 rotate-3 z-10 w-[170px] h-[240px]",
    "bottom-[10%] left-[78%] scale-90 rotate-6 z-0 w-[185px] h-[210px]",
  ];


  const currentImages = Array.from({ length: visibleCount }).map((_, i) => {
    return allImages[(startIndex + i) % allImages.length];
  });

    return (
        <div className="mt-40 mx-36 pb-20 flex flex-col justify-center">
          <h1 className="text-center mb-10 font-normal italic text-[#AF383C] text-[60px] leading-none custom-text-shadow custom-text-stroke">CHINESE STUDENT ASSOCIATION</h1>
          <div className="grid grid-cols-2">
            <div className="col-start-2 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 55 55" fill="none">
                <path d="M26.7661 0.651919C26.8694 -0.217306 28.1307 -0.217306 28.2339 0.651919L29.0991 7.94393C30.2163 17.3599 37.6401 24.7837 47.056 25.9009L54.348 26.7661C55.2173 26.8694 55.2173 28.1307 54.348 28.2339L47.056 29.0991C37.6401 30.2163 30.2163 37.6401 29.0991 47.056L28.2339 54.348C28.1307 55.2173 26.8694 55.2173 26.7661 54.348L25.9009 47.056C24.7837 37.6401 17.3599 30.2163 7.94393 29.0991L0.651919 28.2339C-0.217306 28.1307 -0.217306 26.8694 0.651919 26.7661L7.94393 25.9009C17.3599 24.7837 24.7837 17.3599 25.9009 7.94393L26.7661 0.651919Z" fill="#180604" />
              </svg>
              <span className="ml-2"> CSA is a community at UC Berkeley for anyone interested in Chinese culture, connection, and fun!</span>
            </div>
          </div>
          {/* GROUP PHOTO DIV */}
          <div className="flex flex-col relative p-10">
            <div className="w-[97%] h-[650px] mx-auto rounded-[40px] bg-[url(/assets/images/departments/everyone/spring_2025/group.jpg)] bg-cover bg-center shadow-lg shadow-gray-700">
              {/* absolute top-[330px] right-[300px] */}
            </div>
            {/* STICKERS BELOW ARE ROUGHLY RESPONSIVE */}
            <img src={star} alt="star" className="absolute right-[15%] top-0 w-36 sm:w-24 md:w-28"/> 
            <img src={softstar} alt="softstar" className="absolute top-[30%] left-[2%] size-16"/>
            <img src={year} alt="2025" className="absolute bottom-[3%] left-[18%] w-[18%]"/>
            <img src={csa_sticker} alt="csa" className="absolute bottom-[-8%] left-0 w-[23%]"/>
            <span className="text-[#AF383C] mt-5 mr-16 text-right text-[17px] text-shadow-contact">Please contact ucbcsa@berkeley.edu if you have any questions!</span>
          </div>

          {/* MOVING CAROUSEL TEST - NOT RESPONSIVE*/}


          <div className="w-full flex items-center justify-center py-10 overflow-hidden relative">
            <button
              onClick={scrollLeft}
              className="relative translate-x-8 translate-y-5 z-10 bg-[#AF383C] text-white p-3 rounded-full w-16 h-16"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="27" viewBox="0 0 35 40" fill="none" className="absolute bottom-4 right-5">
              <path d="M1.23223 17.2322C0.255924 18.2085 0.255924 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM35 16.5L3 16.5V21.5L35 21.5V16.5Z" fill="#F1DAC0" />
            </svg>
            
            </button>

            <div className="flex relative items-center justify-center gap-6 px-20 w-[95%] h-[370px] mx-auto rounded-[35px] bg-[#D9D9D9] mt-16">
              <AnimatePresence initial={false} custom={direction}>
                {currentImages.map((src, i) => (
                  <motion.img
                  key={src + i}
                  src={src}
                  alt={`photo-${i}`}
                  className={`absolute rounded-xl object-cover transition-all duration-500 ease-in-out ${arcStyles[i]}`}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5 }}
                />
                ))}
              </AnimatePresence>
            </div>


            <button
              onClick={scrollRight}
              className="relative right-7 translate-y-6 z-10 bg-[rgb(175,56,60)] text-white p-3 rounded-full w-16 h-16"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="27" viewBox="0 0 35 40" fill="none" className="absolute bottom-4 right-5">
              <path d="M31.7678 20.7678C32.7441 19.7915 32.7441 18.2085 31.7678 17.2322L15.8579 1.32233C14.8816 0.34602 13.2986 0.34602 12.3223 1.32233C11.346 2.29864 11.346 3.88155 12.3223 4.85786L26.4645 19L12.3223 33.1421C11.346 34.1184 11.346 35.7014 12.3223 36.6777C13.2986 37.654 14.8816 37.654 15.8579 36.6777L31.7678 20.7678ZM0 21.5L30 21.5V16.5L0 16.5L0 21.5Z" fill="#F1DAC0" />
            </svg>
            </button>
          </div>
        
          {/* Description section */}
          <div className="px-12 text-center">
              <span className="">We host many events which allow participants to have fun and meet new people. We promote these values through our events, such as our annual Lunar New Year Banquet, ShuaiGe Swagoff, Mid-Autumn Festival, cultural cuisine, game nights, and more. Everybody is welcome to join us, regardless of background! Join us to find out what CSA is all about!
              </span>
          </div>
          {/* Keep up with the club section */}
          <div className="px-12 mt-16">
            <div className="flex justify-between">
              <div>
                <h1 className="font-normal text-[#AF383C] text-[32px] text-shadow-keepup">Keep up with the club!</h1>
                <div className="w-[110%] h-2 rounded-[20px] bg-[#00000040] blur-[2px]"></div>
              </div>
              <div className="flex flex-row">
                <a
                  href="mailto:csaberkeley@gmail.com"
                  className={`bg-[url(/assets/images/misc/gmail.jpg)] bg-center bg-no-repeat bg-[length:40px_30px] w-[65px] h-[63px] mr-3 rounded-full overflow-hidden bg-[#4F4E4E69] border-[3px] border-[#D9D9D980] icon-shadow`}
                >
                </a>
                <a
                  href="https://www.instagram.com/csaberkeley/"
                  className={`bg-[url(/assets/images/misc/instagram.jpg)] bg-center bg-no-repeat bg-[length:72px_50px] w-[65px] h-[63px] mr-3 rounded-full bg-[#4F4E4E69] border-[3px] border-[#D9D9D980] icon-shadow`}
                >
                </a>
                <a
                  href="https://linktr.ee/csaberkeley?utm_source=linktree_profile_share&ltsid=d8e13ff2-dd43-48c4-a878-56aada9248e6"
                  className={`bg-[url(/assets/images/misc/linktree.jpg)] bg-center bg-no-repeat bg-[length:35px_40px] w-[65px] h-[63px] rounded-full bg-[#4F4E4E69] border-[3px] border-[#D9D9D980] icon-shadow`}
                >
                </a>
              </div>
            </div>

            

            <div className="flex gap-5 mt-10">
              {eventImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`img-${i}`}
                  className="h-[275px]"
                />
              ))}


            </div>
            <div className="flex mt-8 ml-5">
              {eventNames.map((i) => (
                <span className="text-base mr-20 whitespace-nowrap">{i}</span>
              ))}
            </div>

          </div>
      
           
        </div>
    );
}


export default Home


// margin-top: 150px;
// margin-left: 30px;
// margin-right: 30px;