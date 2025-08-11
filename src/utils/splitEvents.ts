import { Event } from "../data/events.ts";

export function splitEvents(events: Event[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Ignore time

  const upcoming: Event[] = [];
  const past: Event[] = [];

  for (const event of events) {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);

    if (eventDate >= today) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  }

  // Sort both lists
  upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  past.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Limit past events to 8 most recent
  const limitedPast = past.slice(0, 8);

  return { upcoming, past: limitedPast };
}
