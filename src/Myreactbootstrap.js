import  Button  from 'react-bootstrap/Button';
import React from 'react';
import { FcSettings } from "react-icons/fc";
import { AiFillAndroid } from "react-icons/ai";





function Myreactbootstrap() {
  return (
    <div>
        <h1>Myreactbootstrap</h1>
        <Button variant="primary">Primary</Button>
        <h1 className='cus-con'><FcSettings/></h1>
        <h1 className='cus-con'><AiFillAndroid/></h1>
    </div>
  )
}

export default Myreactbootstrap