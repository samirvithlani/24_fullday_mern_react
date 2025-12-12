import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { EmojiContext } from "../EmojiContext";
import { useSelector } from "react-redux";


export const Navbar = () => {
  const {theme, settheme} = useContext(ThemeContext)
  const {changeEmoji,emoji} =useContext(EmojiContext)
  //const state = useSelector((state)=>state) state..
  //const state = useSelector((state)=>state.cart) state.reducerName
  const cartState = useSelector((state)=>state.cart.cart)// objecct
  const balance = useSelector((state)=>state.bank.balance)

  console.log("cart...",cartState) //cart
  console.log(changeEmoji,emoji)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          REACT
        </a>
        {/* <button onClick={()=>{settheme("dark")}} >
          CHNAGE THEME
        </button> */}
        <button onClick={()=>{settheme(theme=="light"?"dark":"light")}} >
          CHNAGE THEME {theme == "light"?"dark":"light"}
        </button>
        <p>{emoji}</p>
        <ul>
          <li><button onClick={()=>{changeEmoji("😭")}}>😭</button></li>
          <li><button onClick={()=>{changeEmoji("😢")}}>😢</button></li>
          
        </ul>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              {/* <a class="nav-link" href="netflixhome">
                Home 
              </a> */}
               <Link class="nav-link" to="netflixhome">
                Home 
              </Link>
            </li>   
              <li class="nav-item active">
               <Link class="nav-link" to="netflixmovies">
                Movies
              </Link>
            </li>         
            <li class="nav-item active">
               <Link class="nav-link" to="netflixshows">
                Shows
              </Link>
            </li>         
            
            <li class="nav-item active">
               <Link class="nav-link" to="inputdemo1">
                INPUT DEMO 1
              </Link>
            </li>    
            {/* <li class="nav-item active">
               <Link class="nav-link" to="formdemo1">
                formdemo1
              </Link>
            </li>     
            <li class="nav-item active">
               <Link class="nav-link" to="formdemo2">
                formdemo2
              </Link>
            </li>     
            <li class="nav-item active">
               <Link class="nav-link" to="formdemo3">
                formdemo3
              </Link>
            </li>     
            
            <li class="nav-item active">
               <Link class="nav-link" to="formdemo4">
                formdemo4
              </Link>
            </li>    
            
            <li class="nav-item active">
               <Link class="nav-link" to="booklist">
                booklist
              </Link>
            </li>   
            

            <li class="nav-item active">
               <Link class="nav-link" to="mobilelist">
                mobilelist
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="dynamicform">
                dynamicform
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="expense">
                expense
              </Link>
            </li>  
            <li class="nav-item active">
               <Link class="nav-link" to="usememo">
                usememo
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="findbomb">
                find bomb
              </Link>
            </li>   
            
            <li class="nav-item active">
               <Link class="nav-link" to="userefdemo">
                userefdemo
              </Link>
            </li>    */}
            <li class="nav-item active">
               <Link class="nav-link" to="useeffectdemo">
                useeffectdemo
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="apidemo1">
                apidemo1
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="apidemo2">
                apidemo2
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="adduser">
                add user
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="/employees">
                Employees
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="/muidemo2">
                MUI DMEO 2
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="/products">
                PRODUCTS
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="/bank">
                BANK
              </Link>
            </li>   
            <li class="nav-item active">
               <Link class="nav-link" to="/content2">
                content2
              </Link>
            </li>   
            <li className="nav-item">
              <h1>{cartState?.length}</h1>
            </li>
            <li className="nav-item">
              <h1>{balance}</h1>
            </li>
            
            

            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
