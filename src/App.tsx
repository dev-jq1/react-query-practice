import React from "react";

function App() {
  const fetchingDogs = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/hound/images/random/3`
    );
  };
  return <div className="App"></div>;
}

export default App;
