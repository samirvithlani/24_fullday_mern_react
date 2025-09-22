import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          REACT
        </a>
      
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
            <li class="nav-item active">
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
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
