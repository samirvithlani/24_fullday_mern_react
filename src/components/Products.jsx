import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/CartSlice";

export const Products = () => {
  //Products -- *** cartSLice --> dispatch hook
  const dispatch = useDispatch()
  return (
    <div>
      <h1>PRODUCTS COMPONENT</h1>
      <div className="row" style={{padding:"20px"}}>
        <div class="card" style={{width:"60rem;"}}>
          <h3>PRODUCT NAME: iphone17</h3>
          <h4>price 1600</h4>
          <h4>color : silver</h4>
          <button onClick={()=>{dispatch(addToCart({id:101,name:"iphone17",price:1600}))}} className="btn btn-info">ADD TO CART</button>
        </div>
        <div class="card" style={{width:"60rem;"}}>
          <h3>PRODUCT NAME: iphone16</h3>
          <h4>price 1600</h4>
          <h4>color : silver</h4>
          <button onClick={()=>{dispatch(addToCart({id:102,name:"iphone16",price:1400}))}} className="btn btn-info">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
