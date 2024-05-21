export type Patient = {
    id: string | number;
    name: string;
    email: string;
    phone_number: number;
    county: string;
    created_at: string
}

export type Doctor = {
    id: string | number;
    name: string;
    email: string;
    phone_number: number;
    county: string;
    hospital?: string | number
    created_at: string
}

export type Hospital = {
    id: string | number;
    name: string;
    email: string;
    phone_number: number;
    county: string;
    gps_coordinates: string 
    services: string[];
    created_at: string
}

export type MedicalRecord = {
    id: string | number;
    patient_id: string | number;
    doctor_id?: string | number;
    content: string[]
    created_at: string
}

export type Appointment = {
    id: string | number;
    patient_id: string | number;
    notes: string[]
    date_of_appointment: string;
}

export type Ambulance = {
    id: string | number;
    number_plate : string | number;
    location : string;
    phone_number: number
}