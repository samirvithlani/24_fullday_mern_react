import React, { useState } from 'react'
import { EmployeeChild1 } from './EmployeeChild1'
import { EmployeeContext } from './EmployeeContext'

export const EmployeeList = () => {
    const [data, setdata] = useState("ok")
    const test = (value)=>{
        alert("test called... with value"+value)
    }
  return (
    <div style={{textAlign:"center"}}>
            <h1>EMPLOYEE  COMPONENT</h1>

            <EmployeeContext.Provider value={{data,test}}>
                <EmployeeChild1></EmployeeChild1>
            </EmployeeContext.Provider>
    </div>
  )
}
