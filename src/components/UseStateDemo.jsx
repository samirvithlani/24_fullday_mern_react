import React, { useState } from 'react'

export const UseStateDemo = () => {
    //state variable.. useState
    //count - state variable
    //setCount ->setter function  --> count -->change ->setCount-->
    //useState(0) -->useState(initialValue)
    const[count,setCount]=useState(0)

    //var count = 0; //Number

    const increseCount = ()=>{
        //count++
        setCount(count+1)
        console.log("count....",count)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo</h1>
        <h3>{count}</h3>
        <button onClick={increseCount}>increse</button>
    </div>
  )
}
