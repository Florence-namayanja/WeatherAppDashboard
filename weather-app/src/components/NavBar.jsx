import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1 className="font-bold text-xl">🌤 Weatherly</h1>
      <div className="space-x-6">
        <Link to="/">Dashboard</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}
