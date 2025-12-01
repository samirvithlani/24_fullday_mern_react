import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { EmojiContext } from '../../EmojiContext'

export const NetflixShows = () => {

  const {startFall} = useContext(EmojiContext)
  useEffect(() => {
    
    startFall()
    
  }, [])
  

  var shows =[
    {
      id:101,
      name:"Money Heist",
      rating:9.0,
      imageUrl:"https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id:102,
      name:"Breaking Bad",
      rating:10.0,
      imageUrl:"https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"
    },
    {
      id:103,
      name:"Squid Game",
      rating:8.0,
      imageUrl:"https://pyxis.nymag.com/v1/imgs/392/393/de2bb6f1dc1f2aeb3bcdc0bbc708e21918-robot-doll-squid-game-chat-room-silo.rhorizontal.w700.jpg"
    }
  ]
  return (
    <div>
        <h1>NETFLIX SHOWS</h1>
        <div className='container'>
          <div className='row'>
            {
              shows.map((show)=>{
                return <div className='card' style={{height:"30vh",margin:"10px"}}>
                    <h1>Title: {show.name}</h1>
                    <img src={show.imageUrl} style={{height:"100px",width:"100px"}}></img>
                    <Link to={`/watch/${show.name}`} className='btn btn-warning'>WATCH</Link>
                </div>
              })
            }
          </div>
        </div>
    </div>
  )
}
