import React from 'react'
import { MyButton } from '../common/MyButton'

export const NetflixHome = () => {
  const homeFunction = ()=>{
    alert("home function called...")
  }
  return (
    <div>
        <h1>NETFLIX HOME</h1>
        <button>X</button>
        <MyButton funName={homeFunction} name="home" class="btn btn-info"></MyButton>
    </div>
  )
}
