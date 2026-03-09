import { wordsWithGender } from ".././data.js";
import ToggleFavorite from "../components/ToggleFavorite.jsx";
import React, { useState } from "react";

function WordList({ favorite, setFavorite, sourceList, setSourceList }) {
  const [search, setSearch] = useState("");

  const favoriteWords = wordsWithGender.filter((it) =>
    favorite.includes(it.word)
  );

  let list;

  if (sourceList === "favorite") {
    list = favoriteWords;
  } else {
    list = wordsWithGender;
  }

  list = list.filter((it) =>
    it.word.trim().toLowerCase().includes(search.trim().toLowerCase())
  );

  console.log(search);

  const listItems = list.map((item) => (
    <li key={item.word} className="flex justify-between">
      <div>{item.word}</div>

      <ToggleFavorite
        favorite={favorite}
        word={item.word}
        setFavorite={setFavorite}
      />
    </li>
  ));
  return (
    <div className="text-xl text-blue-600 px-20 mt-5">
      <select
        id="word-select"
        value={sourceList}
        onChange={(e) => setSourceList(e.target.value)}
      >
        <option value="word">All Words</option>
        <option value="favorite">Favorite Words</option>
      </select>
      <div>
        {" "}
        <input
          className="border border-blue-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition bg-white mt-3" 
          type="text"
          placeholder="start typing"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul className="mt-4">{listItems}</ul>
    </div>
  );
}

export default WordList;
