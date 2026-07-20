import react from "react";

export default function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-[400px] bg-white border border-neutral/50 rounded-lg shadow-xs p-2">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent border-none focus:outline-none"
      />
    </div>
  );
}