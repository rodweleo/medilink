import { SupabaseClient } from "@/supabase/supabase_client";
import { EventProps } from "@/utils/types";
import { useQuery } from "react-query";

export const useEventsQuery = () => {
    const {data, refetch, error, isFetching} = useQuery("events", async () => {
        const { data } = await SupabaseClient.from("events").select()
        return data;
    })   

    const events = data as EventProps[];

    return {
        events,
        isFetching, 
        error, 
        refetch
    }
}