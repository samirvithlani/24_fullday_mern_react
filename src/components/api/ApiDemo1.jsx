import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const getApiCall = async()=>{
        //json..
        const res = await axios.get("https://node5.onrender.com/user/user")
        //res -->axios object
        console.log("res..",res)
        console.log("api res..",res.data)
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data) //[]
    }
  return (
    <div>
        <h1>API DEMO 1</h1>
        <button onClick={getApiCall}>GET</button>
        {message}
        {
            users.map((user)=>{
                return <div>
                    <li>{user.name}</li>
                </div>
            })
        }
    </div>
  )
}
