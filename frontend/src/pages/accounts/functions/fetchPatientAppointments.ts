export const fetchPatientAppointments = (patientId: string) => {
  try {
    const response = await axios.get(`${API_URL}/appointments`, {
      params: {
        patientId: patientId,
      },
    });

    return response.data;
  } catch (e) {}
};
