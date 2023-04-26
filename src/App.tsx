import React, { useEffect, useState } from "react";
import { BREEDS } from "./constants/dogs";

function App() {
  const { dachshund, maltese, terrier } = BREEDS;
  const [dogs, setDogs] = useState({});

  const fetchingDogs = async (breed: string) => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/3`
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const contents = await Promise.all([
        fetchingDogs(dachshund),
        fetchingDogs(maltese),
        fetchingDogs(terrier),
      ]);

      const dachshunds = contents[0].message;
      const malteses = contents[1].message;
      const terriers = contents[2].message;

      setDogs({
        dachshunds,
        malteses,
        terriers,
      });
    };
    fetchData();
  }, []);
  return <div className="App">sdf</div>;
}

export default App;
