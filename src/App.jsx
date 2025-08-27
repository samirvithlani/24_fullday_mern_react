import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {ContentComponent} from "./components/ContentComponent"
import HeaderComponent from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { Users } from './components/Users'

function App() {

  var title = "REACT JS"

  return (
    <div>
      <HeaderComponent title = {title}></HeaderComponent>     
      <Users apptitle = {title}></Users>
    </div>
  )
}

export default App
