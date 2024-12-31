function MetricsCard({ title, value, icon, bgColor }) {
  return (
    <div className={`p-6 rounded shadow-lg text-white ${bgColor}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg">{title}</h2>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold mt-4">{value}</p>
    </div>
  );
}

export default MetricsCard;

  