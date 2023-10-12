import React from 'react';
import { Mycontext } from './Mycomputer';
import Mydatapage from './Mydatapage';


function Mymobile() {
  return (
    <Mycontext.Provider value={{something: 'something'}}>
        <Mydatapage></Mydatapage>


    </Mycontext.Provider>
  )
}

export default Mymobile