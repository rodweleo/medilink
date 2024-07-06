import { useEffect, useState } from "react"
import { SupabaseClient } from "@/supabase/supabase_client";
import { EventProps } from "@/utils/types";

export const useEvents = () => {
    const [events, setEvents] = useState<EventProps[] | null>([])

    const fetchEvents = async() => {
        const{ data } = await SupabaseClient.from("events").select()
        setEvents(data)
    }
    useEffect(() => {
        fetchEvents()
    }, [])

    return {
        events

    }
}