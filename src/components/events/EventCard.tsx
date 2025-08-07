import { Event } from "../../data/events";

type Props = {
  event: Event;
};

export const EventCard = ({ event }: Props) => (
  <div className="w-[300px] h-[400px] rounded-lg shadow-md overflow-hidden border border-gray-200">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-500">{formatDate(event.date)}</p>
      {event.description && <p className="mt-2 text-sm">{event.description}</p>}
    </div>
  </div>
);

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}