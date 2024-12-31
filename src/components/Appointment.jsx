function Appointment() {
    const appointments = [
      { patient: "Alice", date: "2024-12-01", time: "10:00 AM", status: "Upcoming" },
      { patient: "Bob", date: "2024-12-02", time: "12:00 PM", status: "Completed" },
      { patient: "Charlie", date: "2024-12-03", time: "2:00 PM", status: "Upcoming" },
    ];
  
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Upcoming Appointments</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Patient</th>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Time</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{appt.patient}</td>
                <td className="py-2">{appt.date}</td>
                <td className="py-2">{appt.time}</td>
                <td className={`py-2 ${appt.status === "Upcoming" ? "text-green-500" : "text-gray-500"}`}>
                  {appt.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Appointment;
  
  