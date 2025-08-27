import React from 'react'
import { UserList } from './UserList'

export const Users = (props) => {
  //{apptile:"..."}

  var users = [
    {
      id:Math.floor(Math.random()*10000),
      name:"ram",
      age:23
    },
    {
      id:Math.floor(Math.random()*10000),
      name:"shyam",
      age:24
    },
    {
      id:Math.floor(Math.random()*10000),
      name:"parth",
      age:25
    }
  ]

  const test = (x)=>{
    alert("test function called....."+x)
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USERS COMPONENT - {props.apptitle}</h1>
        <button onClick={test}>TEST</button>
        {/* <button onClick={test(100)}>TEST 2</button> */}
        <button onClick={()=>{test(100)}}>TEST 2</button>
        
        <UserList users = {users} test = {test}></UserList>
    </div>
  )
}
