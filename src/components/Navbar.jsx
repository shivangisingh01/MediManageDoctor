function Navbar() {
    return (
      <div className="flex justify-between items-center bg-white p-4 shadow">
        <h1 className="text-xl font-bold">Welcome, Dr. John Doe</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  