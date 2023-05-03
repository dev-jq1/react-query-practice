import React, { useEffect, useState } from 'react';
import { BREEDS, breedKeys } from './constants/dogs';
import './App.css';
import Dogs from './components/Dogs';
import useQueryDogs from './hooks/useQueryDogs';

function App() {
  // const { dachshund, maltese, terrier } = BREEDS;
  // const cache = new Map();
  // const [dogs, setDogs] = useState({
  //   dachshunds: [],
  //   malteses: [],
  //   terriers: []
  // });

  // const fetchingDogs = async (breed: string) => {
  //   if (cache.has(breed)) {
  //     return cache.get(breed);
  //   }
  //   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`);
  //   const data = await response.json();

  //   cache.set(breed, data);
  //   return cache.get(breed);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const [{ message: dachshunds }, { message: malteses }, { message: terriers }] =
  //       await Promise.all([fetchingDogs(dachshund), fetchingDogs(maltese), fetchingDogs(terrier)]);

  //     //구조분해 할당을 통해 더 간결하게 작성 가능
  //     // const dachshunds = contents[0].message;
  //     // const { message: dachshunds } = contents[0];
  //     // const malteses = contents[1].message;
  //     // const terriers = contents[2].message;

  //     setDogs({
  //       dachshunds,
  //       malteses,
  //       terriers
  //     });
  //   };
  //   fetchData();
  // }, []);

  const { getData } = useQueryDogs(breedKeys);
  const [dachshund, maltese, terrier] = getData();

  return (
    <div className='App'>
      {/* <Dogs dogs={dogs.dachshunds} />
      <Dogs dogs={dogs.malteses} />
      <Dogs dogs={dogs.terriers} /> */}
      <Dogs dogs={dachshund} />
      <Dogs dogs={maltese} />
      <Dogs dogs={terrier} />
    </div>
  );
}

export default App;
