import React from 'react';
import { checkToken } from '../../utilities/users-service';

export default function Trending() {

  async function handleCheckToken() {
      console.log('hitting');
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Trending</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}