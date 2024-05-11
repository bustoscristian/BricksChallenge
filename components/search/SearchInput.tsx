"use client";

import React, { useState } from "react";

function SearchInput({ onChange }: { onChange: (text: string) => void }) {
  const [searchText, setsearchText] = useState("");

  return (
    <div className="flex flex-row gap-5">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setsearchText(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onChange(searchText);
          }
        }}
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      />
      <button
        className="bg-[#EC0293] hover:bg-pink-400 font-semibold text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          onChange(searchText);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;
