

const ToggleFavorite = ({favorite, word, setFavorite}) => {

    return favorite.includes(word) ? (
      <i
        className="fa-solid fa-star ml-2"
        onClick={() =>
          setFavorite((prev) => {
            const result = prev.filter((item) => item !== word);
            localStorage.setItem("word", result);
            return result;
          })
        }
      ></i>
    ) : (
      <i
        className="fa-regular fa-star ml-2"
        onClick={() =>
          setFavorite((prev) => {
            const result = [...prev, word];
            localStorage.setItem("word", result);
            return result;
          })
        }
      ></i>
    );
  };

  export default ToggleFavorite;