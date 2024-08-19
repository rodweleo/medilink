import EventList from "@/components/event-list";
import { useEvents } from "@/hooks/useEvents";

export const Events = () => {
   const { events } = useEvents()
    return <main className="py-10 px-5 space-y-2.5 min-h-screen">
        <h1 className="font-bold text-3xl">Events</h1>
        <section className="flex gap-5">
            <EventList events={events}/>
        </section>
    </main>
}

