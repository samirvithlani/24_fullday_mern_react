import React from 'react'
import { useParams } from 'react-router-dom'

export const WatchContent = () => {
    //url wildcard -->value...
    var name = useParams().name
  return (
    <div>
        <h1>Watching !! {name}</h1>
    
    </div>
  )
}
