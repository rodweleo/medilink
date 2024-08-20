import EventList from "@/components/event-list";
import Loader from "@/components/loader";
import { useEventsQuery } from "@/react-queries/useEventsQuery";
import { RefreshCw } from 'lucide-react';

const Events = () => {
   const { events, isFetching, refetch} = useEventsQuery()
    return <main className="py-10 px-5 space-y-5 min-h-screen">
        <header className="flex items-center gap-2.5">
            <h1 className="font-bold text-2xl">Events {events && `[${events.length}]`}</h1>
            <button type="button" title="Refresh" className="flex items-center gap-2 bg-slate-800 active:scale-90 text-white px-2 py-1 rounded-md" onClick={() => refetch()}><RefreshCw size={15}/> Reload </button>
        </header>
        {isFetching && <Loader size={50}/>}
        <section className="flex gap-5">
            {events && <EventList events={events}/>}
        </section>
    </main>
}

export default Events

