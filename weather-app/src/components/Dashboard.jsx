import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import HighlightsCard from "./HighlightsCard";
import { fetchWeather } from "../services/weatherApi";

export default function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Kampala");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city);
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };
    getWeather();
  }, [city]);

  return (
    <div className="p-6">
      {/* Search bar updates city */}
      <SearchBar onSearch={(newCity) => setCity(newCity)} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Weather card shows live weather */}
        <WeatherCard weather={weather} />

        {/* Static reminder card */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center justify-center">
          <div>
            <p className="font-semibold">Don't forget to carry a sweater</p>
            <p>{weather ? `${weather.main.temp}°C` : "Loading..."}</p>
          </div>
          <img
            src="https://img.icons8.com/color/96/000000/winter.png"
            alt="sweater"
            className="ml-4"
          />
        </div>

        <HighlightsCard weather={weather} />
      </div>
    </div>
  );
}
