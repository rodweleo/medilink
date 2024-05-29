import { fetchServerLogs } from "@/functions/fetchServerLogs"
import { ServerLog } from "@/utils/types"
import { useState, useEffect } from "react"

export const useMonitor = () => {
    const [logs, setLogs] = useState<ServerLog[]>([])

    useEffect(() => {
        fetchServerLogs().then((response) => {
            setLogs(response.server_logs)
        })
    }, [])

    return {
        logs
    }
}