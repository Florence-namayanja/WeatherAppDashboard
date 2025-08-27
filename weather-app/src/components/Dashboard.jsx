import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import HighlightsCard from "./HighlightsCard";

export default function Dashboard() {
  return (
    <div className="p-6">
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <WeatherCard />
        <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center justify-center">
          <div>
            <p className="font-semibold">Don't forget to carry a sweater</p>
            <p>19°C</p>
          </div>
          <img
            src="https://img.icons8.com/color/96/000000/winter.png"
            alt="sweater"
            className="ml-4"
          />
        </div>
        <HighlightsCard />
      </div>
    </div>
  );
}
