import React from 'react';
import { useLocation } from 'react-router-dom';

export default function UseLocation() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>UseLocation Hook</h1>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}
