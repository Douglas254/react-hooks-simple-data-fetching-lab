// create your App component here

import React, { useState, useEffect } from "react";

function App() {
  const [Pic, setPic] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setPic(data.message);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  if (!Pic) return <p>Loading...</p>;

  return <img src={Pic} alt="A Random Dog" />;
}

export default App;
