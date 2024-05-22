export const usePatientAppointments = (patientId: string) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchPatientAppointments(patientId).then((response) => {
      setAppointments(response.appointments);
    });
  }, []);
  return {
    appointments,
  };
};
