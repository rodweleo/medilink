export type Patient = {
    id: string | number;
    name: string;
    contact: Contact;
    county: string;
    created_at: string
}

export type Doctor = {
    id: string | number;
    name: string;
    contact: Contact;
    county: string;
    hospital?: string | number
    created_at: string
}

export type HealthcareFacility = {
    id: string | number;
    name: string;
    contact: Contact,
    location: Location;
    motto?: string;
    services: string[];
    created_at: string;

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

export type Contact = {
    email_address: string;
    phone_number: number;
}

export type Location = {
    county: string;
    gps_coordinates: Coordinates;
}

export type Coordinates = {
    latitude: string | number;
    longitude: string | number
}

export type Plan = {
    title: string;
    description: string;
    features: string[];
    pricing: string
}