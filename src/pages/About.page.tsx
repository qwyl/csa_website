import { motion } from "framer-motion";

const star = "/assets/images/misc/star.jpg";
const softstar = "/assets/images/misc/softstar.jpg";


function About() {
    return (
        <div className="mt-40 mx-36 pb-20 flex flex-col justify-center">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="mb-6 font-normal italic text-[#AF383C] text-[60px] leading-none custom-text-shadow custom-text-stroke">
                    ABOUT US
                </h1>
                <h3 className="text-[#AF383C] text-[28px] font-medium mb-8">
                    Chinese Student Association at UC Berkeley
                </h3>
                <div className="flex justify-center items-center mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 55 55" fill="none">
                        <path d="M26.7661 0.651919C26.8694 -0.217306 28.1307 -0.217306 28.2339 0.651919L29.0991 7.94393C30.2163 17.3599 37.6401 24.7837 47.056 25.9009L54.348 26.7661C55.2173 26.8694 55.2173 28.1307 54.348 28.2339L47.056 29.0991C37.6401 30.2163 30.2163 37.6401 29.0991 47.056L28.2339 54.348C28.1307 55.2173 26.8694 55.2173 26.7661 54.348L25.9009 47.056C24.7837 37.6401 17.3599 30.2163 7.94393 29.0991L0.651919 28.2339C-0.217306 28.1307 -0.217306 26.8694 0.651919 26.7661L7.94393 25.9009C17.3599 24.7837 24.7837 17.3599 25.9009 7.94393L26.7661 0.651919Z" fill="#180604" />
                    </svg>
                    <span className="ml-4 text-xl max-w-2xl">
                        CSA is a vibrant community at UC Berkeley for anyone interested in Chinese culture, connection, and fun!
                    </span>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

                {/* Left Column - hero image */}
                <div className="space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="flex flex-col relative">
                        <div className="w-[97%] h-[650px] mx-auto rounded-[25px] bg-[url(/assets/images/departments/everyone/spring_2025/group.jpg)] bg-cover bg-center shadow-lg shadow-gray-700">
                          {/* absolute top-[330px] right-[300px] */}
                        </div>
                        <img src={star} alt="star" className="absolute right-[15%] top-0 w-36 sm:w-24 md:w-28"/> 
                        <img src={softstar} alt="softstar" className="absolute top-[30%] left-[2%] size-16"/>
                      </div>
                    </motion.div>
                </div>

                {/* Right Column - history and mission */}
                <div className="space-y-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-[25px] p-8 shadow-lg"
                    >
                        <h2 className="text-[#AF383C] text-[32px] font-medium mb-6">Our History and Mission</h2>
                        <p className="text-lg leading-relaxed">
                          Founded in 1951, the Chinese Student Association (CSA) is the first Chinese organization serving 
                          the growing Chinese-American community in Berkeley. Today, we are one of the largest and most active 
                          organizations at UC Berkeley.
                        </p>
                        <p className="pt-4 text-lg leading-relaxed">
                        CSA promotes the interests and awareness of Chinese heritage and history in the Berkeley community while 
                        fostering a supportive and inclusive social community for students, alumni, and other groups. We host many 
                        events which allow participants to have fun and meet new people. We promote these values through our events, 
                        such as our annual Lunar New Year Banquet, ShuaiGe Swagoff, Mid-Autumn Festival, cultural cuisine, game nights, 
                        and more.
                        </p>
                        <p className="pt-4 text-lg leading-relaxed">
                            Everybody is welcome to join us, regardless of background! Join us to find out what CSA is all about!
                        </p>
                    </motion.div>
                    <img src={star} alt="star" className="absolute right-[10%] top-[45%] w-36 sm:w-24 md:w-28"/> 
                </div>
            </div>

            {/* Image Gallery Section */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
            >
                <h2 className="text-[#AF383C] text-[32px] font-medium mb-8 text-center">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Image 1 */}
                    <div className="bg-gray-200 rounded-[15px] h-[250px] flex items-center justify-center shadow-md bg-[url(/assets/images/events/bamboo_social/spring_2025/painting_jar.jpg)] bg-cover bg-center">
                    </div>
                    {/* Image 2 */}
                    <div className="bg-gray-200 rounded-[15px] h-[250px] flex items-center justify-center shadow-md bg-[url(/assets/images/events/banquet/spring_2025/group_photo.JPG)] bg-cover bg-center">
                    </div>
                    {/* Image 3 */}
                    <div className="bg-gray-200 rounded-[15px] h-[250px] flex items-center justify-center shadow-md bg-[url(/assets/images/events/shuaige/spring_2025/hype_crowd.JPG)] bg-cover bg-center">
                    </div>
                </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center bg-white rounded-[25px] p-8 shadow-lg"
            >
                <h2 className="text-[#AF383C] text-[32px] font-medium mb-3">Get In Touch</h2>
                <p className="text-lg mb-3">
                 Find us on Facebook, Instagram, and campus throughout the year when we host events!
                </p>
                <div className="flex flex-row justify-center mb-3">
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
                <p className="text-[#AF383C] text-[17px] text-shadow-contact">
                    Please contact csaberkeley@gmail.com if you have any questions!
                </p>
            </motion.div>
        </div>
    );
}

export default About;