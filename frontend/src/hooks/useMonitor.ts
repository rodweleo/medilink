import { fetchServerLogs } from "@/functions/fetchServerLogs"
import { useState, useEffect } from "react"

export const useMonitor = () => {
    const [logs, setLogs] = useState([])

    useEffect(() => {
        fetchServerLogs().then((response) => {
            setLogs(response.server_logs)
        })
    }, [])

    return {
        logs
    }
}