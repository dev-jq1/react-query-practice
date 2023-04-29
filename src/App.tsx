import React, { useEffect, useState } from "react";
import { BREEDS } from "./constants/dogs";

function App() {
  const { dachshund, maltese, terrier } = BREEDS;
  const cache = new Map();
  const [dogs, setDogs] = useState({
    dachshunds: [],
    malteses: [],
    terriers: [],
  });

  const fetchingDogs = async (breed: string) => {
    if (cache.has(breed)) {
      return cache.get(breed);
    }
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/3`
    );
    const data = await response.json();

    cache.set(breed, data);
    return cache.get(breed);
  };

  useEffect(() => {
    const fetchData = async () => {
      const [
        { message: dachshunds },
        { message: malteses },
        { message: terriers },
      ] = await Promise.all([
        fetchingDogs(dachshund),
        fetchingDogs(maltese),
        fetchingDogs(terrier),
      ]);

      //구조분해 할당을 통해 더 간결하게 작성 가능
      // const dachshunds = contents[0].message;
      // const { message: dachshunds } = contents[0];
      // const malteses = contents[1].message;
      // const terriers = contents[2].message;

      setDogs({
        dachshunds,
        malteses,
        terriers,
      });
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {dogs.dachshunds.map((url) => {
        return (
          <div key={url}>
            <img src={url} alt="dog" className="dog-image" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
