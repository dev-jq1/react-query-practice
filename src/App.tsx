import React, { useEffect } from "react";

function App() {
  const fetchingDogs = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/hound/images/random/3`
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const contents = await Promise.all([
        fetchingDogs(),
        fetchingDogs(),
        fetchingDogs(),
      ]);
    };
    fetchData();
  }, []);
  return <div className="App">sdf</div>;
}

export default App;
