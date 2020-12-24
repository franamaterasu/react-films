import { useEffect, useState } from "react";

// Hooks para el slider
const useSlider = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=7cdd6813e009397c594758fe7bce7b47&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => setSlider(res.results))
      .catch((e) => console.error(e));
  }, []);

  return { slider, setSlider };
};

export default useSlider;
