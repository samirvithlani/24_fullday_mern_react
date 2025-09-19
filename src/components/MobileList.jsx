import React, { useState } from 'react'
import { Table } from './common/Table'

export const MobileList = () => {
    const [mobiles, setmobiles] = useState([
        {
            id:101,
            mobileName:"iphone",
            price:1200,
            color:"blue",
            memory:256
        },
        {
            id:102,
            mobileName:"s25",
            price:1000,
            color:"silver",
            memory:512
        }
    ])
  return (
    <div>
        <h1>MOBILE LIST</h1>
        <Table header={Object.keys(mobiles[0])} data ={mobiles}></Table>
    </div>
  )
}
