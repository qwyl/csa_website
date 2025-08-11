import { events, announcements } from "../data/events.ts";
import { splitEvents } from "../utils/splitEvents";
import { EventCard } from "../components/events/EventCard.tsx";
import { motion } from "framer-motion";

const star = "/assets/images/misc/star.jpg";

function Events() {
  const { upcoming, past } = splitEvents(events);

  // Get only announcements that haven't expired (endDate hasn't passed)
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Ignore time for date comparison
  
  const activeAnnouncements = announcements.filter(announcement => {
    const endDate = new Date(announcement.endDate);
    endDate.setHours(0, 0, 0, 0);
    return endDate >= currentDate;
  });

  return (
      <div className="mt-40 mx-36 pb-20 flex flex-col justify-center">
        {/* Hero Section - title and description */}
        <div className="text-left mb-16">
          <h1 className="mb-6 font-normal italic text-[#AF383C] text-[60px] leading-none custom-text-shadow custom-text-stroke">
            OUR EVENTS
          </h1>
          <div className="col-start-2 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 55 55" fill="none">
              <path d="M26.7661 0.651919C26.8694 -0.217306 28.1307 -0.217306 28.2339 0.651919L29.0991 7.94393C30.2163 17.3599 37.6401 24.7837 47.056 25.9009L54.348 26.7661C55.2173 26.8694 55.2173 28.1307 54.348 28.2339L47.056 29.0991C37.6401 30.2163 30.2163 37.6401 29.0991 47.056L28.2339 54.348C28.1307 55.2173 26.8694 55.2173 26.7661 54.348L25.9009 47.056C24.7837 37.6401 17.3599 30.2163 7.94393 29.0991L0.651919 28.2339C-0.217306 28.1307 -0.217306 26.8694 0.651919 26.7661L7.94393 25.9009C17.3599 24.7837 24.7837 17.3599 25.9009 7.94393L26.7661 0.651919Z" fill="#180604" />
            </svg>
            <span className="ml-4 text-xl max-w-2xl">
              CSA hosts exciting events year-round that celebrates Chinese culture and brings the Berkeley community together!              
            </span>            
            <img src={star} alt="star" className="absolute right-[15%] top-[15%] w-36 sm:w-24 md:w-28 rotate-12"/> 
          </div>
        </div>

        {/* Announcements Section - only shows when there are active announcements */}
        {activeAnnouncements.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-[#AF383C] to-[#8f2f33] rounded-[25px] p-8 shadow-lg text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#AF383C] text-2xl">📢</span>
                </div>
                <h2 className="text-3xl font-bold">Important Announcements</h2>
              </div>
              <p className="text-lg mb-8 opacity-90">
                Stay updated with our latest announcements and upcoming highlights!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeAnnouncements.map((announcement, index) => (
                  <motion.div
                    key={announcement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white/10 backdrop-blur-sm rounded-[15px] p-6 border border-white/20`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{announcement.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/80 mb-4 text-sm">
                      {announcement.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/90 font-medium">
                        {new Date(announcement.date + 'T00:00:00').toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div>
          <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[25px] p-8 shadow-lg"
          >
              {upcoming.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-[#AF383C] text-[32px] font-medium mb-6">Upcoming Events</h2>
                  <div className="flex flex-wrap justify-start items-start gap-4">
                    {upcoming.map((event) => (
                      <div key={event.title} className="w-[300px] ml-3">
                        <EventCard event={event} />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {past.length > 0 && (
                <section>
                  <h2 className="text-[#AF383C] text-[32px] font-medium mb-6">Past Events</h2>
                  <div className="flex flex-wrap justify-start items-start gap-4">
                    {past.map((event) => (
                      <div key={event.title} className="w-[300px] ml-3">
                        <EventCard event={event} />
                      </div>
                    ))}
                  </div>
                </section>
              )}
          </motion.div>
        </div>
      </div>
  );
}

export default Events;