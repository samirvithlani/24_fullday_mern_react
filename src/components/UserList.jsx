import React from 'react'

export const UserList = (props) => {
  //{users:[]}
  //{users:[],test:function}
  console.log("userlist...",props)
  return (
    <div>
        <h1>USER LIST COMPONENT</h1>
        <button onClick={()=>{props.test(999)}}>TEST FROM CHILD</button>
        {/* {props.users} //array-->json  error */}
        {
          props.users.map((user)=>{
            return<div>
              <li>{user.id} - {user.name} - {user.age}</li>
              </div>
          })
        }
    </div>
  )
}
