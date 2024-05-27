import { fetchAllPatients } from "@/functions/fetchAllPatients";
import { Patient } from "@/utils/types";
import { useState, useEffect } from "react";

export const usePatients = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    useEffect(() =>{
        fetchAllPatients().then((response) => {
            if(response.status){
                setPatients(response.patients)
            }else{
                console.log(response)
            }
        })
    }, [])

    return {
        patients
    }
}