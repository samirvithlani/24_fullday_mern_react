import React, { useContext } from 'react'
import { EmployeeChild2 } from './EmployeeChild2'
import { EmployeeContext } from './EmployeeContext'

export const EmployeeChild1 = () => {

    const {data} = useContext(EmployeeContext)
    
  return (
    <div>
        <h1>EMPLOYEE CHILD 1</h1>
        {data}
        
        <EmployeeChild2></EmployeeChild2>
    </div>
  )
}
