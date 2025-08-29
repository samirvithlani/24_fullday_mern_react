import React, { useState } from 'react'

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
