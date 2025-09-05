import React from "react";
import { Link } from "react-router-dom";

export const NetflixMovies = () => {
  return (
    <div>
      <h1>NetflixMovies</h1>
      <div className="container">
        <div className="row">
          <div className="card" style={{ height: "30vh", textAlign: "center" }}>
            <h1>TITLE:Tehran</h1>
            <h2>Rating:4.6</h2>
            <img
              src="https://images.ottplay.com/images/media/gallery/750x1125poster-7-1755110521.jpg"
              style={{ height: "100px", width: "100px" }}
            ></img>
            <Link to="/watch/Tehran" className="btn btn-info">
              WATCH
            </Link>
          </div>
          <div className="card" style={{ height: "30vh", textAlign: "center" }}>
            <h1>TITLE:ABcd</h1>
            <h2>Rating:4.6</h2>
            <img
              src="https://images.ottplay.com/images/media/gallery/750x1125poster-7-1755110521.jpg"
              style={{ height: "100px", width: "100px" }}
            ></img>
            <Link to="/watch/abcd" className="btn btn-info">
              WATCH
            </Link>
          </div>
          <div className="card" style={{ height: "30vh", textAlign: "center" }}>
            <h1>TITLE:pqr</h1>
            <h2>Rating:4.6</h2>
            <img
              src="https://images.ottplay.com/images/media/gallery/750x1125poster-7-1755110521.jpg"
              style={{ height: "100px", width: "100px" }}
            ></img>
            <Link to="/watch/pqr" className="btn btn-info">
              WATCH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
