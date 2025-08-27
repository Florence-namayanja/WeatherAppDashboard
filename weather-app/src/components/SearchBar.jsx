export default function SearchBar() {
  return (
    <div className="flex justify-center items-center p-4">
      <input
        type="text"
        placeholder="Search Location"
        className="p-2 w-1/2 rounded-md border text-black"
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        🔍
      </button>
    </div>
  );
}
