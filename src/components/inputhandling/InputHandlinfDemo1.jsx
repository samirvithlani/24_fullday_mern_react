import React, { useState } from 'react'

export const InputHandlinfDemo1 = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [city, setcity] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)

    const nameHandler = (event)=>{
        console.log(event)
        console.log(event.target.value)
        setname(event.target.value)//s ..sa ..sam 
    }
    const emailhandler = (event)=>{
        setemail(event.target.value)
    }

    const submitHandler = ()=>{
        //alert(`Name = ${name}\nEmail = ${email}\nCity = ${city}`)
        setisSubbmited(true)
    }

  return (
    <div>
        <h1>Input Handling</h1>
        <div>
            <label>name</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>EMAIL</label>
            <input type='email' onChange={(event)=>{emailhandler(event)}}></input>
            {/* {email} */}
        </div>
        <div>
            <label>City</label>
            <input type='text' onChange={(event)=>{setcity(event.target.value)}}></input>
            {/* {city} */}
        </div>

        <div>
            <button onClick={submitHandler}>SUBMIT</button>
        </div>

{
    isSubbmited == true && <div>
            <h1>OUTPUT</h1>
            <h3>NAME = {name}</h3>
            <h4>EMAIL = {email}</h4>
            <h5>City = {city}</h5>
        </div>
}

        
    </div>
  )
}
