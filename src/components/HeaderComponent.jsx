import React from 'react'
//<link rel styl>
import "../assets/css/header.css"

export default function HeaderComponent(props) {
  //props -->data type -{}
  //{title:"REACT JS"}
  return (
    <div className='header'>
        <h1>HEADER COMPONENT</h1>
        {props.title}
    </div>
  )
}
