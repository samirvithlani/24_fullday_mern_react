import React from "react";

export const Products = () => {
  return (
    <div>
      <h1>PRODUCTS COMPONENT</h1>
      <div className="row" style={{padding:"20px"}}>
        <div class="card" style={{width:"60rem;"}}>
          <h3>PRODUCT NAME: iphone17</h3>
          <h4>price 1600</h4>
          <h4>color : silver</h4>
          <button onClick className="btn btn-info">ADD TO CART</button>
        </div>
        <div class="card" style={{width:"60rem;"}}>
          <h3>PRODUCT NAME: iphone17</h3>
          <h4>price 1600</h4>
          <h4>color : silver</h4>
          <button onClick className="btn btn-info">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
