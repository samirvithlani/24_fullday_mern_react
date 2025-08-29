import React, { useState } from 'react'

export const UseStateDemo3 = () => {

    const [fruit, setfruit] = useState(
        {
        id:101,
        name:"apple",
        price:100,
        color:"red"
        })

    const incresePrice = ()=>{
        console.log(fruit)
        //setfruit(fruit.price=200)
        //... spread operator
        
        // var f = {
        //     name :fruit.name,
        //     price:300
        //     ...
        // }
        // //setfruit(f)

        setfruit({...fruit,price:300})
        console.log(fruit)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Name = {fruit.name}</h1>
        <h3>Price = {fruit.price}</h3>

        <button onClick={incresePrice}>Increse price</button>
    </div>
  )
}
