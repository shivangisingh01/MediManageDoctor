function Sidebar() {
    return (
      <div className="w-64 bg-blue-900 text-white h-screen flex flex-col">
        <h1 className="text-xl font-bold p-4">Doctor Dashboard</h1>
        <ul className="mt-6 space-y-4 px-4">
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Appointments</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Patients</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Earnings</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;
  
  