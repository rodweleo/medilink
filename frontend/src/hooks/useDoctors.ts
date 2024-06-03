import { toast } from "@/components/ui/use-toast"
import { fetchDoctors } from "@/functions/fetchDoctors"
import { Doctor } from "@/utils/types"
import { AxiosError } from "axios"
import { useEffect, useState } from "react"

export const useDoctors = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([])
    
    const getData = async () => {
        try{
            const response = await fetchDoctors();
            setDoctors(response.doctors)
        }catch(error){
            if (error instanceof AxiosError) {
                toast({
                    variant:"destructive",
                    title: error.message,
                })
                setDoctors([])
            }else{
                setDoctors([])
            } 
            
            
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return {
        doctors
    }
}