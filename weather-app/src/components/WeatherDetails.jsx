function WeatherDetails({ data }) {
  if (!data) return <p>No data available</p>;

  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <h2 className="text-xl font-semibold">{data.name}</h2>
      <p className="text-3xl">{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherDetails;
