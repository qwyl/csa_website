import { motion } from "framer-motion";

const officerImage = "/assets/images/events/retreat/spring_2025/group_photo.jpg";
const softstar = "/assets/images/misc/softstar.jpg";
const star = "/assets/images/misc/star.jpg";
const year = "/assets/images/misc/2025.jpg";


function JoinUs() {
    return (
        <div className="mt-40 mx-36 pb-20 flex flex-col justify-center">
          {/* Hero Section */}
          <div className="text-center mb-16">
                <h1 className="mb-6 font-normal italic text-[#AF383C] text-[60px] leading-none custom-text-shadow custom-text-stroke">
                    JOIN US!
                </h1>
                <div className="flex justify-center items-center mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 55 55" fill="none">
                        <path d="M26.7661 0.651919C26.8694 -0.217306 28.1307 -0.217306 28.2339 0.651919L29.0991 7.94393C30.2163 17.3599 37.6401 24.7837 47.056 25.9009L54.348 26.7661C55.2173 26.8694 55.2173 28.1307 54.348 28.2339L47.056 29.0991C37.6401 30.2163 30.2163 37.6401 29.0991 47.056L28.2339 54.348C28.1307 55.2173 26.8694 55.2173 26.7661 54.348L25.9009 47.056C24.7837 37.6401 17.3599 30.2163 7.94393 29.0991L0.651919 28.2339C-0.217306 28.1307 -0.217306 26.8694 0.651919 26.7661L7.94393 25.9009C17.3599 24.7837 24.7837 17.3599 25.9009 7.94393L26.7661 0.651919Z" fill="#180604" />
                    </svg>
                    <span className="ml-4 text-xl max-w-2xl">
                      Be part of CSA — your gateway to Chinese culture, lifelong friends, and unforgettable moments at UC Berkeley!
                    </span>
                </div>
            </div>

            {/* Join officers section */}
            <div>
              <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-[25px] p-8 shadow-lg"
              >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* left side - message */}
                    <div className="justify-left">
                      <h2 className="text-[#AF383C] text-[32px] font-medium mb-6">Become an Officer!</h2>
                      <p className="text-lg leading-relaxed">
                        Our officers are the heart of our club, keeping our community close and our events running strong. 
                        Whether you love capturing memories (Media), bringing people together (Events), keeping us on track (Finance), 
                        or making our ideas shine (PR & Productions), there’s a place for you here. Step up, lead with friends, and make an 
                        impact you’ll be proud of.
                      </p>
                      <div className="flex mt-5">
                        <img src={softstar} alt="softstar" className="w-[4%]"/>
                        <p className="text-[16px] font-small ml-2">Build leadership skills while having a blast</p>
                      </div>
                      <div className="flex mt-3">
                        <img src={softstar} alt="softstar" className="w-[4%]"/>
                        <p className="text-[16px] font-small ml-2">Plan awesome events & cultural celebrations</p>
                      </div>
                      {/* join now button */}
                      <div className="mt-14">
                        <a 
                          href="https://forms.gle/1g9ZbX3f4i7d5Zxk7" 
                          className="bg-[#AF383C] text-white px-6 py-3 rounded-[25px] hover:bg-[#A12D30] transition duration-300"
                        >
                          Apply Now!
                        </a>
                      </div>
                    </div>

                    {/* right side - image */}
                    <div className="justify-center">
                      <img
                        src={officerImage}
                        alt={"officer image"}
                        className="w-full h-240 object-cover rounded-[25px]"
                      />
                    </div>
                  </div>
              </motion.div>
              <img src={star} alt="star" className="absolute right-[8%] top-[40%] w-50 sm:w-24 md:w-28 rotate-12"/>
              <img src={year} alt="2025" className="absolute bottom-[-3%] left-[49%] w-[10%]"/> 
          </div>

          {/* join family section */}
          
        </div>
    );
}

export default JoinUs