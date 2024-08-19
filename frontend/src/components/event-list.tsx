import { EventProps } from "@/utils/types";
import EventCard from "./event-card";

export default function EventList({ events}: {
    events: EventProps[]
}){
    return (
        <ul>
            {events.map((event) => (
               <li key={event.name}>
                    <EventCard event={event}/>
               </li>
            ))}
        </ul>
    )
}