import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    let err = useRouteError();
    console.log(err);
    
  return (
    <div>
      
      <h1>opps!!!</h1>
      <h2>Somthing went Wrong</h2>
      <h1>{err.status} : {err.statusText}</h1>

    </div>
  )
}

export default Error;


