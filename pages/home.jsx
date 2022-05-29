import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('../data/data.json').then((responce) => {
      const result = responce.json();
      setData((data) => [...data, result]);
    });
  }, []);
  return (
    <>
      {data.forEach((i) => {
        return <h1>{i.name}</h1>;
      })}
    </>
  );
};

export default Home;
