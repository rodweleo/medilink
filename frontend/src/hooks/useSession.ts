import { fetchAuthSession } from "@/functions/fetchAuthSession";
import { API_URL } from "@/utils/API_URL";
import axios from "axios";
import { useState, useEffect } from "react";
export const useSession = () => {
    const [session, setSession] = useState(null);
    const [error, setError] = useState<string[]>([])
    const [isFetchingSession, setIsFetchingSession] = useState(true);
    useEffect(() => {
        fetchAuthSession().then((response) => {
            setIsFetchingSession(false)
            setSession(response.session)
        }).catch((error) => {
            setError(error)
            setIsFetchingSession(false)
        })
    }, [])


    const signIn = async (email: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email: email,
                password: password
            })

            setSession(response.data.session)
            return response.data
        } catch (error) {
            return error
        }
    }

    const signOut = async () => {
        try {
            const response = await axios.post(`${API_URL}/logout`)

            setSession(null)
            return response.data
        } catch (error) {
            return error
        }
    }
    return {
        session,
        error,
        isFetchingSession,
        signIn,
        signOut
    }
}