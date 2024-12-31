import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MetricsCard from "./components/MetricsCard";
import AppointmentsTable from "./components/Appointment";
// import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        {/* Dashboard Section */}
        <div className="p-6">
          {/* Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <MetricsCard title="Earnings" value="₹50,000" icon="💰" bgColor="bg-green-500" />
            <MetricsCard title="Upcoming Appointments" value="12" icon="📅" bgColor="bg-blue-500" />
            <MetricsCard title="New Patients" value="5" icon="🩺" bgColor="bg-purple-500" />
            <MetricsCard title="Pending Reviews" value="3" icon="⭐" bgColor="bg-yellow-500" />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-3 gap-6">
            {/* Appointments Table */}
            <div className="col-span-2">
              <AppointmentsTable />
            </div>

            {/* Notifications */}
            <div>
              {/* <Notifications /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

