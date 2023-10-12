import React from 'react';

function Mycomputer() {
  return (
    <div>Mycomputer</div>
  )
}

export default Mycomputer

export const Mycontext = React.createContext('light');


export function Mycontextapi()
{
  return <h1>this is mydata </h1>
}
