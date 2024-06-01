export type Patient = {
  id: string | number;
  name: string;
  gender: "Male" | "Female" | "others";
  phone_number: string | number;
  email: string;
  county: string;
  created_at: string;
  date_of_birth: string;
  medical_records?: MedicalRecord[];
};

export type Doctor = {
  id: string | undefined;
  name: string;
  practice: string;
  contact: string;
  county: string;
  hospital?: string | number;
  created_at: string;
};

export type HealthcareFacility = {
  id: string | number;
  name: string;
  contact: Contact;
  location: Location;
  motto?: string;
  services: string[];
  created_at: string;
};

export type MedicalRecord = {
  id: string | number;
  patient_id: string | number;
  doctor_id?: string | number;
  content: string[];
  created_at: string;
  isLocked: boolean;
};

export type Appointment = {
  id: string;
  doctor_id?: string;
  patient_id?: string;
  hospital_id?: string | number;
  notes: string;
  date_of_appointment: string;
  duration: number;
  isCompleted: boolean;
  from_time: string;
  to_time: string;
};

export type Prescription = {
  id?: string;
  drug: string;
};
export type Ambulance = {
  id: string | number;
  number_plate: string | number;
  location: string;
  phone_number: number;
};

export type Contact = {
  email_address: string;
  phone_number: number;
};

export type Location = {
  county: string;
  gps_coordinates: Coordinates;
};

export type Coordinates = {
  latitude: string | number;
  longitude: string | number;
};

export type Plan = {
  title: string;
  description: string;
  features: string[];
  pricing: string;
};

export type ServerLog = {
  id: string | number;
  level: string;
  message: string;
  req_method: "GET" | "POST" | "PUT" | "DELETE";
  req_path: string;
  req_host: string;
  req_timestamp: string;
  user_id: string;
};

export type Assessment = {
  id: number;
  title: string;
  description: string;
  category: string;
};

export type AssessmentsGroupedByCategory = {
  [category: string]: Assessment[];
};
