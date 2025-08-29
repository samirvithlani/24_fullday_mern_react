import React, { useState } from 'react'


//const [x, setx] = useState(0)
//Invalid hook call. Hooks can only be called inside of the body of a function component.
export const UseStateDemo2 = () => {
    const [isLoading, setisLoading] = useState(true) // boolean
    var random  =Math.floor(Math.random()*10000)

    const stopLoader = ()=>{
        //isLoading = false //
        setisLoading(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>

        {
            isLoading == true && <h1>Loading.....</h1>
        }
        
        <h3>random - {random}</h3>
        <button onClick={stopLoader}>stop</button>
        <button onClick={()=>{setisLoading(false)}}>stop 2</button>
    </div>
  )
}
