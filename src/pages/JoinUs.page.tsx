import { motion } from "framer-motion";
import { FamCard } from "../components/joinUs/FamCard.tsx";
import { fams } from "../data/fams.ts";


const officerImage = "/assets/images/events/retreat/spring_2025/group_photo.jpg";
const generalMemberImage = "/assets/images/events/shuaige/spring_2025/hype_crowd.JPG"
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
          <div className="mb-20">
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
          <div className="justify-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-normal text-[#AF383C] text-[32px] text-shadow-keepup mb-4">Come Join Our Family!</h1>
              <p className="mt-4 mb-8 text-lg max-w-4xl mx-auto">
                Want to get more involved in our community? Family members are our regular participants who love being 
                part of our cultural activities and events. You'll have access to special gatherings and get to know 
                everyone a bit better!          
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-4 justify-center">
              {fams.map((fam, index) => (
                <motion.div 
                  key={fam.title} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <FamCard fam={fam} />
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <a 
                href="https://forms.gle/your-family-form-link" 
                className="bg-[#AF383C] text-white px-8 py-4 rounded-[25px] hover:bg-[#A12D30] transition duration-300 font-medium text-lg inline-block"
              >
                Join a Family Now!
              </a>
            </div>
          </div>

          {/* General Member Section */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[25px] p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Side - general member image */}
                <div className="justify-center">
                  <img
                    src={generalMemberImage}
                    alt={"general member image"}
                    className="w-full h-240 object-cover rounded-[25px]"
                  />
                </div>

                {/* Right side - content */}
                <div className="justify-left">
                  <h2 className="text-[#AF383C] text-[32px] font-medium mb-6">Become a General Member!</h2>

                  <p className="text-lg leading-relaxed mb-6">
                    Not ready to commit to being an officer or joining a family? No problem! General members are the backbone 
                    of our community. You'll get access to all our events, cultural activities, and the chance to meet amazing 
                    people who share your interests.
                  </p>

                  <div className="flex mt-5">
                    <img src={softstar} alt="softstar" className="w-[4%]"/>
                    <p className="text-[16px] font-small ml-2">Access to all CSA events and activities</p>
                  </div>
                  <div className="flex mt-3">
                    <img src={softstar} alt="softstar" className="w-[4%]"/>
                    <p className="text-[16px] font-small ml-2">Receive updates about cultural celebrations</p>
                  </div>
                  <div className="flex mt-3">
                    <img src={softstar} alt="softstar" className="w-[4%]"/>
                    <p className="text-[16px] font-small ml-2">No commitment required - participate as much as you want!</p>
                  </div>

                  <div className="flex flex-row justify-center mt-8 mb-3">
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
              </div>
            </motion.div>
          </div>
        </div>
    );
}

export default JoinUs