import { events } from "../data/events.ts";
import { splitEvents } from "../utils/splitEvents";
import { EventCard } from "../components/events/EventCard.tsx";

const star = "/assets/images/misc/star.jpg";


function Events() {
  const { upcoming, past } = splitEvents(events);

  return (
      <div className="mt-40 mx-36 pb-20 flex flex-col justify-center">
        {/* Hero Section - title and description */}
        <div className="text-left mb-16">
          <h1 className="mb-6 font-normal italic text-[#AF383C] text-[60px] leading-none custom-text-shadow custom-text-stroke">
            EVENTS
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

        <div className="px-6 py-12 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">CSA Events</h1>

          {upcoming.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {upcoming.map((event) => (
                  <EventCard key={event.title} event={event} />
                ))}
              </div>
            </section>
          )}

          {past.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {past.map((event) => (
                  <EventCard key={event.title} event={event} />
                ))}
              </div>
            </section>
          )}
        </div>
        {/* Upcoming events section */}
        <div>

        </div>

        {/* Past events section */}
        <div>

        </div>
      </div>
  );
}

export default Events