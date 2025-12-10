import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction } from '../redux/BankSlice'

export const BankComponent = () => {
    const [depositAmount, setdepositAmount] = useState(0)
    const dispatch = useDispatch()
    const depositHandler = ()=>{
        dispatch(depositAction(parseInt(depositAmount)))

    }
  return (
    <div>
        <h1>BANK COMPONENT</h1>
        <div>
            <label>DEPOSIT AMOUNT</label>
            <input type='text' onChange={(event)=>{setdepositAmount(event.target.value)}}></input>
        </div>
        <div>
        <button onClick={()=>{depositHandler()}}>deposit</button>
        </div>
    </div>
  )
}
