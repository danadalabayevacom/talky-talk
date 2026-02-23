import { wordsWithGender } from ".././data.js";
import ToggleFavorite from "../components/ToggleFavorite.jsx";


function WordList({favorite,setFavorite}) {

  const listItems = wordsWithGender.map((item) => (
    <li key={item.word} className="flex justify-between px-20">
      <div>{item.word}</div>
   
      <ToggleFavorite favorite={favorite} word={item.word} setFavorite={setFavorite}/>
    </li>
  ));
  return (
    <div className="text-xl text-black max-w-lg mx-auto border border-red-500">
      <ul>{listItems}</ul>
    </div>
    
  );
}

export default WordList;
